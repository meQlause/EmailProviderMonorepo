#!/bin/sh

# Buat user dan grup vmail jika belum ada
if ! getent group vmail >/dev/null; then
    addgroup -S vmail
fi

if ! id -u vmail >/dev/null 2>&1; then
    adduser -S -G vmail vmail
fi

# Buat grup dan user opendkim jika belum ada (PERBAIKAN URUTAN)
if ! getent group opendkim >/dev/null; then
    addgroup -S opendkim
fi

if ! id -u opendkim >/dev/null 2>&1; then
    adduser -S -G opendkim opendkim
fi

# Ambil UID dan GID user vmail
VMAIL_UID=$(getent passwd vmail | cut -d: -f3)
VMAIL_GID=$(getent passwd vmail | cut -d: -f4)

# Buat direktori virtual mail dan Maildir
mkdir -p /vmail/mail.ardial.tech/user1/Maildir
mkdir -p /vmail/mail.ardial.tech/user2/Maildir
chown -R ${VMAIL_UID}:${VMAIL_GID} /vmail

# Setup Dovecot passwd
mkdir -p /etc/dovecot
cat > /etc/dovecot/passwd <<EOF
user1@mail.ardial.tech:{PLAIN}secret123
user2@mail.ardial.tech:{PLAIN}secret456
EOF
chown dovecot:dovecot /etc/dovecot/passwd
chmod 640 /etc/dovecot/passwd

# Setup Postfix virtual mailbox map
mkdir -p /etc/postfix
cat > /etc/postfix/vmailbox <<EOF
user1@mail.ardial.tech mail.ardial.tech/user1/
user2@mail.ardial.tech mail.ardial.tech/user2/
EOF
postmap /etc/postfix/vmailbox

# Dummy aliases
touch /etc/postfix/aliases
postalias /etc/postfix/aliases

# Optional Postfix compatibility level
postconf compatibility_level=3.6

# Set proper ownership and permissions for DKIM
chown root:root /etc/opendkim
chmod 755 /etc/opendkim

chown root:root /etc/opendkim/keys
chmod 755 /etc/opendkim/keys

# Domain folder: readable by opendkim but owned by root
chown root:root /etc/opendkim/keys/mail.ardial.tech
chmod 755 /etc/opendkim/keys/mail.ardial.tech

# Private key file: readable by opendkim but owned by root
chown root:opendkim /etc/opendkim/keys/mail.ardial.tech/mail.private
chmod 750 /etc/opendkim/keys/mail.ardial.tech/mail.private

# Pastikan file log ada
touch /var/log/mail.log
chmod 666 /var/log/mail.log

# Validasi file DKIM private key
if [ ! -f /etc/opendkim/keys/mail.ardial.tech/mail.private ]; then
    echo "[ERROR] DKIM private key not found at /etc/opendkim/keys/mail.ardial.tech/mail.private"
    exit 1
fi

# Start rsyslog dan OpenDKIM
rsyslogd
opendkim -f &

# Tunggu opendkim benar-benar up
echo "Menunggu OpenDKIM siap di port 8891..."
while ! nc -z localhost 8891; do
    sleep 0.5
done
echo "OpenDKIM aktif!"

# Lanjutkan start dovecot dan postfix
dovecot &
postfix start-fg &

# Tampilkan log
tail -F /var/log/mail.log



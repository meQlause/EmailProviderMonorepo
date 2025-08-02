#!/bin/sh
# Buat user dan grup vmail jika belum ada
if ! getent group vmail >/dev/null; then
    addgroup -S vmail
fi

if ! id -u vmail >/dev/null 2>&1; then
    adduser -S -G vmail vmail
fi

# Ambil UID dan GID user vmail
VMAIL_UID=$(getent passwd vmail | cut -d: -f3)
VMAIL_GID=$(getent passwd vmail | cut -d: -f4)

# Buat direktori virtual mail dan Maildir untuk user
mkdir -p /vmail/mail.ardial.tech/user1/Maildir
mkdir -p /vmail/mail.ardial.tech/user2/Maildir

# Atur kepemilikan direktori mail ke vmail (pakai UID:GID langsung)
chown -R ${VMAIL_UID}:${VMAIL_GID} /vmail

# Setup file password Dovecot untuk virtual user
mkdir -p /etc/dovecot
echo "user1@mail.ardial.tech:{PLAIN}secret123" > /etc/dovecot/passwd
echo "user2@mail.ardial.tech:{PLAIN}secret456" >> /etc/dovecot/passwd
chown dovecot:dovecot /etc/dovecot/passwd
chmod 640 /etc/dovecot/passwd

# Setup virtual mailbox mapping untuk Postfix
echo "user1@mail.ardial.tech mail.ardial.tech/user1/" > /etc/postfix/vmailbox
echo "user2@mail.ardial.tech mail.ardial.tech/user2/" >> /etc/postfix/vmailbox
postmap /etc/postfix/vmailbox

touch /etc/postfix/aliases
postalias /etc/postfix/aliases

postmap lmdb:/etc/postfix/vmailbox

# Pastikan kepemilikan dan permission direktori DKIM aman
chown -R opendkim:opendkim /etc/opendkim/keys
chmod -R go-w /etc/opendkim/keys

# Jalankan service
rsyslogd
opendkim -f
dovecot
postfix start

# Opsional: atur compatibility level Postfix
postconf compatibility_level=3.6
postfix reload

# Tampilkan log terus-menerus
tail -f /var/log/mail.log


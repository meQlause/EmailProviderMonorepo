FROM alpine:3.20

LABEL maintainer="me@ardial.tech"

# Install packages
RUN apk update && \
    apk add --no-cache \
    postfix \
    postfix-pcre \
    opendkim \
    opendkim-utils \
    mailx \
    dovecot \
    dovecot-lmtpd \
    rsyslog \
    netcat-openbsd \
    net-tools && \
    rm -rf /var/cache/apk/*

# Configure DKIM directories
RUN mkdir -p /etc/opendkim/keys/mail.ardial.tech/ && \
    chown -R root:root /etc/opendkim

RUN mkdir -p /run/opendkim && \
    chown root:root /run/opendkim

# Copy DKIM config
COPY Opendkim/opendkim.conf /etc/opendkim/
COPY Opendkim/TrustedHosts KeyTable SigningTable /etc/opendkim/
COPY Opendkim/Credentials/OpenDKIM/priv.key /etc/opendkim/keys/mail.ardial.tech/mail.private

# Copy Postfix config
COPY Posfix/main.cf /etc/postfix/main.cf
COPY Posfix/master.cf /etc/postfix/master.cf

COPY Credentials/SSL/fullchain.pem /etc/postfix/ssl/fullchain.pem
COPY Credentials/SSL/privkey.pem /etc/postfix/ssl/privkey.pem

# Copy Dovecot configuration files
COPY Dovecot/dovecot.conf /etc/dovecot/dovecot.conf
COPY Dovecot/10-auth.conf /etc/dovecot/conf.d/10-auth.conf
COPY Dovecot/10-ssl.conf /etc/dovecot/conf.d/10-ssl.conf
COPY Dovecot/10-mail.conf /etc/dovecot/conf.d/10-mail.conf
COPY Dovecot/10-master.conf /etc/dovecot/conf.d/10-master.conf
COPY Dovecot/auth-passwdfile.conf.ext /etc/dovecot/conf.d/auth-passwdfile.conf.ext

# Copy startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Expose ports
EXPOSE 25 587 143 993

CMD ["/start.sh"]
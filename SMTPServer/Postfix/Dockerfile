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
    rsyslog && \
    rm -rf /var/cache/apk/*

# Configure DKIM directories
RUN mkdir -p /etc/opendkim/keys/mail.ardial.tech && \
    chown -R root:root /etc/opendkim

# Copy DKIM config
COPY --chown=opendkim:opendkim opendkim.conf /etc/opendkim/
COPY --chown=opendkim:opendkim TrustedHosts KeyTable SigningTable /etc/opendkim/
COPY --chown=opendkim:opendkim priv.key /etc/opendkim/keys/mail.ardial.tech/mail.private

# Copy Postfix config
COPY main.cf /etc/postfix/main.cf
COPY master.cf /etc/postfix/master.cf
COPY ssl/fullchain.pem /etc/postfix/ssl/fullchain.pem
COPY ssl/privkey.pem /etc/postfix/ssl/privkey.pem

# Copy Dovecot configuration files
COPY dovecot.conf /etc/dovecot/dovecot.conf
COPY 10-auth.conf /etc/dovecot/conf.d/10-auth.conf
COPY 10-mail.conf /etc/dovecot/conf.d/10-mail.conf
COPY 10-master.conf /etc/dovecot/conf.d/10-master.conf
COPY auth-passwdfile.conf.ext /etc/dovecot/conf.d/auth-passwdfile.conf.ext

# Copy startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Expose ports
EXPOSE 25 587 143 993

CMD ["/start.sh"]

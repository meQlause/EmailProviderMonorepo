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
    rsyslog && \
    rm -rf /var/cache/apk/*

# Configure directories
RUN mkdir -p /etc/opendkim/keys/mail.ardial.tech && \
    chown -R opendkim:opendkim /etc/opendkim

# Copy config files
COPY opendkim.conf /etc/opendkim/
COPY TrustedHosts KeyTable SigningTable /etc/opendkim/

# Hardcoded DKIM private key (for demo only!)
COPY priv.key /etc/opendkim/keys/mail.ardial.tech/mail.private
RUN chown opendkim:opendkim /etc/opendkim/keys/mail.ardial.tech/mail.private && \
    chmod 600 /etc/opendkim/keys/mail.ardial.tech/mail.private

# Copy Postfix config
COPY main.cf /etc/postfix/main.cf

# Startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 25 587
CMD ["/start.sh"]
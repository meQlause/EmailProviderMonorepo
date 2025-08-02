#!/bin/sh
rsyslogd
opendkim
postfix start
tail -f /var/log/mail.log
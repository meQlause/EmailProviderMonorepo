# Folder Structure

```
Dockerfile
│
├─── Copies to Container:
│    ├── /etc/postfix/main.cf
│    ├── /etc/opendkim/opendkim.conf
│    ├── /etc/opendkim/{TrustedHosts,KeyTable,SigningTable}
│    └── /etc/opendkim/keys/mail.ardial.tech/mail.private (from priv.key)
│
└─── Runs:
     └── start.sh (launches services)
```
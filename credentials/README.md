Place your credential JSON file obtained from your Google Cloud project's credentials section. It should be something like this
```
{
  "type": "service_account",
  "project_id": "your-project-id`",
  "private_key_id": "a-nice-and-secret-key-id",
  "private_key": "a-nice-and-secret-key",
  "client_email": "your-email@your-project.iam.gserviceaccount.com",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/private-api%40your-project.iam.gserviceaccount.com"
}

```

# Flamelink Client Nuxt v2 Blog

## Nuxt project settings.

### Add .env file 

``` .env
FLAMELINK_API_KEY="<firebase-api-key>"
FLAMELINK_AUTH_DOMAIN="<firebase-auth-domain>"
FLAMELINK_DB_URL="<firebase-db-url>"
FLAMELINK_PROJECT_ID="<firebase-project-id>"
FLAMELINK_STORAGE_BUCKET="<firebase-storage-bucket>"
FLAMELINK_PATH_TO_SERVICE_ACCOUNT="<firebase-path-to-service-account>"
```

### Add firebase service account json file
- [firebase service account](https://firebase.google.com/docs/admin/setup?hl=ja)

### Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

## Firebase Realtime Database rule setting.

``` json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null",
    "flamelink": {
      ".read": "auth != null",
      ".write": "auth != null",
      "environments": {
        ".read": true,
      },
      "users": {
        ".indexOn": ["id", "email"]
      }
    }
  }
}
```

## Reference site.

### Flamelink Repository
- [Flamelink Repository](https://github.com/flamelink)
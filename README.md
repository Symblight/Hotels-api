# Hotels API application

This is the backend application for Hotels app

if you not installed adonisjs 

```bash
npm i -g @adonisjs/cli
```

## Setup

Use the adonis command to install the blueprint.
1) Step Add env file!!! .env

```bash
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}

ALLOWED_ORIGINS=*

CACHE_VIEWS=false
APP_KEY=rDhasbUworZ8bGH6RRYrmUCdRcSu4epF

DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=
DB_DATABASE=hotelsdb

SESSION_DRIVER=cookie

HASH_DRIVER=bcrypt
```
2) Step
```bash
npm install
```

3) Step make migration and seeds
4) Step run server

or manually clone the repo and then run `npm install`.

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Seeds

Run the following command to run startup seeds.

```js
adonis seed
```

### Start

```js
adonis serve
```

## Port
localhost:3333

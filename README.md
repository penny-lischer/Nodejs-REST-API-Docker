# RESTful API

This is a RESTful API example based on Node.js and MongoDB, following the **MVC pattern** i.e. Model ~~View~~ Controller.

**Mongoose** is used for Database transactions which is a solution to mongodb object modeling for node.js.

The application is **production ready**, and can be used behind a Nginx reverse proxy securely.

---

#### To start setting up the project

Step 1: Clone the repo

```bash
git clone https://github.com/penny-lischer/Nodejs-REST-API-Docker.git
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: Build image:

```bash
docker build -t node-api:vi .
```

Step 4: create network:

```bash
docker network create node-api-network
```

Step 5: Put your credentials in the .env file.

```bash
PORT=3000
MONGODB_URI=YOUR MONGODB URI
DB_NAME=DATABASE NAME OF YOUR CHOICE
DB_USER=DATABASE USER
DB_PASS=DATABASE USER PASSWORD 
```

Step 6: Start MYSQL:

```bash
docker run \
--rm \
-d \
--name mysql_server \
-e MYSQL_DATABASE='my_sql_db' \
-e MYSQL_USER: 'sa' \
-e MYSQL_PASSWORD: 'secret' \
-e MYSQL_ROOT_PASSWORD: 'secret' \
--network node-api-network
mysql:8.0
```

Step 4: Start the API by

```bash
npm start
```

## Author

- [**Penny Lischer**]


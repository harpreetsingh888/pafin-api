# Pafin API

## Run Locally

- Clone the project using: `git clone https://link-to-project`
- Go to the project root directory and install dependencies: `npm i`
- Run build: `npm run build`
- Create DB: To create the DB install postgresql locally: https://www.postgresql.org/download/macosx/
- Once install run the server using: `brew services start postgresql`.
- Instead of using command line, I choose to install PgAdmin to manage postgres DB.
- To install PgAdmin follow this guide which also helps in install postgres: https://www.sqlshack.com/setting-up-a-postgresql-database-on-mac/
- When install postgres you'll be asked to enter username and password which you need to replace in `src/index.ts` on line 22 and 23.
- Once PgAdmin is installed open it and create a new database: `pafin`.
- Inside this database, create a new table User with columns id, name, email, password and token.
- Once the database is setup, start the server: `npm run start`

## Docker

- I have containerise both NodeJS and Postgres and to run docker locally: `docker-compose up --build`
- There is an issue where Postgres container is not able to connect with DB

## Test

- To run the test: `npm run test`

## How to test the API

- I have used postman to test the api locally, you can use postman webapp: https://www.postman.com/ by creating a new account
- Make sure the server is running
- Once you have created your account, create a get request to http://localhost:3000/token which will return a token that can be use to create user.
- To Create a user, use route: http:localhost:3000/user and pass in the token in authentication header plus add following json in the request body: `{ name: 'John', email: 'john@gmail.com', password: 'johntest' }` and send a request.
- To Update a user, use route: http:localhost:3000/user/:id and pass in the token in authentication header plus add json with updated user data in the request body: `{ name: 'John 2', email: 'john2@gmail.com', password: 'johntest' }` and send a request.
- To Delete a user, use route: http:localhost:3000/user/:id and pass in the token in authentication header

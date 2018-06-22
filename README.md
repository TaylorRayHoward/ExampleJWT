# ExampleJWT
Example JWT code for my Youtube https://www.youtube.com/watch?v=TcwngmeqLRk


# How to start:
1. Run `npm install`
2. Create .env file at the root with a line of SECRET_OR_KEY=slakdjfklsadfjklsjdfljj (or any secret/key you'd like)
3. Create postgres database `jwt_test`
4. Use knex to run migrations `npm install -g knex` or `./node_modules/knex/bin/cli.js` by running `knex migrate:latest`
5. You can now run `npm run start`

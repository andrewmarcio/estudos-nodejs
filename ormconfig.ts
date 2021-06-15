module.exports = 
{
    "type": process.env.DB_DRIVER,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/**/entities/*.ts"
    ],
    "migrations": [
        "./src/shared/typeorm/migrations/*.ts"
    ],
    // "subscribers": [
    //     "src/subscriber/**/*.ts"
    // ],
    cli: {
        "migrationsDir" : "./src/shared/typeorm/migrations" 
    }
}
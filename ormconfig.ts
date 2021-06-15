module.exports = 
{
    "type": process.env.DRIVER,
    "host": process.env.HOST,
    "port": process.env.PORT,
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
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
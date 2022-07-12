require('dotenv').config()
const Sequelize = require('sequelize')

const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        CREATE TABLE bunnies (
            bun_id SERIAL PRIMARY KEY,
            bun_name VARCHAR (50),
            bun_age VARCHAR (10),
            bun_sex VARCHAR (1)
        );
        
        CREATE TABLE volunteers (
            vol_id SERIAL PRIMARY KEY,
            f_name VARCHAR(50),
            l_name VARCHAR(50),
            email VARCHAR(50),
            phone VARCHAR(10)
        );

        CREATE TABLE users (
            user_id SERIAL PRIMARY KEY,
            f_name VARCHAR(50),
            l_name VARCHAR(50),
            email VARCHAR(50),
            phone VARCHAR(10),
            city VARCHAR(40),
            state VARCHAR (40),
            zipcode VARCHAR (12)
        );

        INSERT INTO bunnies (bun_name, bun_age, bun_sex)
        VALUES ('Blossom', '6 months', 'F'), 
        ('Chop Suey', '9 months', 'M'),
        ('Charlotte', '1 Year', 'F'), 
        ('Cocomelon', '4 Years', 'M');
        
        INSERT INTO volunteers (f_name, l_name, email, phone)
        VALUES ('Bubs', 'Martinez', 'bubsemail@gmail.com', 1234432112), 
        ('Daisy', 'Martinez', 'daisysemail@gmail.com', 5678876556);

        INSERT INTO users (f_name, l_name, email, phone, city, state, zipcode)
        VALUES ('Caramel', 'Martinez', 'caramalsemail@gmail.com', '123454334', 'Dallas', 'Texas', '12345');

        `).then(() => {
            console.log('DB seeded :)')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}
const items = require('./itemsdb.json')

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
    getBunny: (req, res) => {
        const bunnies = ["Blossom! She's a sweet bunny who loves to snuggle.", "Chop Suey! This little guy is sure to keep you entertained.", "Charlotte! This bunny loves to be brushed and and groomed.", "Cocomelon! This baby is a little more on the shy side, but with lots of love he's sure to grow out of his shell."];
         let randomIndex = Math.floor(Math.random() * bunnies.length);
         let randomBunny = bunnies[randomIndex];

         res.status(200).send(randomBunny);
    },
    createUserInfo: async (req, res) => {
        console.log(req.body)
        let {
            fname,
            lname,
            phone,
            email, 
            city,
            state, 
            zipcode
        } = req.body
        sequelize.query(`
        INSERT INTO users (f_name, l_name, email, phone, city, state, zipcode)
        VALUES ('${fname}', '${lname}', '${email}', '${phone}', '${city}', '${state}', '${zipcode}');
        `)
        res.status(200).send("Success! We'll contact you soon!")
    },
    getItems: (req, res) => {
        console.log('hit server')
            res.status(200).send(items)
    }
}

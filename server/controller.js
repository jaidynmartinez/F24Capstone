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

const bunId = 3
const volId = 2
const userId = 1

module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`
            SELECT * FROM volunteers AS vol
            JOIN users ON vol.user_id = user.user_id
            WHERE user.user_id = ${userId};
        `).then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    },
    updateInfo: (req, res) => {
        let {
            firstName,
            lastName,
            phone,
            email,
            city,
            state,
            zipcode
        } = req.body

        sequelize.query(`
        UPDATE users SET 
            first_name = '${firstName}',
            last_name = '${lastName}',
            phone = '${phone}',
            email = '${email}'
        WHERE user_id = ${userId};

        UPDATE volunteer SET
            city = '${city}',
            state = '${state}',
            zipcode = '${zipcode}'
            WHERE user_id = ${userId}
        `).then(() => res.status(200))
        .catch(err => console.log('Err w/ updating', err))
    },
    getBunny: (req, res) => {
        const bunnies = ["Blossom! She's a sweet bunny who loves to snuggle.", "Chop Suey! This little guy is sure to keep you entertained.", "Charlotte! This bunny loves to be brushed and and groomed.", "Cocomelon! This baby is a little more on the shy side, but with lots of love he's sure to grow out of his shell."];
         let randomIndex = Math.floor(Math.random() * bunnies.length);
         let randomBunny = bunny[randomIndex];

         res.status(200).send(randomBunny);
    }

}

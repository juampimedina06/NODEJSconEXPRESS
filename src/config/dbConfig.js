const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./database.sqlite'
})

const initializeBD = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexion de base de datos establecida")
        const {user} = require('../models')
        await sequelize.sync({ force: false });
    } catch (error) {
        console.error("hubo un error al inicialidar la base de datos", error)
    }
}

module.exports = {sequelize, initializeBD};
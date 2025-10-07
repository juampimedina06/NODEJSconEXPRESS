const { Op, where } = require('sequelize')
const { User } = require('../models')

const createUser = async ( userOptions ) => {
    try {
        const newUser = await User.create(userOptions)
        return newUser;
    } catch (error) {
        throw error;
    }
}

const getUser = async (id) => {
    try {
        const user = await User.findByPk(id)
        if(user){
            return user;
        }else{
           throw new Error('Usuario no encontrado')
        }
    } catch (error) {
        throw error;
    }
}

const getUsers = async (options) => {
    try {
        const users = await User.findAll({where: {[Op.or]:options} })//Le estamos diciendo q al menos se cumpla una condicion
        if(users){
            return users;
        }else{
           throw new Error('No se encontraron los usuarios')
        }
    } catch (error) {
        throw error;
    }
}

const updateUser = async (userId, userOptions) => {
    try {
        const [numRowUpdates] = await User.update(userOptions, {
            where: {id:userId}, 
            returning:true 
        })//El returning es q si queremos o no las filas actualizadas
        console.log(`Se actualizaron ${numRowUpdates} filas en a BD`)
        return User.findByPk(userId);
    } catch (error) {
        throw new Error('No se pudo actualizar el usuario', error)
    }
}

const deleteUser = async ( userId ) => {
  try {
    return User.destroy( {where: {id: userId} } )
  } catch (error) {
        throw new Error('No se pudo eliminar el usuario con el id:', userId)
  }
}

module.exports = { 
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
 }
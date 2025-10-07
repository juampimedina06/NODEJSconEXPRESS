const useProvider = require('../providers/userProvider')

const getUser = async (id) => {
    return await useProvider.getUser(id)
};

const getUsers = async (options) => {
    return await useProvider.getUsers(options)
}

const createUser = async (user) => {
    return await useProvider.createUser(user)
}

const updateUser = async (id, user) => {
    return await useProvider.updateUser(id, user)
}

const deleteUser = async (id) => {
    return await useProvider.deleteUser(id);
}

const queryUser = (name) => {}


module.exports = {createUser, updateUser, deleteUser, getUser, getUsers,queryUser}
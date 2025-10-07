const useProvider = require('../providers/userProvider')

const getUser = (id) => {
    return { id, name:'Juan' }
};

const createUser = async (user) => {
    return await useProvider.createUser(user)
}

const updateUser = (id, user) => {
    return user;
}

const deleteUser = (id) => {
    return `Adios usuario ${id}`;
}

const queryUser = (name) => {}


module.exports = {createUser, updateUser, deleteUser, getUser, queryUser}
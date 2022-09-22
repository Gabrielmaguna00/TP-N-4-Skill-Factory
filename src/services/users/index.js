import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

export const getAllUsers = () => {
    const users = User.getAllUsers()
    return users
}

export const getOneUser = (name) => {
    const user = User.getOneUser(name)
    return user
}

export const createUser = (newUser) => {
    const user = User.createUser(newUser)
    return user
}

export const updateUser = (id, newUser) => {
    const user = User.updateUser(id, newUser)
    return user
}

export const desactiveUser = (id) => {
    const user = User.deactiveUser(id)
    return user
}

export const activeUser = (id) => {
    const user = User.activeUser(id)
    return user
}
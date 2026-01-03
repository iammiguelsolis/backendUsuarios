import {users} from '../data/users.data.js'

export default class userRepository {

  static async getAll () {
    return users.filter(u => u.active === true)
  }

  static async findById (id) {
    return users.find(user => user.id === id)
  }

  static async create (data) {

    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1

    const newUser = {
      id: newId,
      ...data,
      active: true
    }

    users.push(newUser)

    return newUser

  }

  static async update (data, id) {

    const index = users.findIndex(user => user.id === id)

    if (index === -1) return false

    const updateUser = {
      ...users[index],
      ...data
    }

    users[index] = updateUser

    return updateUser

  }

  static async delete (id) {
    const index = users.findIndex(user => user.id === id)

    if (index === -1) return false
    
    const updateUser = {
      ...users[index],
      active: false
    }

    users[index] = updateUser

    return true
  }
}
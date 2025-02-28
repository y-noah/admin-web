import { select } from '@/api/user'

const actions = {
  select({ commit }) {
    return new Promise((resolve, reject) => {
      select().then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  actions
}

export default {
  init () {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('db')
      // Create if needed
      req.onupgradeneeded = () => {
        req.result.createObjectStore('br950')
        resolve()
      }
      req.onerror = () => {
        reject(req.error)
      }
    })
  },
  getAll () {
    return new Promise((resolve, reject) => {
      const reqOpen = indexedDB.open('db')
      reqOpen.onsuccess = () => {
        const db = reqOpen.result
        const transaction = db.transaction('br950', 'readonly')
        const store = transaction.objectStore('br950')
        let successCount = 0
        const reqGetValues = store.getAll()
        reqGetValues.onsuccess = () => {
          successCount++
          if (successCount === 2 && reqGetKeys.result.length === reqGetValues.result.length) {
            resolve(reqGetKeys.result.reduce((obj, k, i) => ({ ...obj, [k]: reqGetValues.result[i] }), {}))
          }
        }
        reqGetValues.onerror = () => {
          reject(reqGetValues.error)
        }
        const reqGetKeys = store.getAllKeys()
        reqGetKeys.onsuccess = () => {
          successCount++
          if (successCount === 2 && reqGetKeys.result.length === reqGetValues.result.length) {
            resolve(reqGetKeys.result.reduce((obj, k, i) => ({ ...obj, [k]: reqGetValues.result[i] }), {}))
          }
          setTimeout(() => { reject(new Error('timeout')) }, 500)
        }
        reqGetKeys.onerror = () => {
          reject(reqGetKeys.error)
        }
      }
      reqOpen.onerror = () => {
        reject(reqOpen.error)
      }
    })
  },
  getItem (key) {
    return new Promise((resolve, reject) => {
      const reqOpen = indexedDB.open('db')
      reqOpen.onsuccess = () => {
        const db = reqOpen.result
        const transaction = db.transaction('br950', 'readonly')
        const store = transaction.objectStore('br950')
        const reqGet = store.get(key)
        reqGet.onsuccess = () => {
          resolve(reqGet.result)
        }
        reqGet.onerror = () => {
          reject(reqGet.error)
        }
      }
      reqOpen.onerror = () => {
        reject(reqOpen.error)
      }
    })
  },
  setItem (keyOrObj, value) {
    return new Promise((resolve, reject) => {
      const reqOpen = indexedDB.open('db')
      reqOpen.onsuccess = () => {
        const db = reqOpen.result
        const transaction = db.transaction('br950', 'readwrite')
        const store = transaction.objectStore('br950')

        // Multiple values
        if (typeof keyOrObj === 'object') {
          for (let key in keyOrObj) {
            const val = keyOrObj[key]
            store.put(val, key)
          }
        } else if (typeof keyOrObj === 'string') {
          store.put(value, keyOrObj)
        }

        transaction.oncomplete = () => {
          resolve()
        }
        transaction.onerror = (err) => {
          reject('DB TRANSACTION ERROR:', err)
        }
      }
      reqOpen.onerror = () => {
        reject(reqOpen.error)
      }
    })
  },
  removeItem (key) {
    return new Promise((resolve, reject) => {
      const reqOpen = indexedDB.open('db')
      reqOpen.onsuccess = function () {
        const db = reqOpen.result
        const transaction = db.transaction('br950', 'readwrite')
        const store = transaction.objectStore('br950')
        const reqDelete = store.delete(key)
        reqDelete.onsuccess = function () {
          resolve()
        }
        reqDelete.onerror = function () {
          reject(reqDelete.error)
        }
      }
      reqOpen.onerror = function () {
        reject(reqOpen.error)
      }
    })
  }
}
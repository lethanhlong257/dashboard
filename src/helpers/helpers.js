import {writeFile} from 'fs'
export const removeElementInArray = (key, array) => {
  try {
    for (let i = 0; i < array.length; i++) {
      const e = array[i];
      if (key === e) {
        array.splice(i, 1)
      }
    }

  } catch (error) {
    console.log(error)
  }
  return array
}

export const addElementInArray = (key, array) => {
  try {
    array.push(key)
  } catch (error) {
    console.log(error)
  }
  return array
}

export const writeToFile = (path ,data) => {
  return new Promise ((resolve, reject) => {
    console.log(data)
    writeFile('./newCustomer.json', data, (err) => {
      if (err) reject(err); 
      resolve('Write thanh cong')
    })
  })
}
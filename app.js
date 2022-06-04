import axios from "axios";

export default (number) => {
    return new Promise(async (resolve, reject) => { 
        
        const { data: user1} = await axios('https://jsonplaceholder.typicode.com/users/' + number)
        const { data: usersPost1 } = await axios('https://jsonplaceholder.typicode.com/posts?userId=' + number)
        const e = new Error('yanlış yaptın reis')
        
        resolve({ user1, usersPost1 })
        reject(e)
     })
}
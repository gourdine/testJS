// async function myFunc() {

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('hello')
//     }, 1000);
//   })
//   const error = false
//   if (!error) {
//     const res = await promise; // wait until promise is resolve
//     return res;    
//   }
//   else{
//     await Promise.reject(new Error('something wrong'))
//   }

// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(error => console.log(error));


async function getUsers() {
  //awaiting the response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //only proceed once resolved
  const data = await response.json();

  //only proceed once 2nd promised resolved
  return data;
}

getUsers().then(users => console.log(users));
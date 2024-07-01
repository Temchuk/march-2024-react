
const getAllUsers = () => {
  return   fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())

}

const getPostsOfUserById = (id: number) => {
  return   fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts' )
      .then(value => value.json())

}

export {getAllUsers, getPostsOfUserById}
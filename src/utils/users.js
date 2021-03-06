const users=[]

const addUser=({id,username,room})=>{

    username=username.trim().toLowerCase()
    room=room.trim().toLowerCase()

    //validate the data
    if(!username || !room){
      return {
          error:'Username and room are required!'
      }
    }

    //check for existing User
    const existingUser=users.find((user)=>{
        return user.room ===room && user.username ===username
    })

    //validate username:
    if(existingUser){
        return{
            error:'Username is use!'
        }
    }

    //store user:
    const user={id,username,room}
    users.push(user)
    return {user}
}

const removeUser=(id)=>{
    const index=users.findIndex((user)=>user.id === id)

    if(index !== -1){
        return users.splice(index,1)[0]
    }
}

const getUser=(id)=>{
    return users.find((user)=>user.id === id)
}

const getUserInRoom=(room)=>{
    room= room.trim().toLowerCase()
    return users.filter((user)=>user.room === room)
}


module.exports={
    addUser,
    removeUser,
    getUser,
    getUserInRoom
}

// addUser({
//     id:355,
//     username:'Nishant',
//     room:'Noida sec-63'
// })
// // console.log(users);
// addUser({
//     id:356,
//     username:'Aman',
//     room:'Noida sec-62'
// })
// addUser({
//     id:357,
//     username:'Pujari',
//     room:'Noida sec-65'
// })

// const user=getUser(355)
// console.log(user)

// const userList =getUserInRoom('Noida sec-65') 
// console.log(userList)
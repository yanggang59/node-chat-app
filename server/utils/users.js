[{
    id:'/#sjdflsajfo',
    name:'Andrew',
    room:'The Office Fans'
}]

//addUser(id,name,room)
//removeUser(id)
//getUser(id)
//getUserList(room)

// var users = [];
// var addUser =(id,name,room) =>{
//   users.push({});
// }


class Users{
  constructor(){
    this.users = [];

  }

  addUser(id,name,room){
    var user = {id,name,room};
    this.users.push(user);
    return user;
  }

  removeUser(id){
    var user = this.users.filter((user) => user.id === id)[0];

    if(user){
      this.users = this.users.filter((user)=>user.id !== id);
    }
    return user;
  }

  getUser(id){
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList(room){
    var users = this.users.filter((user)=>user.room === room);
    var nameArray = users.map((user)=>user.name);

    return nameArray;
  }


}

module.exports = {Users};

// class Person{
//   constructor(name,age){
//     //console(name,age);
//     this.name = name;
//     this.age = age;
//   }
//
//   getUserDescription(){
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Andrew',25);
// var description = me.getUserDescription();
// console.log(description);

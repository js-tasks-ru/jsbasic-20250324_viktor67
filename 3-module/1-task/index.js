function namify(users) {
  let usersArray = [];
  for (let index = 0; index < users.length; index++) { 
    usersArray.push(users[index].name);
    
  }
  return usersArray;
}

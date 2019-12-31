const users = ['Roberto', 'Joelma','Helena', 'Miguel', 'Isabela'];

export function getUsers(){
  return users;
}

export function addUsers(user){
  users.push(user);
}
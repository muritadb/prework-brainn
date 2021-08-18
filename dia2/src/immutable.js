const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

const jane = {

  ...john, //usar o spread operator para pegar os valores do obj john  
  name: 'Jane', //renomeando a propriedade name 
  hobbies: [...john.hobbies,'MuayThai', 'Programming'],
}


console.log('John:', john)
console.log('Jane:', jane)
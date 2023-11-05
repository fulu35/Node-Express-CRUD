import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res, next) =>{ 
    res.send(users);
}

export const createUser = (req, res) => {
    console.log(req.body);
    const newUser = req.body;
    const userId = uuidv4();

    const userWithId = { ...newUser, id: userId };

    users.push(userWithId);
    res.send(`User with the name ${newUser.firstName} added to the database!`);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const filteredUser = users.filter((user) => user.id === id);
    res.send(filteredUser);
    console.log(filteredUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated.`);
}


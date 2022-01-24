const user = {
    name: 'Fernanda',
    lastName: 'Silva'
};

function getUserWithFullName(user) {
    return {
        ...user, // spread operator
        fullName: `${user.name} ${user.lastName}` // mesma coisa que user.name + ' ' + user.lastName
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);

console.log(user); // não altera o user
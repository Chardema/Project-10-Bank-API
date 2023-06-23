const users = [
    {
        firstName: "Tony",
        lastName: "Stark",
        email: "tony@stark.com",
        password: "password123",
    },
    {
        firstName: "Steve",
        lastName: "Rogers",
        email: "steve@rogers.com",
        password: "password456",
    },
];

export const updateFirstName = (email, newFirstName) => {
    const userIndex = users.findIndex(user => user.email === email);
    if (userIndex !== -1) {
        users[userIndex].firstName = newFirstName;
    }
};
export const updateLastName = (email, newLastName) => {
    const userIndex = users.findIndex(user => user.email === email);
    if (userIndex !== -1) {
        users[userIndex].lastName = newLastName;
    }
};
export const login = (email, password) => {
    return new Promise((resolve, reject) => {
        const user = users.find(
            user => user.email === email && user.password === password
        );
        if (user) {
            resolve({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            });
        } else {
            reject("Invalid email or password");
        }
    });
};

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

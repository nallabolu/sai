interface User {
    username: string;
    email: string
}

function showUser(user: User): boolean {
    let result: boolean = false;
    if (user.username === "sai") {
        result = true;
    }
    return result;
}

const ram = {
    username: 'sai',
    email: 'sai@xyz.com'
};
console.log(showUser(ram));
//showUser(ram);
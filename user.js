"use strict";
function showUser(user) {
    var result = false;
    if (user.username === "sai") {
        result = true;
    }
    return result;
}
var ram = {
    username: 'sai',
    email: 'sai@xyz.com'
};
console.log(showUser(ram));
//showUser(ram);

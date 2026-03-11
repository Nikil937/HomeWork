function crypto(password) {
    if (password.length < 2) {
        return password;
    }
    return password[1] + password[0] + crypto(password.slice(2));
}

function check(secretPassword, password) {
    return crypto(password) === secretPassword;
}

console.log(crypto('password'));
console.log(check('ssapdorw', 'password'));
console.log(check('ssapdorw', 'wrong'));
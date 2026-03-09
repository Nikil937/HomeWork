function SecretPassword(password) {
    const part1 = password.slice(5);
    const part2 = password.slice(0, 5);
    const finalPart = part1.split('').reverse().join('') + part2.split('').reverse().join('');
    return finalPart;
}

function checkPassword(secretpassword, password) {
    const encryptedpass = SecretPassword(password);
    return encryptedpass === secretpassword;
}

console.log(SecretPassword('LaminYamal'));
console.log(checkPassword('lamaYnimaL', 'LaminYamal'));
console.log(checkPassword('lamaYnimaL', 'qwe'));
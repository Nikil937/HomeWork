const language = prompt('Введите язык');

switch(language) {
    case 'ru':
        console.log('Привет!');
        break;
    case 'en':
        console.log('Hello!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    default:
        console.log('Данный язык не пожжерживается!');
}

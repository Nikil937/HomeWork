document.querySelector('.plus').addEventListener('click',function() {
    const number1 = document.querySelector('.num1').value;
    const number2 = document.querySelector('.num2').value;
    document.querySelector('.answer').innerText = (Number(number1) + Number(number2));
    document.querySelector('.num1').value = '';
    document.querySelector('.num2').value = '';
})

document.querySelector('.minus').addEventListener('click',function() {
    const number1 = document.querySelector('.num1').value;
    const number2 = document.querySelector('.num2').value;
    document.querySelector('.answer').innerText = (Number(number1) - Number(number2));
    document.querySelector('.num1').value = '';
    document.querySelector('.num2').value = '';
})

document.querySelector('.multiply').addEventListener('click',function() {
    const number1 = document.querySelector('.num1').value;
    const number2 = document.querySelector('.num2').value;
    document.querySelector('.answer').innerText = (Number(number1) * Number(number2));
    document.querySelector('.num1').value = '';
    document.querySelector('.num2').value = '';
})

document.querySelector('.devided').addEventListener('click',function() {
    const number1 = document.querySelector('.num1').value;
    const number2 = document.querySelector('.num2').value;
    document.querySelector('.answer').innerText = (Number(number1) / Number(number2));
    document.querySelector('.num1').value = '';
    document.querySelector('.num2').value = '';
})
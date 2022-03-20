let operand1 = prompt('Enter first operand:');

let operand2 = prompt('Enter second operand:');

operand1 = Number(operand1);
operand2 = Number(operand2);

if (isNaN(operand1) || isNaN(operand2)) {
    alert('Some of operands are not numbers');
} else {
    sum(operand1, operand2);
    sub(operand1, operand2);
    mul(operand1, operand2);
    del(operand1, operand2);
}

function sum(a, b) {
    const result = a + b;
    console.log('sum', result);
    return result;
}

function sub(a, b) {
    const result = a - b;
    console.log('sub', result);
    return result;
}

function mul(a, b) {
    const result = a * b;
    console.log('mul', result);
    return result;
}

function del(a, b) {
    const result = a / b;
    console.log('del', result);
    return result;
}
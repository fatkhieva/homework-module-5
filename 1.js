
function checkNumber() {
  let res = prompt("Введите число");
  let num = +res;

  if (typeof num === 'number' && !isNaN(num)) {
    if (num % 2 == 0) {
        console.log("Четное");
    } else {
        console.log("Нечетное");
    }
  } else {
    console.log("Упс, кажется, вы ошиблись");
  }

}

checkNumber();


  
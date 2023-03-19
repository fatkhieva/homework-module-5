//1.
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

//2.

function checkType(x) {
  if (typeof x === 'number') {
      console.log("Число");
  } else if (typeof x === 'string') {
      console.log("Строка");
  } else if (typeof x === 'boolean') {
      console.log("Логическое значение");
  } else {
      console.log("Тип x не определен");
  }
}

checkType(23);
checkType("Hi");
checkType(true);
checkType({t: 'hi'});


//3. 
function reverseString(str) {

    return str.split("").reverse().join("");
  
  }
  
  
  console.log(reverseString("hello"));

  //4.

function randomInteger(min, max) {
  return Math.floor(Math.random() * 101);
}


console.log(randomInteger(0,100));

//5.

function showArray(arr) {
  console.log("Элементов в массиве: ", arr.length);

  arr.forEach(item => {
      console.log(item);
  });
}

showArray([10, 20, 30, 40, 50]);


//6.
function allEqual(arr) {
  const isAllSame = arr.every(item => item === arr[0]);

  console.log(isAllSame);
}

allEqual([3, 4, 3, 3, 3]);
allEqual([4, 4, 4, 4, 4]);

//7.

function checkNumberArr(arr) {
  let even = 0;
  let odd = 0;

  arr.forEach(item => {
      if (typeof item === 'number' && !isNaN(item)) {
          if (item === 0) {
              even++;
              console.log(item + ' - это ноль, четное число');
          } else if (item % 2 === 0) {
              even++;
              console.log(item + ' - это четное число');
          } else if (item % 2 !==0) {
              odd++;
              console.log(item + ' - это нечетное число');
          }
      } else {
          console.log(item + ' - это не число');
      }

  });

  console.log('Количество четных чисел: ', even);
  console.log('Количество нечетных чисел: ', odd);
}

checkNumberArr(['str', 0, 2, 3, 4, 5, null, NaN, 9]);

//8.
function mapArray() {
  const map = new Map();
  map.set('a', 1).set('b', 2).set('c', 3);

  map.forEach((value, key) => {
      console.log(`Ключ = ${key}, Значение - ${value}`);
  });
}

mapArray();

  
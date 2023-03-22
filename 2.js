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
  
  
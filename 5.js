function showArray(arr) {
    console.log("Элементов в массиве: ", arr.length);
  
    arr.forEach(item => {
        console.log(item);
    });
  }
  
  showArray([10, 20, 30, 40, 50]);
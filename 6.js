function allEqual(arr) {
    const isAllSame = arr.every(item => item === arr[0]);
  
    console.log(isAllSame);
  }
  
  allEqual([3, 4, 3, 3, 3]);
  allEqual([4, 4, 4, 4, 4]);
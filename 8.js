function mapArray() {
    const map = new Map();
    map.set('a', 1).set('b', 2).set('c', 3);
  
    map.forEach((value, key) => {
        console.log(`Ключ = ${key}, Значение - ${value}`);
    });
  }
  
  mapArray();
function ajout (x) {

    let som = 0;
  
    for (let i = 1; i <= x; i++) {
    som += i;
    }
    return som;
  }
  
console.log(ajout(5));
  
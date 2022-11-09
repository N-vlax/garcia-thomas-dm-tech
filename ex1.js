function alenvers(variable) {
  
    let alendrois ='';
      
    for (let x = variable.length - 1; x >= 0; x--) {
      
      alendrois += variable[x];
    }
      return alendrois;
    }
    
    console.log(alenvers('ruojnob') )


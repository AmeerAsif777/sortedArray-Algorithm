    return typeof [0,-1,10,9].reduce((accumulator, currentValue) => 
    {
     if(typeof accumulator !== 'number'){
     return false;
    }
      return accumulator === false ? false : true && accumulator< currentValue && currentValue;
    }) === 'number'? true: false;
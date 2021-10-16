function  divide (4.3, 0)
{
    
    if (isNaN(Math.floor(4.3) / Math.floor(0)) === false) {
    return "Invalid input";
  } 
  else {
    let x = 4.3 / 0;
  
    return x.toPrecision(3);
}
}
divide ();
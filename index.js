
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  
  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
  
  function makeInt(string) {
    return parseInt(string, 10); 
  }
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  
  console.log(add(10, 5));          
  console.log(subtract(10, 5));     
  console.log(multiply(10, 5));     
  console.log(divide(10, 5));       
  console.log(increment(10));       
  console.log(decrement(10));       
  console.log(makeInt("42"));       
  console.log(makeInt("42.5"));     
  console.log(preserveDecimal("42.5")); 
  console.log(preserveDecimal("nonsense")); 
  
  
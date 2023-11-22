function checkAge(name, age) {
  if ( age < 21) {
    return "Go home, " + name + "!";
  } else {
    return "Welcome, " + name + "!";
  }
}
  // your code here
  

console.log(checkAge("Adrian", 21)); // --> 'Welcome, Adrian!'
console.log(checkAge("Adrian", 18)); // -- > Go home, Adrian !
function sayHelloOrGoodbye(name, sayHello) {
  if(sayHello) {
    console.log("Hello to", name);
  } else {
    console.log("Goodbye to", name);
  }
}
sayHelloOrGoodbye('Emily', true);
sayHelloOrGoodbye('Emily', false);

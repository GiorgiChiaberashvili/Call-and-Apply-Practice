// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

say.call(helloMessage, "John");
say.call(heyThereMessage, "Michael");


// let sayHello = say.bind(helloMessage);
// let sayHeyThere = say.bind(heyThereMessage);


// sayHello("John");
// sayHeyThere("Michael");

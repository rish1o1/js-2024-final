// singleton
// Object.create

// object literals

const mySym =Symbol("key1")

const JsUser= {
    name: "Rishabh", 
    "full name": "Rishabh kishore singh", 
    [mySym]:"mykey1", 
    age:"18", 
    location:"jaipur", 
    email:"rishabh@google.com", 
    isLoggedIn:false, 
    lastLoginDays:["Monday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof mySym);

JsUser.email = "rishab@google.com"
// Object.freeze(JsUser)
JsUser.email= "rishabh@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo=function(){
    console.log(`hello js user, ${this.name}`);
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
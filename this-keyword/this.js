// this keyword is a special keyword
// Kyuki jaise ki baki sare keywords ki value ya nature same rehta hai this ki vlaue ya nature badal jata hai iss baat se ki aap usey kahan use kar rahe ho

//global scope
console.log(this);
//this ki value window hoti hai global scope mai
//window is supreme

// function scope
function name(params) {
  console.log(this);
}
name();
//window hi value hoti hai function scope mai bhi

//method scope
//method matlab object ke andar function
//isme `this` contain karta hai object ki sari values in which 'this' keyword is present
let obj = {
  name: "Arpa",
  age: 23,
  sayName: function () {
    console.log(this);
  },
};
obj.sayName();

//event handler mai kya hota hai `this` keyword ka ?
//
document.querySelector("h1").addEventListener("click", function () {
  console.log(this);
  console.log((this.style.color = "orange"));
});
//Event listener mai hamesha this wo hota hai jispe eventlistener laga raahe hai, like inthis case it  is h1

//class
class Abcd {
  constructor() {
    console.log("khikhikhi");
    this.a = 3;
  }
}

new Abcd();
// class ke andar `this` keyword ki value blank
//new ek blank boject banata hai fir Abcd chalata hai fir Abcd me construcotr chalata hai and jahajaha this likha hai vahavaha blankobject a jaega
// and this.a in constructor means ki blank object ke andarek a baan gaya
let val = new Abcd();

let obj1 = {
  sayName: () => {
    console.log(this); //the value of `this` keyword will be window because arrow fnc always inherit value from the parent fnc
  },
};

let obj2 = {
  SayName: function () {
    () => {
      console.log(this); // here we used this in the nested fnc whereI put arrow fnc in the es5 fnc because if I ever put es5 fnc inside es5fnc it
      // will return value as a window but if I put arrow fnc inside an es5 fnc then it will return an obj as we wanted
    };
  },
};

// ----------------------------------------------------------
//value of this in different context:
//global scope    -->   windows
//functional scope -->  windows
//method with es5 func  --> obj ke sare values
//event handler/eventListener   --> the element on which we are applying eventHandler
//class           --> blank object
//method with es6 arrow func  --> windows (because arrow fnc always takes values from its parent scope and in this case parent scope is global scope)
// es5 function inside es5 method   --> object

//----------------------------------------------------------------
// Call
// function ko call karte waqt aap set kar sakte ho ki uski `this` ki value kya hogi

let obj3 = {
  name: `Aryan`,
  age: 23,
};

function abcd(a, b, c) {
  console.log(this.name);
  console.log(this, a, b, c);
}

abcd.call(obj3);

//now I can access obj3 from a fnc using this even though it is global but I can make it like method and use obj3 using this in the fnc abcd using call
//fnc hi call hota hai hamesha

abcd.apply(obj3, [1, 2, 3]);
//to pass the value of a,b,c we use apply and enter those values in an array format
//apply is used rarely

let fnc = abcd.bind(obj3, 1, 2, 3);
fnc();
//saving bind in fnc only to see the output
//bind obj ko chalata nhi hai balki uski ek nayi copy tayyar karta hai and usme obj3 ek fnc hai, and `this` ek obj baan jaega and all info save karta hai

//this keyword ka use

//

//

//
let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#Photourl");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUI();
  },
  renderUI: function () {
    document.querySelector(".profile-card").innerHTML = "";
    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center text-center";

      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";

      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1";
      name.textContent = user.username;

      const role = document.createElement("p");
      role.className = "text-blue-700 font-medium mb-2";
      role.textContent = user.role;

      const bio = document.createElement("p");
      bio.className = "text-gray-700 text-center";
      bio.textContent = user.bio;

      card.append(img, name, role, bio);
      document.querySelector(".profile-card").appendChild(card);
    });
  },
  removeUser: function () {},
};

userManager.init();

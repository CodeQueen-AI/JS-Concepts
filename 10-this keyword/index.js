console.log("======================================");
console.log("🟢 Topic: this Keyword in JavaScript");
console.log("======================================\n");

// 1️⃣ Global Context
console.log("🔹 1️⃣ Global Context:");
console.log(this); // global object (window in browser)
console.log("--------------------------\n");

// 2️⃣ Function Context
console.log("🔹 2️⃣ Function Context:");
function show() {
  console.log(this); // normal function → global object
}
show();
console.log("--------------------------\n");

// 3️⃣ Object Context
console.log("🔹 3️⃣ Object Context:");
const user = {
  name: "Ali",
  greet: function () {
    console.log(this.name); // Ali
  }
};
user.greet();
console.log("--------------------------\n");

// 4️⃣ Arrow Function Context
console.log("🔹 4️⃣ Arrow Function Context:");
const arrowUser = {
  name: "Sara",
  greet: () => {
    console.log(this); // arrow uses parent scope → window
  }
};
arrowUser.greet();
console.log("--------------------------\n");

// 5️⃣ Arrow inside Object Method
console.log("🔹 5️⃣ Arrow inside Object Method:");
const mixUser = {
  name: "Ahmed",
  greet: function () {
    const arrow = () => {
      console.log(this.name); // Ahmed
    };
    arrow();
  }
};
mixUser.greet();
console.log("--------------------------\n");

// 6️⃣ Class Context
console.log("🔹 6️⃣ Class Context:");
class Person {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(this.name); // current object
  }
}
const p1 = new Person("Ayesha");
p1.show();
console.log("--------------------------\n");

// 7️⃣ call() Example
console.log("🔹 7️⃣ call() Example:");
function showName() {
  console.log(this.name);
}
const userCall = { name: "Usman" };
showName.call(userCall);
console.log("--------------------------\n");

// 8️⃣ apply() Example
console.log("🔹 8️⃣ apply() Example:");
function show(city, country) {
  console.log(this.name, city, country);
}
const userApply = { name: "Zain" };
show.apply(userApply, ["Lahore", "Pakistan"]);
console.log("--------------------------\n");

// 9️⃣ bind() Example
console.log("🔹 9️⃣ bind() Example:");
function display() {
  console.log(this.name);
}
const userBind = { name: "Hassan" };
const boundFunc = display.bind(userBind);
boundFunc();
console.log("--------------------------\n");

console.log("✅ End of this Keyword Examples");

let inputName = prompt("Enter your name : ");
let inputEmail = prompt("Enter your email : ");
let inputAge = parseInt(prompt("Enter your age : "));

let user = {
  name: inputName,
  email: inputEmail,
  age: inputAge,
};

console.log(user);

function validateUser(user) {
  if (
    typeof user.name == "string" &&
    typeof user.email == "string" &&
    typeof user.age == "number"
  ) {
    if (user.name.length > 0 && user.email.length > 0 && user.age < 120) {
      console.log("Match!");
    } else {
      console.log("Values don't match!");
    }
  } else {
    console.log("Types don't match!");
  }
}

validateUser(user);

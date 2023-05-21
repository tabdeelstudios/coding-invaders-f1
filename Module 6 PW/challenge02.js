let attempts = 3;

while (attempts > 0) {
  let answer = prompt("What is the name of your first pet?");
  if (answer === "Buddy") {
    console.log("access restored");
    break;
  } else {
    if (attempts > 0) {
      console.log(`Try again`);
    } else {
      console.log("all attempts are used");
    }
  }
  attempts--;
}

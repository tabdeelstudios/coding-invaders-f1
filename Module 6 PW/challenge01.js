let preferenes = prompt("Enter your preference");

switch (preferenes.toLowerCase()) {
  case "fantasy":
    console.log("The Hobbit");
    break;

  case "romance":
    console.log("Rebecca");
    break;

  case "horror":
    console.log("Dracula");
    break;

  case "detective":
    console.log("The Moonstone");
    break;

  default:
    console.log("The Adventures of Tom Sawyer");
}

import { auth, createUserWithEmailAndPassword } from "./firbase.js";

createUserWithEmailAndPassword(auth, email, password);

const form = document.querySelector("#signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.target.children[0].value;
  const password = event.target.children[1].value;

  console.log("email ", email);
  console.log("password ", password);
});

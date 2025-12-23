import { UUID } from "./UUID.js";

console.log("crypto.randomUUID:", UUID.create());
console.log("Math.random      :", UUID.create(false));

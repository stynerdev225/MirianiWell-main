// A simple script to test Clerk's API parameters
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");

// Log available methods and parameters for sign-up
console.log("Clerk SDK available methods:");
console.log("==========================");
const clerk = require("@clerk/clerk-sdk-node");
console.log(Object.keys(clerk));

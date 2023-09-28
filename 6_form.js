let userName="sohan";
let email="sohan29@gmail.com";
let age=21;

// console.log(typeof(age));
if(typeof(userName) != "string"){
    console.log("username should be String...");
}
else if(typeof(email) != "string"){
    console.log("email should be String...");
}
else if(typeof(age) != "number"){
    console.log("age should be Number...");
}
else{
    console.log("All above mentioned fields are correct..");
}
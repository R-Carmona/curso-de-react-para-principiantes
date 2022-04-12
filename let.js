let extLet = 1;
var extVar = 1;
if(true){
    let intLet = 1;
    var intVar = 1;

    console.log("Inside Function ------");
    console.log("extLet", extLet);
    console.log("extVar", extVar);
    console.log("intLet", intLet);
    console.log("intVar", intVar);
}

console.log("Outside Function ------");
console.log("extLet", extLet);
console.log("extVar", extVar);
console.log("intLet", intLet);
console.log("intVar", intVar);

const a = 1;
// const a = 2 (Daría ERROR, no se puede modificar su valor)
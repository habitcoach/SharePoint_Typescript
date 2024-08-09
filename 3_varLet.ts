function Test(){

    if(true){

        var y =10 // y will be accessible as it is function scope
        let z =10 // let is block-scope hence wont be avaibale outside the scope
        
    }
    let x = 10
    console.log("x is accessable: "+ x)
    console.log("y is accessable: "+ y) // Var y will be accessible as it is function scoped
  //  console.log("z is not accessable"+ z) //error: as z is let and wont be avaibale outside the scope
}
Test()

// console.log(x) error: none will be accessible as it is outside the block and function
// console.log(y)
// console.log(z)

// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally

function multiples(){
    for(i = 0; i <= 100; i++){
        if(i % 3 == 0) {
            console.log("Fizz");
        } 
        if(i % 5 ==0) {
            console.log("Buzz");
        } 
        if((i % 3 == 0) && (i % 5 ==0)){
            console.log("FizzBuzz");
        } else {
            console.log(i)
        }
    }
}

console.log(multiples());

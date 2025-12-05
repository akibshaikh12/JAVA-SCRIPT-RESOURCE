// Immediately Ivoked Function Expression (IIFE)

(function chai(){
    // named IIFE

    console.log(`DB CONNECTED`);
    
})();


(  () => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO`);
    
})();

((name) => {
    // unnamed IIFE WITH PARAMETER
    console.log(`DB CONNECTED THREE ${name}`);
    
})('sk akib')
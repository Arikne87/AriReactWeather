function addPromise(a,b){

    return new Promise(function (succ,fail) {

        setTimeout(function(){
            if(typeof a=='number' && typeof b=='number'){
            succ(8,9);}
            fail('Not both number');

        },1500)

    });
}

addPromise(7,9).then(function(succ){
  var sum=0;


        sum=7+8;
        console.log("The sum is :");
        console.log(sum);


},function(fail){

     console.log('Cant sum a string and a number');

})
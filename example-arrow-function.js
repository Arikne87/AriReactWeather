
var names=['Ari','Marin','Balla'];


names.forEach(function(name){


    console.log('foreach',name);
});


//arrow

names.forEach((name) => {

    console.log('arrow',name);
});

names.forEach((name)=>console.log(name));
//differce arrow don t update the this bind inside and object
var person={
    name:'Andrew',
    greet:function(){

        names.forEach((name)=>{

            console.log(this.name+' says hi to '+name);
        })
    }
}

person.greet();

var addStat=(a,b)=>{

  return a+b;
}

console.log(addStat(3,7));

var addStat2=(a,b)=>a+b;
console.log(addStat2(5,9));
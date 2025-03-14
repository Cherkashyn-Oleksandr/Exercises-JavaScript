var steps = 12
var paths = "DDUUDDUDUUUD"
var level = 1
var levelCheck = 0
var count = 0
//-----------------------------Character Array from String methods----------------------
/*

****************  using split() method
let array = paths.split("");


************* Spread operator 
console.log([...paths]);


 
*****************    Array.from() 
let a = Array.from(paths);
console.log(a);



*****************  for Loop 
const a = [];
for (const s1 of paths) {
    a.push(s1);
}
console.log(a); 

*/

//---------------------------------------Solutions-----------------------------------------------------
//*************first solution 
/*
for(let i = 0; i < steps; i++){

    if(paths[i] == "U"){
        levelCheck ++
        level ++}

    if(paths[i] == "D"){
        levelCheck ++
        level --}
        if(level >= 1 && paths[i] == "U")
            levelCheck = 0

    if(level == 1 && levelCheck == 0)
        count++
}
console.log(count)*/



//*******************second solution 

var i = 0;
    var elevation = 0;
    var valleys = 0;
    
    while(i < steps && steps - i > Math.abs(elevation)){
        if(paths[i] == "U")
            elevation++;
        else {
            elevation--;
            if(elevation == -1)
                valleys++;
        }
            
        i++;
    }
    
    console.log(valleys);
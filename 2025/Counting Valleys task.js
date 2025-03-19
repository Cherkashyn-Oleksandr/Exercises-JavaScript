/*
An avid hiker keeps meticulous records of their hikes. 
During the last hike that took exactly steps steps, 
for every step it was noted if it was an uphill, U , 
or a downhill, D step. Hikes always start and end at sea level, 
and each step up or down represents a 1 unit change in altitude. 
We define the following terms:

A mountain is a sequence of consecutive steps above sea level, 
starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, 
starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, 
find and print the number of valleys walked through.

Example

 steps = 8 path = [DDUUUUDD]

The hiker first enters a valley 2 units deep. 
Then they climb out and up onto a mountain 2 units high. 
Finally, the hiker returns to sea level and ends the hike.

Function Description

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

int steps: the number of steps on the hike
string path: a string describing the path

Returns

int: the number of valleys traversed

Input Format

The first line contains an integer , the number of steps in the hike.
The second line contains a single string , of  characters that describe the path.


Sample Input

8
UDDDUDUU

Sample Output

1
*/


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


    //******************************third solution 
    


    let counter = 0;
    let position = 0;
    for (let i =0;i<steps;i++){
        const wasInVally =counter<0 
        paths[i] === 'U'?counter++:counter--;
        if (counter === 0 && wasInVally) {
            position++;
        }
    }
    return position;
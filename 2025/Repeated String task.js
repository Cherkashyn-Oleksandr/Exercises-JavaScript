var s = "aba"
var n = 10
var word = ""
var count = 0
var repeated = n / s.length

 // first example:   
  //console.log(([...s.matchAll(/a/g)].length * Math.floor(n / s.length)) + ([...s.substring(0, (n % s.length)).matchAll(/a/g)].length))


 //second example


    const len = s.length;
    const rem = n % len;
    let totalA = 0;
    let remA = 0;
    for(var i=0; i < len; i++)
    {
        if(s[i]=='a')
        {
            totalA++;
            if(i<rem) remA++;
        }
    }
    console.log(Math.floor(n/len) * totalA + remA)

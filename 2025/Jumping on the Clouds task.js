var c = [0, 0, 1, 0, 0, 1, 0]
var count = 0
    for(let i = 1; i < c.length; i++)
    {
        if(c[i+1] === 0) {
            count ++ 
            i ++
        }
            else{
                if(c[i+0] === 0){
                    count++
                }
                else{
                    console.log("No way")
                }
        }
        
    }
    console.log(count)
/*
There is a string, s , of lowercase English letters that is repeated infinitely many times. 
Given an integer, n, find and print the number of letter a's in the first  
letters of the infinite string.

Example

s='abcac'

n = 10

The substring we consider is abcacabcac, the first 10
 characters of the infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider


Returns

int: the frequency of a in the substring


Input Format

The first line contains a single string, .
The second line contains an integer, .


Sample Input 0

aba
10

Sample Output 0

7

Explanation 0
The first  letters of the infinite string are abaabaabaa. Because there are  a's, we return .

Sample Input 1

a
1000000000000

Sample Output 1

1000000000000

Explanation 1
Because all of the first  letters of the infinite string are a, we return .
*/ 

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

/*
There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

Example

n = 7

ar=[1,2,1,2,1,3,2]

There is one pair of color 1 and one of color 2. 
There are three odd socks left, one of each color. The number of pairs is 2.

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock

Returns

int: the number of pairs

Input Format

The first line contains an integer ar, the number of socks represented in .
The second line contains  space-separated integers, ar[i], 
the colors of the socks in the pile.

Sample Input

ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

Sample Output

3 
*/


var n = 9
var ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
var socksCount = []
var count = 0
    // Write your code here
    var sum = 0;
    var numberOfColors = Array(101);
    ar.forEach((color) => {
            sum += 1 & numberOfColors[color];
            numberOfColors[color] = !numberOfColors[color];
    })
    
    
    

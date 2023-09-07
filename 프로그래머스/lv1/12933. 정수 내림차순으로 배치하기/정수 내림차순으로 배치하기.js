function solution(n) {
    var answer=[];
    var numlist = [];
    var num = n.toString().length
    for(var i=0;i<num;i++){
        numlist.push(n%10)
        n=parseInt(n/10)
    }
    numlist.sort(function(a,b){
        return b-a;
    })
    for(var i of numlist){
        answer+=i
    }
    return parseInt(answer);
//     //숫자가 분명히 더 빠름
//     var nums =[];
//     do{
//         nums.push(n%10);
//         n=Math.floor(n/10);
//     } while(n>0)

//     return nums.sort((a,b)=>b-a).join('')*1;
//     //문자는 느림
//     return (n+"").split('').sort((a,b)=>b-a).join('')*1;
}
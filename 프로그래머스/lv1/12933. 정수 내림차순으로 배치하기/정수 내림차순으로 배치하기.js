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
}
function solution(arr, divisor) {
    var answer = [];
    for (var i of arr){
        if(i%divisor==0)
            answer.push(parseInt(i))
    }
    if(answer==0)
        answer.push(-1) 
    answer.sort(function(a,b){
        return a-b
    })
    
    return answer;
}
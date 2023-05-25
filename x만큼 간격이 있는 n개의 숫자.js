function solution(x, n) {
    var answer = [];
    var num=x;
    for(i=0;i<n;i++){
        answer.push(x);
        x+=num;
    }
    return answer;
}
function solution(n) {
    var answer = 0;
    var num = Math.sqrt(n)
    return (Number.isInteger(num))?Math.pow(num+1,2):-1;
}
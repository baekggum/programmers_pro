function solution(n)
{
    var answer = 0;

    let num = String(n).split("");
    console.log(num);
    for (i in num)
        answer += parseInt(num[i]);

    return answer;
}
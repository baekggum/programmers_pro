function solution(x) {
    x+=''
    var ans = x.split('')
    var num=0;
    
    ans.forEach(e=>num+=parseInt(e))
    return x%num==0;
}
function solution(absolutes, signs) {
    var answer=0;
    for (var i=0;i<absolutes.length;i++){
        if(signs[i]==false)
            absolutes[i]*=-1
    }
    absolutes.filter(v=>answer+=v)
    return answer
}
function solution(angle) {
    var answer = 0;
    if(angle<180){
        if(angle>90){
            answer = 3;
        }else if(angle == 90)
            answer = 2;
        else
            answer = 1;
    }else
        answer = 4;
    return answer;
    //return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}
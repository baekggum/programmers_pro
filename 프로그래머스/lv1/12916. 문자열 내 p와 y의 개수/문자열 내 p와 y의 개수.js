function solution(s){
    var answer = true;
    var p_Num = 0;
    var y_Num = 0;
    
    for(var i=0;i<s.length;i++){
        if(s[i]=='p'||s[i]=='P')
            p_Num+=1;
        else if(s[i]=='y'||s[i]=='Y')
            y_Num+=1;
    }

    answer =  p_Num == y_Num;
    
    return answer;
    //return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
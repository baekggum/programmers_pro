function solution(num) {
    for(var i=0;i<500;i++){
        if(num==1)
            return i
        num%2==0?num/=2:num=num*3+1
    }
    return -1
}
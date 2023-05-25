function solution(arr) {
    var answer = 0;
    for (i in arr){
        answer+=arr[i];
    }
    answer/=arr.length;
    return answer;
}
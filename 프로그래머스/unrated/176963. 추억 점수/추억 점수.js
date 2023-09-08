function solution(name, yearning, photo) {
    var answer=[] 
    var dict=[]
    var num = 0;
    for(var i=0;i<name.length;i++)
        dict[name[i]]=yearning[i]
    
    for(var i=0;i<photo.length;i++){
        for(var j=0;j<photo[i].length;j++){
            if(dict[photo[i][j]]==undefined)
                continue
            num+=dict[photo[i][j]]
        }
        answer.push(num)
        num=0
    }

    
    return answer;
}
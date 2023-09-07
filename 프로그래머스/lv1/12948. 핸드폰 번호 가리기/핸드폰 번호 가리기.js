function solution(phone_number) {
    var before,after;
    before = phone_number.slice(0,-4);
    after = phone_number.slice(-4);
    before=before.replaceAll(/[0-9]/g,'*')

    return before+after
}
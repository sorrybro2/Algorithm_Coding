function solution(my_string) {
    let answer = [];
    
    const only_num = my_string.split(/[a-zA-Z]/).filter(Boolean).join('').split('').map(Number);

    return only_num.sort();
}
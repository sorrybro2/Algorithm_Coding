function solution(my_string) {
    return my_string.split('').map(ch => ch = ch.toUpperCase() ? ch.toLowerCase() : ch.toLowerCase()).sort().join('');
}
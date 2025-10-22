function solution(n) {
    const pizza = 6;
    let pizzacontain = 6;
    
    while(1){
        if(pizzacontain%n==0){
            return pizzacontain/pizza;
        }else{
            pizzacontain += pizza;
        }
    }
}
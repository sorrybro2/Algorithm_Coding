function solution(price) {
    if(price >= 10 && price < 100000){
        return price;    
    }else if(price >= 100000 && price < 300000){
        return Math.trunc(price*0.95);
    }else if(price >= 300000 && price < 500000){
        return Math.trunc(price*0.9);
    }else if(price >= 500000){
        return Math.trunc(price*0.8);
    }    
}
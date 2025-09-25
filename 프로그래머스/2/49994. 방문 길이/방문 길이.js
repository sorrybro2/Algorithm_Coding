// 방향키 세팅
function updateLocation(x, y, dir){
    switch(dir){
        case "U":
            return [x, y+1];
        case "D":
            return [x, y-1];
        case "L":
            return [x-1, y];
        case "R":
            return [x+1, y];
    }
}

// 범위 세팅
function canMove(nx,ny){
    return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5
}



function solution(dirs) {
    // 초기 좌표 (0,0)
    let x = 0;
    let y = 0;
    
    // 중복은 없애기로~
    const visited = new Set();
    
    // 반복문으로 방향키 받음
    for(const dir of dirs){
        // 좌표 업데이트!
        const [nx, ny] = updateLocation(x,y,dir);
        // 죄표 범위 아니면
        if(!canMove(nx, ny)){
            // continue로 받지 않음
            continue;
        }
        
        // 양향방으로 받음
        visited.add(`${x}${y}${nx}${ny}`);
        visited.add(`${nx}${ny}${x}${y}`);
        
        // 좌표 이동!
        [x, y] = [nx, ny];
    }
    
    return visited.size/2;
}
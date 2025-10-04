//유사 그래프 문제
function direction(x, y, dir){
    switch (dir){
        case "U" : 
            return [x, y+1];
        case "D" :
            return [x, y-1];
        case "R" :
            return [x+1, y];
        case "L" :
            return [x-1, y];
    }
}

function square5x5(nx, ny){
    return (nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5);
}

function solution(dirs) {
    let x = 0;
    let y = 0;

    let visited = new Set();

    for(const dir of dirs){
        const [nx, ny] = direction(x,y,dir);
        if (!square5x5(nx,ny)){
            continue;
        }

        
        visited.add(`${nx}${ny}${x}${y}`);
        visited.add(`${x}${y}${nx}${ny}`);

        [x,y] = [nx, ny];
    }

    var answer = visited.size/2;
    return answer;
}
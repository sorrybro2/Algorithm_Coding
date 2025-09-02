const [a,b] = require('fs').readFileSync(0, 'utf8').trim().split(' ').map(Number);

if (a==b){
    console.log('==');
}else{
    console.log(a>b ? '>':'<');
}

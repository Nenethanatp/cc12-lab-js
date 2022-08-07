style = ['Jazz', 'Blue'];

style.push('Rock-n-Roll');

style[1] = 'Classic';

delete style[0];

console.log(style); //[empty, 'Classic', 'Rock-n-Roll']
console.log(style.length); //3

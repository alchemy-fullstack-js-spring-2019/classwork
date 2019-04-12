const pattern = /aa(?<hi>a)/g;
const str = 'aaabaaab';

const match = str.match(pattern);
const ex = pattern.exec(str);
const ex2 = pattern.exec(str);
const test = pattern.test(str);

console.log('match', match);
console.log('ex', ex);
console.log('ex2', ex2);

console.log('test', test);

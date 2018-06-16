import './index.css'
import numeral from 'numeral';

const a = 1000
const b = 500
const c = numeral(a).multiply(b).format('$0,0.00');
debugger;
console.log(`${a} * ${b} = ${c}`)
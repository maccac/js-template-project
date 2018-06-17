import numeral from 'numeral';
import './index.css';

/* eslint-disable no-console */

const a = 1000;
const b = 500;
const c = numeral(a).multiply(b).format('$0,0.00');
console.log(`${a} * ${b} = ${c}`);

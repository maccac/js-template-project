import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

describe('A simple dummy test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say Template project', () => {
    const index = new JSDOM(fs.readFileSync('src/index.html', 'utf-8'));
    const h1 = index.window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal('Template project');
    index.window.close();
  });
});

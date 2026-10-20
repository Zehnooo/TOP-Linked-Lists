import List from './List.js';

const list = new List();

// add random minecraft mobs as list items

list.append('pig');
list.append('cow');
list.append('chicken');
list.append('salmon');
list.append('cod');
list.append('wolf');
list.append('sheep');

list.prepend('cat');
list.prepend('squid');


console.log('pre', list.toString());
list.insertAt(24,  "villager", "armadillo");
console.log('post', list.toString());

list.nodeList().forEach(node => console.log({name: node.value, next: node.getNextNode()?.getValue()}));
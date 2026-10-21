import List from './List.js';

const list = new List();

// random minecraft mobs
list.append('pig');
list.append('cow');
list.append('chicken');
list.append('salmon');
list.append('cod');
list.append('wolf');
list.append('sheep');
list.prepend('cat');
list.prepend('squid');


list.insertAt(2,  "villager", "armadillo");
list.removeAt(6);

list.nodeList().forEach(node => console.log({name: node.value, next: node.getNextNode()?.getValue()}));
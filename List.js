import Node from './Node.js';

export default class List {
    constructor(){
        this.list = [];
    }
    append(value){
        const newNode = new Node(value);
        this.list.push(newNode);
        const priorNode = this.atIndex(this.size() - 2);
        if (priorNode !== undefined) { priorNode.setNextNode(newNode); }
        return newNode;
    }
    prepend(value) {
        const newNode = new Node(value, this.atIndex(0));
        this.list.unshift(newNode);
        return newNode;
    }
    insertAt(index, ...values) {
            if (index < 0 || index > this.list.length) {
                console.error("Invalid index: Index out of bounds");
                return;
            }

            // slice list from beginning to provided index to preserve first part of array
            const listPartA = this.list.slice(0, index);
            const listPartB  = this.list.slice(index, this.list.length);

            const newNodes = [];
            values.forEach(value => { newNodes.push(new Node(value)); });

            // Set the final node from first sliced list to have the first newNode as it's nextNode
            listPartA[listPartA.length - 1].setNextNode(newNodes[0]);

            // loop through each new node, set nextNode if applicable and push to sliced list
            newNodes.forEach((node, index) => {
                if (index !== newNodes.length - 1) { node.setNextNode(newNodes[index + 1]); }
                else { node.setNextNode(listPartB[0]); }
                listPartA.push(node);
            });

            this.list = [...listPartA, ...listPartB];

    }
    size() {
        return this.list.length ?? 0;
    }
    head() {
        return this.list[0]?.value ?? undefined;
    }
    tail() {
        return this.list[this.list.length - 1]?.value ?? undefined;
    }
    atIndex(index) {
        return this.list[index] ?? undefined;
    }
    pop() {
        return this.list.shift()?.value ?? undefined;
    }
    contains(value) {
        return !!this.list.find(node => node.getValue() === value);
    }
    findIndex(value) {
        return this.list.indexOf(this.list.find(i => i.getValue === value)) ?? -1;
    }
    toString(){
        if (!this.list.length) return '';
        let str = '';
        this.list.forEach(i => str += `( ${i.getValue()} ) -> `);
        str += 'null';
        return str;
    }
    nodeList(){
        return this.list;
    }
}
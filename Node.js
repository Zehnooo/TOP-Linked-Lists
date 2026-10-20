
export default class Node {
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
    getValue() {
        return this.value;
    }
    getNextNode() {
        return this.nextNode;
    }
    setNextNode(node) {
        this.nextNode = node;
    }
}
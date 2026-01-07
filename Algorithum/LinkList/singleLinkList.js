class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function createLL(arr) {
    let head = new Node(arr[0]);
    let mover = head;
    for (let i = 1; i < arr.length; i++) {
        let temp = new Node(arr[i]);
        mover.next = temp;
        mover = temp;
    }
    return head;
}
let head = createLL([12, 23, 4, 51, 2, 3, 4, 5, 6, 7, 8, 9]);


function traverseLL(head) {
    let temp = head;
    let length = 0;
    while (temp) {
        console.log(temp.data, "head: ", head);
        temp = temp.next;
        length++;
    }
    return length
}
// let lengthOfLL = traverseLL(head)
// console.log(lengthOfLL)


function deleteNodeFromLL(head) {
    if (!head) return null;
    return head.next
}
head = deleteNodeFromLL(head);
// let lengthOfLL1 = traverseLL(head);


function deleteTailNodeFromLL(head) {
    let temp = head;
    while (temp.next.next) {
        temp = temp.next;
    }
    temp.next = null
}
deleteTailNodeFromLL(head);
// let lengthOfLL2 = traverseLL(head);


function deleteKthNode(head, k) {
    if (!head) return null
    if (k === 0) {
        return head
    }
    if (k === 1) {
        return head.next;
    }
    let count = 1;
    let temp = head;
    let prev = null;

    while (temp && count < k) {
        prev = temp;
        temp = temp.next;
        count++;
    }

    if (temp) {
        prev.next = temp.next
    }
    return head;
}
// head = deleteKthNode(head, 10);
// traverseLL(head);


function deleteGiveValNode(head, value) {
    if (!head) return null
    let temp = head;
    let prev = null;
    if (head.data === value) {
        return head.next
    }

    while (temp.data !== value) {
        prev = temp;
        temp = temp.next;
    }

    if (temp) {
        prev.next = temp.next
    }
    return head;
}
// head = deleteGiveValNode(head, 8);
// traverseLL(head);

function insertHead(head, val) {
    temp = new Node(val, head)
    return temp
}
// head = insertHead(head, 11)
// traverseLL(head);

function insertLast(head, val) {
    let temp = head;
    while (temp.next) {
        temp = temp.next;
    }
    temp.next = new Node(val, null);
}
// insertLast(head, 21)
// traverseLL(head);

function insertKthPlace(head, k, val) {
    if (!head && k === 1) {
        return new Node(val, null)
    }
    if (k === 1) {
        return new Node(val, head);
    }
    let temp = head;
    let count = 1;
    while (count !== k) {
        count++
        temp = temp.next;
    }
    let nextNode = temp.next;
    temp.next = new Node(val, nextNode);
    return head;
}
head = insertKthPlace(head, 3, 21)
// traverseLL(head);

function insertBeforeValue(head, val, el) {
    if (!head) {
        return new Node(el, null)
    }
    if (head.data === val) {
        return new Node(el, head);
    }
    let temp = head;
    let prev = null
    while (temp.data !== val) {
        prev = temp;
        temp = temp.next;
    }
    let nextNode = prev.next;
    prev.next = new Node(el, nextNode);
    return head;
}
head = insertBeforeValue(head, 8, 211111)
traverseLL(head);
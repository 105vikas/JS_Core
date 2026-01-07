class Node {
    constructor(data, prev = null, next = null,) {

        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
let arr = [2, 5, 8, 7];
let head = new Node(arr[0]);


function createDubleLL(arr) {
    let head = new Node(arr[0], null, null)
    let prev = head;
    for (let i = 1; i < arr.length; i++) {
        temp = new Node(arr[i], prev, null)
        prev.next = temp
        prev = temp
    }
    return head

}
head = createDubleLL(arr)
console.log(head)

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

function deleteHeadDLL(head) {
    let prev = head;
    head = head.next;
    head.prev = null
    prev.next = null
    return head
}
// head = deleteHeadDLL(head)
// console.log(head)


function deleteTeilDLL(head) {
    let temp = head;
    let prev = null
    while (temp.next) {
        prev = temp;
        temp = temp.next
    }
    prev.next = null;
    temp.prev = null
    return head
}
// head = deleteTeilDLL(head)
// console.log(head.next.next)

function deleteKthElementDLL(head, k) {
    let prev = null;
    if (k == 1) {
        prev = head;
        head = head.next;
        prev.next = null;
        head.prev = null
        return head;
    }
    let temp = head;
    let count = 1
    let nextPointer = head;
    while (count <= k) {
        prev = temp;
        // nextPointer = temp.next.next;
        temp = temp.next
        count++
    }
    temp.prev = null;
    temp.next = null
    prev.next = temp.next;
    nextPointer.prev = prev;
    return head
}
head = deleteKthElementDLL(head, 2)
traverseLL(head)
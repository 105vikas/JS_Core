function minStudentHoldBook(book, page) {
    let students = 1, pagesPerStudent = 0;
    for (let i = 0; i < book.length; i++) {
        if (pagesPerStudent + book[i] <= page) {
            pagesPerStudent += book[i]
        } else {
            students++;
            pagesPerStudent = book[i];
        }
    }
    return students;
}

function AllocateBookBrutte(books, student) {   //T(sum-max)*n S(1)
    if (books.length < student) {
        return -1;
    }
    let low = Math.max(...books);
    let high = books.reduce((acc, curr) => acc + curr, 0)
    for (let pages = low; pages <= high; pages++) {
        let countStudent = minStudentHoldBook(books, pages)
        if (countStudent === student) {
            return pages;
        }
    }
}
let output = AllocateBookBrutte([29, 42, 54, 21, 42], 4)
console.log(output)


function AllocateBookBetter(books, student) {       // T(log Sum-max)*n s(1)
    if (books.length < student) {
        return -1;
    }
    let low = Math.max(...books);
    let high = books.reduce((acc, curr) => acc + curr, 0)
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let countStudent = minStudentHoldBook(books, mid);
        if (countStudent > student) low = mid + 1;
        else high = mid - 1
    }
    return low;
}
let output1 = AllocateBookBetter([29, 42, 54, 21, 42], 4)
console.log(output1)
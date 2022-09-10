function sum(a) {
    return function (b) {
        console.log(a+b);
    }
}

sum(1)(2);
sum(5)(-1);

function sum(a) {
    return function (b) {
        console.log(a+b+c);
    }
    return function (c) {
        console.log(arr[c]);
    }asdfsdf
}

sum([[1,2],[1,1],[2,3]]);
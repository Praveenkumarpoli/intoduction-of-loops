// // task1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}
// // task2
const number = 5;
for (let b = 1; b <= 10; b++) {
    console.log(number + "X" + b + "=" + (number * b));
}

const numbers = 5;
let c = 1;
while (c <= 10) {
    console.log(numbers + "X" + c + "=" + (numbers * c));
    c++;
}
// // task3
let sum = 0;
for (let d = 1; d <= 10; d++) {
    sum += d;
}
console.log(`The sum of the first 10 natural numbers is`,(sum));

let sums = 0;
let e = 1;
while (e <= 10) {
    sums += e;
    e++;
}
console.log(`The sum of the first 10 natural numbers is`,sums);

// // task4
for (let f = 1; f <= 30; f++) {
    if (f % 3 === 0) {
        console.log(f);
    }
}

let g = 1;
while (g <= 30) {
    if (g % 3 === 0) {
        console.log(g);
    }
    g++;
}

// // task5

for (let h = 1; h <= 10; h++) {
    let square = h * h;
    console.log(h,`squared is`,square);
}

let j = 1;

while (j <= 10) {
    let squares = j * j;
    console.log(j,` squared is`,squares);
    j++;
}

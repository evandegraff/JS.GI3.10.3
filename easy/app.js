function exercise(x) {
return function () {
return `Today's exercise: ${x}`;
};
}
var run = exercise("running");
var swim = exercise("swimming");

console.log(run());
console.log(swim());
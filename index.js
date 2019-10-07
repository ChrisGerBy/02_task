Number.prototype.minus = function(num) {
    return this - num;
};

Number.prototype.plus = function(num) {
    return this + num;
};

let example = (2).minus(1).plus(5);

console.log(example);
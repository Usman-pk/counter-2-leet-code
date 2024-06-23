console.log('Counter 2 : LeetCode');

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let val = init;
    return {
        increment: () => ++val,
        decrement: () => --val,
        reset: () => val = init
    }
};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.increment());
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

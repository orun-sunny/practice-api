const bottle = {
    corlor: 'yellow', hold: 'water', price: 50
};
const keys = Object.keys(bottle);
// console.log(keys);

const values = Object.values(bottle);
// console.log(values);
Object.seal(bottle);
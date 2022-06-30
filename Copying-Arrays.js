
// Copying Array Without Spread Operator

const mhs = ["Michael", "Bobby", "Jackson"];

const mhs1 = mhs;

mhs1[0] = 'Fajar';

console.log(mhs1);
console.log(mhs);

    // output:
    // ["Fajar", "Bobby", "Jackson"]
    // ["Fajar", "Bobby", "Jackson"]


// Copying Array With Spread Operator

const mhsa = ["Michael", "Bobby", "Jackson"];

const mhsa1 = [...mhsa];

mhsa1[0] = 'Fajar';

console.log(mhsa1);
console.log(mhsa);

    // output:
    // ["Fajar", "Bobby", "Jackson"]
    // ["Michael", "Bobby", "Jackson"]




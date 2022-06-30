

//Joining Two Arrays and More with Spread Operator

const mhs = ["Michael", "Bobby", "Jackson"];
const dosen = ["John", "Jack", "Jill"];

const all = [...mhs, "Tommy", …dosen];
console.log(all);

    //output: ["Michael", "Bobby", "Jackson", "Tommy", "John", "Jack", "Jill"]

//Joining Two Arrays and More without Spread Operator

const mhs = ["Michael", "Bobby", "Jackson"];
cons dosen = ["John", "Jack", "Jill"];

cons
t all = [mhs, "Tommy", dosen];
console.log(all);

    //output: [["Michael", "Bobby", "Jackson"], "Tommy", ["John", "Jack", "Jill"]]




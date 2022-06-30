
//Joining Two Array with Spread Operator

const dosen = ["John", "Jack", "Jill"];

const orang = [...mhs, ...dosen];const mhs = ["Michael", "Bobby", "Jackson"];

console.log(orang);

    //output: ["Michael", "Bobby", "Jackson", "John", "Jack", "Jill"]

//Joining Two Array without Spread Operator (for comparison)

const mhs = ["Michael", "Bobby", "Jackson"];

const dosen = ["John", "Jack", "Jill"];

const all = [mhs, dosen];

console.log(all);

    //output: [["Michael", "Bobby", "Jackson"], ["John", "Jack", "Jill"]]




// For loops
const abjad = 'abcd'
for (let i = 1; i <= 10; i++)
{
    console.log(`${i}. Soal nomor`);
    for (let j = 0; j <= abjad.length; j++)
    {
        console.log(`   ${abjad[j]}. Pilihan Jawaban`)
    }
}

// Multidimension Array
const BOARD = [
    ['A','B','C'],
    ['A','B','C'],
    ['A','B','C'],
]

for (let x = 0; x < BOARD.length; x++)
{
    const row = BOARD[x];
    console.log(`Baris ke-${x+1}`);
    for (let y = 0; y < BOARD.length; y++)
    {
        console.log(`   ${row[y]}`);
    }
}

// Another example of multidimension array 
const BOARD_2 = 
[
    ['O','O','X'],
    ['O','X','O'],
    ['X','O','O']
]

for (let board2_x = 0; board2_x < BOARD_2.length; board2_x++)
{
    for (let board2_y = 0; board2_y < BOARD_2.length; board2_y++)
    {
        console.log(`   ${BOARD_2[board2_y]}`);
    }
    console.log(" ");
}

// While loops password handling example
/*
let PASS = 'ADMIN123';

let guess = prompt('Enter the password');
while (guess !== PASS)
{
    guess = prompt('Enter the password');
}
alert('Password sudah benar');
*/

// Break statement for while loops
/*
let input = prompt('Enter your input');

while(true)
{
    input = prompt(input);
    if (input.toLocaleLowerCase() === 'stop') break;
}
alert('ok');
*/

// Math Random 
const RandomNum = Math.floor((Math.random() * 45) + 1);
console.log(RandomNum);

// Elegant way to for loops 
const Students = ['Adam', 'Bimo', 'Ezra'];

for (let student of Students)
{
    console.log(`${student}`);
}

const StdClassA = 
[
    ['Zia', 'Fadel', 'Yusuf'],
    ['Ali', 'Arsyad', 'Ishaq']
]

for (let row of StdClassA)
{
    for (let std_a of row)
    {
        console.log(std_a);
    }
}

// Object data types
const nim_mahasiswa = {
    Arkan: 20,
    Aulia: 21,
    Chantika: 22,
    Ersa: 23, 
    Daffa: 24,
};

for (let nim in nim_mahasiswa)
{
    console.log(`${nim} nim awalan ${nim_mahasiswa[nim]}`);
}

let total = 0;
let scores = Object.values(nim_mahasiswa);
for (let score of scores)
{
    total += score;
}
console.log(total);
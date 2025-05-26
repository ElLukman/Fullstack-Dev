function SwapInt(a, b)
{
    console.log(`Nilai sebelum swap, \nnilai-1: ${a}\nnilai-2: ${b}`);
    let temp = 0; 
    temp = a;
    a = b;
    b = temp;
    console.log(`Nilai sebelum swap, \nnilai-1: ${a}\nnilai-2: ${b}`);
}

SwapInt(1, 2);

function PlusNumber(num1 = 0, num2 = 0)
{
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
        {return false;} 
    return num1 + num2;
}

let Sepuluh = PlusNumber(5,5);
console.log(Sepuluh);

const HasilPengurangan = function (num1, num2)
{
    return num1 - num2;
}

// Try and catch testing
function Marah(msg)
{
    try 
    {
        console.log(msg.toUpperCase() + '!');
    }
    catch (error)
    {
        console.log(error);
        console.log('tipe data salah');
    }
}

// Callback function
const MeetEpisodes =
[
    {
        title:'I think we have same vision...',
        index_episode: 1,
        rating: 8
    },
    {
        title:'Who do you think you are?',
        index_episode: 2,
        rating: 7
    },
    {
        title:'The past that bring us',
        index_episode: 3,
        rating: 8.5
    },
    {
        title:'Damn us both!',
        index_episode: 4,
        rating: 9.2
    },
    {
        title:'Hollow',
        index_episode: 5,
        rating: 9
    }
]

console.log("Rating our meet episodes!");
MeetEpisodes.forEach(function(eps)
{    
    console.log(`Episode-${eps.index_episode} "${eps.title}" - ${eps.rating}/10`);
});

console.log("Heal with you");
const EpisodeList = MeetEpisodes.map(function(eps)
{
    return eps.title;
});

// Destructing for Episode
const SeriesUnconditional = MeetEpisodes.map(({title, index_episode, rating}) =>
{
    return `${title} (${index_episode}) rating ${rating}`
})

// Map Method
const CountToTwo = [1,2];
const CountToTwoDouble = CountToTwo.map(function (num)
{
    return num*2;
});

/*
// Function Expression
const HasilPerpangkatan = function (x)
{
    return x*x;
};
*/

// Arrow function, lebih compact
const perpangkatan = (x) => 
{
    return x*x;
}

// Implisit return di Arrow function
const dividebytwo = (a) => (a/2);

// // Function SetTimeOut & SetInterval
// console.log("You the thought that can't be tamed");
// setTimeout(()=>{
//     console.log("And i'm trying to be sane");
// }, 5000)
// console.log("And i'm trying to be sane");

// Set Interval 
// setInterval( () => console.log(Math.floor(Math.random() * 1000) + 1), 1000)

// Stoping set Interval
// const interval = setInterval( () => {console.log(Math.floor(Math.random() * 1000) + 1);}, 1000);

// Filtering Method for Array 
const DatasetAngka_1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const KumpulanAngkaGanjil_1 = DatasetAngka_1.filter(ganjil => 
    {
        return ganjil % 2 === 1;
    });

// Filtering Episode Ratings + It can be get mapped
const GoodEpisode = MeetEpisodes.filter(eps => eps.rating >= 8.8).map((eps) => eps.title);

// Menentukan Benar Atau Salah Pada Array Dengan Every Dan Some Method
const DatasetStatus_1 = [1001, 1001, 1001, 1002, 1002, 1003]
const isVIP = DatasetStatus_1.some((vip) => vip > 1001);

// For array of object
const RecentEpisode = MeetEpisodes.some((eps) => eps.index_episode > 2)

// Reduce function for Array
const DatasetMoney_1 = [1000, 1000, 2000, 5000, 10000, 10000, 20000, 5000]

const TotalDatasetMoney_1 = DatasetMoney_1.reduce( (curr_total, singletotal) => 
{
    return curr_total + singletotal;
})

// In object case
const BestEpisode = MeetEpisodes.reduce((bestEps, currEps) => 
    {
        if(currEps.rating > bestEps.rating)
        {
            return currEps;
        }
        return bestEps;
    });

const Person_1 = {
    firstname: 'Ali',
    lastname: 'Jaseem',
    fullname: function() 
    {
        return `${this.firstname} ${this.lastname}`;
    }
}

// Default Value
function ThrowDice(sisidadu = 6)
{
    return Math.floor(Math.random() * sisidadu) + 1;
}

// Data campuran
const DatasetMoney_2 = [...DatasetMoney_1, 10000]

// Merge object 
const user_1 = {
    nama: 'Naura',
    email: 'naura@gmail.com'
}

const credential = {
    pass: '91thgfioquhn',
    status: 'member'
}

const userbaru = {...user_1, ...credential}

// Rest Param 
const SumTotal = (...nums) => 
{
    return nums.reduce((total, el) => total + el)
}

// Spread operator
const NamaPeserta = ['Andi', 'Yusuf', 'Vega', 'Lia', 'Nesta']

const Pemenang = (emas, silver, perunggu, ...lainnya) =>
{
    console.log(`Medali emas diraih: ${emas}`)
    console.log(`Medali emas diraih: ${silver}`)
    console.log(`Medali emas diraih: ${perunggu}`)
    console.log(`Medali emas diraih: ${lainnya}`)
}

// Konsep destructing element array
const [emas, silver, perunggu, ...lainnya] = NamaPeserta;

// Konsep destructing object
const user_2 = {
    name_user2: 'Atep',
    email_user2: 'atep7@gmail.com'
}

const {name_user2, email_user2} = user_2
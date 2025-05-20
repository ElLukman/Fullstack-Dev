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

// Map Method
const CountToTwo = [1,2];
const CountToTwoDouble = CountToTwo.map(function (num)
{
    return num*2;
});
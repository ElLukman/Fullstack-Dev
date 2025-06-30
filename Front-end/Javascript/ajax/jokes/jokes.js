const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

// Fungsi untuk menambahkan jokes dalam list
const addJoke = async () =>
{
    const jokeText = await getJokes();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

// Mengambil jokes dari Web API Dad Jokes
const getJokes = async () =>
{
    try 
    {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return (res.data.joke);
    } 
    catch (error) 
    {
        return 'No jokes available!';
    }
};

// Event Listener
button.addEventListener('click', addJoke);
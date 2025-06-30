// import axios from 'axios'

// const data = `{
//     "Mahasiswa": {
//         "Nama": "Lukman",
//         "NIM" : "IDR"
//     },
//     "Tempat" : "Polban",
//     "Tahun" : "1940"
// }`;

// Data Parsing 
// const res = JSON.parse(data);

// Untuk mengubah data object menjadi JSON dapat memanggil fungsi berikut 
// JSON.stringify(); 

/* 
XML HTTP Request 
- Cara "Original" untuk mengirim request via JavaScript 
- Tidak mendukung promises, jadi memungkinkan callback hell 
- Namanya susah diketik, aneh besar kecil tidak jelas
*/

// const req = new XMLHttpRequest();
// let data;

// req.onload = function () 
// {
//     data = JSON.parse(this.responseText);
//     console.log(data);
// }

// req.onerror = function ()
// {
//     console.log('Error', this);
// }

// req.open('GET', 'https://icanhazdadjoke.com/');
// myReq.setRequestHeader('Accept', 'application/json')
// req.send();

// 

/* 
Fetch Request
    - Cara baru melakukan request via JavaScript 
    - Mendukung Promise 
    - Tidak mendukung di Internet Explorer (Atau kemungkinan browser kuno)
*/

// fetch('https://swapi.dev/api/people/1')
//     .then((res) => 
//         {
//             if (!res.ok)
//             {
//                 throw Error('Could not fetch the data for that resource');
//             }
//             return res.json();
//         })
//     .then((data) =>
//         {
//             console.log('json', data);
//         })
//     .catch((err) =>
//         {
//             console.log('error', err);
//         }) Ini sebenernya bisa lakukan request fetch di dalam fetch, meskipun bakal ribet banyak then dan catch
//            sedikit lebih baik daripada callback hell 

// Ini lebih sederhana daripada yang di atas
// const loadJokes = async () => 
// {
//     try 
//     {
//         const res1 = await fetch('https://icanhazdadjoke.com/', { 
//                 headers: {
//                 'Accept': 'application/json'
//                 }
//             }
//         );
//         const data1 = await res1.json();
//         console.log(data1);

//         // Apabila ingin request lebih dari 1
//         const res2 = await fetch('https://icanhazdadjoke.com/', {
//             headers: {
//                 'Accept': 'application/json'
//             }
//         }
//         );
//         const data2 = await res2.json();
//         console.log(data2);
//     }
//     catch (err)
//     {
//         // Proses lainnya
//         console.log("Terjadi error pada ->", err);
//     }
// }

// loadJokes();

// AXIOS

/*
    Library pihak ketiga untuk melakukan request HTTP 
    (Bagian ini adalah uji percobaan melakukan request HTTP menggunakan AXIOS)
*/

// axios
//     .get('https://icanhazdadjoke.com/', {
//     headers : {
//         'Accept': 'application/json'
//     }
//     })
//     .then((res) => {
//         console.log(res.data);
//     })
//     .catch((err) => {
//         console.log("Error bagian ->", err);
//         alert(err.message);
//     })

// const getJokes = async () =>
// {
//     try {
//         const res = await axios
//                             .get('https://icanhazdadjoke.com/', {
//                                 headers : {
//                                 'Accept': 'application/json'
//                                 }
//                             });
//         console.log(res.data);
//     } catch (error) {
//         console.log(error);
//         console.log(error.message);
//         console.log(error.request.status);
//         console.log(error.request.data);
//     }
// };
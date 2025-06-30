/*
Tingkat Kesulitan: Mudah (Auto)
*/

void soal1();
void soal2();
void soal3();
void soal4();
void soal5();

#include <stdio.h>
#include <math.h>

int main ()
{
    soal5();
}


// // Soal 1
// void soal1()
// {
//     int n = 10; // Tinggi segitiga siku-siku
//     char bintang = '*';

//     for (int i = 0; i < n; i++)
//     {
//         for (int j = -1; j < i; j++)
//         {
//             printf("%c", bintang);
//         }
//         printf("\n");
//     }
// }

// Soal 2: Segitiga Siku-Siku Terbalik. Sama seperti soal 1, tapi polanya dibalik.
// void soal2()
// {
//     int n = 5; // Tinggi segitiga siku-siku
//     char bintang = '*';

//     for (int i = 0; i < n; i++)
//     {
//         for (int j = n; j > i; j--)
//         {
//             printf("%c", bintang);
//         }
//         printf("\n");
//     }
// }

// // Soal 3: Persegi Bolong. Buatlah persegi n x n dari *, tapi bagian tengahnya kosong.
// void soal3()
// {
//     int n = 10; // Ukuran Persegi 
//     char bintang = '*';

//     for (int i = 0; i < n; i++)
//     {
//         for (int j = 0; j < n; j++)
//         {
//             if (i == 0 || i == n-1) printf("%c", bintang);
//             else 
//             {
//                 if (j == 0 || j == n-1) printf("%c", bintang);
//                 else printf(" ");
//             }
//         }
//         printf("\n");
//     }
// }

// Soal 4: Segitiga Sama Kaki. Cetak pola segitiga sama kaki (piramida) dari *.
// void soal4()
// {
//     int tinggi = 10, alas, start, luas;
//     alas = tinggi;
//     start = tinggi;
 

//     char bintang = '*';
    
//     for (int i = 0; i < tinggi; i++)
//     {
//         for (int j = 0; j <= alas; j++)
//         {
//             if (j >= start) printf("%c", bintang);
//             else printf(" ");
//         }
//         printf("\n");
//         alas++;
//         start--;
//     }
//     luas = (alas*tinggi) / 2;
    
//     printf("\n");
//     printf("Alas segitiga: %d\n", alas);
//     printf("Tinggi segitiga: %d\n", tinggi);
//     printf("Luas Segitiga: (%d*%d)/2 = %d", alas, tinggi, luas);
// }

// void soal5()
// {
//     int tinggi = 10, alas, start;
//     alas = tinggi;
//     start = tinggi;

//     if (tinggi % 2 == 0) tinggi++;
 
//     char bintang = '*';
    
//     for (int i = 0; i < tinggi; i++)
//     {
//         for (int j = 0; j <= alas; j++)
//         {
//             if (j >= start) printf("%c", bintang);
//             else printf(" ");
//         }

//         printf("\n");
//         if (i < tinggi / 2)
//         {
//             alas++;
//             start--;
//         }
//         else
//         {
//             alas--;
//             start++;
//         }
//     }
// }
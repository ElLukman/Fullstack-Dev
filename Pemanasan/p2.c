/*
Tingkat Kesulitan: Normal
*/

#include <stdio.h>

void soal1();
void soal2();
void soal3();
void soal4();
void soal5();

int main()
{
    soal3();
}

// Soal 1: Pola Angka Bertingkat. Cetak pola:
// 1
// 12
// 123
// 1234 

// void soal1()
// {
//     int n = 4, num, i = 0, j = 0;

//     while(i < n)
//     {
//         num = 1;
//         while (j <= i)
//         {
//             printf("%d", num);
//             j++;
//             num++;
//         }
//         j = 0;
//         printf("\n");
//         i++;
//     }
// }

// Soal 2: Floyd's Triangle. Cetak pola angka yang berlanjut:
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// void soal2()
// {
//     int num, n;
//     n = 10;
//     num = 1;

//     for (int i = 0; i < n; i++)
//     {
//         for (int j = 0; j <= i; j++)
//         {
//             printf("%d ", num);
//             num++;
//         }
//         printf("\n"); 
//     }

// }

// Soal 3: Pola huruf
// A
// AB
// ABC
// ABCD

void soal3()
{
    int n = 29; // Tinggi suatu pola

    // Iteration integer to char converter
    char huruf = 'A';
    int len;

    for (int i = 0; i < n; i++)
    {
        len = 0;
        for (int j = 0; j <= i; j++)
        {
            
            
            if (len % 25 == 0) huruf = 'A';
            else if (len % 25 == 1) huruf = 'B';
            else if (len % 25 == 2) huruf = 'C';
            else if (len %25 == 3) huruf = 'D';
            // Dan seterusnya sampe Z

            printf("%c", huruf);
            len++;   

        }
        printf("\n");
    }
    

}
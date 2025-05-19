const abjad = 'abcd'
for (let i = 1; i <= 10; i++)
{
    console.log(`${i}. Soal nomor`);
    for (let j = 0; j <= abjad.length; j++)
    {
        console.log(`   ${abjad[j]}. Pilihan Jawaban`)
    }
}
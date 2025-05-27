<?php
$daftar_produk = [
    [
        'nama_produk' => 'Laptop Pro X',
        'harga' => 15000000,
        'kategori' => 'Elektronik',
        'stok' => 100
    ],
    [
        'nama_produk' => 'Kemeja Flanel Merah',
        'harga' => 250000,
        'kategori' => 'Pakaian',
        'stok' => 100
    ],
    [
        'nama_produk' => 'Buku Pemrograman PHP',
        'harga' => 120000,
        'kategori' => 'Buku',
        'stok' => 100
    ],
    [
        'nama_produk' => 'Mouse Gaming RGB',
        'harga' => 350000,
        'kategori' => 'Elektronik',
        'stok' => 100
    ],
    [
        'nama_produk' => 'Celana Jeans Biru',
        'harga' => 450000,
        'kategori' => 'Pakaian',
        'stok' => 100
    ]
];


function Hallo()
{
    echo "A";
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=`device-width`, initial-scale=1.0">
    <title>Training</title>
</head>
<body>
    <h1>Latihan Tabel</h1>

    <table border="1px">
        <tr>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Kategori</th>
            <th>Stok</th>
        </tr>
        <?php
        foreach($daftar_produk as $judul => $value)
        {
        ?>
        <tr>
            <td><?php echo $value['nama_produk']?></td>
            <td><?php echo $value['harga']?></td>
            <td><?php echo $value['kategori']?></td>
            <td><?php echo $value['stok']?></td>
        </tr>
        <?php        
        }
        ?>
    </table>
</body>
</html>

<?php
$karyawan = [
                ['nama'=>'Toni','alamat'=>'Bandung'],
                ['nama'=>'Naufal','alamat'=>'Bandung'],
                ['nama'=>'Davi','alamat'=>'Jakarta']
			];
    
// Serialize
$dataset_serial = serialize($karyawan);
file_put_contents('data_serial.txt',$dataset_serial);
$output_1 = file_get_contents(('data.txt'));
$hasil_1 = unserialize($output_1);
print_r($hasil_1);

echo "<br>";

// JSON 
$dataset_json = json_encode($karyawan);
file_put_contents('data_json.txt', $dataset_json);
$output_2 = file_get_contents('data_json.txt');
$hasil_2 = json_decode($output_2);
print_r($hasil_2);

?>
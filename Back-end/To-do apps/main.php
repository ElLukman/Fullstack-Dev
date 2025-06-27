<?php
    // Total array 
    $todos = [];
    
    // Membaca apakah file to_do.txt ditemukan
    if (file_exists("todo.txt"))
    {
        // Membaca file todo.txt
        $file = file_get_contents("todo.txt");
        // Mengubah format serialize menjadi array
        $todos = unserialize($file);
    }

    function saveData($todos)
    {
        file_put_contents("todo.txt", serialize($todos));
        // Redirect halaman
        header('location:main.php');
    }

    // Apabila ditemukan todo yang dikirim melalui POST
    if(isset($_POST['todo']))
    {
        $data = $_POST['todo']; // Data yang dipilih pada form
        $todos[] = [
            'todo' => $data,
            'status' => 0
        ];
        saveData($todos);
    }

    // Apabila ditemukan GET Status
    if(isset($_GET['status']))
    {
        // Ubah status
        $todos[$_GET['key']] ['status']=$_GET['status'];
        saveData($todos);
    }

    // Proses penghapusan melalui GET
    if(isset($_GET['delete']))
    {
        unset($todos[$_GET['key']]);
        saveData($todos);
    }

    print_r($todos);
?>

<h1>To do app</h1>
<form action="" method = "POST">
    <label>Daftar kegiatan hari ini</label>
    <input type="text" name = "todo">
    <button type = "submit">Simpan</button>
</form>

<ul>
    <?php foreach ($todos as $key=>$value): ?>
    <li>
        <input type="checkbox" name = "todo" 
            onclick="window.location.href='main.php?status=<?php echo($value['status']==1)? '0': '1'; ?>&key=<?php echo $key;?>'"
        <?php if ($value ['status'] == 1) echo 'checked'?>>

        <label>
            <?php  
            if ($value['status'] == 1)
            {
                echo '<del>'.$value['todo'].'</del>';
            }
            else 
            {
                echo $value['todo'];
            }
            ?>
        </label>
        <a href="main.php?delete=1&key=<?php echo $key; ?>"
        onclick="return confirm('Apakah Anda yakin akan menghapus?')">
        Delete</a>
    </li>
    <?php endforeach; ?>
</ul>
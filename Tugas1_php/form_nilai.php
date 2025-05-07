<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Penilaian Ujian</title>
</head>
<body>
    <h2>Form Penilaian Ujian</h2>

    <form method="post" action="">
        <label for="nama">Nama:</label><br>
        <input type="text" id="nama" name="nama" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="nilai">Nilai Ujian:</label><br>
        <input type="number" id="nilai" name="nilai" required><br><br>

        <input type="submit" name="submit" value="Submit">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        // Ambil data dari form
        $nama = htmlspecialchars($_POST['nama']);
        $email = htmlspecialchars($_POST['email']);
        $nilai = intval($_POST['nilai']); // Menggunakan intval untuk memastikan nilai sebagai integer

        // Menampilkan hasil input
        echo "<h3>Hasil:</h3>";
        echo "Nama: " . $nama . "<br>";
        echo "Email: " . $email . "<br>";
        echo "Nilai: " . $nilai . "<br>";

        // Struktur kendali untuk menentukan status
        if ($nilai > 70) {
            echo "<strong>Status: Lulus</strong>";
        } else {
            echo "<strong>Status: Remedial</strong>";
        }
    }
    ?>
</body>
</html>

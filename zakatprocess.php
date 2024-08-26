<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    //retrieve data
    $pemohon = $_POST['pemohon'];
    $fasa = $_POST['fasa'];
    $program = $_POST['program'];
    $namaPelajar = $_POST['namaPelajar'];
    $noPelajar = $_POST['noPelajar'];
    $nokpPelajar = $_POST['nokpPelajar'];
    $fakulti = $_POST['fakulti'];
    $kodkursus = $_POST['kodkursus'];
    $notelefon = $_POST['notelefon'];
    $tarafperkahwinan = $_POST['tarafperkahwinan'];
    $jantina = $_POST['jantina'];
    $semester = $_POST['semester'];
    $sesi = $_POST['sesi'];
    $cgpa = $_POST['cgpa'];
    $cpa = $_POST['gpa'];
    $negeri = $_POST['negeri'];
    $bank = $_POST['bank'];
    $noBank = $_POST['noBank'];
    $alamatPelajar = $_POST['alamatPelajar'];
    $namaBapa = $_POST['namaBapa'];
    $pekerjaanBapa = $_POST['pekerjaanBapa'];
    $hubunganBapa = $_POST['hubunganBapa'];
    $statuskahwinbapa = $_POST['statuskahwinbapa'];
    $alamatBapa = $_POST['alamatBapa'];
    $namaIbu = $_POST['namaIbu'];
    $pekerjaanIbu = $_POST['pekerjaanIbu'];
    $hubunganIbu = $_POST['hubunganIbu'];
    $statuskahwinibu = $_POST['statuskahwinibu'];
    $alamatIbu = $_POST['alamatIbu'];
    $pendapatBapa = $_POST['pendapatBapa'];
    $pendapatIbu = $_POST['pendapatIbu'];
    $bantuan = $_POST['bantuan'];
    $jenisBantuan = $_POST['jenisBantuan'];
    $jumlahBantuan = $_POST['jumlahBantuan'];
    $zakat = $_POST['zakat'];
    $tahunZakat = $_POST['tahunZakat'];
    $jumlahZakat = $_POST['jumlahZakat'];
    $tujuanZakat = $_POST['tujuanZakat'];
}
?>

<!DOCTYPE html>
<html>
    <head>
    <link rel="stylesheet" type="text/css" href="zakatstyle.css">
    <script src="script.js"></script> 
</head>
<body>

    <div class="container">

    <?php
    echo "<h2>BORANG PERMOHONAN ZAKAT:</h2>";
    echo "<p class='outputText'>PEMOHON KALI KE: $pemohon</p>";
    echo "<p class='outputText'>FASA: $fasa</p>";
    echo "<p class='outputText'>PROGRAM: $program</p>";
    echo "<p class='outputText'>NAMA: $namaPelajar</p>";
    echo "<p class='outputText'>NO KP PELAJAR: $noPelajar</p>";
    echo "<p class='outputText'>NO PELAJAR: $nokpPelajar</p>";
    echo "<p class='outputText'>FAKULTI: $fakulti</p>";
    echo "<p class='outputText'>KOD KURSUS: $kodkursus</p>";
    echo "<p class='outputText'>NO TELEPHON: $notelefon</p>";
    echo "<p class='outputText'>TARAF PERKAHWINAN: $tarafperkahwinan</p>";
    echo "<p class='outputText'>JANTINA: $jantina</p>";
    echo "<p class='outputText'>SEMESTER: $semester</p>";
    echo "<p class='outputText'>SESI: $sesi</p>";
    echo "<p class='outputText'>CGPA: $cgpa</p>";
    echo "<p class='outputText'>CPA: $cpa</p>";
    echo "<p class='outputText'>NEGERI ASAL: $negeri</p>";
    echo "<p class='outputText'>NAMA BANK: $bank</p>";
    echo "<p class='outputText'>NO AKAUN BANK: $noBank</p>";
    echo "<p class='outputText'>ALAMAT SEMASA SURAT MENYURAT: $alamatPelajar</p>";

    echo "<p class='outputText'>NAMA BAPA/PENJAGA: $namaBapa</p>";
    echo "<p class='outputText'>PEKERJAAN: $pekerjaanBapa</p>";
    echo "<p class='outputText'>HUBUNGAN: $hubunganBapa</p>";
    echo "<p class='outputText'>STATUS PERKAHWINAN: $statuskahwinbapa</p>";
    echo "<p class='outputText'>ALAMAT SURAT MENYURAT: $alamatBapa</p>";

    echo "<p class='outputText'>NAMA IBU: $namaIbu</p>";
    echo "<p class='outputText'>PEKERJAAN: $pekerjaanIbu</p>";
    echo "<p class='outputText'>HUBUNGAN: $hubunganIbu</p>";
    echo "<p class='outputText'>STATUS PERKAHWINAN: $statuskahwinibu</p>";
    echo "<p class='outputText'>ALAMAT SURAT MENYURAT: $alamatIbu</p>";

    echo "<p class='outputText'>BAPA/PENJAGA: $pendapatBapa</p>";
    echo "<p class='outputText'>IBU: $pendapatIbu</p>";


        if ($bantuan === 'adaBantuan') {
            echo "<p class='outputText'>BANTUAN KEWANGAN: ADA</p>";
            echo "<p class='outputText'>JENIS BANTUAN KEWANGAN: " . strtoupper($jenisBantuan) . "</p>";
            echo "<p class='outputText'>JUMLAH PER/SEM (RM): " . $jumlahBantuan . "</p>";
        } else {
            echo "<p class='outputText'>BANTUAN KEWANGAN: TIADA</p>";
        }

        if ($zakat === 'adaZakat') {
            echo "<p class='outputText'>PERNAH MENERIMA ZAKAT UiTM: ADA</p>";
            echo "<p class='outputText'>TAHUN ZAKAT: " . $tahunZakat . "</p>";
            echo "<p class='outputText'>JUMLAH ZAKAT: " . $jumlahZakat . "</p>";
            echo "<p class='outputText'>TUJUAN MEMOHON BANTUAN ZAKAT UiTM: " . $tujuanZakat . "</p>";
        } else {
            echo "<p class='outputText'>PERNAH MENERIMA ZAKAT UiTM: TIADA</p>";
        }
    ?>
    </div>

    <button onclick="printFormData()">Print</button>
    
</body>
</html>
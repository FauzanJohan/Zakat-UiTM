function showAdditionalInput1() {
        var selectBox = document.getElementById("bantuan");
        var additionalInput = document.getElementById("additionalInput1");
        
            if (selectBox.value === "Ada") {
                additionalInput.style.display = "block";
            } else {
                additionalInput.style.display = "none";
            }
        }
        
        function showAdditionalInput2() {
        var selectBox = document.getElementById("zakat");
        var additionalInput = document.getElementById("additionalInput2");
        
            if (selectBox.value === "Ada") {
                additionalInput.style.display = "block";
            } else {
                additionalInput.style.display = "none";
            }
        }
        
        function confirmSubmit() {
            return confirm("Are you sure you want to submit the form?");
        }
        
        function confirmReset() {
            if (confirm("Are you sure you want to reset the form?")) {
                document.getElementById('zakatForm').reset();
            }
            return false;
        }
        
        window.onload = function() {
            showAdditionalInput1();
            showAdditionalInput2();
        }
        
        function validateForm(event) {
            const namaPelajar = document.getElementById('namaPelajar').value;

            var vnamaPelajarErr = document.getElementById("namaPelajarErr");
            var vnamaBapa = document.getElementById("namaBapa").value.trim();
            var vnamaBapaErr = document.getElementById("namaBapaErr");
            var vpekerjaanBapa = document.getElementById("pekerjaanBapa").value.trim();
            var vpekerjaanBapaErr = document.getElementById("pekerjaanBapaErr");
            var vnamaIbu = document.getElementById("namaIbu").value.trim();
            var vnamaIbuErr = document.getElementById("namaIbuErr");
            var vpekerjaanIbu = document.getElementById("pekerjaanIbu").value.trim();
            var vpekerjaanIbuErr = document.getElementById("pekerjaanIbuErr");
            var vtujuanZakat = document.getElementById("tujuanZakat").value.trim();
            var vtujuanZakatErr = document.getElementById("tujuanZakatErr");
        
            var valamatPelajar = document.getElementById("alamatPelajar").value.trim();
            var valamatPelajarErr = document.getElementById("alamatPelajarErr");
            var valamatBapa = document.getElementById("alamatBapa").value.trim();
            var valamatBapaErr = document.getElementById("alamatBapaErr");
            var valamatIbu = document.getElementById("alamatIbu").value.trim();
            var valamatIbuErr = document.getElementById("alamatIbuErr");
        
            var vnoPelajar = document.getElementById("noPelajar").value.trim();
            var vnoPelajarErr = document.getElementById("noPelajarErr");
            var vnokpPelajar = document.getElementById("nokpPelajar").value.trim();
            var vnokpPelajarErr = document.getElementById("nokpPelajarErr");
            var vnotelefon = document.getElementById("notelefon").value.trim();
            var vnotelefonErr = document.getElementById("notelefonErr");
            var vcgpa = document.getElementById("cgpa").value.trim();
            var vcgpaErr = document.getElementById("cgpaErr");
            var vgpa = document.getElementById("gpa").value.trim();
            var vgpaErr = document.getElementById("gpaErr");
            var vnoBank = document.getElementById("noBank").value.trim();
            var vnoBankErr = document.getElementById("noBankErr");
            var vpendapatanBapa = document.getElementById("pendapatanBapa").value.trim();
            var vpendapatanBapaErr = document.getElementById("pendapatanBapaErr");
            var vpendapatanIbu = document.getElementById("pendapatanIbu").value.trim();
            var vpendapatanIbuErr = document.getElementById("pendapatanIbuErr");
            var vjumlahBantuan = document.getElementById("jumlahBantuan").value.trim();
            var vjumlahBantuanErr = document.getElementById("jumlahBantuanErr");
            var vjumlahZakat = document.getElementById("jumlahZakat").value.trim();
            var vjumlahZakatErr = document.getElementById("jumlahZakatErr");
        
            const nameRegex = /^[a-zA-Z\s']+$/;
            var addressRegex = /^[a-zA-Z0-9\s\/\.,']+$/;
            var decimalRegex = /^\d+(\.\d{2})?$/;
            var phoneRegex = /^\d{11}$/;
            var noPelajarRegex = /^\d{9}$/;
            var noKpPelajarRegex = /^\d{12}$/;
            var noBankRegex = /^\d{14}$/;
            var numberRegex = /^\d*$/;
        
            var isNamaPelajarValid = nameRegex.test(vnamaPelajar);
            var isNamaBapaValid = nameRegex.test(vnamaBapa);
            var isPekerjaanBapaValid = nameRegex.test(vpekerjaanBapa);
            var isNamaIbuValid = nameRegex.test(vnamaIbu);
            var isPekerjaanIbuValid = nameRegex.test(vpekerjaanIbu);
            var isTujuanZakatValid = nameRegex.test(vtujuanZakat);
            var isAlamatPelajarValid = addressRegex.test(valamatPelajar);
            var isAlamatBapaValid = addressRegex.test(valamatBapa);
            var isAlamatIbuValid = addressRegex.test(valamatIbu);
            var isCgpaValid = decimalRegex.test(vcgpa);
            var isGpaValid = decimalRegex.test(vgpa);
            var isNoTelefonValid = phoneRegex.test(vnotelefon);
            var isNoPelajarValid = noPelajarRegex.test(vnoPelajar);
            var isNoKpPelajarValid = noKpPelajarRegex.test(vnokpPelajar);
            var isNoBankValid = noBankRegex.test(vnoBank);
            var isPendapatanBapaValid = numberRegex.test(vpendapatanBapa);
            var isPendapatanIbuValid = numberRegex.test(vpendapatanIbu);
            var isJumlahBantuanValid = numberRegex.test(vjumlahBantuan);
            var isJumlahZakatValid = numberRegex.test(vjumlahZakat);
        
        
        
            if (!nameRegex.test(namaPelajar)) {
                document.getElementById('namaPelajarErr').style.display = 'block';
            } else {
             document.getElementById('namaPelajarErr').style.display = 'none';
            console.log('Valid input:', namaPelajar);
            // You can uncomment the line below to submit the form
            // document.getElementById('textForm').submit();
            }
        
            if (!isNamaBapaValid) {
                vnamaBapaErr.textContent = "Hanya dibenarkan penggunaan huruf, ' ,dan ruang kosong";
                return false;
            } else {
                vnamaBapaErr.textContent = "";
            }
        
            if (!isPekerjaanBapaValid) {
                vpekerjaanBapaErr.textContent = "Hanya dibenarkan penggunaan huruf, ' ,dan ruang kosong";
                return false;
            } else {
                vpekerjaanBapaErr.textContent = "";
            }
        
            if (!isNamaIbuValid) {
                vnamaIbuErr.textContent = "Hanya dibenarkan penggunaan huruf, ' ,dan ruang kosong";
                return false;
            } else {
                vnamaIbuErr.textContent = "";
            }
        
            if (!isPekerjaanIbuValid) {
                vpekerjaanIbuErr.textContent = "Hanya dibenarkan penggunaan huruf, ' ,dan ruang kosong";
                return false;
            } else {
                vpekerjaanIbuErr.textContent = "";
            }
            
            if (!isTujuanZakatValid) {
                vtujuanZakatErr.textContent = "Hanya dibenarkan penggunaan huruf, ' ,dan ruang kosong";
                return false;
            } else {
                vtujuanZakatErr.textContent = "";
            }
        
            if (!isAlamatPelajarValid) {
                valamatPelajarErr.textContent = "Hanya dibenarkan penggunaan huruf, '/', ',', '.' dan ruang kosong";
                return false;
            } else {
                valamatPelajarErr.textContent = "";
            }
        
            if (!isAlamatBapaValid) {
                valamatBapaErr.textContent = "Hanya dibenarkan penggunaan huruf, '/', ',', '.' dan ruang kosong";
                return false;
            } else {
                valamatBapaErr.textContent = "";
            }
        
            if (!isAlamatIbuValid) {
                valamatIbuErr.textContent = "Hanya dibenarkan penggunaan huruf, '/', ',', '.' dan ruang kosong";
                return false;
            } else {
                valamatIbuErr.textContent = "";
            }
        
            if(!isCgpaValid){
                vcgpaErr.textContent = "Sila isi mengikut format (e.g., 0.00)";
                return false;
            } else {
                vcgpaErr.textcontent = "";
            }
        
            if(!isGpaValid){
                vgpaErr.textContent = "Sila isi mengikut format (e.g., 0.00)";
                return false;
            } else {
                vgpaErr.textcontent = "";
            }
        
            if(!isNoTelefonValid){
                vnotelefonErr.textContent = "Hanya dibenarkan nombor sebanyak 11 angka";
                return false;
            } else {
                vnotelefonErr.textContent = "";
            }
        
            if(!isNoPelajarValid){
                vnoPelajarErr.textContent = "Hanya dibenarkan nombor sebanyak 9 angka";
                return false;
            } else {
                vnoPelajarErr.textContent = "";
            }
        
            if(!isNoKpPelajarValid){
                vnokpPelajarErr.textContent = "Hanya dibenarkan nombor sebanyak 12 angka";
                return false;
            } else {
                vnokpPelajar.textContent ="";
            }
        
            if(!isNoBankValid){
                vnoBankErr.textContent = "Hanya dibenarkan nombor sebanyak 14 angka";
                return false;
            } else {
                vnoBankErr.textContent = "";
            }
        
            if(!isPendapatanBapaValid){
                vpendapatanBapaErr.textContent = "Hanya dibenarkan nombor sahaja";
                return false;
            } else {
                vpendapatanBapaErr.textContent = "";
            }
        
            if(!isPendapatanIbuValid){
                vpendapatanIbuErr.textContent = "Hanya dibenarkan nombor sahaja";
                return false;
            } else {
                vpendapatanIbuErr.textContent = "";
            }
        
            if(!isJumlahBantuanValid){
                vjumlahBantuanErr.textContent = "Hanya dibenarkan nombor sahaja";
                return false;
            } else {
                vjumlahBantuanErr.textContent = "";
            }
        
            if(!isJumlahZakatValid){
                vjumlahZakatErr.textContent = "Hanya dibenarkan nombor sahaja";
                return false;
            } else {
                vjumlahZakatErr.textContent = "";
            }
        
            return true;
        }

    function printFormData() {
    var printContents = document.querySelector('.output-container').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}

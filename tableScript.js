// Ambil parameter dari URL
var urlParams = new URLSearchParams(window.location.search);

// Ambil data dari parameter URL
var nama = urlParams.get('nama');
var nim = urlParams.get('nim');
var prodi = urlParams.get('prodi');
var email = urlParams.get('email');
var gender = urlParams.get('gender');
var birthdate = urlParams.get('birthdate');
var alamat = urlParams.get('alamat');

// Tambahkan data ke tabel
var tableBody = document.getElementById('mahasiswaTable').getElementsByTagName('tbody')[0];
var newRow = tableBody.insertRow();
newRow.innerHTML = `<td>${nama}</td>
                    <td>${nim}</td>
                    <td>${prodi}</td>
                    <td>${email}</td>
                    <td>${gender}</td>
                    <td>${birthdate}</td>
                    <td>${alamat}</td>`;

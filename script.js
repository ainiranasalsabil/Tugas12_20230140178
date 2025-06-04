document.getElementById("minatForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const alamat = document.getElementById("alamat").value;
  const angkatan = document.getElementById("angkatan").value;
  const tanggal = document.getElementById("tanggal").value;
  const minat = document.querySelector('input[name="minat"]:checked').value;

  const message = `
    Nama : ${nama}
    NIM : ${nim}
    Peminatan : ${minat}
    Alamat : ${alamat}
    Angkatan : ${angkatan}
    Tanggal : ${tanggal}
  `;

  alert(message);
});

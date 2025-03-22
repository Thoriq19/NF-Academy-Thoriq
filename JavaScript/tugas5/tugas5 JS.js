// **Data Produk**
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Monitor", harga: 3000000 },
    { id: 5, nama: "Keyboard", harga: 500000 }
];

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(id) {
    produkList = produkList.filter(produk => produk.id !== id);
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga.toLocaleString()}`);
    });
}

// **Event Handler untuk Manajemen Produk**
const eventHandler = {
    tambah: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapus: (id) => hapusProduk(id),
    tampilkan: () => tampilkanProduk()
};

// **Menjalankan Fungsi**
eventHandler.tampilkan();
eventHandler.tambah(6, "Mouse", 250000);
eventHandler.tampilkan();
eventHandler.hapus(3);
eventHandler.tampilkan();

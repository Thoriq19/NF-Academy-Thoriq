import { index, store, destroy } from "./controller.js";

const main = () => {
    // Menampilkan data sebelum perubahan
    index();

    // Menambahkan 2 data baru
    store({ nama: "Data 11", umur: 30, alamat: "Jl. Data 11", email: "data11@email.com" });
    store({ nama: "Data 12", umur: 31, alamat: "Jl. Data 12", email: "data12@email.com" });

    // Menampilkan data setelah penambahan
    index();

    // Menghapus satu data (contoh: menghapus data pertama)
    destroy(0);

    // Menampilkan data setelah penghapusan
    index();
};

main();

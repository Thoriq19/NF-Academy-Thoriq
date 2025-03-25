import users from "./data.js";

const index = () => {
    console.log("Data Pengguna:");
    users.map((user, index) => {
        console.log(`${index + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
    });
};

const store = (user) => {
    users.push(user);
    console.log("Data berhasil ditambahkan!");
};

const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        users.splice(index, 1);
        console.log("Data berhasil dihapus!");
    } else {
        console.log("Indeks tidak valid!");
    }
};

export { index, store, destroy };

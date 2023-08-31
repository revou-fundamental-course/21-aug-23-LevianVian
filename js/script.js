// const header = document.querySelector("header");

// window.addEventListener("scroll", function(){
//     header.classList.toogle("sticky", window.scrollY > 40)
// });

const storedName = localStorage.getItem('user');
if (storedName) {
    document.getElementById("name").innerHTML = storedName;
} else {
    // Jalankan replaceName jika nama belum ada
    replaceName();
}

// Fungsi untuk mengganti nama
function replaceName() {
    let name = prompt("What's your name?", "");
    if (name !== null && name.trim() !== "") {
        document.getElementById("name").innerHTML = name;
        // Simpan nama di localStorage agar bisa digunakan pada kunjungan berikutnya
        localStorage.setItem('user', name);
    }
}

let menu = document.querySelector('#menuicon';)
let navbar = document.querySelector('#.navbar';)

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
"use strict";

// ========================================
// DATA GAME
// ========================================

const dataGame = {

    1: {
        nama: "MAHJONG WAYS 1",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - Mahjong WAYS

🔥 10x SPIN OTOMATIS TURBO ON
🔥 8x SPIN MANUAL TURBO OFF
🔥 20x SPIN OTOMATIS TURBO ON
🔥 15x SPIN MANUAL TURBO OFF`],
        pola: [
            "Pola santai: 10 putaran biasa → istirahat sebentar → lanjut 10 putaran."
        ]
    },

    2: {
        nama: "GAME 2",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku di PRAGMATIC PLAY - Gates Of Gatot Kaca Super Scatter

✅❎❎ 18x Manual DC OFF
❎✅❎ 8x Quick DC ON
❎✅✅ 13x Manual DC OFF
✅❎✅ 10x Quick DC ON
❎✅❎ 25x Quick DC ON`],
        pola: [
            "Pola ringan: 5 putaran → 5 putaran → jeda singkat."
        ]
    },

    3: {
        nama: "GAME 3",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - Wild Bandito

🔥 15x SPIN OTOMATIS TURBO ON
🔥 25x SPIN MANUAL TURBO OFF
🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF`],
        pola: [
            "Pola santai: 10 putaran biasa → istirahat sebentar → lanjut 10 putaran."
        ]
    },

    4: {
        nama: "GAME 4",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku di PRAGMATIC PLAY - Sweet Bonanza SUPER SCATTER

✅❎❎ 22x Manual DC OFF
❎✅❎ 9x Quick DC ON
❎✅✅ 15x Manual DC OFF
✅❎✅ 10x Quick DC ON
❎✅❎ 23x Quick DC ON`],
        pola: [
            "Pola ringan: 5 putaran → 5 putaran → jeda singkat."
        ]
    },

    5: {
        nama: "GAME 5",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - Wild Bounty SHOWDOWN

🔥 10x SPIN OTOMATIS TURBO ON
🔥 8x SPIN MANUAL TURBO OFF
🔥 20x SPIN OTOMATIS TURBO ON
🔥 15x SPIN MANUAL TURBO OFF`],
        pola: [
            "Pola santai: 10 putaran biasa → istirahat sebentar → lanjut 10 putaran."
        ]
    },

    6: {
        nama: "GAME 6",
        saran: ["GAME 6 - SARAN SEMENTARA"],
        pola: ["Pola ringan: 5 putaran → 5 putaran → jeda singkat."]
    },

    7: {
        nama: "GAME 7",
        saran: ["GAME 7 - SARAN SEMENTARA"],
        pola: ["Pola ringan: 5 putaran → 5 putaran → jeda singkat."]
    },

    8: {
        nama: "GAME 8",
        saran: ["GAME 8 - SARAN SEMENTARA"],
        pola: ["Pola ringan: 5 putaran → 5 putaran → jeda singkat."]
    },

    9: {
        nama: "GAME 9",
        saran: ["GAME 9 - SARAN SEMENTARA"],
        pola: ["Pola ringan: 5 putaran → 5 putaran → jeda singkat."]
    },

    10: {
        nama: "GAME 10",
        saran: ["GAME 10 - SARAN SEMENTARA"],
        pola: ["Pola ringan: 5 putaran → 5 putaran → jeda singkat."]
    },

    11: {
        nama: "GAME 11",
        saran: ["GAME 11 - SARAN SEMENTARA"],
        pola: ["Pola ringan: 5 putaran → 5 putaran → jeda singkat."]
    },

    12: {
        nama: "GAME 12",
        saran: ["GAME 12 - SARAN SEMENTARA"],
        pola: ["Pola ringan: 5 putaran → 5 putaran → jeda singkat."]
    },

    13: {
        nama: "GAME 13",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - Dragon Hatch

🔥 10x SPIN OTOMATIS TURBO ON
🔥 5x SPIN MANUAL TURBO OFF
🔥 20x SPIN OTOMATIS TURBO ON
🔥 7x SPIN MANUAL TURBO OFF`],
        pola: [
            "Pola santai: 10 putaran biasa → istirahat sebentar → lanjut 10 putaran."
        ]
    },

    14: {
        nama: "GAME 14",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku di PRAGMATIC PLAY - Aztec Gems

✅❎❎ 16x Manual DC OFF
❎✅❎ 9x Quick DC ON
❎✅✅ 15x Manual DC OFF
✅❎✅ 8x Quick DC ON
❎✅❎ 30x Quick DC ON`],
        pola: [
            "Pola ringan: 5 putaran → 5 putaran → jeda singkat."
        ]
    },

    15: {
        nama: "GAME 15",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - Pinata WINS

🔥 30x SPIN MANUAL TURBO OFF
🔥 15x SPIN OTOMATIS TURBO ON
🔥 7x SPIN MANUAL TURBO OFF`],
        pola: [
            "Pola santai: 10 putaran biasa → istirahat sebentar → lanjut 10 putaran."
        ]
    },

    16: {
        nama: "GAME 16",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku di PRAGMATIC PLAY - Wisdom OF ANTHENA 1000

✅❎❎ 10x Manual DC OFF
❎✅❎ 9x Quick DC ON
❎✅✅ 18x Manual DC OFF
✅❎✅ 15x Quick DC ON
❎✅❎ 20x Quick DC ON`],
        pola: [
            "Pola ringan: 5 putaran → 5 putaran → jeda singkat."
        ]
    }
};

// ========================================
// GAME 17 - 36
// ========================================

for (let i = 17; i <= 36; i++) {
    dataGame[i] = {
        nama: `GAME ${i}`,
        saran: [`GAME ${i} - SARAN SEMENTARA`],
        pola: [
            "Pola ringan: 5 putaran → 5 putaran → jeda singkat."
        ]
    };
}

// ========================================
// VARIABEL
// ========================================

let hasilCopy = "";

// ========================================
// ACAK DATA
// ========================================

function ambilAcak(data) {
    if (!Array.isArray(data) || data.length === 0) {
        return "";
    }

    return data[Math.floor(Math.random() * data.length)];
}

// ========================================
// COPY TEXT
// ========================================

async function copyTeks(text, button) {

    if (!text) return;

    let berhasil = false;

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            berhasil = true;
        }
    } catch (error) {
        console.log("Clipboard API gagal:", error);
    }

    if (!berhasil) {

        const textarea = document.createElement("textarea");

        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.top = "0";
        textarea.style.left = "-9999px";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        try {
            berhasil = document.execCommand("copy");
        } catch (error) {
            console.log("Copy gagal:", error);
        }

        textarea.remove();
    }

    if (button && berhasil) {

        const teksAwal = button.innerHTML;

        button.innerHTML = "COPIED ✔";
        button.disabled = true;

        setTimeout(function () {
            button.innerHTML = teksAwal;
            button.disabled = false;
        }, 1500);
    }
}

// ========================================
// SARAN GAME
// ========================================

function saranGame(id, button) {

    const game = dataGame[id];

    if (!game) {
        console.error("Game tidak ditemukan:", id);
        return;
    }

    const hasil = ambilAcak(game.saran);

    copyTeks(hasil, button);
}

// ========================================
// POLA GAME
// ========================================

function polaGame(id, button) {

    const game = dataGame[id];

    if (!game) {
        console.error("Game tidak ditemukan:", id);
        return;
    }

    const hasil = ambilAcak(game.pola);

    copyTeks(hasil, button);
}

// ========================================
// BUAT 36 GAME
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("gameContainer");

    if (!container) {
        console.error("❌ gameContainer tidak ditemukan!");
        return;
    }

    container.innerHTML = "";

    for (let i = 1; i <= 36; i++) {

        const game = dataGame[i];

        if (!game) continue;

        const gameBox = document.createElement("article");

        gameBox.className = "game-box";

        // FOTO HARUS DI:
        // img/game1.jpg
        // img/game2.jpg
        // ...
        // img/game36.jpg

        const imagePath = `./img/game${i}.jpg`;

        gameBox.innerHTML = `

            <div class="image-wrapper">

                <img
                    src="${imagePath}"
                    alt="${game.nama}"
                    loading="lazy"
                >

            </div>

            <div class="game-title">
                ${game.nama}
            </div>

            <div class="button-group">

                <button
                    type="button"
                    class="btn btn-saran"
                    onclick="saranGame(${i}, this)"
                >
                    🎯 SARAN GAME
                </button>

                <button
                    type="button"
                    class="btn btn-pola"
                    onclick="polaGame(${i}, this)"
                >
                    🔥 POLA GAME
                </button>

            </div>
        `;

        const img = gameBox.querySelector("img");

        img.addEventListener("load", function () {
            console.log(`✅ Foto game${i}.jpg berhasil dimuat`);
        });

        img.addEventListener("error", function () {
            console.error(`❌ Foto game${i}.jpg TIDAK ditemukan`);
            this.alt = `Foto game${i} tidak ditemukan`;
        });

        container.appendChild(gameBox);
    }

    console.log("✅ 36 GAME SELESAI DIBUAT");
});

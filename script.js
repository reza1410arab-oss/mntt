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
🔥 20x SPIN OTOMATIS TURBO ON`],
        pola: ["Pola santai: 10 putaran biasa → istirahat sebentar → lanjut 10 putaran."]
    },

    2: {
        nama: "GAME 2",
        saran: ["GAME 2 - SARAN"],
        pola: ["Pola game 2"]
    },

    3: {
        nama: "GAME 3",
        saran: ["GAME 3 - SARAN"],
        pola: ["Pola game 3"]
    },

    4: {
        nama: "GAME 4",
        saran: ["GAME 4 - SARAN"],
        pola: ["Pola game 4"]
    },

    5: {
        nama: "GAME 5",
        saran: ["GAME 5 - SARAN"],
        pola: ["Pola game 5"]
    },

    6: {
        nama: "GAME 6",
        saran: ["GAME 6 - SARAN"],
        pola: ["Pola game 6"]
    },

    7: {
        nama: "GAME 7",
        saran: ["GAME 7 - SARAN"],
        pola: ["Pola game 7"]
    },

    8: {
        nama: "GAME 8",
        saran: ["GAME 8 - SARAN"],
        pola: ["Pola game 8"]
    },

    9: {
        nama: "GAME 9",
        saran: ["GAME 9 - SARAN"],
        pola: ["Pola game 9"]
    },

    10: {
        nama: "GAME 10",
        saran: ["GAME 10 - SARAN"],
        pola: ["Pola game 10"]
    },

    11: {
        nama: "GAME 11",
        saran: ["GAME 11 - SARAN"],
        pola: ["Pola game 11"]
    },

    12: {
        nama: "GAME 12",
        saran: ["GAME 12 - SARAN"],
        pola: ["Pola game 12"]
    },

    13: {
        nama: "GAME 13",
        saran: ["GAME 13 - SARAN"],
        pola: ["Pola game 13"]
    },

    14: {
        nama: "GAME 14",
        saran: ["GAME 14 - SARAN"],
        pola: ["Pola game 14"]
    },

    15: {
        nama: "GAME 15",
        saran: ["GAME 15 - SARAN"],
        pola: ["Pola game 15"]
    },

    16: {
        nama: "GAME 16",
        saran: ["GAME 16 - SARAN"],
        pola: ["Pola game 16"]
    }
};

// GAME 17 - 36
for (let i = 17; i <= 36; i++) {
    dataGame[i] = {
        nama: `GAME ${i}`,
        saran: [`GAME ${i} - SARAN`],
        pola: [`Pola game ${i}`]
    };
}


// ========================================
// AMBIL ACAK
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

    try {

        await navigator.clipboard.writeText(text);

    } catch (error) {

        const textarea = document.createElement("textarea");

        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        try {
            document.execCommand("copy");
        } catch (e) {
            console.log("Copy gagal:", e);
        }

        textarea.remove();
    }

    if (button) {

        const tulisanAwal = button.innerHTML;

        button.innerHTML = "COPIED ✔";
        button.disabled = true;

        setTimeout(() => {

            button.innerHTML = tulisanAwal;
            button.disabled = false;

        }, 1500);
    }
}


// ========================================
// SARAN GAME
// ========================================

function saranGame(id, button) {

    const game = dataGame[id];

    if (!game) return;

    const card = button.closest(".game-box");
    const hasil = card.querySelector(".hasil-game");

    const teks = ambilAcak(game.saran);

    // BARU MUNCUL SAAT DIKLIK
    hasil.textContent = teks;
    hasil.style.display = "block";

    copyTeks(teks, button);
}


// ========================================
// POLA GAME
// ========================================

function polaGame(id, button) {

    const game = dataGame[id];

    if (!game) return;

    const card = button.closest(".game-box");
    const hasil = card.querySelector(".hasil-game");

    const teks = ambilAcak(game.pola);

    // BARU MUNCUL SAAT DIKLIK
    hasil.textContent = teks;
    hasil.style.display = "block";

    copyTeks(teks, button);
}


// ========================================
// BUAT 36 KOTAK GAME
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("gameContainer");

    if (!container) {
        console.error("gameContainer tidak ditemukan!");
        return;
    }

    container.innerHTML = "";

    for (let i = 1; i <= 36; i++) {

        const game = dataGame[i];

        if (!game) continue;

        const gameBox = document.createElement("article");

        gameBox.className = "game-box";

        // ========================================
        // FOTO
        // ========================================

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


            <!-- KOSONG SAAT AWAL -->
            <div
                class="hasil-game"
                style="display:none;"
            ></div>

        `;

        container.appendChild(gameBox);
    }

    console.log("✅ 36 KOTAK GAME BERHASIL DIBUAT");
});

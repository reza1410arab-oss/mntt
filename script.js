```javascript
"use strict";

// ========================================
// DATA GAME 1 - 16
// ========================================

const dataGame = {

    1: {
        nama: "MAHJONG WAYS 1",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku di PG SOFT - Mahjong WAYS

🔥 10x SPIN OTOMATIS TURBO ON
🔥 8x SPIN MANUAL TURBO OFF
🔥 20x SPIN OTOMATIS TURBO ON`],
        pola: "10 AUTO - 8 MANUAL - 20 AUTO"
    },

    2: {
        nama: "MAHJONG WAYS 2",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "10 AUTO - 5 MANUAL - 15 AUTO"
    },

    3: {
        nama: "MAHJONG WAYS 3",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "15 AUTO - 5 MANUAL - 20 AUTO"
    },

    4: {
        nama: "MAHJONG WAYS 4",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "10 AUTO - 10 MANUAL - 20 AUTO"
    },

    5: {
        nama: "MAHJONG WAYS 5",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "20 AUTO - 5 MANUAL - 15 AUTO"
    },

    6: {
        nama: "MAHJONG WAYS 6",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "15 AUTO - 10 MANUAL - 15 AUTO"
    },

    7: {
        nama: "MAHJONG WAYS 7",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "10 AUTO - 5 MANUAL - 20 AUTO"
    },

    8: {
        nama: "MAHJONG WAYS 8",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "20 AUTO - 10 MANUAL - 10 AUTO"
    },

    9: {
        nama: "MAHJONG WAYS 9",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "15 AUTO - 5 MANUAL - 20 AUTO"
    },

    10: {
        nama: "MAHJONG WAYS 10",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "10 AUTO - 10 MANUAL - 20 AUTO"
    },

    11: {
        nama: "MAHJONG WAYS 11",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "20 AUTO - 5 MANUAL - 15 AUTO"
    },

    12: {
        nama: "MAHJONG WAYS 12",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "15 AUTO - 10 MANUAL - 20 AUTO"
    },

    13: {
        nama: "MAHJONG WAYS 13",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "10 AUTO - 5 MANUAL - 20 AUTO"
    },

    14: {
        nama: "MAHJONG WAYS 14",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "20 AUTO - 10 MANUAL - 10 AUTO"
    },

    15: {
        nama: "MAHJONG WAYS 15",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "15 AUTO - 5 MANUAL - 20 AUTO"
    },

    16: {
        nama: "MAHJONG WAYS 16",
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "10 AUTO - 10 MANUAL - 20 AUTO"
    }

};


// ========================================
// GAME 17 - 36
// ========================================

for (let i = 17; i <= 36; i++) {
    dataGame[i] = {
        nama: `MAHJONG WAYS ${i}`,
        saran: [`Dicoba bermain di game ini bos, lagi gacor bosku.`],
        pola: "10 AUTO - 5 MANUAL - 20 AUTO"
    };
}


// ========================================
// RANDOM
// ========================================

function randomGame() {
    const nomor = Math.floor(Math.random() * 36) + 1;
    return dataGame[nomor];
}


// ========================================
// COPY TEKS
// ========================================

function copyTeks(teks, button) {

    navigator.clipboard.writeText(teks)
        .then(() => {

            const textLama = button.textContent;

            button.textContent = "✅ TERSALIN";

            setTimeout(() => {
                button.textContent = textLama;
            }, 1500);

        })
        .catch(() => {
            alert("Gagal menyalin teks");
        });
}


// ========================================
// SARAN GAME
// ========================================

function saranGame(game) {

    if (!game || !game.saran) {
        return "Belum ada saran.";
    }

    return game.saran[Math.floor(Math.random() * game.saran.length)];
}


// ========================================
// POLA GAME
// ========================================

function polaGame(game) {

    if (!game || !game.pola) {
        return "Belum ada pola.";
    }

    return game.pola;
}


// ========================================
// BUAT GAME BOX
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("gameContainer");

    if (!container) {
        console.error("gameContainer tidak ditemukan!");
        return;
    }

    for (let i = 1; i <= 36; i++) {

        const game = dataGame[i];

        const box = document.createElement("div");
        box.className = "game-box";

        const imageWrapper = document.createElement("div");
        imageWrapper.className = "image-wrapper";

        const image = document.createElement("img");
        image.className = "game-image";

        // PATH GAMBAR ASLI
        image.src = new URL(
            `./img/game${i}.jpg`,
            document.baseURI
        ).href;

        image.alt = game.nama;

        image.onerror = () => {
            console.error(`Gambar tidak ditemukan: img/game${i}.jpg`);
        };

        imageWrapper.appendChild(image);


        const title = document.createElement("h2");
        title.textContent = game.nama;


        const saran = document.createElement("div");
        saran.className = "saran";

        saran.textContent = saranGame(game);


        const pola = document.createElement("div");
        pola.className = "pola";

        pola.textContent = `🎯 POLA: ${polaGame(game)}`;


        const button = document.createElement("button");
        button.className = "copy-btn";
        button.textContent = "📋 COPY";

        button.addEventListener("click", () => {

            const teks =
                `${game.nama}\n\n` +
                `${saran.textContent}\n\n` +
                `${pola.textContent}`;

            copyTeks(teks, button);

        });


        box.appendChild(imageWrapper);
        box.appendChild(title);
        box.appendChild(saran);
        box.appendChild(pola);
        box.appendChild(button);

        container.appendChild(box);
    }

});
```

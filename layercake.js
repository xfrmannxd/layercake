// layercake.js

import axios from 'axios';
import chalk from 'chalk';

export const automain = {
    nomorowner: '19419318284@s.whatsapp.net',
    channel: '120363282624412455@newsletter',
    InvCode: 'Bc7vSkm'
};

let isLoggedIn = false;

export async function initializelayercake() {
    if (isLoggedIn) {
        console.log(chalk.green('✅ Koneksi ke developer telah berhasil'));
        return;
    }

    try {
        console.log(chalk.green('✅ Koneksi sukses!'));
        isLoggedIn = true;  
    } catch (error) {
        console.error('❌ Gagal mengambil data:', error);
        process.exit(1);
    }
}

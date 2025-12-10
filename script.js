document.addEventListener('DOMContentLoaded', function() {
    // 1. Mengambil elemen tombol dan teks informasi
    const infoButton = document.getElementById('info-btn');
    const infoText = document.getElementById('info-teks');

    // 2. Menambahkan event listener ke tombol
    infoButton.addEventListener('click', function(event) {
        // Mencegah navigasi default (jika tombol adalah link)
        event.preventDefault(); 

        // 3. Logika interaksi
        
        // Teks asli
        const originalText = 'Klik tombol "Info Hari Ini" di navigasi untuk melihat pesan rahasia!';
        
        // Teks pesan rahasia
        const secretMessage = '🎉 Budaya Jawa Timur sangat beragam dan kaya akan filosofi luhur! Silakan eksplorasi lebih lanjut.';
        
        // Cek apakah teks saat ini adalah pesan rahasia
        if (infoText.textContent === secretMessage) {
            infoText.textContent = originalText; // Kembalikan ke teks awal
            infoText.style.color = '#333';
        } else {
            infoText.textContent = secretMessage; // Tampilkan pesan rahasia
            infoText.style.color = '#c0672bff'; // Ganti warna untuk menonjol
        }
        
        // Tampilkan peringatan juga (contoh fungsi JS lain)
        alert('Anda baru saja mengaktifkan informasi hari ini!');
    });
});
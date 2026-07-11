<?php
// 1. Amankan Header agar hanya bisa diakses oleh website Anda sendiri
header("Access-Control-Allow-Origin: *"); // Ganti * dengan domain Anda jika ingin lebih ketat (misal: https://websiteanda.com)
header("Content-Type: application/json; charset=UTF-8");

// 2. SIMPAN API KEY DI SINI (Aman, tidak akan terlihat oleh publik)
// $API_KEY = "MASUKKAN_API_KEY_ANDA_DI_SINI"; 
$API_KEY = "97ab4a8dfacade2928c9d6a7664e68fa"; 

// Koordinat Toraja Utara
$LAT = "-2.9722";
$LON = "119.8983";

// 3. URL resmi OpenWeatherMap
$API_URL = "https://openweathermap.org{$LAT}&lon={$LON}&appid={$API_KEY}&units=metric&lang=id";

// 4. Ambil data dari OpenWeatherMap menggunakan cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $API_URL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
$respons = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// 5. Kirim data ke JavaScript website Anda
if ($http_code === 200) {
    echo $respons;
} else {
    echo json_encode(["error" => "Gagal mengambil data dari server cuaca."]);
}
?>

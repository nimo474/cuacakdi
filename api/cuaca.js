export default async function handler(req, res) {
    // Membaca API Key dari Environment Variables Vercel
    const API_KEY = process.env.OPENWEATHER_API_KEY;

    // Koordinat Kendari
    const LAT = "-3.9450";
    const LON = "122.4989";

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric&lang=id`;

    // Pengaturan Header Keamanan (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    // Deteksi jika API Key belum terpasang di Vercel
    if (!API_KEY) {
        return res.status(500).json({ error: "API Key belum dikonfigurasi di Environment Variables Vercel." });
    }

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({ error: data.message || "Gagal mengambil data dari OpenWeatherMap" });
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Koneksi server gagal: " + error.message });
    }
}

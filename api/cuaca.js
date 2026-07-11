export default async function handler(req, res) {
    const API_KEY = "97ab4a8dfacade2928c9d6a7664e68fa"; // Aman di server Vercel
    const LAT = "-2.9722";
    const LON = "119.8983";
    const API_URL = `https://openweathermap.org{LAT}&lon=${LON}&appid=${API_KEY}&units=metric&lang=id`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Gagal mengambil data" });
    }
}

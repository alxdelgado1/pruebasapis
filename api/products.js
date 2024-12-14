// Archivo products.js para despliegue en Vercel

// Datos de ejemplo
const products = [
    { sku: "SKU123", regular_price: 19.99 },
    { sku: "SKU124", regular_price: 25.50 },
    { sku: "SKU125", regular_price: 15.00 }
];

// Handler para la API
export default function handler(req, res) {
    res.status(200).json(products);
}

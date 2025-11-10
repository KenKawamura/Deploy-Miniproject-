import express from "express";
 import cors from "cors";
 const app = express();
 app.use(cors({ origin: "*" }));
 app.use(express.json());
 const products = [
  { id: 1, name: "Cuaderno UDI", price: 20 },
  { id: 2, name: "Sticker Pack", price: 10 }
 ];
 app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
 });
 app.get("/products", (req, res) => {
  res.json(products);
 });
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => console.log("API en puerto", PORT));
//  EOF
//  # package.json: asegura type: module o usa require()
// # Ejecuta local:
//  node index.js
//  # Probar: http://localhost:3000/health y /products
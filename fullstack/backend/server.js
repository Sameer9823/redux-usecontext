import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      name: "Smart Drone X1",
      price: 1499.99,
      image: "https://example.com/images/smart-drone-x1.jpg",
    },
    {
      id: 2,
      name: "EcoFarm Sensor Kit",
      price: 299.99,
      image: "https://example.com/images/ecofarm-sensor-kit.jpg",
    },
    {
      id: 3,
      name: "Agri AI Assistant",
      price: 799.99,
      image: "https://example.com/images/agri-ai-assistant.jpg",
    },
    {
      id: 4,
      name: "Precision Sprayer Pro",
      price: 1199.99,
      image: "https://example.com/images/precision-sprayer-pro.jpg",
    },
  ];

  setTimeout(() => {
      
      res.send(jokes);
  }, 2000)
});

app.listen(port, (req, res) => {
  console.log(`the port is running on ${port}`);
});

const express = require("express");
const cors = require("cors");
const inventory = require("./data/inventory");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/search", (req, res) => {
  const { q, category, minPrice, maxPrice } = req.query;

  let results = [...inventory]; 

  //  Validate price range
  if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    return res.status(400).json({
      message: "Invalid price range",
    });
  }

  //  Filter by product name
  if (q) {
    const searchText = q.toLowerCase();
    results = results.filter((item) =>
      item.productName.toLowerCase().includes(searchText)
    );
  }

  // Filter by category
  if (category) {
    const selectedCategory = category.toLowerCase();
    results = results.filter(
      (item) => item.category.toLowerCase() === selectedCategory
    );
  }

  // Filter price
  if (minPrice) {
    results = results.filter(
      (item) => item.price >= Number(minPrice)
    );
  }

  if (maxPrice) {
    results = results.filter(
      (item) => item.price <= Number(maxPrice)
    );
  }

  res.json(results);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
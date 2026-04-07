
# Inventory Search API + UI

  

## Tech Stack

- Frontend: React + Styled Components

- Backend: Node.js + Express

- Data: Static JSON

  

---

  

## Features

- Search by product name (case-insensitive)

- Filter by category

- Filter by price range

- Combine multiple filters

- Error handling (invalid price range)

- "No results found" handling

- Clean Flipkart-style UI

  

---

  

## How to Run

  

### Backend

cd backend

npm install

node server.js

  

### Frontend

cd frontend

npm install

npm start

  

---

  

## 🔍 Search Logic

  

1. Start with full inventory list

2. Apply filters in sequence:

- product name (case-insensitive using toLowerCase)

- category match

- minimum price

- maximum price

3. Return filtered results

  

---

  

## Performance Improvement Idea

  

For large datasets:

- Use database indexing (on productName, category, price)

- Implement pagination

- Use debounced search in frontend

  

---

  

## Screenshots

  #### All Products 

![All Products](https://res.cloudinary.com/dalbegyjq/image/upload/Screenshot_2026-04-07_124653_cv81m9.png)

  #### With Category Filter

![With Category Filter](https://res.cloudinary.com/dalbegyjq/image/upload/Screenshot_2026-04-07_124756_bg94ph.png)

#### All filters  

![All filters](https://res.cloudinary.com/dalbegyjq/image/upload/Screenshot_2026-04-07_124713_ktdoly.png)

  #### Invalid price range

![Invalid price range](https://res.cloudinary.com/dalbegyjq/image/upload/Screenshot_2026-04-07_125309_v0eiqt.png)

  #### No product Found 

![No product Found](https://res.cloudinary.com/dalbegyjq/image/upload/Screenshot_2026-04-07_125406_fepr0o.png)


import React, { useState, useEffect } from "react";
import {
  Page,
  Navbar,
  Container,
  Sidebar,
  Content,
  Title,
  Input,
  Select,
  Button,
  Card,
  ProductName,
  Price,
  Supplier,
  ErrorText,
  Message
} from "./styledComponents";

function App() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchResults = async (queryString = "") => {
    try {
      setError("");
      setLoading(true);

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/search?${queryString}`
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        setResults([]);
        return;
      }

      setResults(data);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    let query = [];

    if (q) query.push(`q=${q}`);
    if (category) query.push(`category=${category}`);
    if (minPrice) query.push(`minPrice=${minPrice}`);
    if (maxPrice) query.push(`maxPrice=${maxPrice}`);

    fetchResults(query.join("&"));
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <Page>
      <Navbar>Inventory Search</Navbar>

      <Container>
        <Sidebar>
          <Title>Filters</Title>

          <Input
            type="text"
            placeholder="Search product..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />

          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Furniture">Furniture</option>
            <option value="Electronics">Electronics</option>
            <option value="Stationery">Stationery</option>
          </Select>

          <Input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />

          <Input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          <Button onClick={handleSearch} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </Button>
        </Sidebar>

        <Content>
          {error && <ErrorText>{error}</ErrorText>}

          {loading ? (
            <Message>Loading results...</Message>
          ) : results.length === 0 && !error ? (
            <Message>No results found</Message>
          ) : (
            results.map((item) => (
              <Card key={item.id}>
                <div>
                  <ProductName>{item.productName}</ProductName>
                  <Supplier>{item.supplier}</Supplier>
                  <p>{item.category}</p>
                </div>
                <Price>₹{item.price}</Price>
              </Card>
            ))
          )}
        </Content>
      </Container>
    </Page>
  );
}

export default App;
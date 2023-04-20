import { useEffect, useState } from "react";
import ProductsCards from "./ProductsCards";
import { MainContent } from "./styles/Main.styled";
import { StyledSearch } from "./styles/SearchField.styled";
import { Container } from "./styles/Container.styled";

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setAllProducts(data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
  }, []);

  const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    const filterProducts = allProducts.filter((product) =>
      `${product.name}`.toLowerCase().includes(value)
    );
    setProduct(filterProducts);
  };

  return (
    <MainContent>
      <StyledSearch>
        <input onInput={filterCards} placeholder="Sök efter produkter..." />
      </StyledSearch>

      <Container>
        {product.map((product) => {
          if (
            product.hasOwnProperty("id") &&
            product.productImage !== null &&
            product.price > 0 &&
            product.productImage.includes("/images/products/") &&
            product.productImage.endsWith(".jpg")
          ) {
            return <ProductsCards key={product.id} prodData={product} />;
          } else {
            return null;
          }
        })}
      </Container>
    </MainContent>
  );
}

export default Home;

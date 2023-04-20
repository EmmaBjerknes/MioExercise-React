import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { StyledButton } from "./styles/Button.styled";
import {
  StyledCard,
  CardBody,
  CardPrice,
  StyledFlag,
} from "./styles/Card.styled";

function Product() {
  const [product, setProduct] = useState("");
  const { id } = useParams();
  let imgUrl = product.productImage;
  const alertText = "Tack för din låtsas-beställning!";

  useEffect(() => {
    fetch("http://localhost:3001/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.log("error:", error);
      });
  }, [id]);

  let salePrice;
  const campaign = product.campaign || {};
  if (Object.keys(campaign).length > 0) {
    salePrice = product.price * (1 - campaign.discountPercent / 100);
    salePrice = Math.round(salePrice);
  }

  return (
    <>
      <StyledCard>
        {product.campaign?.name && (
          <StyledFlag>{product.campaign.name}</StyledFlag>
        )}

        <div>{<img src={`https://www.mcdn.net${imgUrl}`} alt="" />}</div>

        <CardBody>
          <h3>{product.name}</h3>
          <div>{product.description}</div>
          <CardPrice>
            <p style={{ textDecoration: salePrice ? "line-through" : "none" }}>
              {Math.round(product.price)}:-
            </p>
            {salePrice ? <p style={{ color: "red" }}>{salePrice}:-</p> : null}
          </CardPrice>
          <StyledButton
            onClick={() => {
              alert(alertText);
            }}
          >
            Köp mig
          </StyledButton>
        </CardBody>
      </StyledCard>
    </>
  );
}

export default Product;

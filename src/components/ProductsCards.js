import React from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledCard,
  CardBody,
  CardPrice,
  StyledFlag,
} from "./styles/Card.styled";

const ProductsCards = ({ prodData }) => {
  const navigate = useNavigate();
  const navToProd = (id) => navigate(`/Product/${id}`);

  let salePrice;
  const campaign = prodData.campaign || {};
  if (Object.keys(campaign).length > 0) {
    salePrice = prodData.price * (1 - campaign.discountPercent / 100);
    salePrice = Math.round(salePrice);
  }

  return !salePrice || salePrice > 0 ? (
    <>
      <StyledCard onClick={() => navToProd(prodData.id)}>
        {prodData.campaign?.name && (
          <StyledFlag>{prodData.campaign.name}</StyledFlag>
        )}

        <div>
          {<img src={`https://www.mcdn.net${prodData.productImage}`} alt="" />}
        </div>

        <CardBody>
          <h3>{prodData.name}</h3>
          <CardPrice>
            <p style={{ textDecoration: salePrice ? "line-through" : "none" }}>
              {Math.round(prodData.price)}:-
            </p>
            {salePrice ? <p style={{ color: "red" }}>{salePrice}:-</p> : null}
          </CardPrice>
        </CardBody>
      </StyledCard>
    </>
  ) : (
    <></>
  );
};

export default ProductsCards;

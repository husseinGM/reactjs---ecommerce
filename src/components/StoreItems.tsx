import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import Store from '../data/item.json';
import { useProductContext } from "../context/ProductContext";
//types section
type storeItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

//end types section

export default function StoreItems({
  id,
  name,
  price,
  imgUrl,
}: storeItemProps) {
    const {getQntItem, increaseQnt, decreaseQnt, removeProduct} = useProductContext()
  //wait
  const quantity = getQntItem(id);
  return (
    <Card key={id} className="mt-5 shadow-lg">
      <Card.Img
        variant="top"
        height="200px"
        style={{ objectFit: "contain" }}
        src={imgUrl}
      />
      <Card.Body>
        <Card.Title className="d-flex align-items-center">
          <span className="fs-2">{name}</span>
          <span className="ms-auto text-mutted">{formatCurrency(price)}</span>
        </Card.Title>
        {quantity > 0 ? (
          <div
            className="d-flex flex-column align-items-center"
            style={{ gap: ".3rem" }}
          >
            <div className="d-flex" style={{ gap: ".3rem" }}>
              <Button onClick={() => decreaseQnt(id)}>-</Button>
              <div>
                <span>{quantity}</span> in cart
              </div>
              <Button onClick={() => increaseQnt(id)}>+</Button>
            </div>
            <Button
              className="align-items-center justify-content-center"
              variant="danger"
              onClick={() => removeProduct(id)}
            >
              Remove
            </Button>
          </div>
        ) : (
          <Button className="w-100" onClick={() => increaseQnt(id)}>+ Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}

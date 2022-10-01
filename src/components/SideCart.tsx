import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useProductContext } from '../context/ProductContext'
import { formatCurrency } from '../utilities/formatCurrency'
import SideItem from './SideItem'
import Store from '../data/item.json'
type open = {
  open: boolean
}
export default function SideCart({open}: open) {
  const {product, closeCart} = useProductContext()
  return (
    <Offcanvas placement='end' onHide={closeCart} show={open}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {product.map(item => (
              <SideItem {...item}/>
            ))}
            <div className="ms-auto fw-bold fs-2">
                Total: {" "}
                {formatCurrency(product.reduce((total, pro) => {
                  const item = Store.find(i => i.id === pro.id)
                  return total + (item?.price || 0) + pro.qnt 
                },0))}
            </div>
          </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

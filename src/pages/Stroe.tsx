import React from 'react'
import {Col, Row} from 'react-bootstrap'
import StoreItems from '../components/StoreItems'
import storeProduct from '../data/item.json'
export default function Stroe() {
  return (
    <>
        <Row md={3} xs={1}>
            {storeProduct.map(i => (
                <Col gap={3}><StoreItems {...i} /></Col>
            ))}
        </Row>
    </>
  )
}

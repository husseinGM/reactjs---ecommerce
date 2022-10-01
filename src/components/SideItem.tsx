import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useProductContext } from '../context/ProductContext'
import Store from '../data/item.json'
import { formatCurrency } from '../utilities/formatCurrency'
type SideItemProps = {
    id: number
    qnt: number
}
export default function SideItem({id, qnt}: SideItemProps) {
    const{removeProduct} = useProductContext()
    const item = Store.find(i => i.id === id)
    if(item == null){return null}
  return (
    <Stack key={id} direction='horizontal' gap={2} className="d-flex align-items-center">
        <img src={item?.imgUrl} style={{width: "125px", height: "75px", objectFit:"contain"}} alt="image" />
        <div className="me-auto">
            <div>{item?.name} {qnt > 1 && <span className='text-mutted' style={{fontSize: "0.65rem"}}>x{qnt}</span>}</div>
            <div className="text-mutted" style={{fontSize: "0.65rem"}}>{formatCurrency(item?.price)}</div>
        </div>
        <div>{formatCurrency(item?.price * qnt)}</div>
        <Button onClick={() => removeProduct(item?.id)} variant='outline-danger' size='sm'>X</Button>
    </Stack>
  )
}

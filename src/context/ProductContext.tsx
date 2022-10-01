import { createContext, ReactNode, useContext, useState } from "react";
import React from 'react'
import Store from '../data/item.json'
import SideCart from "../components/SideCart";

//types
type productContextValeus = {
    getQntItem: (id: number) => number
    increaseQnt: (id: number) => void
    decreaseQnt: (id: number) => void
    removeProduct: (id: number) => void
    openCart: () => void
    closeCart: () => void
    //end function
    AllProductQnt: number
    product: state[]
}

type ProviderChildren = {
    children: ReactNode
}

type state = {
    id: number,
    qnt: number
}

//end types
const productContext = createContext({} as productContextValeus)
export function useProductContext(){
    return useContext(productContext)
}
export function ProductContextProvider({children}:ProviderChildren){
    const[product, setProduct] = useState<state[]>([])
    const[open, setOpen] = useState(false)
    const openCart = () => setOpen(true)
    const closeCart = () => setOpen(false)
    function getQntItem(id: number){
        return product.find(ele => ele.id === id)?.qnt || 0
    }

    function increaseQnt(id: number){
        setProduct(items => {
                if(items.find(item => item.id === id) == null){
                    return [...items, {id, qnt: 1}]
                }else{
                    return items.map(item => {
                        if(item.id === id){
                            return {...item, qnt: item.qnt + 1}
                        }else{
                            return item
                        }
                    })
                }
            })
    }


    function decreaseQnt(id: number){
        setProduct(items => {
            if(items.find(item => item.id === id) == null){
                return items.filter(i => i.id !== id)
            }else{
                return items.map(item => {
                    if(item.id === id){
                        return {...item, qnt: item.qnt - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function removeProduct(id: number){
        setProduct(currentProduct => {
            return currentProduct.filter(item => item.id !== id)
        })
    }

    const AllProductQnt = product.reduce((total, quantity) => {
        return quantity.qnt + total 
    },0)
    return <productContext.Provider value={{getQntItem, increaseQnt, decreaseQnt, removeProduct, openCart, closeCart, AllProductQnt, product}}>
        {children}
        <SideCart open={open}/>
    </productContext.Provider>
}
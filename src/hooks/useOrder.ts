import { useState } from "react"
import type { MenuItems, OrderItem } from "../types"

export default function useOrder() {

    const[order, setOrder] = useState<OrderItem[]>([]);

    //Fncion para agregar items al cosnumo
    const addItem = (item: MenuItems) => {
        //Checa si un item ya existe y solo cambiar la cantidad, y si no existe agregarlo
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        //Si el item existe realiza la tarea de aumentar la cantidad
        if(itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} : 
                orderItem
        )
        setOrder(updatedOrder)

        //Si no existe agrega el nuevo producto
        } else {
            const newItem : OrderItem = {...item, quantity: 1}        
            setOrder([...order, newItem])
        }

        
    }

    return {
        order,
        addItem
    }
}
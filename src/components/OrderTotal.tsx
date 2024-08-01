import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

interface OrderTotalProps {
    order: OrderItem[]
}
export default function OrderTotal({order}: OrderTotalProps) {

    //Creando funcion para el subtotal
    const subtotalAmount = useMemo(
        () => order.reduce(
            ( total, item) => total + (item.quantity * item.price), 0
        ), [order]
    )

    return (
        <>
            <div className="space-y-3 border-t border-b p-2 border-blue-300">
                <h2 className="font-black text-2xl">Total y Propina: </h2>
                {/* Subtotal */}
                <p>Subtotal a pagar:{''} 
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                {/* Propina formulario */}
                <p>Propina:{''} 
                    <span className="font-bold">$0</span>
                </p>
                {/* Sbtotal + Propina*/}
                <p>Total:{''} 
                    <span className="font-bold">$0</span>
                </p>
            </div>

            {/* Este boton es el qu va a guardar toda la orden en una BD */}
            <button>

            </button>
        </>
    )
}

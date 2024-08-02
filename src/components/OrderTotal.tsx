import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

interface OrderTotalProps {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}
export default function OrderTotal({order, tip, placeOrder}: OrderTotalProps) {

    //Creando funcion para el subtotal
    const subtotalAmount = useMemo(
        () => order.reduce(
            ( total, item) => total + (item.quantity * item.price), 0
        ), [order]
    )
    //Creando funcion para calcular propina
    const tipAmount = useMemo(
        () => subtotalAmount * tip, [tip, order]
    )

    //Creando funcion para calcular el total
    const totalAmount = useMemo(
        () => subtotalAmount + tipAmount, [tip, order]
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
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                {/* Sbtotal + Propina*/}
                <p>Total:{''} 
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            {/* Este boton es el qu va a guardar toda la orden en una BD */}
            <button
                className="w-full border border-blue-500 hover:bg-blue-500 text-blue-600 p-3 uppercase rounded-lg hover:text-white font-black disabled:opacity-30"
                disabled={totalAmount === 0}
                onClick={placeOrder}
            >
                Guardar orden
            </button>
        </>
    )
}

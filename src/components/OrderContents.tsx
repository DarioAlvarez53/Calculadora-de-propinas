import { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

interface OrderContentProps {
    order: OrderItem[]
}

export default function OrderContents({order}: OrderContentProps) {
    return (
        <div>
            <h2 className='font-black text-4xl'>Consumo</h2>

            <div className="space-y-3 mt-5">
                {order.length === 0 ? 
                    <p className="text-center">La orden esta vacia</p>
                : (
                    order.map(item => (
                        <div key={item.id} className="flex justify-between">
                            <div>
                                <p>{item.name}</p>
                                <p>Precio: {formatCurrency(item.price)}</p>
                            </div>
                            <div>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Subtotal: {formatCurrency(item.price * item.quantity)}</p>
                            </div>
                            <div>
                                <button>
                                    X
                                </button>
                            </div>
                        </div>
                    ))
                )
                }
            </div>
        </div>
    )
}

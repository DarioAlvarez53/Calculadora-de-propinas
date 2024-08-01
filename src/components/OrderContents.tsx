import { MenuItems, OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

interface OrderContentProps {
    order: OrderItem[]
    removeItem: (id: MenuItems['id']) => void
}

export default function OrderContents({order, removeItem}: OrderContentProps) {
    return (
        <div>
            <h2 className='font-black text-4xl'>Consumo</h2>

            <div className="space-y-3 mt-5">
                {order.length === 0 ? 
                    <p className="text-center">La orden esta vacia</p>
                : (
                    order.map(item => (
                        <div key={item.id} className="grid grid-cols-12 border-b border-r p-2 rounded-lg border-blue-400">
                            <div className="col-span-6">
                                <p>{item.name}</p>
                                <p>Precio: {formatCurrency(item.price)}</p>
                            </div>
                            <div className="col-span-5">
                                <p>Cantidad: {item.quantity}</p>
                                <p>Subtotal: {formatCurrency(item.price * item.quantity)}</p>
                            </div>
                            <div className="col-span-1 flex items-center justify-center">
                                <button
                                    className="bg-red-500 h-10 w-10 rounded-full text-white font-bold"
                                    onClick={() => removeItem(item.id)}
                                >
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

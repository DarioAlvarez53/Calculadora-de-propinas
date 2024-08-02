import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotal from "./components/OrderTotal"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import TipPercentageForm from './components/TipPercentageForm';

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-blue-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>

      {/* Seccion principal del proyecto */}
      <main className="max-w-7xl mx-auto mt-20 py-20 grid md:grid-cols-2">
        {/* Aqui va el menu */}
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-4">
            {menuItems.map(item => (
              <MenuItem 
                key = {item.id}
                item = {item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>


        {/* Aqui va el consumo */}
        <div className="border border-dashed border-slate-400 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents 
                order = {order}
                removeItem = {removeItem}
              />
              
              {/* Fromulario de porcentaje de propina */}
              <TipPercentageForm 
                setTip = {setTip}
                tip={tip}
              />

              {/* Monto total de la orden */}
              <OrderTotal
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ):(
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App

import { MenuItems } from "../types"

interface MenuItemsProps {
    item: MenuItems;
    addItem: (item: MenuItems) => void //esto es una funcion que no retorna nada
}

export default function MenuItem({item, addItem} : MenuItemsProps) {
    return (
        <button
            className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white w-full p-3 flex justify-between rounded-md"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}

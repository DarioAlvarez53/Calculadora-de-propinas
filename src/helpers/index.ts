//Esta funcion ayuda a formatear a moneda un numero
export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('en-us', {
        style: 'currency', currency: 'USD'
    }).format(quantity)
}
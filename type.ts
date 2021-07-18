export type OrderType= {
    name: string
    id: number | string
    price: number
    discount: number
    color: string
    size: string
    company: string
}

export type RootState = {
    cart: OrderType[]
}
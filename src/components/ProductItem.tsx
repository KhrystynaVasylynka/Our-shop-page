import { Currency, Product, exchangeValue } from '../data'

type Props = {
    product: Product
    currency: Currency
    onBuy: (id: number) => void
}

const ProductItem = ({ product, currency, onBuy }: Props) => {
    const price = product.price * exchangeValue[currency]
    return (
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>
                {currency} {price}
            </p>
            <button onClick={() => onBuy(product.id)}>buy</button>
        </div>
    )
}

export default ProductItem

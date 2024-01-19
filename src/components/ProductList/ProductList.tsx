import { Currency, Product } from '../../data'
import ProductItem from '../ProductItem/ProductItem'

type Props = {
    products: Product[]
    currency: Currency
    onBuy: (id: number) => void
}

const ProductList = ({ products, currency, onBuy }: Props) => (
    <>
        {products.map((product) => (
            <ProductItem
                key={product.id}
                product={product}
                currency={currency}
                onBuy={onBuy}
            />
        ))}
    </>
)

export default ProductList

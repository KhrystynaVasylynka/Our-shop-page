import { useEffect, useState } from 'react'
import { Currency, exchangeValue, Product, productsArray } from './data'
import CurrenciesList from './components/CurrenciesList'
import ProductList from './components/ProductList'

const App = () => {
    const productCountsInit = productsArray.reduce((cur, acc) => {
        return { ...cur, [acc.id]: 0 }
    }, {})

    const [productCounts, setProductsCount] =
        useState<Record<number, number>>(productCountsInit)

    const [currency, setCurrency] = useState<Currency>('USD')
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(() => getTotal(productsArray))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency, productCounts])

    const onCurrencyChange = (currency: Currency) => {
        setCurrency(currency)
    }

    const getTotal = (products: Product[]) => {
        return products.reduce((cur, acc) => {
            return (cur +=
                acc.price * exchangeValue[currency] * productCounts[acc.id])
        }, 0)
    }

    const onBuy = (productId: number) => {
        setProductsCount((counts) => ({
            ...counts,
            [productId]: counts[productId] + 1,
        }))
        setTotal(() => getTotal(productsArray))
    }

    return (
        <div>
            <h1>Our shop page</h1>
            <CurrenciesList onChangeCurrency={onCurrencyChange} />
            <ProductList
                products={productsArray}
                currency={currency}
                onBuy={onBuy}
            />
            <p>total {total}</p>
        </div>
    )
}
export default App

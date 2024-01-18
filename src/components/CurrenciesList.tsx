import { CURRENCIES, Currency } from '../data'

type Props = {
    onChangeCurrency: (currency: Currency) => void
}
const CurrenciesList = ({ onChangeCurrency }: Props) => {
    const currencies = CURRENCIES

    return (
        <div>
            {currencies.map((c) => (
                <button key={c} onClick={() => onChangeCurrency(c)}>
                    {c}
                </button>
            ))}
        </div>
    )
}

export default CurrenciesList

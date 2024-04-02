import {useEffect, useState} from 'react'


function useCurrencyInfo(currency) {
const [data, setData] = useState({})

    useEffect(() => {
        fetch(` https://v6.exchangerate-api.com/v6/d4a3236324f741edd4a282d3/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;
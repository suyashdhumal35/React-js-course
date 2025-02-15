import React, { useEffect } from 'react'

function usecurrencyConverter(currency) {

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then
    }, [])

}

export default usecurrencyConverter

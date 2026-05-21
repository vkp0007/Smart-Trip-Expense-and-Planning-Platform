const mockFxRates = {
    INR: 1,
    USD: 95,
    EUR: 91
};

const convertCurrency = ({
    amount,
    fromCurrency,
    toCurrency
}) => {

    if (!mockFxRates[fromCurrency]) {
        throw new Error(
            `Unsupported currency: ${fromCurrency}`
        );
    }

    if (!mockFxRates[toCurrency]) {
        throw new Error(
            `Unsupported currency: ${toCurrency}`
        );
    }

    // Convert source currency to INR first
    const amountInINR =
        amount * mockFxRates[fromCurrency];

    // Convert INR to target currency
    const convertedAmount =
        amountInINR / mockFxRates[toCurrency];

    return Math.round(convertedAmount * 100) / 100;
};

export {
    convertCurrency
};
let totalPrice = userCart.reduce((totalPrice, currentValue) => {
    let price = totalPrice + currentValue.price
    return parseFloat(price.toFixed(2))
}, 0) 
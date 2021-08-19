function productQuantity(product, price, isAdd) {
    const productNumber = document.getElementById(product + "-quantity");
    let productNumberValue = parseInt(productNumber.value);
    if (isAdd == true) {
        productNumberValue = productNumberValue + 1;
    } else if (productNumberValue > 0) {
        productNumberValue = productNumberValue - 1;
    }
    productNumber.value = productNumberValue


    const productPrice = document.getElementById(product + "-price");
    productPrice.innerText = productNumberValue * price;
    totalPrice()
}

// Get input value
function getInputValue(input) {
    const productCount = document.getElementById(input + "-quantity");
    const productInnerText = parseInt(productCount.value);
    return productInnerText;
}

// Get Total Price
function totalPrice() {
    const jewelryPrice = getInputValue("jewelry") * 1500;
    const watchPrice = getInputValue("watch") * 400;
    const shoesPrice = getInputValue("shoes") * 500;
    const subtotal = jewelryPrice + watchPrice + shoesPrice
    const tax = subtotal / 10;
    document.getElementById("subtotal").innerText = subtotal
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = tax + subtotal;
}




// jewelry quantity plus
document.getElementById("jewelry-plus").addEventListener("click", function () {
    productQuantity("jewelry", 1500, true)

})

// jewelry quantity minus
document.getElementById("jewelry-minus").addEventListener("click", function () {
    productQuantity("jewelry", 1500, false)
})

// Watch quantity plus
document.getElementById("watch-plus").addEventListener("click", function () {
    productQuantity("watch", 400, true)
})

// Watch quantity minus
document.getElementById("watch-minus").addEventListener("click", function () {
    productQuantity("watch", 400, false)
})

// Shoes quantity plus
document.getElementById("shoes-plus").addEventListener("click", function () {
    productQuantity("shoes", 500, true)
})

// Shoes quantity minus
document.getElementById("shoes-minus").addEventListener("click", function () {
    productQuantity("shoes", 500, false)
})

// remove product from cart:
function removeItem(num) {
    document.getElementById("product-" + num).style.display = "none"
}

document.getElementById("remove-jewelry").addEventListener("click", function () {
    removeItem("1")
})
document.getElementById("remove-watch").addEventListener("click", function () {
    removeItem("2")
})
document.getElementById("remove-shoes").addEventListener("click", function () {
    removeItem("3")
})


// checkout:
document.getElementById("check-out").addEventListener("click", function () {
    const container = document.getElementById("container")
    if (document.getElementById("total").innerText > 0) {
        container.style.display = "none";
        document.getElementById("footer").style.display = "none"
        document.getElementById("demo").innerText = "♥♥♥♥♥ Congratulations Your order is confirmed ♥♥♥"

    } else {
        document.getElementById("demo2").innerText = "Please order now first"
    }

})
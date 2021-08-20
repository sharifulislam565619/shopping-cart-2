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
    let jewelryPrice = getInputValue("jewelry") * 1500;
    let watchPrice = getInputValue("watch") * 1000;
    let shoesPrice = getInputValue("shoes") * 500;
    let subtotal = jewelryPrice + watchPrice + shoesPrice
    let tax = subtotal / 10;
    document.getElementById("subtotal").innerText = subtotal
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = tax + subtotal;
}




// jewelry quantity plus
document.getElementById("jewelry-plus").addEventListener("click", function () {
        productQuantity("jewelry", 1500, true)

    }) *
    // jewelry quantity minus
    document.getElementById("jewelry-minus").addEventListener("click", function () {
        productQuantity("jewelry", 1500, false)
    })

// Watch quantity plus
document.getElementById("watch-plus").addEventListener("click", function () {
    productQuantity("watch", 1000, true)
})

// Watch quantity minus
document.getElementById("watch-minus").addEventListener("click", function () {
    productQuantity("watch", 1000, false)
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

// total value after remove element
document.getElementById("remove-jewelry").addEventListener("click", function () {
    removeItem("1")
    let jewelryPrice = getInputValue("jewelry") * 1500;
    let tax = document.getElementById("tax");
    tax.innerText = tax.innerText - (jewelryPrice / 10)
    const jQuantity = document.getElementById("jewelry-quantity")
    jQuantity.value = 0
    const sTotal = document.getElementById("subtotal")
    sTotal.innerText = sTotal.innerText - jewelryPrice;
    let total=document.getElementById("total")
    total.innerText =total.innerText- (jewelryPrice+(jewelryPrice / 10));



})
//total value after remove this element
document.getElementById("remove-watch").addEventListener("click", function () {
    removeItem("2")
    let watchPrice = getInputValue("watch") * 1000;
    let tax = document.getElementById("tax");
    tax.innerText = tax.innerText - (watchPrice / 10)
    const WQuantity = document.getElementById("watch-quantity")
    WQuantity.value = 0
    const sTotal = document.getElementById("subtotal")
    sTotal.innerText = sTotal.innerText - watchPrice;
    let total=document.getElementById("total")
    total.innerText =total.innerText- (watchPrice+(watchPrice / 10));

})
//total value after remove this element
document.getElementById("remove-shoes").addEventListener("click", function () {
    removeItem("3")
    let shoesPrice = getInputValue("shoes") * 500;
    let tax = document.getElementById("tax");
    tax.innerText = tax.innerText - (shoesPrice / 10)
    const sQuantity = document.getElementById("shoes-quantity")
    sQuantity.value = 0
    const sTotal = document.getElementById("subtotal")
    sTotal.innerText = sTotal.innerText - shoesPrice;
    let total=document.getElementById("total")
    total.innerText =total.innerText- (shoesPrice+(shoesPrice / 10));


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
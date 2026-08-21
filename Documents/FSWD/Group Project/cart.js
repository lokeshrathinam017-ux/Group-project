const cartitems = document.querySelectorAll(".cart-item");
const subtotalAmount = document.getElementById("subtotalAmount");

cartitems.forEach(function (items) {

    const addItems = items.querySelector(".add-cart");
    const removeItems = items.querySelector(".remove-cart");
    const cartValue = items.querySelector(".cart-value");
    const price = items.querySelector(".price-details");
    const deleteBtn = items.querySelector(".delete-btn");

    let priceVal = Number(items.dataset.price);

    let sum = Number(cartValue.textContent);


    // ADD
    addItems.addEventListener("click", function () {

        sum++;

        const totalprice = priceVal * sum;

        price.textContent = "₹" + totalprice;
        cartValue.textContent = sum;

        calculate();  // ⭐ update subtotal

    });


    // REMOVE
    removeItems.addEventListener("click", function () {

        if (sum > 0) {

            sum--;

            const totalprice = priceVal * sum;

            price.textContent = "₹" + totalprice;
            cartValue.textContent = sum;

            calculate();  // ⭐ update subtotal
        }

    });


    // DELETE
    deleteBtn.addEventListener("click", function () {

        items.style.display = "none";

        calculate();  // ⭐ update subtotal

    });

});


function calculate() {

    let total = 0;

    cartitems.forEach(function (items) {

        if (items.style.display !== "none") {

            const price = items.querySelector(".price-details");

            const priceValue = Number(
                price.textContent.replace("₹", "")
            );

            total += priceValue;
            console.log(total)
        }

    });


    subtotalAmount.textContent = "₹" + total;
    const delAmount = document.getElementById("deliveryAmount");
    const disAmount = document.getElementById("disAmount");
    const totalAmount = document.getElementById("totalVal")

    //Delivery Amount
    let delivery = 0;
    if (total > 200) {
        delivery = 0;
        delAmount.textContent = "Free";
    } else {
        delivery = 40;
        delAmount.textContent = "₹40";
    }

    let discount = 0;

    const coupon = localStorage.getItem("coupon");

    if (coupon === "CAMPUS20") {

        discount = 40;
        disAmount.textContent = "-₹40";

    } else {

        discount = 0;
        disAmount.textContent = "₹0";
    }



    const totalPri = total + delivery - discount;

    totalAmount.textContent = "₹" + totalPri;




}
calculate();

const couponInput = document.getElementById("couponInput");
const couponBtn = document.getElementById("couponBtn");
const couponMessage = document.getElementById("couponMessage");


if (couponBtn) {

    couponBtn.addEventListener("click", function () {

        const couponCode = couponInput.value.trim().toUpperCase();

        if (couponCode === "CAMPUS20") {

            couponBtn.textContent = "Applied";
            couponBtn.style.background = "green";
            couponBtn.style.color = "white";

            // Save coupon
            localStorage.setItem("coupon", "CAMPUS20");
            localStorage.setItem("couponDiscount", "40");

            calculate();

        } else {

            couponBtn.textContent = "Invalid";
            couponBtn.style.background = "red";
            couponBtn.style.color = "white";

            localStorage.removeItem("coupon");
            localStorage.removeItem("couponDiscount");

            calculate();
        }

    });

}






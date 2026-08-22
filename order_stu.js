var trackBtn = document.getElementById("track-btn")

trackBtn.addEventListener("click", function () {

    var orderId = "001"
    var orderStatus = "Preparing"

    localStorage.setItem("selectedOrderId", orderId)
    localStorage.setItem("selectedOrderStatus", orderStatus)

})
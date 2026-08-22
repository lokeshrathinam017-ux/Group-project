var orderId = localStorage.getItem("selectedOrderId")

var orderStatus = localStorage.getItem("selectedOrderStatus")

var orderIdText = document.getElementById("order-id")

var statusText = document.querySelector(".tracker-status")

orderIdText.textContent = "Order #" + orderId

statusText.textContent = orderStatus
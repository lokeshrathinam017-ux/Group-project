var rows = document.querySelectorAll("tbody tr")
var acceptButtons = document.querySelectorAll(".accept-btn")
var rejectButtons = document.querySelectorAll(".reject-btn")

function updateCards() {
    var pending = 0
    var accepted = 0
    var rejected = 0

    rows.forEach(function (row) {
        var status = row.querySelector(".order-status").textContent

        if (status === "Pending") pending++
        if (status === "Accepted") accepted++
        if (status === "Rejected") rejected++
    })

    document.getElementById("total-orders").textContent = rows.length
    document.getElementById("pending-orders").textContent = pending
    document.getElementById("accepted-orders").textContent = accepted
    document.getElementById("rejected-orders").textContent = rejected
}

acceptButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var row = button.closest("tr")
        var status = row.querySelector(".order-status")

        status.textContent = "Accepted"
        status.className =
            "order-status bg-green-100 text-green-700 px-3 py-1 rounded-lg"

        button.disabled = true
        row.querySelector(".reject-btn").disabled = true

        updateCards()
    })
})

rejectButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var row = button.closest("tr")
        var status = row.querySelector(".order-status")

        status.textContent = "Rejected"
        status.className =
            "order-status bg-red-100 text-red-600 px-3 py-1 rounded-lg"

        button.disabled = true
        row.querySelector(".accept-btn").disabled = true

        updateCards()
    })
})

updateCards()
var logoutButton = document.getElementById("logoutbtn")

logoutButton.addEventListener("click", function () {
    window.location.href = "admin.html"
})
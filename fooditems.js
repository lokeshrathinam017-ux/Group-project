var logoutbtn = document.getElementById("logoutbtn")

logoutbtn.addEventListener("click", function () {
    window.location.href = "admin.html"
})

var foodform = document.getElementById("food-form")
var foodbody = document.getElementById("food-list")

var count = 1

foodform.addEventListener("submit", function (event) {
    event.preventDefault()

    var name = document.getElementById("food-name").value
    var restaurant = document.getElementById("food-restaurant").value
    var price = document.getElementById("food-price").value
    var status = document.getElementById("food-status").value

    var row = document.createElement("tr")

    function addData(value) {
        var data = document.createElement("td")
        data.textContent = value
        data.className = "p-3 border-b border-gray-300"
        row.append(data)

        return data
    }

    var idData = addData("F00" + count)
    var nameData = addData(name)
    var restaurantData = addData(restaurant)
    var priceData = addData("₹" + price)
    var statusData = addData(status)

    var actiondata = document.createElement("td")
    actiondata.className = "p-3 border-b border-gray-300 flex gap-2"

    // Edit button
    var editbutton = document.createElement("button")
    editbutton.textContent = "Edit"
    editbutton.className =
        "border border-blue-500 text-blue-500 px-3 py-1 rounded-lg"

    editbutton.addEventListener("click", function () {

        var newName = prompt("Enter food name", nameData.textContent)

        var newRestaurant = prompt(
            "Enter restaurant",
            restaurantData.textContent
        )

        var newPrice = prompt(
            "Enter price",
            priceData.textContent.replace("₹", "")
        )

        var newStatus = prompt(
            "Enter Available or Unavailable",
            statusData.textContent
        )

        if (newName) {
            nameData.textContent = newName
        }

        if (newRestaurant) {
            restaurantData.textContent = newRestaurant
        }

        if (newPrice) {
            priceData.textContent = "₹" + newPrice
        }

        if (newStatus) {
            statusData.textContent = newStatus
        }
    })

    // Delete button
    var delbutton = document.createElement("button")
    delbutton.textContent = "Delete"
    delbutton.className =
        "border border-red-500 text-red-500 px-3 py-1 rounded-lg"

    delbutton.addEventListener("click", function () {
        row.remove()
    })

    actiondata.append(editbutton)
    actiondata.append(delbutton)

    row.append(actiondata)
    foodbody.append(row)

    count = count + 1

    foodform.reset()
})
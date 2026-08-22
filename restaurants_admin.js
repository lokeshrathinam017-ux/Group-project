
var logoutbtn = document.getElementById("logoutbtn")

logoutbtn.addEventListener("click", function () {
    window.location.href = "admin.html"
})


var restaurantform = document.getElementById("restaurant-form")
var restaurantbody = document.getElementById("restaurant-body")

var restaurants = []

var count = 1


restaurantform.addEventListener("submit", function (event) {

    event.preventDefault()

    var name = document.getElementById("restaurant-name").value
    var location = document.getElementById("restaurant-location").value
    var status = document.getElementById("restaurant-status").value

    var category = document.querySelector(
        'input[name="category"]:checked'
    ).value


    // Create restaurant object
    var restaurant = {
        id: "RES00" + count,
        name: name,
        category: category,
        location: location,
        status: status
    }


    // Add object into array
    restaurants.push(restaurant)


    // Display restaurants
    displayRestaurants()


    count = count + 1

    restaurantform.reset()
})



function displayRestaurants() {

    // Clear old table rows
    restaurantbody.innerHTML = ""


    // Loop through restaurant array
    restaurants.forEach(function (restaurant, index) {

        var row = document.createElement("tr")


        // Reusable function for creating td
        function addData(value) {

            var data = document.createElement("td")

            data.textContent = value

            data.className =
                "p-3 border-b border-gray-300"

            row.append(data)
        }


        addData(restaurant.id)

        addData(restaurant.name)

        addData(restaurant.category)

        addData(restaurant.location)

        addData(restaurant.status)


        // Action cell
        var actiondata = document.createElement("td")

        actiondata.className =
            "p-3 border-b border-gray-300"


        // Delete button
        var delbutton = document.createElement("button")

        delbutton.textContent = "Delete"

        delbutton.className =
            "border border-[#FF5A4F] text-[#FF5A4F] px-3 py-1 rounded-lg hover:bg-[#FF5A4F] hover:text-white"


        // Delete event
        delbutton.addEventListener("click", function () {

            deleteRestaurant(index)

        })


        actiondata.append(delbutton)

        row.append(actiondata)

        restaurantbody.append(row)

    })

}



function deleteRestaurant(index) {

    restaurants.splice(index, 1)

    displayRestaurants()

}
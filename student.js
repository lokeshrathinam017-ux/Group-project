var studentRows = document.querySelectorAll("tbody tr")
var totalStudents = document.getElementById("total-students")

totalStudents.textContent = studentRows.length;



var logoutbtn = document.getElementById("logoutbtn")

logoutbtn.addEventListener("click", function () {
    window.location.href = "admin.html"
})
document.getElementById("btn").onclick
= function () {
    if (
        document.getElementById("pass").value === "832011"
    ){
        window.location.href = "index2.html";
    }else{
        alert("Wrong password 😢")
    }
}

document.getElementById("btn").onclick
= function () {
    if (
        document.getElementById("pass").value === "love"
    ){
        window.location.href = "index2.html";
    }else{
        alert("Wrong password 😢")
    }
}

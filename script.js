document.getElementById("btn").onclick
= function () {
    if (
        document.getElementById("pass").value === "love"
    ){
        window.location.href = "index.html";
    }else{
        alert("Wrong password 😢")
    }
}
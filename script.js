function showMessage() { 
    alert("ʜᴇʟʟᴏ! ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍʏ ᴡᴇʙꜱɪᴛᴇ."); 
}

function changeBgColor() { 
    document.body.style.backgroundColor =rgb(176, 202, 187); 
}

function displayGreeting() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").innerHTML="Hello "+name+"! Welcome to my Website!";
}

function changeBgColorUser() {
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color;
}

function checkAge() {
    let age = document.getElementById("ageInput").value;
    if (age >= 18) {
        alert("ʏᴏᴜ'ʀᴇ ᴀɴ ᴀᴅᴜʟᴛ !");
    } else {
        alert("ʏᴏᴜ'ʀᴇ ꜱᴛɪʟʟ ᴀ ᴋɪᴅ !");
    }
}

function like() {
    document.getElementById("instagram").innerText ="ʏᴏᴜ ʟɪᴋᴇᴅ ᴛʜɪꜱ ♡";
}

function unlike() {
    document.getElementById("instagram").innerText ="";
}

function zoomIn(img) {
    img.style.transform = "scale(1.2)";
}

function zoomOut(img) {
    img.style.transform = "scale(1)";
}
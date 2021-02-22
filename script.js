function myClick() {
    var passLength = document.querySelector("#charLength").value
    console.log(passLength)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let genPass = ''
    const charLength = chars.length
    for ( let i = 0; i < passLength; i++ ) {
        genPass += chars.charAt(Math.floor(Math.random() * charLength));
    }
    console.log(genPass);
    addtoHTML(genPass);
}

function addtoHTML(genPass) {
    var passHTML = document.getElementById("generatedPass")
    var clipboardButton = document.getElementById("saveClipboard")
    passHTML.value = genPass;
    passHTML.hidden = false;
    clipboardButton.hidden = false;
    

    
}

function saveToClipboard() {
    var copyText = document.getElementById("generatedPass")
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the password: " + copyText.value); 
}
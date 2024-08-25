function upDate(previewPic) {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addFocus(previewPic) {
    previewPic.style.outline = "3px solid blue";  
    upDate(previewPic);  
}

function removeFocus(previewPic) {
    previewPic.style.outline = "none";  
    unDo();  
}

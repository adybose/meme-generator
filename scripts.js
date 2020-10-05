let fileInput = document.getElementById('image-input');
var canvas = document.getElementById('meme-canvas');
var ctx = canvas.getContext('2d');
let generateBtn = document.getElementById('generate-btn');
let topTextInput = document.getElementById('top-text');
let bottomTextInput = document.getElementById('bottom-text');


fileInput.addEventListener('change', function (ev) {
    console.log("hi");
    console.log(ev.target);  // logs uploaded files
    if (ev.target.files) {
        let file = ev.target.files[0];
        console.log(file);  // we only accept one file, the first one

        var reader = new FileReader();
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            console.log(image);
            console.log(e.target);
            image.onload = function () {
                console.log("loading");
                // var canvas = document.getElementById('meme-canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                // var ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0);
            }
        }
        reader.readAsDataURL(file);
    }
})

function captionMeme(topText, bottomText) {
    let fontSize;
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    fontSize = canvas.width / 15;
    ctx.font = fontSize + 'px Arial';
    ctx.lineWidth = 2;

    // draw top text
    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });

    // bottom text font size
    fontSize = canvas.width / 15;
    ctx.font = fontSize + 'px Arial';
    ctx.lineWidth = 2;

    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

generateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    captionMeme(topTextInput.value, bottomTextInput.value);
});

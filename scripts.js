let fileInput = document.getElementById('image-input');
var canvas = document.getElementById('meme-canvas');
var ctx = canvas.getContext('2d');
let generateBtn = document.getElementById('generate-btn');
let topTextInput = document.getElementById('top-text');
let bottomTextInput = document.getElementById('bottom-text');


fileInput.addEventListener('change', function (ev) {
    console.log("hi");
    console.log(ev.target.files);
    if (ev.target.files) {
        let file = ev.target.files[0];
        console.log(file);

        var reader = new FileReader();
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            console.log(image);
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

    fontSize = 25;
    ctx.font = '25px impact';
    ctx.lineWidth = 2;

    // draw top text
    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });

    // bottom text font size
    fontSize = 25;
    ctx.font = fontSize + 'px Impact';
    ctx.lineWidth = 2;

    ctx.textBaseline = 'bottom';
    bottomText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

generateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    captionMeme(topTextInput.value, bottomTextInput.value);
});

// let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx;

// function generateMeme(img, topText, bottomText, topTextSize, boottomTextSize) {
//     let fontSize;

//     canvas.width = canvas.height;
//     canvas.width = img.width;
//     canvas.height = img.height;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(img, 0, 0);

//     ctx.fillStyle = 'white';
//     ctx.strokeStyle = 'black';
//     ctx.textAlign = 'center';

//     // top text font size
//     fontSize = canvas.width * topTextSize;
//     ctx.font = fontSize + 'px impact';
//     ctx.lineWidth = fontSize / 15;

//     // draw top text
//     ctx.textBaseline = 'top';
//     topText.split('\n').forEach(function (t, i) {
//         ctx.fillText(t, canvas.width/2, i*fontSize, canvas.width);
//         ctx.strokeText(t, canvas.width/2, i*fontSize, canvas.width);
//     });

//     // bottom text font size
//     fontSize = canvas.width * boottomTextSize;
//     ctx.font = fontSize + 'px Impact';
//     ctx.lineWidth = fontSize / 15;

//     ctx.textBaseline = 'bottom';
//     bottomText.split('\n').forEach(function (t, i) {
//         ctx.fillText(t, canvas.width/2, canvas.height - i*fontSize, canvas.width);
//         ctx.strokeText(t, canvas.width/2, canvas.height - i*fontSize, canvas.width);
//     });
// }

// function preview_image() {
//     var reader = new FileReader();
//     reader.onload = function() {
//         var output = document.getElementById('output_image');
//         output.src = reader.result;
//     }
//     reader.readAsDataURL(event.target.files[0]);
// }

// function init() {
//     topTextInput = document.getElementById('top-text');
//     bottomTextInput = document.getElementById('bottom-text');
//     topTextSizeInput = document.getElementById('top-text-size-input');
//     bottomTextSizeInput = document.getElementById('bottom-text-size-input');
//     imageInput = document.getElementById('image-input');
//     generateBtn = document.getElementById('generate-btn');
//     canvas = document.getElementById('meme-canvas');

//     ctx = canvas.getContext('2d');

//     // canvas.width = canvas.height = 0;

//     imageInput.addEventListener('change', function() {
//         var reader = new FileReader();
//         reader.onload = function() {
//         // var output = document.getElementById('output_image');
//         canvas.src = reader.result;
//     }
//     reader.readAsDataURL(imageInput.files[0]);
//     })

//     generateBtn.addEventListener('click', function() {
//         let reader = new FileReader();
//         reader.onload = function() {
//             let img = new Image;
//             img.src = reader.result;
//             generateMeme(img, topTextInput.value, bottomTextInput.value, topTextSizeInput.value, bottomTextSizeInput.value);  
//         }
//         reader.readAsDataURL(imageInput.files[0]);
//     })
// }

// init();

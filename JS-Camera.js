// JavaScript source code
var stream;
var video;
navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(function (stream) {
    stream = stream;
    video = document.getElementById('video');
    video.src = window.URL.createObjectURL(stream);
    video.play();
}).catch(function (error) {
    console.error('mediaDevice.getUserMedia() error:', error);
    return;
});
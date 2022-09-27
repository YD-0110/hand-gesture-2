Webcam.set({
    height : 300,
    width : 350,
    image_format : 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(" #camera ");

function welcome() {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance("welcome to the hand gesture app you can click a photo of your hand gesture and the computer detect your gesture");
    synth.speak(utterThis);
}


function take_snapshot(){
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"  />';


    });
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance("image captured");
    synth.speak(utterThis);
}


console.log("ml5 version : ", ml5.version);


classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/03qXmaYLv/model.json", modelReady);


function modelReady(){
    console.log("model loaded!")
    
}

prediction_1 = "";
prediction_2 = "";



function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
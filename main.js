Webcam.set(
{
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
}
)

camera=document.getElementById("camera")

Webcam.attach(camera)

function capture(){
Webcam.snap(function (data_uri){
    document.getElementById("output").innerHTML="<img id='snapshot' src="+data_uri+">"
})
}

console.log("ml5 version",ml5.version)

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KiwfPEyDd/model.json",modelloaded)
function modelloaded(){
    console.log("Model is loaded successfully")
}

function check(){
    img=document.getElementById("snapshot")
    classifier.classify(img,gotresult)
}

function gotresult(error,results){
if(error){
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("object").innerHTML= results[0].label
    document.getElementById("accuracy").innerHTML= 100*(results[0].confidence).toFixed(2)+" %"
}
}
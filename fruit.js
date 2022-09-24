img = ""; 
status = ""; 
object = []; 

function setup(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    canvas = createCanvas(640, 420); 
    canvas.center(); 
    document.getElementById("status").innerHTML = "Status: Detecting Objects"; 
}

function preload(){
    img = loadImage('MG_2084-scaled.jpg'); 
}

function modelLoaded(){
    console.log("Model Loaded!"); 
    status = true; 
    objectDetector.detect(img, gotResult); 
}

function gotResult(error, results){
    if (error){
        console.log(error); 
    }
    console.log(results); 
    object = results; 
}

function draw(){
    image(img, 0, 0, 640, 420); 
    if(status != "" ){
        for(i= 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status : object detected"; 

            fill('#FF0000'); 
            percent = floor(object[i].confidence * 100); 
            text(object[i].label + "" + percent + "%" + object[i].x+15 + object[i].y+15); 
            noFill(); 
            stroke('#FF0000'); 
            rect(object[i].x, object[i].y, object[i].width, object[i].height); 
        }
    }
}
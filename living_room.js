img = "";
Status = "";
objects = [];
function preload(){
    img = loadImage("");
    
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Identifying Objects";

}
function draw(){
    image(img, 0, 0, 400, 400);
    if (Status != "")
    {
      for (i = 0; i<objects.length; i++)
        {
              document.getElementById("status").innerHTML = "Status: Object Identified";

              fill("#FF0000");
              stroke("#FF0000")
              noFill(); 
              percent = floor(objects[i].confidence *100);
              text(objects[i].label+" "+percent+"%" ,objects[i].x, objects[i].y);
              rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }

    }
}
function modelLoaded(){
console.log("Model Loaded");
Status = true;
objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
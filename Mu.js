
function Back()
{
    window.location = "index.html";
}

cocossd = "";
objects = [];
stat = "";
confidence = 0;
label = "";


function preload()
{
    img = loadImage("mug.jpg");
}
function setup()
{
    canvas = createCanvas(600,400);
    canvas.center();
    cocossd = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STATUS: Detecting objects...";
}
function modelLoaded()
{
    console.log("MODEL LOADED");
    cocossd.detect(img, gotResults);
    stat = true;
}
function gotResults(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }
  
  
  function draw() {
    if (stat != undefined) {
          image(img, 0, 0, 640, 420);
      for (var i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Objects Detected";
        console.log(objects[i].label);
        fill(255, 0, 0);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
        noFill();
        stroke(255, 0, 0);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        document.getElementById("NOO").innerHTML = objects.length;
      }
    }
  }
noseX = 0;
noseY = 0;
difference= 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
canvas = createCanvas(500,500)
canvas.position(700,250)
capture = createCapture(VIDEO);
capture.size(500, 500);

poseNet = ml5.poseNet(capture, loaded)
poseNet.on("pose", gotPoses);
}

function loaded()
{
    console.log("PoseNet has loaded");
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;

        rightWristX = results[0].pose.rightWrist.x;

        difference =floor(leftWristX - rightWristX);




    }
 
} 

function draw()
{
    background('#d96f86');
    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " +difference+"px";
    fill("#2b2526");
    stroke("#781c33");
    square(noseX, noseY, difference);

}
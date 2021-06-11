noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canavs = createCanvas(550,550);
    canavs.position(560,150);
     
    posenet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized!');
}

function draw() {
    background('#fffbdf');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = reslts[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWrist);

        console.log("leftWristX  = " + leftWristX + " rightWristX = " + rightWristX + "difference = "+ difference);
    }
}
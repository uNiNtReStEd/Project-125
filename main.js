left_Wrist_x = "";
right_Wrist_x = "";

difference = 0;

function preload()
{

}
function setup()
{
    canvas = createCanvas(700,450);
    canvas.position(800,200);

    video = createCapture(VIDEO);
    video.size(700,600);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#266943');
    fill("#D4A5AF");
    textSize(difference/2);
    text('Shreyank', 50, 400);

    document.getElementById("text_size").innerHTML = difference + " pixels.";
}

function modelLoaded()
{
    console.log("Activation accomplished.");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        left_Wrist_x = results[0].pose.leftWrist.x;
        right_Wrist_x = results[0].pose.rightWrist.x;

        console.log("the x co-ordinate for the left wrist is " + left_Wrist_x + "and the x co-ordinate for the right wrist is " + right_Wrist_x);
                
        difference = floor(left_Wrist_x - right_Wrist_x);
        console.log(difference);        
    }       
    
}


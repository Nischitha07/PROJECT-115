function preload(){

}

function setup(){
    canvas = createCanvas(500 , 400);
    canvas.center();
    fill('red');
    circle(50 , 50 , 50 , 50) ;
    fill(255, 204, 0);
    rect(75, 45, 390, 10);
    fill('red');
    circle(445 , 50 , 50 , 50) ;
    fill(255, 204, 0);
    rect(440, 75, 10, 280);
    fill(255, 204, 0);
    rect(45, 75, 10, 280);
    fill('red');
    circle(50 , 360, 50 , 50) ;
    fill(255, 204, 0);
    rect(75, 357, 350, 10);
    fill('red');
    circle( 445, 360, 50 , 50) ;
    video = createCapture(VIDEO);
    video.size(400 , 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function draw(){
    image(video , 60 , 70 , 385 , 280);
    
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }
  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x-40;
      noseY = results[0].pose.nose.y;
    }
  }
function take_snapshot()
{
    save("Filter_snapshot.png");
}
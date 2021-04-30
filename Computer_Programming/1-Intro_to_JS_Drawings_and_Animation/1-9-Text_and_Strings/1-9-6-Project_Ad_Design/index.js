// fill(255, 0, 0);
// textSize(30);
// text("Snoopes!", 10, 30);
// textSize(40);
// text("Snoopes!", 15, 80);
// textSize(50);
// text("Snoopes!", 30, 130);

var bodyX = 149;
var bodyY = 199;
var bodyW = 118;
var bodyH = 104;

var snoutW = bodyW*3/4;
var snoutH = bodyH/3;

var noseW = bodyW/4;
var noseH = bodyH/7;

var eyeW = bodyW/15;
var eyeH = bodyH/8;
var earW = bodyW/3;
var earH = bodyH;

noStroke();// to start

draw = function() {
    //to have Snoopes follow mouse
     bodyX = mouseX;
     bodyY = mouseY;
     
     //general Set up 
     background(0, 255, 221);
     fill(255, 0, 0);
     
     //TEXT
     textSize(30);
     text("Snoopes!", 10, 30);
     textSize(40);
     text("Snoopes!", 15, 80);
     textSize(50);
     text("Snoopes!", 30, 130);

     //Snoope body and outline colors
     fill(247, 242, 242);
     stroke(8,1,1);
     
     //snout
     ellipse(bodyX+67, bodyY+8, snoutW, 75);
     
     //skull
     ellipse(bodyX, bodyY, bodyW, bodyH);
     
     //invisible circle to hid lines
     noStroke();
     ellipse(bodyX+32, bodyY+8, snoutW, 75);
     
     //nose
     stroke(3,0,0);
     fill(13,1,1);
     ellipse(bodyX+70, bodyY+8, noseW, noseH);
     
     //collar
     rect(bodyX-29, bodyY+52, bodyW*0.5254, bodyH*0.09615, 30);
     
     //eyes
     ellipse(bodyX+5, bodyY-7, eyeW, eyeH);//left eye
     ellipse(bodyX+27, bodyY-13,  eyeW, eyeH);
     
     //ear
     ellipse(bodyX-50, bodyY+37, earW, earH);
     
     //snoopes smile
     strokeWeight(2);
     fill(250,247,247);
     arc(bodyX+42, bodyY+11, bodyW*0.8389, bodyH*0.57, 91, 126);
     
     //when not following mouse .. use this block to self-animate snoopes
     //bodyX ++;
     //bodyY-+ 1;
     if(bodyX === 400) {
         bodyX = 20;
         bodyY = 300;
         //bodyW = 118;
         //bodyH = 104;
     }
     
};



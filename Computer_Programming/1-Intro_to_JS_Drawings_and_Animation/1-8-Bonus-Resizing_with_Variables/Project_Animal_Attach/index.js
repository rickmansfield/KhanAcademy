var bodyX = 149;
var bodyY = 199;
var bodyW = 118;
var bodyH = 104;
var snoutW = bodyW*3/4;
var snoutH = bodyH/3;
var noseW = bodyW/4;
var noseH = bodyH/7;
var eyeW = bodyW*1/15;
var eyeH = bodyH/8;
var earW = bodyW/3;
var earH = bodyH/1;

noStroke();

draw = function() {
    
    background(207, 254, 255);
    fill(250, 249, 245);
    stroke(8, 1, 1);
    ellipse(bodyX+67, bodyY+8, snoutW, 75); // snout
    ellipse(bodyX, bodyY, bodyW, bodyH); // skull
    noStroke();
    ellipse(bodyX+32, bodyY+8, snoutW, 75); // invisible circle snout
    
    stroke(3, 0, 0);
    fill(13, 1, 1);
    ellipse(bodyX+70, bodyY+8, noseW, noseH); // nose
    // bezier(114, 238, 126, 259, 67, 389, 104, 194);
    
    rect(bodyX-29, bodyY+52, bodyW*0.5254, bodyH*0.09615, 30);//collar
    
    ellipse(bodyX+5, bodyY-7, eyeW, eyeH); // left eye
    ellipse(bodyX+27, bodyY+-13, eyeW, eyeH); // right eye
    
    ellipse(bodyX-50, bodyY+37, earW, earH); // nose
    strokeWeight(2);
    fill(250, 247, 247);
    
    arc(bodyX+42, bodyY+11, bodyW*0.8389, bodyH*0.57, 91, 126);//Snoopy's Smile
    
    bodyX +=1;
    bodyY -=1;
    
    if (bodyX === 400) {
        bodyX = 20;
        bodyY = 300;
        // bodyW = 118;
        // bodyH = 104;
    }
   
};

var xPos = 25;
var yPos = 200;
var xPos2 = 250;
var yPos2 = 100;
var moonSize = 30; 

const draw = function() {
    background(29, 40, 115);
    fill(108, 125, 133);
    
    rect(50, 307, 50, 100, 0);//sillo 
    triangle(103, 307, 77, 285, 49, 309);//sillo roof
    rect(161, 278, 60, 125, 7);//barn Right side
    
    triangle(225, 278, 157, 227, 100, 280);//barn room
    rect(101, 278, 60, 125, 8);//barn Left side
    
    fill(255, 0, 0);
    rect(162, 342, 30, 125, 34);//barn door Right side
    rect(133, 342, 30, 151, 34);//barn Left side
    
    //Moon
    fill(242, 242, 237);
    ellipse(xPos2, yPos2, moonSize, moonSize);
    
    xPos2 += 0.10;
    yPos2 -= 0.05;
    moonSize += 0.075;
    
    //Star1
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    xPos ++;
    yPos -= 0.5;

};




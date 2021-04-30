noStroke();
var x = 140;
var y = 264;
var faceSize = 323;
var eyeSize = 1/8*faceSize;

// ears
var earSize=faceSize*1/2;
fill(89, 52, 17);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

// face
fill(163, 113, 5);
ellipse(x, y, faceSize, faceSize);



//eyes 
fill(0, 0, 0);
// ellipse(x-(faceSize*(40/160)), y-(faceSize*((200-180)/160)), eyeSize, eyeSize);//left eye
ellipse(x-faceSize/4, y-faceSize/8, eyeSize, eyeSize);//left eye cleaner code

//ellipse(x+(faceSize*(40/160)), y-(faceSize*((200-180)/160)), eyeSize, eyeSize);//right eye
ellipse(x+faceSize/4, y-faceSize/8, eyeSize, eyeSize);//right eye cleaner code


//nose
fill(89, 52, 20);
ellipse(x, y+faceSize/8, faceSize*4/15, faceSize/5);


function setup() {
  createCanvas(600, 600);
}
function draw() {
  background("#A2D2FF");
  fill("#FFE45E")
  stroke("#ffeb85")
  strokeWeight(10); //large outline
circle(530, 70, 100)
  strokeWeight(0);//outline thickness
  fill("#3D8F5E");
  rect(0, 500, 600, 100);

  let y_torre = 200;//Torre destra
  strokeWeight(0);
  fill("#768593");
  rect(350, y_torre, 150, 300);

  strokeWeight(0); //Torre sinistra
  fill("#768593");
  rect(50, y_torre, 150, 300);

  strokeWeight(0);//Castello centrale
  fill("#768593");
  rect(200, y_torre+85, 150, 215);

  let x_merli = 350;//Merlature torre destra
  for(let i=0; i<3; i++){
    fill("#768593");
    let merli_height = 30;
    rect(x_merli, y_torre-merli_height , 30, merli_height);
    x_merli += 60;
  }

  x_merli=50;//Merlature torre sinistra
  for(let i=0; i<3; i++){
    fill("#768593");
    let merli_height = 30;
    rect(x_merli, y_torre-merli_height, 30, merli_height);
    x_merli += 60;
  }

  x_merli=230;//Merlature castello centrale
  for(let i=0; i<2; i++){
    fill("#768593");
    let merli_height = 30;
    rect(x_merli, y_torre-merli_height+85 , 30, merli_height);
    x_merli += 60;
  }

let y_mattoni = 500; //Mattoni torre destra
for(let j=0; j<5; j++){
let x_mattoni = 350;
for(let i=0; i<3; i++){
  fill("#515C67");
  let mattoni_height = 15;
  rect(x_mattoni, y_mattoni-mattoni_height, 30, mattoni_height);
  x_mattoni += 60;
}
y_mattoni=y_mattoni-60;
}

y_mattoni = 500; //Mattoni torre sinistra
for(let j=0; j<5; j++){
let x_mattoni = 50;
for(let i=0; i<3; i++){
  fill("#515C67");
  let mattoni_height = 15;
  rect(x_mattoni, y_mattoni-mattoni_height, 30, mattoni_height);
  x_mattoni += 60;
}
y_mattoni=y_mattoni-60;
}

y_mattoni = 470; //Mattoni castello centrale
for(let j=0; j<3; j++){
let x_mattoni = 200;
for(let i=0; i<3; i++){
  fill("#515C67");
  let mattoni_height = 15;
  rect(x_mattoni, y_mattoni-mattoni_height, 30, mattoni_height);
  x_mattoni += 60;
}
y_mattoni=y_mattoni-60;
}

let y2_mattoni = 470;//Altri mattoni torre destra
for(let k=0; k<5; k++){
let x2_mattoni = 380;
for(let l=0; l<2; l++){
  fill("#515C67");
  let mattoni_height = 15;
  rect(x2_mattoni, y2_mattoni-mattoni_height, 30, mattoni_height);
  x2_mattoni += 60;
}
y2_mattoni=y2_mattoni-60;
}

y2_mattoni = 470;//Altri mattoni torre sinistra
for(let k=0; k<5; k++){
let x2_mattoni = 80;
for(let l=0; l<2; l++){
  fill("#515C67");
  let mattoni_height = 15;
  rect(x2_mattoni, y2_mattoni-mattoni_height, 30, mattoni_height);
  x2_mattoni += 60;
}
y2_mattoni=y2_mattoni-60;
}

y2_mattoni = 500;//Altri mattoni castello centrale
for(let k=0; k<4; k++){
let x2_mattoni = 230;
for(let l=0; l<2; l++){
  fill("#515C67");
  let mattoni_height = 15;
  rect(x2_mattoni, y2_mattoni-mattoni_height, 30, mattoni_height);
  x2_mattoni += 60;
}
y2_mattoni=y2_mattoni-60;
}

fill("#A2D2FF")//Finestra
circle(425, 280, 60);
rect(395, 280, 60, 45);
circle(125, 280, 60);
rect(95, 280, 60, 45);

fill("#582f0e")//Porta
circle(275, 400, 90);
rect(230, 400, 90, 100);


  //displays the x and y position of the mouse on the canvas
  //stroke("white");
  //strokeWeight(1);
  //fill(255);//white text
  //textSize(50)
  //text(`${mouseX}, ${mouseY}`, 50, 50);
}

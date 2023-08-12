/**
 * Single Population Analysis
 * 
 */

let sceneIndex = 1;
let arrL;
let arrR;
let newPage;
let oldPage;
let oldPageX;
let moveLeft;
let font;
let tutorialImg;
let questionImg;
let cityTierImg;
let breakerImg;
let compromisingImg;
let giftImg;
let pornImg;
let drawImg;

/* Load all assets. */
function preload() {
  tutorialImg = loadImage("assets/tutorial.png");

  // load all of images
  arrL = loadImage("assets/arr_l.png");
  arrR = loadImage("assets/arr_r.png");
  maleImg = loadImage("assets/male.png");
  maleHalfImg = loadImage("assets/male.png");
  femaleImg = loadImage("assets/female.png");
  femaleHalfImg = loadImage("assets/female.png");
  maleColorImg = loadImage("assets/male-color.png");
  femaleColorImg = loadImage("assets/female-color.png");

  for (let i = 0; i < 5; i++) {
    cityImgs.push(loadImage("assets/city-" + i + ".png"));
  }

  for (let i = 1; i < 9; i++) {
    btnImgs.push(loadImage("assets/btn" + i + ".png"));
  }

  // load other images
  cowherdImg = loadImage("assets/cowherd.png");
  maidImg = loadImage("assets/weavingMaid.png");
  maleImg1 = loadImage("assets/male1.png");
  femaleImg1 = loadImage("assets/female1.png");
  handImg = loadImage("assets/hand.png");
  bgImg = loadImage("assets/bg1.png");

  for (let i = 1; i < 11; i++) {
    btnImgs2.push(loadImage("assets/ebtn" + i + ".png"));
  }

  // load other images
  manImg = loadImage("assets/eman.png");
  womanImg = loadImage("assets/ewoman.png");
  maleImg2 = loadImage("assets/emale.png");
  femaleImg2 = loadImage("assets/efemale.png");
  handImg2 = loadImage("assets/ehand.png");
  bgImg2 = loadImage("assets/ebg.jpg");

  for (let i = 1; i <= imgNum; i++) {
    imgs.push(loadImage("assets/img (" + i + ").png"));
  }

  girlImg = loadImage("assets/girl.png");
  result = loadStrings('assets/doc.txt');

  for (let i = 1; i <= giftImgNum; i++) {
    giftImgs.push(loadImage("assets/gift (" + i + ").png"));
  }

  questionImg = loadImage("assets/question.png");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('my-p5-canvas');
  textFont('Poppins');
  setupScene1();

  cityTierImg = createImg("assets/city-tier.gif");
  cityTierImg.hide();
  compromisingImg = createImg("assets/compromising area.gif");
  compromisingImg.hide();
  giftImg = createImg("assets/bethrothal gift.gif");
  giftImg.hide();
  pornImg = createImg("assets/watching porn.gif");
  pornImg.hide();
  drawImg = createImg("assets/Drawing.gif");
  drawImg.hide();
  breakerImg = createImg("assets/deal-breakers.gif");
  breakerImg.hide();
}

function draw() {
  // draw background
  background("#ffffff");
  if (sceneIndex == 1) {
    drawScene1();
  }

  if (sceneIndex == 2) {
    drawScene2();
  }

  if (sceneIndex == 3) {
    drawScene3();
    showTutorial(cityTierImg);
  }

  if (sceneIndex == 4) {
    drawScene4();
    showTutorial(breakerImg);
  }

  if (sceneIndex == 5) {
    drawScene5();
    showTutorial(compromisingImg);
  }

  if (sceneIndex == 6) {
    drawScene6();
    showTutorial(giftImg);
  }

  if (sceneIndex == 7) {
    drawScene7();
    showTutorial(pornImg);
  }

  if (sceneIndex == 8) {
    drawScene8();
    showTutorial(drawImg);
  }

  if (sceneIndex == 9) {
    drawScene9();
  }

  if (sceneIndex == 10) {
    drawScene10();
  }

  newPage = get();

  if (oldPage != null && (oldPageX > -width || oldPageX < width * 2)) {
    push();
    imageMode(CENTER);
    drawingContext.shadowColor = color("#827D7D");
    drawingContext.shadowBlur = height * 0.02;
    image(oldPage, oldPageX, height / 2, width, height);
    if (moveLeft) {
      oldPageX = oldPageX - (width - oldPageX) / 15;
    } else {
      oldPageX = oldPageX + oldPageX / 15;
    }
    pop();
  }

  push();
  imageMode(CENTER);
  push();
  if (overButton(width * 0.02 - height * 0.04, height / 2 - height * 0.04, height * 0.08, height * 0.08)) {
    drawingContext.shadowColor = color("#A3B1C6");
    drawingContext.shadowBlur = height * 0.01;
  }

  if (sceneIndex > 1) {
    image(arrL, width * 0.02, height / 2, height * 0.08, height * 0.08);
  }
  pop();

  push();
  if (overButton(width * 0.98 - height * 0.04, height / 2 - height * 0.04, height * 0.08, height * 0.08)) {
    drawingContext.shadowColor = color("#A3B1C6");
    drawingContext.shadowBlur = height * 0.01;
  }
  if (sceneIndex < 10) {
    image(arrR, width * 0.98, height / 2, height * 0.08, height * 0.08);
  }
  pop();
  pop();
}

function setupScene() {
  textStyle(NORMAL);
  if (sceneIndex == 1) {
    setupScene1();
  }


  if (sceneIndex == 2) {
    setupScene2();
  }

  if (sceneIndex == 3) {
    setupScene3();
  }

  if (sceneIndex == 4) {
    setupScene4();
  }

  if (sceneIndex == 5) {
    setupScene5();
  }

  if (sceneIndex == 6) {
    setupScene6();
  }

  if (sceneIndex == 7) {
    setupScene7();
  }

  if (sceneIndex == 8) {
    setupScene8();
  }

  if (sceneIndex == 9) {
    setupScene9();
  }

  if (sceneIndex == 10) {
    setupScene10();
  }
  oldPage = newPage;
  oldPageX = width / 2;
}

function overButton(x, y, w, h) {
  if (mouseX > x && mouseX < x + w
    && mouseY > y && mouseY < y + h) {
    return true;
  }

  return false;
}

function showTutorial(img) {
  let qImgSize = height * 0.18;
  let qImgX = width * 0.958;
  let qImgY = height * 0.12;
  push();
  imageMode(CENTER);
  image(questionImg, qImgX, qImgY, qImgSize, qImgSize);

  if (dist(qImgX, qImgY, mouseX, mouseY) < qImgSize / 2) {
    select('#lineChart').hide();
    noStroke();
    fill(255, 220);
    rect(0, 0, width, height);
    stroke(0);
    strokeWeight(width / 200);
    noFill();
    let imgW1 = width * 0.75;
    let imgH1 = 294 / 600 * imgW1;
    let imgW2 = width * 0.4;
    rect(width * 0.5 - imgW1 / 2, height * 0.55 - imgH1 / 2, imgW1, imgH1);
    image(tutorialImg, width / 2, height * 0.08, imgW2, imgW2 * tutorialImg.height / tutorialImg.width);
    // image(img, width / 2, height * 0.55, imgW1, imgH1);
    img.show();
    img.position(width / 2 - imgW1 / 2, height * 0.55 - imgH1 / 2);
    img.size(imgW1, imgH1);
  } else if (sceneIndex == 8) {
    select('#lineChart').show();
    img.hide();
  } else {
    img.hide();
  }
  pop();
}

function mouseClicked() {
  if (sceneIndex > 1 && overButton(width * 0.02 - height * 0.04, height / 2 - height * 0.04, height * 0.08, height * 0.08)) {
    sceneIndex--;
    moveLeft = false;
    setupScene();
  }

  if (sceneIndex < 10 && overButton(width * 0.98 - height * 0.04, height / 2 - height * 0.04, height * 0.08, height * 0.08)) {
    sceneIndex++;
    moveLeft = true;
    setupScene();
  }

  if (sceneIndex == 2 && overButton(width * 0.2, height * 0.2, width * 0.6, height * 0.6)) {
    page = 2;
  }
  if (sceneIndex == 4) {
    for (let i = 0; i < 2; i++) {
      customBtns[i].clickButton();
    }

    for (let i = 2; i < customBtns.length; i++) {
      if (customBtns[i].overButton()) {
        for (let j = 2; j < customBtns.length; j++) {
          if (i != j) {
            customBtns[j].selected = false;
          }
        }

        customBtns[i].selected = !customBtns[i].selected;
        if (customBtns[i].selected) {
          index = i - 2;
          if (customBtns[0].selected) {
            let newAngle = map(maleData1[i - 2], 0, 100, PI * 3 / 2 - PI / 18, PI * 3 / 2 - PI / 18 - PI / 6);
            pct1 = 0.0;
            beginAngle1 = angle1;
            endAngle1 = newAngle;
            distAngle1 = endAngle1 - beginAngle1;
          }

          if (customBtns[1].selected) {
            let newAngle = map(femaleData1[i - 2], 0, 100, PI * 3 / 2, PI * 3 / 2 + PI / 6);
            pct2 = 0.0;
            beginAngle2 = angle2;
            endAngle2 = newAngle;
            distAngle2 = endAngle2 - beginAngle2;
          }
        } else {
          index = -1;
          if (customBtns[0].selected) {
            pct1 = 0.0;
            beginAngle1 = angle1;
            endAngle1 = PI * 3 / 2 - PI / 18;
            distAngle1 = endAngle1 - beginAngle1;
          }

          if (customBtns[1].selected) {
            pct2 = 0.0;
            beginAngle2 = angle2;
            endAngle2 = PI * 3 / 2;
            distAngle2 = endAngle2 - beginAngle2;
          }
        }
      }
    }
  }

  if (sceneIndex == 5) {
    for (let i = 0; i < 2; i++) {
      customBtns2[i].clickButton();
    }

    for (let i = 2; i < customBtns2.length; i++) {
      if (customBtns2[i].overButton()) {
        for (let j = 2; j < customBtns2.length; j++) {
          if (i != j) {
            customBtns2[j].selected = false;
          }
        }

        customBtns2[i].selected = !customBtns2[i].selected;
        if (customBtns2[i].selected) {
          index2 = i - 2;
          if (customBtns2[0].selected) {
            pct21 = 0.0;
            womanBeginX = womanX;
            womanBeginY = womanY;
            womanEndX = map(femaleData2[index2], 0, 100, boxW2 / 2 + 50, boxW2 / 2);
            womanEndY = map(femaleData2[index2], 0, 100, boxH2 / 2 + 170, boxH2 / 2 + 20);;
            womanDistX = womanEndX - womanBeginX;
            womanDistY = womanEndY - womanBeginY;
          }

          if (customBtns2[1].selected) {
            pct22 = 0.0;
            manBeginX = manX;
            manBeginY = manY;
            manEndX = map(maleData2[index2], 0, 100, boxW2 / 2 - 200, boxW2 / 2 - 150);
            manEndY = map(maleData2[index2], 0, 100, boxH2 / 2 + 170, boxH2 / 2 + 20);;
            manDistX = manEndX - manBeginX;
            manDistY = manEndY - manBeginY;
          }
        } else {
          index2 = -1;

          if (customBtns2[0].selected) {
            pct21 = 0.0;
            womanBeginX = womanX;
            womanBeginY = womanY;
            womanEndX = boxW2 / 2 + 50;
            womanEndY = boxH2 / 2 + 170;
            womanDistX = womanEndX - womanBeginX;
            womanDistY = womanEndY - womanBeginY;
          }

          if (customBtns2[1].selected) {
            pct22 = 0.0;
            manBeginX = manX;
            manBeginY = manY;
            manEndX = boxW2 / 2 - 200;
            manEndY = boxH2 / 2 + 170;
            manDistX = manEndX - manBeginX;
            manDistY = manEndY - manBeginY;
          }
        }
      }
    }
  }

  if (sceneIndex == 7) {
    if (overButton(width * 0.6, height * 0.12, height * 0.04, height * 0.02)) {
      selectRect = 0;
    }

    if (overButton(width * 0.6, height * 0.16, height * 0.04, height * 0.02)) {
      selectRect = 1;
    }

    if (overButton(width * 0.6, height * 0.20, height * 0.04, height * 0.02)) {
      selectRect = 2;
    }

    for (let i = 1; i <= 5; i++) {
      if (abs(mouseX - (width * 0.73 + width * 0.02 + yearGap * i)) < 5) {
        if (selectRect == 0) {
          predVals1[i] = getVal(mouseY);
          accuracy1[i] = 1 - abs(predVals1[i] - birthData[i]) / birthData[i];
        }
        if (selectRect == 1) {
          predVals2[i] = getVal(mouseY);
          accuracy2[i] = 1 - abs(predVals2[i] - marriageData[i]) / marriageData[i];
        }
        if (selectRect == 2) {
          predVals3[i] = getVal(mouseY);
          accuracy3[i] = 1 - abs(predVals3[i] - divorceData[i]) / divorceData[i];
        }
      }
    }
  }
}

/* Drag the mouse across the page. */
function mouseDragged() {
  if (sceneIndex == 3) {
    if (!dragging) {
      dragging = true;
      pmx = mouseX;
      pmy = mouseY;
    }

    // select an image
    if (dragging && selectIndex == -1) {
      for (let i = 0; i < dragImgs.length; i++) {
        if (dragImgs[i].hover() && !dragImgs[i].fixed) {
          selectIndex = i;
        }
      }
    }

    if (selectIndex != -1) {
      let item = dragImgs[selectIndex];
      item.x = mouseX - pmx + item.startX;
      item.y = mouseY - pmy + item.startY;
    }
  }
}

/* This function fires after the mouse has been released. */
function mouseReleased() {
  if (sceneIndex == 3) {
    dragging = false;

    if (selectIndex != -1) {
      let item = dragImgs[selectIndex];
      if (dist(item.x, item.y, item.endX, item.endY) < item.img.width / 2) {
        item.x = item.endX;
        item.y = item.endY;
        item.fixed = true;
        displayIndex = selectIndex;
      }
      selectIndex = -1;
    }
  }
}

/* Every time the browser window is resized. */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* Display text at a fixed length. */
function showText(str, x, y, len, ts) {
  // split strings in a fixed length
  let strArr = [];
  for (let i = 0; i < str.length; i += len) {
    strArr.push(str.slice(i, i + len));
  }

  // display text line by line
  for (let i = 0; i < strArr.length; i++) {
    text(strArr[i], x, y + i * ts);
  }
}

///////////////////////----01----//////////////////////////
/* Divorce, marriage and birthrate trend */
let title11 = "Divorce, marriage and birthrate trend";
let title12 = "2000 to 2021";
let colors1 = ["#fcce10", "#FFC0CB", "#5ab1ef"];
let overNum1 = "";
let overNum2 = "";
let textStr1 = "In China, divorce, marriage, and        birthrate are pivotal demographic       indicators reflecting societal changes. While many young online users desire   love, fewer are keen on marriage.A       survey on Sina Weibo showed 16.4 % of  5, 492 young users wanted love, but      only 3.4 % were open to marriage.Their  views on having children were mixed,    with minimal interest in a second child. Both genders showed similar            sentiments towards childbirth.There's   a need for a captivating narrative,     especially for the public and social    scientists.This project seeks to gamify the data presentation. [1]";

function setupScene1() {
  select('#lineChart').show();
  select('#fullLineChart').style('visibility', 'hidden');
}

function drawScene1() {
  // title
  let titleX = width * 0.50;
  let titleY = height * 0.05;
  let titleGap = height * 0.05;
  push();
  noStroke();
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill("#4f4f4f");
  textSize(width / 40);
  text(title11, titleX, titleY);
  pop();
  fill("#848484");
  textSize(width / 90);
  text(title12, titleX, titleY + titleGap);

  // number
  textAlign(LEFT, CENTER);
  textSize(width / 50);
  if (overButton(width * 0.07, height * 0.15, width * 0.64, height * 0.25)) {
    overNum1 = "14.57";
    overNum2 = "11.90";
  }

  if (overButton(width * 0.07, height * 0.40, width * 0.64, height * 0.25)) {
    overNum1 = "9.90";
    overNum2 = "6.10";
  }

  if (overButton(width * 0.07, height * 0.65, width * 0.64, height * 0.25)) {
    overNum1 = "3.02";
    overNum2 = "0.90";
  }

  let numY = height * 0.16;
  fill("#4f4f4f");
  text("Max:", width * 0.08, numY);
  text("Min:", width * 0.22, numY);
  fill("#e63b27");
  text(overNum1, width * 0.14, numY);
  text(overNum2, width * 0.28, numY);

  // sidenote
  textAlign(LEFT, CENTER);
  textSize(width / 100);
  fill(colors1[0]);
  rect(width * 0.6, height * 0.12, height * 0.04, height * 0.02, height * 0.004);
  fill(colors1[1]);
  rect(width * 0.6, height * 0.16, height * 0.04, height * 0.02, height * 0.004);
  fill(colors1[2]);
  rect(width * 0.6, height * 0.20, height * 0.04, height * 0.02, height * 0.004);
  fill("#4f4f4f");
  text("Birth rate", width * 0.6 + height * 0.06, height * 0.13);
  text("Marriage rate", width * 0.6 + height * 0.06, height * 0.17);
  text("Divorce rate", width * 0.6 + height * 0.06, height * 0.21);
  noStroke();
  textSize(width / 180);
  fill("#a2a2a2");
  text("Per 1000 people", width * 0.01, height * 0.30);

  // text
  fill("#bbb6b6");
  textSize(width / 100);
  showText(textStr1, width * 0.75, height * 0.35, 40, width / 70);
}

///////////////////////----02----//////////////////////////
/* single population */

// all of the images
let maleImg;
let maleHalfImg;
let femaleImg;
let femaleHalfImg;
let maleColorImg;
let femaleColorImg;
let imgSize;

let title21 = "Share of singles population in China";
let titleSize;
let gender = "Male / Female";
let maleText = "With a population of 723.34 million males, or 51.24 percent, and 688.44 million females, or 48.76       percent, males outnumber females by 34.9 million,   equivalent to the population of one country in      Morocco in 2019. [2]";
let femaleText1 = "The proportion of young men who are single is higher than the proportion of young women in all age      groups, and the proportion of men who are single is lower than the proportion of women until they reach middle or old age. This conclusion was also verified in the seventh population census, when Fu Linghui, spokesman for the National Bureau of Statistics,    told a State Council press conference on 17 May that there were more than 17 million more men than women in the main marriage and childbearing age group of 20 to 40 years old. [2]"
let femaleText2 = "Translated with www.DeepL.com / Translator(free     version) ";
let smallText1 = "Around 55.6 percent of men      and about 39 percent of     women are single in China. [2]";
let smallText2 = "Around 55.6 percent of men and about 39 percent of women are single in China. [2]";

// objects
let heads1;  // male
let heads2;  // female

// page
let page = 1;

// data
let maleData = 55.6;
let femaleData = 39.2;

// color
let maleColor = "#00bcd5";
let femaleColor = "#00bcd5";
let titleColor = "#9e9e9e";

function setupScene2() {
  heads1 = [];
  heads2 = [];
  select('#lineChart').hide();
  titleSize = min(width, height) * 0.08;
  imageMode(CENTER);
  imgSize = titleSize;
  maleImg.resize(imgSize, imgSize);
  femaleImg.resize(imgSize, imgSize);
  maleColorImg.resize(imgSize, imgSize);
  femaleColorImg.resize(imgSize, imgSize);
  maleHalfImg.resize(imgSize, imgSize);
  femaleHalfImg.resize(imgSize, imgSize);
  initHeads();
  page = 1;
}

function drawScene2() {
  // title and gender
  push();
  noStroke();
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(titleColor);
  textSize(titleSize);
  text(title21, width / 2, height * 0.1);
  pop();
  noStroke();
  textAlign(CENTER, CENTER);
  fill(titleColor);
  textSize(titleSize * 0.4);
  text(gender, width / 2, height * 0.1 + titleSize * 1.2);

  // gender heads
  push();
  translate(width * 0.35, height * 0.22);
  if (page == 2) {
    translate(-width * 0.02, height * 0.08);
    scale(1.2);
  }
  for (let i = 0; i < heads1.length; i++) {
    heads1[i].show();
  }
  pop();

  push();
  translate(width * 0.65, height * 0.22);
  if (page == 2) {
    translate(width * 0.02, height * 0.08);
    scale(1.2);
  }
  for (let i = 0; i < heads2.length; i++) {
    heads2[i].show();
  }
  pop();

  // display text
  if (page == 1) {
    fill(titleColor);
    textSize(titleSize * 0.22);
    textAlign(LEFT);
    showText(maleText, width * 0.23, height * 0.68, 52, titleSize * 0.28);
    showText(femaleText1, width * 0.53, height * 0.68, 52, titleSize * 0.28);
    // showText(femaleText2, width * 0.53, height * 0.95, 52, titleSize * 0.28);
  }

  if (page == 2) {
    fill(maleColor);
    textSize(titleSize * 0.5);
    textAlign(RIGHT);
    text("Male", width * 0.18, height * 0.4);
    textSize(titleSize * 0.8);
    text(maleData + "/100", width * 0.18, height * 0.48);
    fill(titleColor);
    textSize(titleSize * 0.26);
    showText(smallText1, width * 0.18, height * 0.54, 30, titleSize * 0.30);

    fill(femaleColor);
    textSize(titleSize * 0.5);
    textAlign(LEFT);
    text("Female", width * 0.81, height * 0.5);
    textSize(titleSize * 0.8);
    text(femaleData + "/100", width * 0.81, height * 0.58);
    fill(titleColor);
    textSize(titleSize * 0.26);
    showText(smallText1, width * 0.81, height * 0.64, 30, titleSize * 0.30);
  }
}

/* Initialize the head array. */
function initHeads() {
  // male
  for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < i; j++) {
      let nx = - (i - 1) / 2 * imgSize * 1.6 + j * imgSize * 1.6;
      let ny = imgSize * i * 1.2;
      let head = new GenderHead(maleImg, nx, ny);
      heads1.push(head);
    }
  }

  // partially filled
  maleHalfImg.loadPixels();
  for (let y = 0; y < maleImg.height; y++) {
    for (let x = 0; x < (maleData - floor(maleData / 10) * 10) / 10 * maleImg.width; x++) {
      let col = maleHalfImg.get(x, y);
      if (col[0] != 0) {
        writeColor(maleHalfImg, x, y, 0, 188, 213);
      }
    }
  }
  maleHalfImg.updatePixels();

  for (let i = 0; i < heads1.length; i++) {
    if (i < floor(maleData / 10)) {
      heads1[i].img = maleColorImg;
    }

    if (i == floor(maleData / 10)) {
      heads1[i].img = maleHalfImg;
    }
  }

  // female
  for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < i; j++) {
      let nx = - (i - 1) / 2 * imgSize * 1.6 + j * imgSize * 1.6;
      let ny = imgSize * i * 1.2;
      let head = new GenderHead(femaleImg, nx, ny);
      heads2.push(head);
    }
  }

  // partially filled
  femaleHalfImg.loadPixels();
  for (let y = 0; y < femaleImg.height; y++) {
    for (let x = 0; x < (femaleData - floor(femaleData / 10) * 10) / 10 * femaleImg.width; x++) {
      let col = femaleHalfImg.get(x, y);
      if (col[0] != 0) {
        writeColor(femaleHalfImg, x, y, 231, 30, 103);
      }
    }
  }
  femaleHalfImg.updatePixels();

  for (let i = 0; i < heads2.length; i++) {
    if (i < floor(femaleData / 10)) {
      heads2[i].img = femaleColorImg;
    }

    if (i == floor(femaleData / 10)) {
      heads2[i].img = femaleHalfImg;
    }
  }
}

/* Modify the color of image pixels. */
function writeColor(image, x, y, red, green, blue) {
  let index = (x + y * image.width) * 4;
  image.pixels[index] = red;
  image.pixels[index + 1] = green;
  image.pixels[index + 2] = blue;
}

/* GenderHead class */
class GenderHead {
  constructor(_img, _x, _y) {
    this.x = _x;
    this.y = _y;
    this.img = _img;
  }

  show() {
    image(this.img, this.x, this.y);
  }
}

///////////////////////----03----//////////////////////////
/* Single_Population_In_City_Tier */
// all of the images
let cityImgs = [];
let imgWid = 100;
let imgHei = 200;

// objects
let dragImgs;
let dragging = false;
let selectIndex = -1;
let pmx = 0;
let pmy = 0;
let textBoxes;
let boxY = [0.06, 0.15, 0.2, 0.3, 0.3];

// text
let titles = ["China City Tiers: Tier one cities",
  "New tier one cities",
  "Tier two cities",
  "Tier Three cities",
  "Tier Four cities",
];
let result;
let textRows = [0, 25, 51, 102, 175, 253];

// data
let cityData = [62.00, 55.70, 51.90, 42.10, 38.80, 0.00];
let cityName = ["Tier-1 cities", "New tier-1 cities", "Tier-2 cities", "Tier-3 cities", "Tier-4 cities and below", " "];
let displayIndex = 5;
let cityPos = [0.27, 0.46, 0.42, 0.49, 0.57, 0.52, 0.72, 0.60, 0.87, 0.61];

// color
let palette = ["#cf2257", "#fd5f42", "#fba341", "#2da4a8", "#435772"];

// text
let title31 = "Single population in China by city tier";
let title32 = "As of June 2021";

function setupScene3() {
  dragImgs = [];
  textBoxes = [];
  selectIndex = -1;

  cursor(ARROW);
  imageMode(CENTER);
  let topY = height * 0.12;
  let gap = (height - topY * 2) / (cityImgs.length - 1);

  for (let i = 0; i < cityImgs.length; i++) {
    cityImgs[i].resize(imgWid, imgHei);
    dragImgs.push(new DragImg(cityImgs[i], 120, topY + gap * i,
      cityPos[2 * i] * width, cityPos[2 * i + 1] * height));

    // text box
    textBoxes.push(new TextBox(textRows[i], textRows[i + 1], titles[i], palette[i], 200, topY + gap * i,
      height * boxY[i], width * 0.608, height * 0.68));
  }
}

function drawScene3() {
  drawRects();

  // title
  textAlign(CENTER, CENTER);
  push();
  fill("#4f4f4f");
  textSize(width / 40);
  textStyle(BOLD);
  text(title31, width * 0.5, height * 0.06);
  pop();
  fill("#848484");
  textSize(24);
  text(title32, width * 0.5, height * 0.11);

  // number
  fill("#e63b27");
  textSize(width / 25);
  text(nf(cityData[displayIndex], 2, 2), width * 0.64, height * 0.26);

  // text
  let tx = width * 0.7;
  fill("#a2a2a2");
  textAlign(LEFT, CENTER);
  textSize(width / 100);
  text("percent of people in", tx, height * 0.2);

  fill("#e63b27");
  text(cityName[displayIndex], tx, height * 0.24);
  fill("#a2a2a2");
  text("stay single. [3]", tx, height * 0.28);

  // images and boxes
  for (let i = 0; i < dragImgs.length; i++) {
    let item = dragImgs[i];
    item.show();

    if (!dragging) {
      item.move();
    }

    if (item.hover() && dist(item.x, item.y, item.startX, item.startY) < 4) {
      textBoxes[i].show();
    }
  }
}

/* Draw colored rectangles. */
function drawRects() {
  let leftX = width * 0.2;
  let rectWid = (width - leftX - width * 0.05) / palette.length;
  noStroke();
  for (let i = 0; i < palette.length; i++) {
    let rectX = leftX + rectWid * i;
    let rectHei = map(cityData[i], 0, 100, 0, height * 0.7);
    let rectY = height - rectHei;
    fill(palette[i]);
    rect(rectX, rectY, rectWid, rectHei, 12);

    fill("#ffffff");
    textAlign(CENTER, CENTER);
    textSize(rectWid / 2);
    text(i + 1, rectX + rectWid / 2, rectY + rectHei / 2);
  }
}

/* DragImg class */
class DragImg {
  constructor(_img, _startX, _startY, _endX, _endY) {
    this.img = _img;
    this.startX = _startX;
    this.startY = _startY;
    this.endX = _endX;
    this.endY = _endY;
    this.x = this.startX;
    this.y = this.startY;
    this.fixed = false;
  }

  show() {
    push();
    let shadowCol = color("#A3B1C6");
    let blurVal = 30;
    if (this.hover()) {
      blurVal = blurVal / 3;
    }
    drawingContext.shadowColor = shadowCol;
    drawingContext.shadowBlur = blurVal;
    drawingContext.shadowOffsetX = 15;
    drawingContext.shadowOffsetY = 15;

    image(this.img, this.x, this.y);
    pop();
  }

  hover() {
    if (abs(mouseX - this.x) <= this.img.width / 2 && abs(mouseY - this.y) <= this.img.height / 2) {
      return true;
    }
  }

  move() {
    if (!this.fixed) {
      this.x += (this.startX - this.x) * 0.05;
      this.y += (this.startY - this.y) * 0.05;
    }
  }
}

/* TextBox class */
class TextBox {
  constructor(_r1, _r2, _til, _col, _x0, _y0, _y, _w, _h) {
    this.r1 = _r1;
    this.r2 = _r2;
    this.til = _til;
    this.x0 = _x0;
    this.y0 = _y0;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.x = this.x0 + this.w / 20;
    this.col = _col;
  }

  show() {
    push();
    fill(this.col);
    stroke(this.col);
    strokeWeight(2);
    triangle(this.x0, this.y0, this.x, this.y0 - this.w / 40, this.x, this.y0 + this.w / 40);
    fill("#ffffff");
    rect(this.x, this.y, this.w, this.h, this.w / 50);

    noStroke();
    textAlign(LEFT, CENTER);
    fill(0);
    push();
    textSize(width / 80);
    textStyle(BOLD);
    text(this.til, this.x + 30, this.y + 30);
    pop();
    textSize(width / 120);
    if (this.r2 - this.r1 > 51) {
      showText3(this.r1, this.r1 + 26, this.x + 30, this.y + 30, width / 80);
      showText3(this.r1 + 26, this.r1 + 51, this.x + width * 0.2, this.y + 30, width / 80);
      showText3(this.r1 + 51, this.r2, this.x + width * 0.40, this.y + 30, width / 80);
    } else if (this.r2 - this.r1 > 26) {
      showText3(this.r1, this.r1 + 26, this.x + 30, this.y + 30, width / 80);
      showText3(this.r1 + 26, this.r2, this.x + width * 0.15, this.y + 30, width / 80);
    } else {
      showText3(this.r1, this.r2, this.x + 30, this.y + 30, width / 80);
    }

    pop();
  }
}

function showText3(r1, r2, x, y, ts) {
  // display text line by line
  for (let i = r1; i < r2; i++) {
    text(result[i], x, y + (i - r1) * ts);
  }
}

///////////////////////----04----//////////////////////////
/* Deal_Breakers */

// all of the images
let cowherdImg;
let maidImg;
let maleImg1;
let femaleImg1;
let handImg;
let btnImgs = [];  // an array of button images
let bgImg;

// data
let maleData1 = [28, 56, 39, 48, 33, 38, 15, 5];
let femaleData1 = [77, 75, 74, 59, 56, 50, 47, 20];
let reasons = [
  "domestic violence",
  "disagreement on life plan",
  "spouse overtly depend on their parent",
  "not finding a common language",
  "passive aggressive treatment",
  "inconsistent life goal",
  "unwilling to do the housework",
  "unwilling to celebrate anniversary"
];
let index = -1;

// custom buttons
let customBtns;

// move
let beginAngle1;
let beginAngle2;
let endAngle1;
let endAngle2;
let distAngle1; // distance to move
let distAngle2;
let angle1 = 0;
let angle2 = 0;
let pct1 = 0.0; // Percentage traveled (0.0 to 1.0)
let pct2 = 0.0;
let step = 0.01; // Size of each step along the path

// box
let boxW;
let boxH;
let boxX;
let boxY1;

// text
let title41 = "Behaviour or circumstances in a romantic relationship";
let title42 = "that people in China cannot tolerate";
let title43 = "by 2021";
let textStr = "According to a survey conducted on WeChat in China    in the end of 2021, more female than male             respondents had specific deal-breakers in a romanticrelationship.Forced sex/violence and disagreement on    major life plans were the most unacceptable behavior  or circumstances in a romantic relationship for femalerespondents with 77 and 75 percent approval rate      respectively. For men, disagreement on life plans and not finding a common language were the top two        deal-breakers in a relationship with 56 and 48 percentof respondents confirming this.";

function setupScene4() {
  index = -1;
  customBtns = [];
  noCursor();
  boxW = width * 0.65;
  boxH = height * 0.8;
  boxX = height * 0.08;
  boxY1 = height * 0.1;

  handImg.resize(height * 0.12, height * 0.12);
  imageMode(CORNER);
  initButtons();

  beginAngle1 = PI * 3 / 2 - PI / 18;
  endAngle1 = beginAngle1;
  beginAngle2 = PI * 3 / 2;
  endAngle2 = beginAngle2;
  distAngle1 = endAngle1 - beginAngle1;
  distAngle2 = endAngle2 - beginAngle2;
}

function drawScene4() {
  // title
  push();
  textAlign(CENTER, CENTER);
  fill("#4f4f4f");
  textSize(width / 50);
  textStyle(BOLD);
  text(title41, width * 0.5, height * 0.06);
  text(title42, width * 0.5, height * 0.12);
  pop();
  textAlign(CENTER, CENTER);
  fill("#848484");
  textSize(width / 100);
  text(title43, width * 0.5, height * 0.17);

  push();
  translate(boxX, boxY1);
  strokeWeight(12);
  stroke("#fffaff");
  fill("#ffc8dd");
  rect(0, height * 0.15, boxW, boxH - height * 0.15, height * 0.05);
  let lineX = width * 0.04 + btnImgs[0].width;
  line(lineX, height * 0.17, lineX, boxH - height * 0.02);
  line(boxW - lineX, height * 0.17, boxW - lineX, boxH - height * 0.02);

  // the Cowherd and the Weaving Maid
  pct1 += step;
  pct2 += step;
  if (pct1 < 1.0) {
    angle1 = beginAngle1 + pct1 * distAngle1;
  }

  if (pct2 < 1.0) {
    angle2 = beginAngle2 + pct2 * distAngle2;
  }
  push();
  translate(boxW / 2, boxH / 2 + height * 0.45);
  rotate(angle1 - PI * 3 / 2 + PI / 18);
  image(cowherdImg, height * 0.57 * cos(angle1), height * 0.57 * sin(angle1));
  pop();

  push();
  translate(boxW / 2, boxH / 2 + height * 0.48);
  translate(-height * 0.1 * sin(angle2 - PI * 3 / 2), height * 0.09 * sin(angle2 - PI * 3 / 2));
  rotate(angle2 - PI * 3 / 2);
  image(maidImg, height * 0.6 * cos(angle2), height * 0.6 * sin(angle2));
  pop();
  image(bgImg, width / 10, height * 0.35, boxW - width / 5, height * 0.4);
  pop();

  noStroke();
  textAlign(LEFT, CENTER);
  textSize(width / 60);
  fill("#a2a2a2");
  let textX = boxX + boxW + width * 0.02;
  text("Percent of people in china", textX, height * 0.35);
  text("would not tolerate", textX, height * 0.39);
  if (index != -1) {
    fill("#e63b27");
    text(reasons[index], textX, height * 0.43);
  }
  fill("#a2a2a2");
  text("in their relationship", textX, height * 0.47);

  push();
  textSize(width / 40);
  textAlign(LEFT, CENTER);
  fill("#e63b27");

  if (index != -1) {
    if (customBtns[1].selected) {
      text(nf(femaleData1[index], 2, 2) + "%", textX + width * 0.04, height * 0.28);
    }

    if (customBtns[0].selected) {
      text(nf(maleData1[index], 2, 2) + "%", textX + width * 0.18, height * 0.28);
    }
  } else {
    text(nf(0, 2, 2) + "%", textX + width * 0.04, height * 0.28);
    text(nf(0, 2, 2) + "%", textX + width * 0.18, height * 0.28);
  }
  pop();

  for (let btn of customBtns) {
    btn.drawButton();
  }

  // text
  fill(0);
  textSize(width / 100);
  textAlign(LEFT, CENTER);
  showText(textStr, textX, height * 0.53, 54, height * 0.028);
  fill("#a2a2a2");
  text("[6]", textX + width * 0.154, height * 0.53 + height * 0.028 * 10);
  image(handImg, mouseX - handImg.width / 2.5, mouseY - handImg.height / 5, height * 0.1, height * 0.1);
}

/* Initialize all of custom buttons. */
function initButtons() {
  let ns = min(boxW, boxH);
  maleImg1.resize(ns / 15, ns / 15);
  customBtns.push(new CustomButton(maleImg1, boxX + boxW + width / 6, height * 0.25, maleImg1.width, maleImg1.height, false));
  femaleImg1.resize(ns / 15, ns / 15);
  customBtns.push(new CustomButton(femaleImg1, boxX + boxW + width / 40, height * 0.25, femaleImg1.width, femaleImg1.height, false));

  for (let i = 0; i < btnImgs.length; i++) {
    btnImgs[i].resize(ns / 12, ns / 12);

    if (i < 4) {
      customBtns.push(new CustomButton(btnImgs[i], boxX + width * 0.02, boxY1 + height * 0.12 + (boxH - height * 0.15) / 5 * (i + 1), btnImgs[i].width, btnImgs[i].height, false));
    } else {
      customBtns.push(new CustomButton(btnImgs[i], boxX + boxW - width * 0.02 - ns / 12, boxY1 + height * 0.12 + (boxH - height * 0.15) / 5 * (i - 3), btnImgs[i].width, btnImgs[i].height, false));
    }
  }
}

/* CustomButton class */
class CustomButton {
  constructor(_img, _x, _y, _w, _h, _selected) {
    this.img = _img;
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.selected = _selected;
  }

  /* Click on the button. */
  clickButton() {
    if (this.overButton()) {
      this.selected = !this.selected;
    }
  }

  /* Determine if the mouse passes over the button. */
  overButton() {
    if (mouseX > this.x && mouseX < this.x + this.w
      && mouseY > this.y && mouseY < this.y + this.h) {
      return true;
    }

    return false;
  }

  /* Draw the button. */
  drawButton() {
    push();
    if (this.overButton()) {
      tint(255, 150);
    }

    if (this.selected) {
      drawingContext.shadowColor = color("#435772");
      drawingContext.shadowBlur = this.w / 10;
      drawingContext.shadowOffsetX = this.w / 30;
      drawingContext.shadowOffsetY = this.w / 30;
    }

    image(this.img, this.x, this.y, this.w, this.h);
    pop();
  }
}

///////////////////////----05----//////////////////////////
/* Compromising_Area */

// all of the images
let manImg;
let womanImg;
let maleImg2;
let femaleImg2;
let handImg2;
let bgImg2;
let btnImgs2 = [];  // an array of button images

// data
let maleData2 = [85.10, 70.40, 65.70, 46.30, 58.10, 42.10, 49.30, 3, 13.60, 1.60];
let femaleData2 = [75.50, 58.40, 49.20, 34.20, 29.90, 25.90, 19.40, 9.10, 5.60, 1.30];
let reasons2 = [
  "restrain temper",
  "adjust eat habit",
  "change work or schedule",
  "move city",
  "change hobby",
  "change or quitting the job",
  "spending more than half of the income",
  "not promising on anything",
  "change religion or political view",
  "others"
];
let index2;

// custom buttons
let customBtns2;

// background
let bgTexture;

// move
let manX;
let manY;
let womanX;
let womanY;
let manBeginX;
let manBeginY;
let womanBeginX;
let womanBeginY;
let manEndX;
let manEndY;
let womanEndX;
let womanEndY;
let manDistX;
let manDistY;
let womanDistX;
let womanDistY;
let pct21 = 0.0; // Percentage traveled (0.0 to 1.0)
let pct22 = 0.0;
let step2 = 0.01; // Size of each step2 along the path

// text
let title51 = "Areas that people in China are willing to compromise";
let title52 = "For the sake of romantic relationship";
let title53 = "by 2021";

// box
let boxW2;
let boxH2;
let boxX2;
let boxY2;

// text
let textStr2 = "According to a survey conducted on WeChat in      China in  the end of 2021, not only more female   than male respondents had specific deal-breaker   in a romantic relationship but females were also  less willing to compromise. Around nine percent   of surveyed women said they would not             compromise on anything in a relationship.         Restraining one's temper for the sake of a better relationship was the most popular compromise      area both for male and female respondents.";

function setupScene5() {
  index2 = -1;
  customBtns2 = [];
  noCursor();
  boxW2 = width * 0.6;
  boxH2 = height * 0.8;
  boxX2 = width * 0.35;
  boxY2 = height * 0.1;

  // bgTexture = initBackground();
  handImg2.resize(boxW2 / 10, boxW2 / 10);
  initButtons2();

  manBeginX = boxW2 / 2 - boxW2 / 5;
  manEndX = manBeginX;
  manBeginY = boxH2 / 2 + boxH2 / 5;
  manEndY = manBeginY;
  womanBeginX = boxW2 / 2 + boxW2 / 20;
  womanEndX = womanBeginX;
  womanBeginY = boxH2 / 2 + boxH2 / 5;
  womanEndY = womanBeginY;
  manDistX = manEndX - manBeginX;
  manDistY = manEndY - manBeginY;
  womanDistX = womanEndX - womanBeginX;
  womanDistY = womanEndY - womanBeginY;
}

function drawScene5() {
  // title
  textAlign(CENTER, CENTER);
  push();
  noStroke();
  fill("#4f4f4f");
  textSize(width / 50);
  textStyle(BOLD);
  text(title51, width * 0.5, height * 0.06);
  text(title52, width * 0.5, height * 0.12);
  pop();
  fill("#848484");
  textSize(width / 80);
  text(title53, width * 0.5, height * 0.17);

  push();
  translate(boxX2, boxY2);
  noFill();
  strokeWeight(12);
  stroke("#fffaff");
  image(bgImg2, 0, height * 0.15, boxW2, boxH2 - height * 0.15);
  rect(0, height * 0.15, boxW2, boxH2 - height * 0.15, 5);
  let lineX = width * 0.04 + btnImgs2[0].width;
  line(lineX, height * 0.17, lineX, boxH2 - height * 0.02);
  line(boxW2 - lineX, height * 0.17, boxW2 - lineX, boxH2 - height * 0.02);

  // the Cowherd and the Weaving Maid
  pct21 += step2;
  pct22 += step2;

  if (pct21 < 1.0) {
    womanX = womanBeginX + pct21 * womanDistX;
    womanY = womanBeginY + pct21 * womanDistY;
  }

  if (pct22 < 1.0) {
    manX = manBeginX + pct22 * manDistX;
    manY = manBeginY + pct22 * manDistY;
  }

  push();
  translate(manX, manY);
  image(manImg, 0, 0);
  pop();

  push();
  translate(womanX, womanY);
  image(womanImg, 0, 0);
  pop();
  pop();

  // text display
  noStroke();
  textSize(width / 75);
  fill("#a2a2a2");
  let textX = width * 0.04;
  textAlign(LEFT, CENTER);
  text("Percent of couples're wiling to compromise", textX, height * 0.35);
  // text("wiling to compromise", textX, 80);
  if (index2 != -1) {
    fill("#e63b27");
    text(reasons2[index2], textX + width / 50, height * 0.39);
  }
  fill("#a2a2a2");
  text("by", textX, height * 0.39);

  push();
  fill("#e63b27");
  textSize(width / 40);
  textAlign(CENTER, CENTER);
  if (index2 != -1) {
    if (customBtns2[0].selected) {
      text(nf(femaleData2[index2], 2, 2) + "%", width * 0.12, height * 0.28);
    }

    if (customBtns2[1].selected) {
      text(nf(maleData2[index2], 2, 2) + "%", width * 0.26, height * 0.28);
    }
  } else {
    text(nf(0, 2, 2) + "%", width * 0.12, height * 0.28);
    text(nf(0, 2, 2) + "%", width * 0.26, height * 0.28);
  }
  pop();

  for (let btn of customBtns2) {
    btn.drawButton();
  }

  // text
  fill(0);
  textSize(width / 100);
  textAlign(LEFT, CENTER);
  showText(textStr2, textX, height * 0.46, 50, height * 0.03);
  fill("#a2a2a2");
  text("[6]", textX + width * 0.214, height * 0.46 + height * 0.03 * 9);

  image(handImg2, mouseX - handImg2.width / 2.5, mouseY - handImg2.height / 5, height * 0.1, height * 0.1);
}

/* Initialize all of custom buttons. */
function initButtons2() {
  let ns = min(boxW2, boxH2);
  femaleImg2.resize(ns / 15, ns / 15);
  customBtns2.push(new CustomButton(femaleImg2, width * 0.04, height * 0.25, femaleImg2.width, femaleImg2.height, false));
  maleImg2.resize(ns / 15, ns / 15);
  customBtns2.push(new CustomButton(maleImg2, width * 0.18, height * 0.25, maleImg2.width, maleImg2.height, false));

  for (let i = 0; i < btnImgs2.length; i++) {
    btnImgs2[i].resize(ns / 12, ns / 12);

    if (i < 5) {
      customBtns2.push(new CustomButton(btnImgs2[i], boxX2 + width * 0.02, boxY2 + height * 0.12 + (boxH2 - height * 0.15) / 6 * (i + 1), btnImgs2[i].width, btnImgs2[i].height, false));
    } else {
      customBtns2.push(new CustomButton(btnImgs2[i], boxX2 + boxW2 - width * 0.02 - ns / 12, boxY2 + height * 0.12 + (boxH2 - height * 0.15) / 6 * (i - 4), btnImgs2[i].width, btnImgs2[i].height, false));
    }
  }
}

///////////////////////----06----//////////////////////////
/**
 * Attitude_towards_betrothal_gifts_in_China
 * Attitude towards betrothal gifts in China as of January 2021.
 * 
 */

// all of the images
let giftImgs = [];
let giftImgNum = 3;

// data
let giftData = [20.0, 21.8, 58.2];
let showData = "00";
let showAngles = [0, 0, 30];
let drawGiftData = [
  [58.2, 21.8, 20.0],
  [20.0, 58.2, 21.8],
  [20.0, 21.8, 58.2]
];

// color
let gColors = ["#5eb2ed", "#fec1cb", "#fbcd33"];

// title
let gTitle1 = "Attitude towards betrothal gifts in China";
let gTitle2 = "as of January 2021";

// text
let gTexts = ["percent of Chinese couple believe", "betrothal gift is", "when getting married"];

function setupScene6() {
  noStroke();
  select('#lineChart').hide();
  cursor(ARROW);
}

function drawScene6() {
  showData = "00";

  // draw background
  background("#ffffff");

  // if (mouseIsPressed) {
  //   print("X:" + mouseX / width + "    Y:" + mouseY / height);
  // }

  // title
  let titleX = width * 0.5;
  let titleY = height * 0.08;
  let titleGap = height * 0.05;
  textAlign(CENTER, CENTER);
  // push();
  textStyle(BOLD);
  fill("#000000");
  textSize(width / 40);
  text(gTitle1, titleX, titleY);
  // pop();
  fill("#8a8a8a");
  textSize(width / 100);
  text(gTitle2, titleX, titleY + titleGap);

  // chart
  let chartX = width * 0.2;
  let chartY = height * 0.59;
  let chartSize = height * 0.3;
  let chartGap = (width - chartX * 2) / 2;
  push();
  drawingContext.shadowColor = "#C6C6C6";
  drawingContext.shadowBlur = chartSize / 10;
  for (let j = 0; j < giftImgs.length; j++) {
    let currAngle = radians(showAngles[j]);
    for (let i = 0; i < giftData.length; i++) {
      let arcAngle = map(drawGiftData[j][i], 0, 100, 0, TWO_PI);
      if (i == giftData.length - 1) {
        fill(gColors[j]);
      } else {
        fill("#ffffff");
      }

      // When the mouse hovers
      if (i == giftData.length - 1 && dist(chartX + j * chartGap, chartY, mouseX, mouseY) < chartSize / 2) {
        showData = nf(giftData[j], 2, 1);
        push();
        let mx = chartSize / 8 * cos(currAngle + arcAngle / 2);
        let my = chartSize / 8 * sin(currAngle + arcAngle / 2);
        translate(mx, my);
        arc(chartX + j * chartGap, chartY, chartSize * 1.2, chartSize * 1.2, currAngle, currAngle + arcAngle, PIE);
        pop();
      } else {
        arc(chartX + j * chartGap, chartY, chartSize, chartSize, currAngle, currAngle + arcAngle, PIE);
      }
      currAngle += arcAngle;
    }
  }
  pop();

  // show all images
  let imgX = width * 0.2;
  let imgY = height * 0.75;
  let imgSize = height * 0.27;
  let imgGap = (width - imgX * 2) / 2;
  push();
  imageMode(CENTER);
  for (let i = 0; i < giftImgs.length; i++) {
    image(giftImgs[i], imgX + i * imgGap, imgY, imgSize, imgSize);
  }
  pop();

  // text
  let textX = width * 0.12;
  let textY = height * 0.20;
  let textGap = height * 0.042;
  textAlign(LEFT, CENTER);
  fill("#000000");
  textSize(width / 80);
  for (let i = 0; i < gTexts.length; i++) {
    text(gTexts[i], textX, textY + i * textGap);
  }

  // number
  let numberX = width * 0.114;
  let numberY = height * 0.25;
  textAlign(RIGHT, CENTER);
  fill("#f12626");
  textSize(width / 20);
  text(showData, numberX, numberY);
}

///////////////////////----07----//////////////////////////
/**
 * Adults_Who_Acquire_Sexual_Knowledge
 * Share of young adults who acquire sex knowledge through pornography in China in 2021, by age.
 * 
 */

// all of the images
let imgs = [];
let imgNum = 9;

// objects
let selectIndex2 = 2;
let clickIndex = 0;

// data
let data = [68.71, 67.72, 63.69, 59.15];
let ages = ["80-89", "90-94", "95-99", "after 2000"];

// color
let colors = ["#cf2257", "#fd5f42", "#fba341", "#2da4a8", "#435772"];

// title
let title61 = "Share of Young adults";
let title62 = "who acquire sexual knowledge";
let title63 = "through pornograph in China";
let title64 = "in 2021, by age";

// text
let textStrs = ["     the most common",
  "media to know sexual",
  "knowledge for people",
  "who born between",
  "about",
  "of people",
  "acquire",
  "sexual knowledge by",
  "this way."
];
let yearStr = "1980 and 1989";

function setupScene7() {
  noStroke();
  select('#lineChart').hide();
  cursor(ARROW);
}

function drawScene7() {
  // title
  let titleX = width * 0.15;
  let titleY = height * 0.08;
  let titleGap = height * 0.06;
  push();
  textAlign(LEFT, CENTER);
  fill("#4f4f4f");
  textSize(width / 40);
  textStyle(BOLD);
  text(title61, titleX, titleY);
  text(title62, titleX, titleY + titleGap);
  text(title63, titleX, titleY + 2 * titleGap);
  text(title64, titleX, titleY + 3 * titleGap);
  pop();

  // show all images
  // images on the right
  let imgX = width * 0.15;

  image(imgs[3], imgX, height * 0.3, height * 0.2, height * 0.2);
  image(imgs[4], imgX + width * 0.16, height * 0.3, height * 0.2, height * 0.2);
  image(imgs[0], imgX - width * 0.05, height * 0.5, height * 0.2, height * 0.2);
  image(imgs[6], imgX + width * 0.22, height * 0.50, height * 0.2, height * 0.2);
  if (mouseIsPressed) {
    // ear_phone
    if (overButton(imgX, height * 0.3, height * 0.2, height * 0.2)) {
      clickIndex = 3;
      selectIndex2 = 2;
      yearStr = "1990 and 1994";
    }

    // pc
    if (overButton(imgX + width * 0.16, height * 0.3, height * 0.2, height * 0.2)) {
      clickIndex = 4;
      selectIndex2 = 5;
      yearStr = "1995 and 1999";
    }

    // book
    if (overButton(imgX - width * 0.05, height * 0.5, height * 0.2, height * 0.2)) {
      clickIndex = 0;
      selectIndex2 = 1;
      yearStr = "1980 and 1989";
    }

    // phone
    if (overButton(imgX + width * 0.22, height * 0.50, height * 0.2, height * 0.2)) {
      clickIndex = 6;
      selectIndex2 = 7;
      yearStr = "after 2000";
    }
  }

  if (selectIndex2 == 7) {
    image(imgs[7], imgX + width * 0.01, height * 0.6, height * 0.3, height * 0.3);
    image(imgs[8], imgX + width * 0.11, height * 0.6, height * 0.3, height * 0.3);
  } else {
    image(imgs[selectIndex2], imgX + width * 0.07, height * 0.6, height * 0.3, height * 0.3);
  }

  // image on the left
  image(imgs[clickIndex], width * 0.70, 0, height * 0.2, height * 0.2);

  // text
  fill("#4f4f4f");
  textSize(width / 20);
  text("is", width * 0.72 + height * 0.2, height * 0.12);
  fill("#a2a2a2");
  textSize(width / 60);
  text(yearStr, imgX + width * 0.08, height * 0.93);
  let textX = width * 0.70;
  let textY = height * 0.22;
  let textGap = height * 0.04;
  text(textStrs[0], textX, textY);
  text(textStrs[1], textX, textY + textGap);
  text(textStrs[2], textX, textY + 2 * textGap);
  text(textStrs[3], textX, textY + 3 * textGap);
  fill("#e63b27");
  text(yearStr, textX, textY + 4 * textGap);
  fill("#a2a2a2");
  text(textStrs[4], textX + width * 0.128, textY + 4 * textGap);
  text(textStrs[5], textX + width * 0.1, textY + 5 * textGap);
  text(textStrs[6], textX + width * 0.118, textY + 6 * textGap);
  text(textStrs[7], textX, textY + 7 * textGap);
  text(textStrs[8], textX, textY + 8 * textGap);
  textSize(width / 120);
  text("[7]", textX + width * 0.072, textY + 8 * textGap);

  // number
  fill("#e63b27");
  textSize(width / 35);
  let dataIndex = 0;
  if (clickIndex == 0) {
    dataIndex = 0;
  } else if (clickIndex == 3) {
    dataIndex = 1;
  } else if (clickIndex == 4) {
    dataIndex = 2;
  } else if (clickIndex == 6) {
    dataIndex = 3;
  }
  text(nf(data[dataIndex], 2, 2) + "%", textX, textY + 6 * textGap);

  // text
  push();
  stroke("#a2a2a2");
  strokeWeight(2);
  let chartX = textX - width * 0.12;
  let chartY = textY + 7 * textGap;
  let chartW = width * 0.30;
  let chartH = height * 0.45;
  line(chartX, chartY + chartH, chartX + chartW, chartY + chartH);

  let rectGap = chartW / 15;
  let rectW = (chartW - rectGap * 5) / data.length;
  for (let i = 0; i < data.length; i++) {
    stroke("#a2a2a2");
    strokeWeight(2);
    if (dataIndex == i) {
      fill("#e63b27");
    } else {
      fill("#a2a2a2");
    }
    let rectX = chartX + rectW * i + (i + 1) * rectGap;
    let rectH = map(data[i], 0, 100, 0, chartH);
    let rectY = chartY + chartH - rectH;
    rect(rectX, rectY, rectW, rectH, 4);
    noStroke();
    textSize(width / 100);
    textAlign(CENTER, CENTER);
    fill("#a2a2a2");
    text(data[i] + "%", rectX + rectW / 2, rectY - width / 150);
    text(ages[i], rectX + rectW / 2, chartY + chartH + width / 100);
  }
  pop();
}

///////////////////////----08----//////////////////////////
/* Divorce, marriage and birthrate trend */
// data
let birthData = [13.57, 12.64, 10.86, 10.41, 8.52, 7.52];
let marriageData = [8.30, 7.70, 7.30, 6.60, 5.80, 5.40];
let divorceData = [3.02, 3.15, 3.20, 3.36, 3.09, 2.01];

// color
let palette2 = ["#fcce10", "#FFC0CB", "#5ab1ef"];

// value
let predVals1;
let predVals2;
let predVals3;
let selectRect;
let yearGap;
let accuracy1;
let accuracy2;
let accuracy3;

function setupScene8() {
  select('#fullLineChart').style('visibility', 'hidden');
  select('#lineChart').show();
  predVals1 = [13.57, 0, 0, 0, 0, 0];
  predVals2 = [8.30, 0, 0, 0, 0, 0];
  predVals3 = [3.02, 0, 0, 0, 0, 0];
  selectRect = 0;
  accuracy1 = [100, 0, 0, 0, 0, 0];
  accuracy2 = [100, 0, 0, 0, 0, 0];
  accuracy3 = [100, 0, 0, 0, 0, 0];
}

function drawScene8() {
  // title
  let titleX = width * 0.50;
  let titleY = height * 0.05;
  let titleGap = height * 0.05;
  noStroke();
  textAlign(CENTER, CENTER);
  push();
  fill("#4f4f4f");
  textSize(width / 40);
  textStyle(BOLD);
  text(title11, titleX, titleY);
  pop();
  fill("#848484");
  textSize(width / 90);
  text(title12, titleX, titleY + titleGap);

  // number
  noStroke();
  fill("#a2a2a2");
  textAlign(LEFT, CENTER);
  textSize(width / 60);
  text("Predicted Accuracy Rate:", width * 0.1, height * 0.18);
  textSize(width / 30);
  fill("#e63b27");
  let newA = 1;
  for (let i = 0; i < 6; i++) {
    if (selectRect == 0 && (accuracy1[i] != 0 || i == 1)) {
      newA *= accuracy1[i];
    }
    if (selectRect == 1 && (accuracy2[i] != 0 || i == 1)) {
      newA *= accuracy2[i];
    }
    if (selectRect == 2 && (accuracy3[i] != 0 || i == 1)) {
      newA *= accuracy3[i];
    }
  }
  text(nf(newA, 2, 2) + "%", width * 0.31, height * 0.18);

  // sidenote
  textAlign(LEFT, CENTER);
  textSize(width / 100);
  fill(colors1[0]);
  rect(width * 0.6, height * 0.12, height * 0.04, height * 0.02, height * 0.004);
  fill(colors1[1]);
  rect(width * 0.6, height * 0.16, height * 0.04, height * 0.02, height * 0.004);
  fill(colors1[2]);
  rect(width * 0.6, height * 0.20, height * 0.04, height * 0.02, height * 0.004);
  fill("#4f4f4f");
  text("Birth rate", width * 0.6 + height * 0.06, height * 0.13);
  text("Marriage rate", width * 0.6 + height * 0.06, height * 0.17);
  text("Divorce rate", width * 0.6 + height * 0.06, height * 0.21);
  noFill();
  stroke("#e0e6f1");
  strokeWeight(2);
  rect(width * 0.6 - height * 0.005, height * 0.12 - height * 0.005 + height * 0.04 * selectRect, height * 0.05, height * 0.03, height * 0.004);
  noStroke();
  textSize(width / 180);
  fill("#a2a2a2");
  text("Per 1000 people", width * 0.01, height * 0.30);

  // Drawing area
  stroke("#4f4f4f");
  strokeWeight(2);
  noFill();
  rect(width * 0.73, height * 0.17, width * 0.2, height * 0.78, height * 0.01);

  textSize(14);
  fill("#4f4f4f");
  strokeWeight(1);
  yearGap = width * 0.16 / 5;
  textAlign(CENTER, CENTER);
  line(width * 0.73 + width * 0.02, height - 84, width * 0.73 + width * 0.02 + yearGap * 5, height - 84);
  for (let i = 0; i < 6; i++) {
    stroke("#e0e6f1");
    line(width * 0.73 + width * 0.02 + yearGap * i, height - 84, width * 0.73 + width * 0.02 + yearGap * i, height * 0.245);
    stroke("#4f4f4f");
    line(width * 0.73 + width * 0.02 + yearGap * i, height - 84, width * 0.73 + width * 0.02 + yearGap * i, height - 90);
    noStroke();
    text(i + 2016, width * 0.73 + width * 0.02 + yearGap * i, height - 70);
  }

  stroke("#e0e6f1");
  for (let i = 1; i <= 5; i++) {
    let ly = map(i, 0, 5, height - 84, height * 0.245);
    line(width * 0.73 + width * 0.02, ly, width * 0.73 + width * 0.02 + yearGap * 5, ly);
  }

  // start point
  strokeWeight(10);
  stroke(palette2[0]);
  point(width * 0.73 + width * 0.02, getY(birthData[0]));
  for (let i = 1; i < predVals1.length; i++) {
    if (predVals1[i] != 0) {
      line(width * 0.73 + width * 0.02 + yearGap * (i - 1), getY(predVals1[i - 1]),
        width * 0.73 + width * 0.02 + yearGap * i, getY(predVals1[i]));
    }
  }
  stroke(palette2[1]);
  point(width * 0.73 + width * 0.02, getY(marriageData[0]));
  for (let i = 1; i < predVals2.length; i++) {
    if (predVals2[i] != 0) {
      line(width * 0.73 + width * 0.02 + yearGap * (i - 1), getY(predVals2[i - 1]),
        width * 0.73 + width * 0.02 + yearGap * i, getY(predVals2[i]));
    }
  }

  stroke(palette2[2]);
  point(width * 0.73 + width * 0.02, getY(divorceData[0]));
  for (let i = 1; i < predVals3.length; i++) {
    if (predVals3[i] != 0) {
      line(width * 0.73 + width * 0.02 + yearGap * (i - 1), getY(predVals3[i - 1]),
        width * 0.73 + width * 0.02 + yearGap * i, getY(predVals3[i]));
    }
  }
}

function getY(val) {
  return map(val, 0, 15, height - 84, height * 0.245);
}

function getVal(y) {
  return map(y, height - 84, height * 0.245, 0, 15);
}

///////////////////////----09----//////////////////////////
/* Divorce, marriage and birthrate trend */
function setupScene9() {
  select('#lineChart').hide();
  select('#fullLineChart').style('visibility', 'visible');
}

function drawScene9() {
  // title
  let titleX = width * 0.50;
  let titleY = height * 0.05;
  let titleGap = height * 0.05;
  noStroke();
  textAlign(CENTER, CENTER);
  push();
  fill("#4f4f4f");
  textSize(width / 40);
  textStyle(BOLD);
  text(title11, titleX, titleY);
  pop();
  fill("#848484");
  textSize(width / 90);
  text(title12, titleX, titleY + titleGap);

  // number
  textAlign(LEFT, CENTER);
  textSize(width / 40);
  push();
  textStyle(BOLD);
  fill(0);
  text("The actual Trend", width * 0.12, height * 0.20);
  pop();

  // sidenote
  textAlign(LEFT, CENTER);
  textSize(width / 100);
  fill(colors1[0]);
  rect(width * 0.8, height * 0.12, height * 0.04, height * 0.02, height * 0.004);
  fill(colors1[1]);
  rect(width * 0.8, height * 0.16, height * 0.04, height * 0.02, height * 0.004);
  fill(colors1[2]);
  rect(width * 0.8, height * 0.20, height * 0.04, height * 0.02, height * 0.004);
  fill("#4f4f4f");
  text("Birth rate", width * 0.8 + height * 0.06, height * 0.13);
  text("Marriage rate", width * 0.8 + height * 0.06, height * 0.17);
  text("Divorce rate", width * 0.8 + height * 0.06, height * 0.21);
  noStroke();
  fill("#a2a2a2");
  textSize(width / 180);
  text("Per 1000 people", width * 0.025, height * 0.3);
}

///////////////////////----10----//////////////////////////
/* Reference List */
let refList = [
  "People's Daily | A survey report focuses on the changes in the marriage and childbearing views of young netizens (no date). Available at: https://            fddi.fudan.edu.cn/79/cc/c18986a489932/page.htm (Accessed: 6 August 2023).",
  "The acceleration of aging and declining birth rates, the urgency of fully liberalizing cannot be delayed - People's Livelihood Observation, Fujian Provincial Library (no date). Available at: http://fjlib.net/zt/fjstsgjcxx/msgc/202104/t20210425_451113.htm (Accessed: 7 August 2023).",
  "https://www.facebook.com/nunanetwork (2021) Explaining China’s City Tier System, Nuna Network - Verify and Monitor Chinese companies. Available at:           https://blog.nunanetwork.com/explaining-chinas-city-tier-system/ (Accessed: 6 August 2023).",
  "China's single population has reached 249 million. If no one gets married, who will have children? (2019). Available at: https://finance.sina.com.cn/stock/   stockzmt/2019-08-05/doc-ihytcitm7042909.shtml (Accessed: 6 August 2023).",
  "Out of 1.4 billion Chinese, how many live alone and single? (no date) Zhihu Column. Available at: https://zhuanlan.zhihu.com/p/372299890 (Accessed: 6         August 2023).",
  "Huxiu.com (2021) A survey of 2,000 people: In 2021, how have young people's views on love changed?, Huxiu.com. Available at: https://www.huxiu.com/            article/477043.html (Accessed: 7 August 2023).",
  "36Kr (no date) 2021 Young People's Sex Life Report: Men want \"more\", women prefer \"shorter\". Available at: http://www.bilibili.com/read/cv13870376            (Accessed: 7 August 2023)."
];
let listY;
let girlImg;

function setupScene10() {
  select('#fullLineChart').style('visibility', 'hidden');
}

function drawScene10() {
  // title
  let titleX = width * 0.02;
  let titleY = height * 0.08;
  push();
  noStroke();
  textAlign(LEFT, CENTER);
  fill("#4f4f4f");
  textSize(width / 40);
  textStyle(BOLD);
  text("Reference List", titleX, titleY);
  pop();

  // list
  listY = height * 0.14;
  let listX = width * 0.11;
  let listFont = width / 100;
  let listGap = listFont * 1.5;
  textSize(listFont);
  textStyle(BOLD);
  fill(0);
  for (let i = 0; i < refList.length; i++) {
    text((i + 1) + ". ", listX - width * 0.018, listY);
    showText2(refList[i], listX, 158, listGap);
    listY += listGap * 1.5;
  }

  noFill();
  stroke(0);
  strokeWeight(1);
  rect(width * 0.799, height * 0.128, width * 0.04, width / 80);
  rect(width * 0.11, height * 0.128 + listGap, width * 0.258, width / 80);
  rect(width * 0.264, height * 0.128 + listGap * 3.5, width * 0.336, width / 80);
  rect(width * 0.11, height * 0.128 + listGap * 5, width * 0.21, width / 80);
  rect(width * 0.11, height * 0.128 + listGap * 6, width * 0.338, width / 80);
  rect(width * 0.705, height * 0.128 + listGap * 7.5, width * 0.175, width / 80);
  rect(width * 0.11, height * 0.128 + listGap * 8.5, width * 0.252, width / 80);
  rect(width * 0.6, height * 0.128 + listGap * 10, width * 0.21, width / 80);
  rect(width * 0.756, height * 0.128 + listGap * 12.5, width * 0.127, width / 80);
  rect(width * 0.11, height * 0.128 + listGap * 13.5, width * 0.103, width / 80);
  rect(width * 0.659, height * 0.128 + listGap * 15, width * 0.21, width / 80);
  rect();

  image(girlImg, width * 0.04, height * 0.7, width * 0.12, width * 0.12);
  noStroke();
  textAlign(LEFT, CENTER);
  fill("#4f4f4f");
  textSize(width / 40);
  text("Thank You", width * 0.18, height * 0.82);
}

/* Display text at a fixed length. */
function showText2(str, x, len, ts) {
  // split strings in a fixed length
  let strArr = [];
  for (let i = 0; i < str.length; i += len) {
    strArr.push(str.slice(i, i + len));
  }

  // display text line by line
  for (let i = 0; i < strArr.length; i++) {
    text(strArr[i], x, listY);
    if (i < strArr.length - 1) {
      listY += ts;
    }
  }
}
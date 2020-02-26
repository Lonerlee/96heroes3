function startGame() {
document.getElementById("start-screen").style.display = "none";
randomRight();
document.getElementById("game-screen").style.display = "block";
setInterval(counting,1000);
}

function randNum(){
  return (Math.floor(Math.random() * Math.floor(4)))+1;
}

let i=1;
let rightChoice = 1;
let score = 0;
let x = 0;

function counting() { 
if (i<200){
document.getElementById("timeProgressLeftShowing").style.height = "calc(" + i/2 + "%)";
  i++;
  }
  else {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("finish-screen").style.display = "block";
  }
}

function clicked() {
  if (i<180){
    i+=20;
    document.getElementById("game-clue").innerHTML = i + "Hello JavaScript!";
  }
}

function randomRight() {
  x = randNum();
      document.getElementById("game-clue").innerHTML = x;
  
  let y = (Math.floor(Math.random() * Math.floor(4)));

  if (x === 1) {
    document.getElementById("game-clue").innerHTML = questions[y].question;
    document.getElementById("pick1").style.backgroundImage = "url("+questions[y].good1+")";
    document.getElementById("pick2").style.backgroundImage = "url("+questions[y].bad1+")";
    document.getElementById("pick3").style.backgroundImage = "url("+questions[y].bad2+")";
    document.getElementById("pick4").style.backgroundImage = "url("+questions[y].bad3+")";
}   else if (x === 2) {
    document.getElementById("game-clue").innerHTML = questions[y].question;
    document.getElementById("pick1").style.backgroundImage = "url("+questions[y].bad1+")";
    document.getElementById("pick2").style.backgroundImage = "url("+questions[y].good1+")";
    document.getElementById("pick3").style.backgroundImage = "url("+questions[y].bad2+")";
    document.getElementById("pick4").style.backgroundImage = "url("+questions[y].bad3+")";
}   else if (x === 3) {
    document.getElementById("game-clue").innerHTML = questions[y].question;
    document.getElementById("pick1").style.backgroundImage = "url("+questions[y].bad1+")";
    document.getElementById("pick2").style.backgroundImage = "url("+questions[y].bad2+")";
    document.getElementById("pick3").style.backgroundImage = "url("+questions[y].good1+")";
    document.getElementById("pick4").style.backgroundImage = "url("+questions[y].bad3+")";
}   else if (x === 4) {
    document.getElementById("game-clue").innerHTML = questions[y].question;
    document.getElementById("pick1").style.backgroundImage = "url("+questions[y].bad1+")";
    document.getElementById("pick2").style.backgroundImage = "url("+questions[y].bad2+")";
    document.getElementById("pick3").style.backgroundImage = "url("+questions[y].bad3+")";
    document.getElementById("pick4").style.backgroundImage = "url("+questions[y].good1+")";
}

}

function checkRight(c) {
    if(c===x){
        score++;
        document.getElementById("game-points").innerHTML = "Additional point!";
    } else {
        i++;
        document.getElementById("game-points").innerHTML = "You missed and lost 1 second from your time!";
    }

    randomRight();
}

var questions = [{question:"Which hero has speciality in gold?", good1:"https://heroes.thelazy.net/images/1/1f/Hero_Jenova_small.gif", bad1:"https://heroes.thelazy.net/images/6/61/Hero_Elleshar_small.gif", bad2:"https://heroes.thelazy.net/images/6/6b/Hero_Josephine_small.gif", bad3:"https://heroes.thelazy.net/images/a/a9/Hero_Melodia_small.gif"}, 
{question:"Which spell is from level III?", good1:"https://heroes.thelazy.net/images/e/e1/Air_Shield_small.png", bad1:"https://heroes.thelazy.net/images/2/2a/Weakness_small.png", bad2:"https://heroes.thelazy.net/images/b/b6/Visions_small.png", bad3:"https://heroes.thelazy.net/images/3/32/Quicksand_small.png"},
{question: "Which spell is from level I?", good1: "https://heroes.thelazy.net/images/3/3d/Dispel_small.png", bad1: "https://heroes.thelazy.net/images/f/fe/Death_Ripple_small.png", bad2: "https://heroes.thelazy.net/images/a/ab/Disguise_small.png", bad3: "https://heroes.thelazy.net/images/c/cc/Fire_Wall_small.png"},
{question: "Which spell is from level II?", good1: "https://heroes.thelazy.net/images/d/d3/Fortune_small.png", bad1: "https://heroes.thelazy.net/images/e/e1/Air_Shield_small.png", bad2: "https://heroes.thelazy.net/images/3/36/Summon_Boat_small.png", bad3: "https://heroes.thelazy.net/images/4/45/Protection_from_Water_small.png"},
{question: "Which spell is from level III?", good1: "https://heroes.thelazy.net/images/6/68/Land_Mine_small.png", bad1: "https://heroes.thelazy.net/images/a/a0/Clone_small.png", bad2: "https://heroes.thelazy.net/images/0/00/Remove_Obstacle_small.png", bad3: "https://heroes.thelazy.net/images/a/a0/Scuttle_Boat_small.png"},
{question: "Which spell is from level IV?", good1: "https://heroes.thelazy.net/images/d/d5/Slayer_small.png", bad1: "https://heroes.thelazy.net/images/9/96/Dimension_Door_small.png", bad2: "https://heroes.thelazy.net/images/1/10/Magic_Mirror_small.png", bad3: "https://heroes.thelazy.net/images/c/cf/Summon_Water_Elemental_small.png"},
{question: "Which spell is from level V?", good1: "https://heroes.thelazy.net/images/7/70/Sacrifice_small.png", bad1: "https://heroes.thelazy.net/images/f/f2/Water_Walk_small.png", bad2: "https://heroes.thelazy.net/images/0/0f/Town_Portal_small.png", bad3: "https://heroes.thelazy.net/images/9/9b/Teleport_small.png"},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""},
{question: "", good1: "", bad1: "", bad2: "", bad3: ""}];

// {question: "", good1: "", bad1: "", bad2: "", bad3: ""}
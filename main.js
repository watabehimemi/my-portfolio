//フォロワーが増える
const follow_button = document.getElementById("follow");
const follower_number = document.getElementById("follower");

let count = 0;

follow_button.onclick = function () {
  count += 1;
  follower_number.textContent = count;
};

//写真にカーソルを合わせると情報が出てくる
let ph1 = document.getElementById("creep");
ph1.onmouseover = function () {
  ph1.src = "images/setsumei1.jpg";
};
ph1.onmouseout = function () {
  ph1.src = "images/creep.jpg";
};

let ph2 = document.getElementById("flute");
ph2.onmouseover = function () {
  ph2.src = "images/setsumei2.jpg";
};
ph2.onmouseout = function () {
  ph2.src = "images/flute_zibun.jpg";
};

let ph3 = document.getElementById("shimohuri");
ph3.onmouseover = function () {
  ph3.src = "images/setsumei3.jpg";
};
ph3.onmouseout = function () {
  ph3.src = "images/shimohuri.jpg";
};

let ph4 = document.getElementById("okayama");
ph4.onmouseover = function () {
  ph4.src = "images/setsumei4.jpg";
};
ph4.onmouseout = function () {
  ph4.src = "images/okayama_zibun.jpg";
};

let ph5 = document.getElementById("ramendaisensou");
ph5.onmouseover = function () {
  ph5.src = "images/setsumei5.jpg";
};
ph5.onmouseout = function () {
  ph5.src = "images/ramendaisennsou.jpg";
};

let ph6 = document.getElementById("zirou");
ph6.onmouseover = function () {
  ph6.src = "images/setsumei6.jpg";
};
ph6.onmouseout = function () {
  ph6.src = "images/zirou.jpg";
};

//クイズ実装
let quizContainer = document.getElementById("quiz-container");
let quizButton = document.getElementById("quiz");

quizContainer.style.display = "none";

quizButton.onclick = function () {
  if (quizContainer.style.display == "block") {
    quizContainer.style.display = "none";
  } else {
    quizContainer.style.display = "block";
  }
};

const quiz1 = document.getElementById("quiz-1");
const quiz2 = document.getElementById("quiz-2");
const quiz3 = document.getElementById("quiz-3");
const quiz4 = document.getElementById("quiz-4");
const quizAnswer = document.getElementById("quiz-answer");

quiz1.onclick = function () {
  quizAnswer.textContent =
    "はずれ。一気に10個割ったことはないけど、通算10個割ったよ。";
};
quiz2.onclick = function () {
  quizAnswer.textContent = "はずれ。お客さんはお父さんではありません！";
};
quiz3.onclick = function () {
  quizAnswer.textContent = "はずれ。友達がやらかしてたよ。";
};
quiz4.onclick = function () {
  quizAnswer.textContent = "あたり。料理名はなかなか覚えられないよ。";
};

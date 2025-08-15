// 4年2組の生徒データ（faceは joy / smile / calm / sad / angry の5段階）
const students = [
  { name: "タケダ タケシ", gender: "男", likes: "カレーライス", dislikes: "ピーマン炒め", comment: "おかわりしてもいいっすか？", face: "smile" },
  { name: "サトウ ミホ", gender: "女", likes: "ミルメーク牛乳", dislikes: "焼き魚", comment: "甘いのだけなら食べてもいいよ", face: "calm" },
  { name: "オオハシ シュン", gender: "男", likes: "冷凍みかん", dislikes: "牛乳", comment: "みかんがあるときは神だよな", face: "joy" },
  { name: "ナカジマ アキラ", gender: "男", likes: "ソフト麺ミートソース", dislikes: "酢の物", comment: "すっぱいのはちょっと……", face: "calm" },
  { name: "ヤマモト カナ", gender: "女", likes: "揚げパン", dislikes: "ひじきの煮物", comment: "手ベタベタだけど最高〜！", face: "joy" },
  { name: "フジイ マサト", gender: "男", likes: "牛乳", dislikes: "ゼリー", comment: "ゼリーはな、ぷるぷるしてて苦手", face: "calm" },
  { name: "トミナガ ハルカ", gender: "女", likes: "きなこパン", dislikes: "カレーライス", comment: "辛いのはちょっとだけでいいの……", face: "smile" },
  { name: "クドウ ショウタ", gender: "男", likes: "ハムカツ", dislikes: "ミルク寒天", comment: "甘いの、男子はあんま食べんやろ", face: "joy" },
  { name: "イシイ エミ", gender: "女", likes: "ミルク寒天", dislikes: "野菜の煮付け", comment: "デザートって心のくすりよね", face: "smile" },
  { name: "ナガオカ タダシ", gender: "男", likes: "さばの味噌煮", dislikes: "コッペパン", comment: "パンより米がいいなぁ……", face: "calm" },
  { name: "ミヤザワ ユキ", gender: "女", likes: "サラダスパゲティ", dislikes: "牛乳", comment: "牛乳って、ちょっとお腹いたくなるの", face: "calm" },
  { name: "ホソカワ ヒロミ", gender: "女", likes: "コッペパン", dislikes: "わかめスープ", comment: "あの黒いの、海藻？ムリかも……", face: "sad" },
  { name: "キムラ リョウ", gender: "男", likes: "焼きそば", dislikes: "きのこソテー", comment: "ぐにゅっとするやつダメ！", face: "sad" },
  { name: "ハセガワ レイ", gender: "女", likes: "フルーツポンチ", dislikes: "野菜炒め", comment: "フルーツにシロップ、最強", face: "joy" },
  { name: "タカハシ ジロウ", gender: "男", likes: "カツカレー", dislikes: "サラダ", comment: "葉っぱより肉！", face: "joy" },
  { name: "イノウエ ミユキ", gender: "女", likes: "たまごスープ", dislikes: "焼き魚", comment: "骨、うまく取れないのよねぇ", face: "calm" },
  { name: "サエキ ケンジ", gender: "男", likes: "牛乳プリン", dislikes: "酢の物", comment: "すっぱいのは、なー……", face: "angry" },
  { name: "ヨシダ サクラ", gender: "女", likes: "おでん", dislikes: "焼きそば", comment: "おでんって味しみてて落ち着くの", face: "smile" },
  { name: "ヤマダ コウスケ", gender: "男", likes: "中華丼", dislikes: "冷凍みかん", comment: "歯にしみるんだよ……あれ", face: "sad" },
  { name: "ナガタ ユリ", gender: "女", likes: "白ごはん", dislikes: "カレー", comment: "カレーはにおいがキツいのよ……", face: "calm" },
  { name: "カネコ ケンタ", gender: "男", likes: "シチュー", dislikes: "パイナップル", comment: "すっぱい果物が入ってるとイヤ", face: "angry" },
  { name: "ウエハラ ノゾミ", gender: "女", likes: "スパゲティナポリタン", dislikes: "さばの味噌煮", comment: "魚はちょっとだけなら…", face: "calm" },
  { name: "モリ カズオ", gender: "男", likes: "焼きうどん", dislikes: "ひじき", comment: "ひじきってなんで黒いんや？", face: "calm" },
  { name: "タニグチ マリ", gender: "女", likes: "チキンライス", dislikes: "野菜スープ", comment: "汁ものって、ちょっとにしてほしい", face: "smile" },
  { name: "ハマダ トモヒコ", gender: "男", likes: "フライドチキン", dislikes: "牛乳寒天", comment: "甘いのよりしょっぱい方がええ", face: "joy" },
  { name: "シバタ アユミ", gender: "女", likes: "コーンスープ", dislikes: "焼きなす", comment: "なすって見た目がこわいのよ……", face: "sad" },
  { name: "クラモト マサル", gender: "男", likes: "チャーハン", dislikes: "豆腐", comment: "ぷるんってしたやつ苦手や", face: "angry" },
  { name: "アンドウ リナ", gender: "女", likes: "フルーツヨーグルト", dislikes: "カボチャの煮物", comment: "甘いのと甘いのは違うのよね〜", face: "joy" },
  { name: "カワサキ ヒカル", gender: "男", likes: "カレーうどん", dislikes: "こんにゃく", comment: "なんかビヨンってのが気持ち悪い", face: "sad" },
  { name: "オクダ サチオ", gender: "男", likes: "ごはんとたくあん", dislikes: "ミネストローネ", comment: "なんか、洋風すぎるの苦手やわ", face: "calm" },
  { name: "ノナカ ミキ", gender: "女", likes: "ハンバーグ", dislikes: "トマト", comment: "赤いの、生じゃムリ……", face: "angry" },
  { name: "ツジモト リク", gender: "男", likes: "冷やし中華", dislikes: "しらたき", comment: "麺はいいけど、糸みたいのはやめてくれ", face: "sad" }
];

// 給食メニューリスト
const menuItems = [
  "カレーライス", "ミルメーク牛乳", "冷凍みかん", "ソフト麺ミートソース", "揚げパン",
  "牛乳", "きなこパン", "ハムカツ", "ミルク寒天", "さばの味噌煮",
  "コッペパン", "サラダスパゲティ", "わかめスープ", "焼きそば", "きのこソテー",
  "フルーツポンチ", "カツカレー", "サラダ", "たまごスープ", "焼き魚",
  "牛乳プリン", "酢の物", "おでん", "中華丼", "パイナップル",
  "白ごはん", "カレー", "シチュー", "スパゲティナポリタン", "焼きうどん",
  "ひじき", "チキンライス", "野菜スープ", "フライドチキン", "コーンスープ",
  "焼きなす", "チャーハン", "豆腐", "フルーツヨーグルト", "カボチャの煮物",
  "カレーうどん", "こんにゃく", "ごはんとたくあん", "ミネストローネ", "ハンバーグ",
  "トマト", "冷やし中華", "しらたき", "野菜炒め", "ひじきの煮物",
  "野菜の煮付け", "ゼリー", "ピーマン炒め"
];

// 類似性定義
const similarFoods = {
  "カレーライス": ["カツカレー", "カレーうどん"],
  "牛乳": ["ミルメーク牛乳", "牛乳プリン"],
  "揚げパン": ["きなこパン", "コッペパン"],
  "焼き魚": ["さばの味噌煮"],
  "サラダ": ["サラダスパゲティ", "野菜炒め"],
  "白ごはん": ["チャーハン", "中華丼", "チキンライス"],
  "パン": ["コッペパン", "きなこパン", "揚げパン"],
  "麺": ["ソフト麺ミートソース", "スパゲティナポリタン", "焼きそば", "焼きうどん", "冷やし中華", "カレーうどん"],
  "汁物": ["たまごスープ", "わかめスープ", "コーンスープ", "シチュー", "ミネストローネ"],
  "煮物": ["おでん", "ひじきの煮物", "野菜の煮付け", "カボチャの煮物"],
  "デザート": ["冷凍みかん", "ミルク寒天", "牛乳プリン", "フルーツポンチ", "ゼリー", "フルーツヨーグルト"],
  "ハンバーグ": ["フライドチキン", "ハムカツ"],
  // 嫌い側
  "酢の物": ["サラダ"],
  "ピーマン炒め": ["野菜炒め"],
  "きのこソテー": ["野菜炒め"],
  "トマト": ["野菜炒め", "サラダスパゲティ"],
  "こんにゃく": ["しらたき"],
  "豆腐": ["ミルク寒天", "牛乳プリン"],
  "ゼリー": ["ミルク寒天", "牛乳プリン", "フルーツヨーグルト"]
};

// ゲーム状態
let gameState = {
  currentStudent: null,
  currentStudentIndex: 0,
  score: 0,
  timer: 60,
  served: 0,
  totalStudents: 32,
  isGameRunning: false,
  correctAnswers: 0,
  wrongAnswers: 0,
  usedStudents: []
};

// DOM要素
const titleScreen = document.getElementById('title-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const titleBtn = document.getElementById('title-btn');

// ゲーム要素
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const servedElement = document.getElementById('served');
const currentStudentElement = document.getElementById('current-student');
const menuButtonsElement = document.getElementById('menu-buttons');
const reactionMessageElement = document.getElementById('reaction-message');
const bgmAudio = document.getElementById('bgm');
const saraAudio = document.getElementById('sara-sound');

// 結果画面要素
const finalScoreElement = document.getElementById('final-score');
const finalServedElement = document.getElementById('final-served');
const accuracyElement = document.getElementById('accuracy');
const resultMessageElement = document.getElementById('result-message');

let gameInterval;

// イベントリスナー
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
titleBtn.addEventListener('click', showTitleScreen);

// ゲームルール表示（9個表記に修正）
function showGameInstructions() {
  const existing = document.querySelector('.game-instructions');
  if (existing) existing.remove();
  const instructions = document.createElement('div');
  instructions.innerText = '9個の給食から1つ選んであげよう！嫌いなものをあげると怒られるよ！';
  instructions.className = 'game-instructions';
  document.body.prepend(instructions);
}
function removeGameInstructions() {
  const instructions = document.querySelector('.game-instructions');
  if (instructions) instructions.remove();
}

// ゲーム開始
function startGame() {
  resetGameState();
  showGameScreen();
  showGameInstructions();
  startTimer();
  bgmAudio.currentTime = 0;
  bgmAudio.play();
  nextStudent();
}

// リセット
function resetGameState() {
  gameState = {
    currentStudent: null,
    currentStudentIndex: 0,
    score: 0,
    timer: 60,
    served: 0,
    totalStudents: students.length,
    isGameRunning: true,
    correctAnswers: 0,
    wrongAnswers: 0,
    usedStudents: []
  };
  updateUI();
  reactionMessageElement.textContent = '';
  reactionMessageElement.className = 'reaction-message';
}

// —— 選択肢生成（9個、4段階を必ず含む）——
function generateMenuOptions(student) {
  const like = student.likes;
  const dislike = student.dislikes;

  const likeSims = (similarFoods[like] || []).filter(m => m !== like && m !== dislike);
  const dislikeSims = (similarFoods[dislike] || []).filter(m => m !== like && m !== dislike);

  // 重複防止
  const options = new Set();

  // 1) 正解（好き）
  options.add(like);

  // 2) 不正解の代表（嫌い）
  options.add(dislike);

  // 3) やや正解（好きに似ている）1つ確保（候補があれば）
  if (likeSims.length > 0) {
    options.add(likeSims[Math.floor(Math.random() * likeSims.length)]);
  }

  // 4) やや嫌い（嫌いに似ている）1つ確保（候補があれば）
  if (dislikeSims.length > 0) {
    options.add(dislikeSims[Math.floor(Math.random() * dislikeSims.length)]);
  }

  // 5) 中立を最低1つ
  const neutralPool = menuItems.filter(m =>
    m !== like &&
    m !== dislike &&
    !likeSims.includes(m) &&
    !dislikeSims.includes(m)
  );
  if (neutralPool.length > 0) {
    options.add(neutralPool[Math.floor(Math.random() * neutralPool.length)]);
  }

  // 6) 9個になるまで補充（重複なし）
  const othersPool = menuItems.filter(m => !options.has(m));
  for (let i = othersPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [othersPool[i], othersPool[j]] = [othersPool[j], othersPool[i]];
  }
  for (const m of othersPool) {
    options.add(m);
    if (options.size >= 9) break;
  }

  // ランダム並べ替え
  return Array.from(options).sort(() => Math.random() - 0.5);
}

// メニューボタン
function createMenuButtons(options) {
  menuButtonsElement.innerHTML = '';
  options.forEach(menu => {
    const button = document.createElement('button');
    button.className = 'menu-button';
    button.textContent = menu;
    button.addEventListener('click', () => selectMenu(menu));
    menuButtonsElement.appendChild(button);
  });
}

// 次の生徒
function nextStudent() {
  if (!gameState.isGameRunning) return;

  // 皿音
  saraAudio.currentTime = 0;
  saraAudio.play();

  // 全員対応済みなら終了
  if (gameState.usedStudents.length >= gameState.totalStudents) {
    endGame();
    return;
  }

  // 未使用からランダム
  const available = students.map((_, i) => i).filter(i => !gameState.usedStudents.includes(i));
  const randomIndex = available[Math.floor(Math.random() * available.length)];
  gameState.currentStudent = students[randomIndex];
  gameState.usedStudents.push(randomIndex);

  // 生徒表示
  const genderPrefix = gameState.currentStudent.gender === '男' ? 'boy' : 'girl';
  currentStudentElement.innerHTML = `
    <div class="student-face"><img src="img/${genderPrefix}_${gameState.currentStudent.face}.svg" alt="${gameState.currentStudent.face}"></div>
    <div class="student-name">${gameState.currentStudent.name}</div>
    <div class="student-comment">「${gameState.currentStudent.comment}」</div>
    <div class="student-preferences">
      <div class="likes">好き：${gameState.currentStudent.likes}</div>
      <div class="dislikes">嫌い：${gameState.currentStudent.dislikes}</div>
    </div>
  `;

  // リアクション初期化
  reactionMessageElement.textContent = '';
  reactionMessageElement.className = 'reaction-message';

  // 9個生成→表示
  const options = generateMenuOptions(gameState.currentStudent);
  createMenuButtons(options);
}

// 判定
function selectMenu(selectedMenu) {
  if (!gameState.isGameRunning || !gameState.currentStudent) return;

  let reactionText = '';
  let reactionFace = 'calm';
  let reactionClass = '';

  const studentLikes = gameState.currentStudent.likes;
  const studentDislikes = gameState.currentStudent.dislikes;

  const genderPrefix = gameState.currentStudent.gender === '男' ? 'boy' : 'girl';

  if (selectedMenu === studentLikes) {
    gameState.score += 100; // 正解
    gameState.correctAnswers++;
    reactionText = `「${selectedMenu}！やったー！ありがとう！」`;
    reactionClass = 'good';
    reactionFace = 'joy';
  } else if (selectedMenu === studentDislikes) {
    gameState.score -= 50; // 最悪
    gameState.wrongAnswers++;
    reactionText = `「えー…${selectedMenu}は苦手なんだよねぇ…」`;
    reactionClass = 'worst';
    reactionFace = 'angry';
  } else {
    const likedFoodSimilarities = similarFoods[studentLikes] || [];
    const dislikedFoodSimilarities = similarFoods[studentDislikes] || [];

    const isSimilarToLike = () => {
      if (likedFoodSimilarities.includes(selectedMenu)) return true;
      return Object.entries(similarFoods).some(([key, arr]) => key === selectedMenu && arr.includes(studentLikes));
    };
    const isSimilarToDislike = () => {
      if (dislikedFoodSimilarities.includes(selectedMenu)) return true;
      return Object.entries(similarFoods).some(([key, arr]) => key === selectedMenu && arr.includes(studentDislikes));
    };

    if (isSimilarToLike()) {
      gameState.score += 30; // やや正解
      gameState.correctAnswers++;
      reactionText = `「おっ！${selectedMenu}！${studentLikes}に似てる！ありがとう！」`;
      reactionClass = 'medium';
      reactionFace = 'smile';
    } else if (isSimilarToDislike()) {
      gameState.score -= 30; // やや嫌い
      gameState.wrongAnswers++;
      reactionText = `「うわっ、${selectedMenu}かあ…${studentDislikes}に似てるからちょっと…」`;
      reactionClass = 'bad';
      reactionFace = 'sad';
    } else {
      gameState.score -= 20; // 中立
      gameState.wrongAnswers++;
      reactionText = `「うーん、これは今日じゃない気分かな…」`;
      reactionClass = 'neutral';
      reactionFace = 'calm';
    }
  }

  gameState.served++;
  updateUI();

  reactionMessageElement.textContent = reactionText;
  reactionMessageElement.className = 'reaction-message';
  reactionMessageElement.classList.add(reactionClass);
  const faceImg = document.createElement('img');
  faceImg.src = `img/${genderPrefix}_${reactionFace}.svg`;
  faceImg.alt = reactionFace;
  reactionMessageElement.appendChild(faceImg);
  showPopup(reactionText);

  // 生徒カードの表情も更新
  const studentFaceImg = currentStudentElement.querySelector('.student-face img');
  if (studentFaceImg) {
    studentFaceImg.src = faceImg.src;
    studentFaceImg.alt = reactionFace;
  }

  setTimeout(() => {
    nextStudent();
  }, 1000);
}

function showPopup(message) {
  const popup = document.createElement('div');
  popup.className = 'comment-popup';
  popup.textContent = message;
  document.body.appendChild(popup);
  setTimeout(() => {
    popup.remove();
  }, 2000);
}

// タイマー
function startTimer() {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    gameState.timer--;
    updateUI();
    if (gameState.timer <= 0) {
      clearInterval(gameInterval);
      endGame();
    }
  }, 1000);
}

// 終了
function endGame() {
  gameState.isGameRunning = false;
  clearInterval(gameInterval);
  bgmAudio.pause();
  bgmAudio.currentTime = 0;

  const finalScore = gameState.score;
  const totalAttempts = gameState.correctAnswers + gameState.wrongAnswers;
  const accuracy = totalAttempts > 0 ? (gameState.correctAnswers / totalAttempts * 100).toFixed(1) : 0;

  finalScoreElement.textContent = finalScore;
  finalServedElement.textContent = gameState.served;
  accuracyElement.textContent = `${accuracy}%`;

  let resultMessage = '';
  if (accuracy >= 80) {
    resultMessage = "素晴らしい給食当番でした！みんな大満足です！";
  } else if (accuracy >= 50) {
    resultMessage = "まずまずの腕前でしたね。もう少しでみんなを笑顔にできます！";
  } else {
    resultMessage = "ちょっと苦手な生徒が多かったかな？次は頑張ろう！";
  }
  resultMessageElement.textContent = resultMessage;

  showResultScreen();
}

// UI
function updateUI() {
  scoreElement.textContent = gameState.score;
  timerElement.textContent = gameState.timer;
  servedElement.textContent = `${gameState.served}/${gameState.totalStudents}`;
}

// 画面制御
function showTitleScreen() {
  removeGameInstructions();
  titleScreen.classList.remove('hidden');
  gameScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
}
function showGameScreen() {
  titleScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  resultScreen.classList.add('hidden');
}
function showResultScreen() {
  removeGameInstructions();
  titleScreen.classList.add('hidden');
  gameScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
}

// 初期表示
showTitleScreen();

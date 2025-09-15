// 4年2組の生徒データ（可愛らしく自然な小学生のセリフに変更）
const students = [
  { name: "タケダ タケシ", gender: "男", likes: "カレーライス", dislikes: "ピーマン炒め", comment: "今日のカレー、めっちゃ楽しみ！", face: "smile" },
  { name: "サトウ ミホ", gender: "女", likes: "ミルメーク牛乳", dislikes: "焼き魚", comment: "ミルメークがあると嬉しいな♪", face: "calm" },
  { name: "オオハシ シュン", gender: "男", likes: "冷凍みかん", dislikes: "牛乳", comment: "冷たいみかん、最高だよね～", face: "joy" },
  { name: "ナカジマ アキラ", gender: "男", likes: "ソフト麺ミートソース", dislikes: "酢の物", comment: "ソフト麺大好き！すっぱいのはちょっと…", face: "calm" },
  { name: "ヤマモト カナ", gender: "女", likes: "揚げパン", dislikes: "ひじきの煮物", comment: "揚げパンの甘さがたまらない〜！", face: "joy" },
  { name: "フジイ マサト", gender: "男", likes: "牛乳", dislikes: "ゼリー", comment: "牛乳で背が伸びるんだって！", face: "calm" },
  { name: "トミナガ ハルカ", gender: "女", likes: "きなこパン", dislikes: "カレーライス", comment: "きなこの甘い香りが好き♪", face: "smile" },
  { name: "クドウ ショウタ", gender: "男", likes: "ハムカツ", dislikes: "ミルク寒天", comment: "揚げ物って美味しいよね〜", face: "joy" },
  { name: "イシイ エミ", gender: "女", likes: "ミルク寒天", dislikes: "野菜の煮付け", comment: "つるんとした食感が大好き！", face: "smile" },
  { name: "ナガオカ タダシ", gender: "男", likes: "さばの味噌煮", dislikes: "コッペパン", comment: "お魚って体にいいんでしょ？", face: "calm" },
  { name: "ミヤザワ ユキ", gender: "女", likes: "サラダスパゲティ", dislikes: "牛乳", comment: "スパゲティ、フォークで巻くの上手になったよ！", face: "calm" },
  { name: "ホソカワ ヒロミ", gender: "女", likes: "コッペパン", dislikes: "わかめスープ", comment: "ふわふわのパンが好き♪", face: "smile" },
  { name: "キムラ リョウ", gender: "男", likes: "焼きそば", dislikes: "きのこソテー", comment: "焼きそばって給食で一番うまい！", face: "joy" },
  { name: "ハセガワ レイ", gender: "女", likes: "フルーツポンチ", dislikes: "野菜炒め", comment: "フルーツが入ってると嬉しいな〜", face: "joy" },
  { name: "タカハシ ジロウ", gender: "男", likes: "カツカレー", dislikes: "サラダ", comment: "カツとカレーの組み合わせ最強！", face: "joy" },
  { name: "イノウエ ミユキ", gender: "女", likes: "たまごスープ", dislikes: "焼き魚", comment: "たまごスープ、ほっとするよね♪", face: "calm" },
  { name: "サエキ ケンジ", gender: "男", likes: "牛乳プリン", dislikes: "酢の物", comment: "プリンって給食にもあるんだ〜", face: "smile" },
  { name: "ヨシダ サクラ", gender: "女", likes: "おでん", dislikes: "焼きそば", comment: "おでんって心があったまる〜", face: "smile" },
  { name: "ヤマダ コウスケ", gender: "男", likes: "中華丼", dislikes: "冷凍みかん", comment: "中華丼、野菜いっぱいで元気出る！", face: "calm" },
  { name: "ナガタ ユリ", gender: "女", likes: "白ごはん", dislikes: "カレー", comment: "やっぱりお米が一番だよね♪", face: "calm" },
  { name: "カネコ ケンタ", gender: "男", likes: "シチュー", dislikes: "パイナップル", comment: "クリーミーなシチュー大好き！", face: "joy" },
  { name: "ウエハラ ノゾミ", gender: "女", likes: "スパゲティナポリタン", dislikes: "さばの味噌煮", comment: "赤いスパゲティ、見た目もきれい♪", face: "calm" },
  { name: "モリ カズオ", gender: "男", likes: "焼きうどん", dislikes: "ひじき", comment: "もちもちうどん、お腹いっぱいになる〜", face: "calm" },
  { name: "タニグチ マリ", gender: "女", likes: "チキンライス", dislikes: "野菜スープ", comment: "ケチャップの味、大好き♪", face: "smile" },
  { name: "ハマダ トモヒコ", gender: "男", likes: "フライドチキン", dislikes: "牛乳寒天", comment: "サクサクのチキン、めっちゃうまい！", face: "joy" },
  { name: "シバタ アユミ", gender: "女", likes: "コーンスープ", dislikes: "焼きなす", comment: "コーンの甘さが好き〜♪", face: "smile" },
  { name: "クラモト マサル", gender: "男", likes: "チャーハン", dislikes: "豆腐", comment: "パラパラチャーハン、作ってみたい！", face: "joy" },
  { name: "アンドウ リナ", gender: "女", likes: "フルーツヨーグルト", dislikes: "カボチャの煮物", comment: "ヨーグルトって体にもいいんでしょ？", face: "joy" },
  { name: "カワサキ ヒカル", gender: "男", likes: "カレーうどん", dislikes: "こんにゃく", comment: "カレーとうどんの最強コンビ！", face: "smile" },
  { name: "オクダ サチオ", gender: "男", likes: "ごはんとたくあん", dislikes: "ミネストローネ", comment: "たくあんのポリポリが好き♪", face: "calm" },
  { name: "ノナカ ミキ", gender: "女", likes: "ハンバーグ", dislikes: "トマト", comment: "ふわふわハンバーグ美味しそう〜♪", face: "smile" },
  { name: "ツジモト リク", gender: "男", likes: "冷やし中華", dislikes: "しらたき", comment: "つるつる麺、夏は最高だよね〜", face: "calm" }
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

// 類似性定義（より詳細に）
const similarFoods = {
  "カレーライス": ["カツカレー", "カレーうどん", "カレー"],
  "牛乳": ["ミルメーク牛乳", "牛乳プリン"],
  "揚げパン": ["きなこパン", "コッペパン"],
  "焼き魚": ["さばの味噌煮"],
  "サラダ": ["サラダスパゲティ", "野菜炒め"],
  "白ごはん": ["チャーハン", "中華丼", "チキンライス", "ごはんとたくあん"],
  "パン": ["コッペパン", "きなこパン", "揚げパン"],
  "麺": ["ソフト麺ミートソース", "スパゲティナポリタン", "焼きそば", "焼きうどん", "冷やし中華", "カレーうどん"],
  "汁物": ["たまごスープ", "わかめスープ", "コーンスープ", "シチュー", "ミネストローネ", "野菜スープ"],
  "煮物": ["おでん", "ひじきの煮物", "野菜の煮付け", "カボチャの煮物", "さばの味噌煮"],
  "デザート": ["冷凍みかん", "ミルク寒天", "牛乳プリン", "フルーツポンチ", "ゼリー", "フルーツヨーグルト", "パイナップル"],
  "肉料理": ["ハンバーグ", "フライドチキン", "ハムカツ", "カツカレー"],
  // 嫌い側の類似性
  "酢の物": ["サラダ"],
  "ピーマン炒め": ["野菜炒め", "きのこソテー"],
  "きのこソテー": ["野菜炒め", "ピーマン炒め"],
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

// ゲーム開始
function startGame() {
  resetGameState();
  showGameScreen();
  startTimer();
  
  // BGM再生（エラーハンドリング付き）
  if (bgmAudio) {
    bgmAudio.currentTime = 0;
    bgmAudio.play().catch(e => console.log('BGM再生エラー:', e));
  }
  
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

// 選択肢生成（12個、より良いバランスで）
function generateMenuOptions(student) {
  const like = student.likes;
  const dislike = student.dislikes;

  const likeSims = (similarFoods[like] || []).filter(m => m !== like && m !== dislike);
  const dislikeSims = (similarFoods[dislike] || []).filter(m => m !== like && m !== dislike);

  const options = new Set();

  // 1) 正解（好き）- 必ず含める
  options.add(like);

  // 2) 不正解の代表（嫌い）- 必ず含める
  options.add(dislike);

  // 3) やや正解（好きに似ている）1-2個
  if (likeSims.length > 0) {
    const count = Math.min(2, likeSims.length);
    for (let i = 0; i < count; i++) {
      const sim = likeSims[Math.floor(Math.random() * likeSims.length)];
      if (!options.has(sim)) {
        options.add(sim);
        break;
      }
    }
  }

  // 4) やや嫌い（嫌いに似ている）1個
  if (dislikeSims.length > 0) {
    const sim = dislikeSims[Math.floor(Math.random() * dislikeSims.length)];
    if (!options.has(sim)) {
      options.add(sim);
    }
  }

  // 5) 中立を4-6個追加
  const neutralPool = menuItems.filter(m =>
    m !== like &&
    m !== dislike &&
    !likeSims.includes(m) &&
    !dislikeSims.includes(m)
  );
  
  // ランダムに並べ替え
  for (let i = neutralPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [neutralPool[i], neutralPool[j]] = [neutralPool[j], neutralPool[i]];
  }

  // 12個になるまで補充
  for (const m of neutralPool) {
    if (options.size >= 12) break;
    options.add(m);
  }

  // まだ12個に満たない場合、残りのメニューから追加
  if (options.size < 12) {
    const remaining = menuItems.filter(m => !options.has(m));
    for (const m of remaining) {
      if (options.size >= 12) break;
      options.add(m);
    }
  }

  // ランダムに並べ替え
  return Array.from(options).sort(() => Math.random() - 0.5);
}

// メニューボタン生成
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

  // 皿音再生（エラーハンドリング付き）
  if (saraAudio) {
    saraAudio.currentTime = 0;
    saraAudio.play().catch(e => console.log('効果音再生エラー:', e));
  }

  // 全員対応済みなら終了
  if (gameState.usedStudents.length >= gameState.totalStudents) {
    endGame();
    return;
  }

  // 未使用からランダム選択
  const available = students.map((_, i) => i).filter(i => !gameState.usedStudents.includes(i));
  const randomIndex = available[Math.floor(Math.random() * available.length)];
  gameState.currentStudent = students[randomIndex];
  gameState.usedStudents.push(randomIndex);

  // 生徒表示
  displayStudent(gameState.currentStudent);

  // リアクション初期化
  reactionMessageElement.textContent = '';
  reactionMessageElement.className = 'reaction-message';

  // 9個のメニュー生成・表示
  const options = generateMenuOptions(gameState.currentStudent);
  createMenuButtons(options);
}

// 生徒表示関数
function displayStudent(student) {
  const genderPrefix = student.gender === '男' ? 'boy' : 'girl';
  
  currentStudentElement.innerHTML = `
    <div class="student-face">
      <img src="img/${genderPrefix}_${student.face}.svg" alt="${student.face}" 
           onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNGRkM0NzAiLz4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMyIgZmlsbD0iIzMzMyIvPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjMwIiByPSIzIiBmaWxsPSIjMzMzIi8+CjxwYXRoIGQ9Ik0zMCA1MFE0MCA1NSA1MCA1MCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KPC9zdmc+'">
    </div>
    <div class="student-name">${student.name}</div>
    <div class="student-comment">「${student.comment}」</div>
    <div class="student-preferences">
      <div class="likes">😊 好き：${student.likes}</div>
      <div class="dislikes">😅 苦手：${student.dislikes}</div>
    </div>
  `;
}

// メニュー選択の判定（より詳細な反応）
function selectMenu(selectedMenu) {
  if (!gameState.isGameRunning || !gameState.currentStudent) return;

  let reactionText = '';
  let reactionFace = 'calm';
  let reactionClass = '';
  let scoreChange = 0;

  const studentLikes = gameState.currentStudent.likes;
  const studentDislikes = gameState.currentStudent.dislikes;
  const genderPrefix = gameState.currentStudent.gender === '男' ? 'boy' : 'girl';

  if (selectedMenu === studentLikes) {
    // 完全正解
    scoreChange = 150;
    gameState.correctAnswers++;
    reactionText = `わーい！${selectedMenu}だ〜！大好き〜♪ありがとう！`;
    reactionClass = 'excellent';
    reactionFace = 'joy';
  } else if (selectedMenu === studentDislikes) {
    // 最悪
    scoreChange = -100;
    gameState.wrongAnswers++;
    reactionText = `えーっ…${selectedMenu}は苦手なんだよね…残しちゃうかも…`;
    reactionClass = 'worst';
    reactionFace = 'angry';
  } else {
    // 類似性チェック
    const likedFoodSimilarities = similarFoods[studentLikes] || [];
    const dislikedFoodSimilarities = similarFoods[studentDislikes] || [];

    const isSimilarToLike = () => {
      return likedFoodSimilarities.includes(selectedMenu) || 
             Object.entries(similarFoods).some(([key, arr]) => 
               key === selectedMenu && arr.includes(studentLikes));
    };
    
    const isSimilarToDislike = () => {
      return dislikedFoodSimilarities.includes(selectedMenu) || 
             Object.entries(similarFoods).some(([key, arr]) => 
               key === selectedMenu && arr.includes(studentDislikes));
    };

    if (isSimilarToLike()) {
      // やや正解
      scoreChange = 80;
      gameState.correctAnswers++;
      reactionText = `おっ！${selectedMenu}！${studentLikes}に似てるから好きかも〜♪`;
      reactionClass = 'good';
      reactionFace = 'smile';
    } else if (isSimilarToDislike()) {
      // やや嫌い
      scoreChange = -60;
      gameState.wrongAnswers++;
      reactionText = `うーん…${selectedMenu}かぁ…${studentDislikes}に似てるからちょっと…`;
      reactionClass = 'bad';
      reactionFace = 'sad';
    } else {
      // 中立
      scoreChange = -20;
      gameState.wrongAnswers++;
      reactionText = `${selectedMenu}かぁ…今日はあんまり食べたい気分じゃないかな…`;
      reactionClass = 'neutral';
      reactionFace = 'calm';
    }
  }

  gameState.score = Math.max(0, gameState.score + scoreChange);
  gameState.served++;
  updateUI();

  // リアクション表示
  showReaction(reactionText, reactionClass, genderPrefix, reactionFace);

  // 生徒の表情更新
  updateStudentFace(genderPrefix, reactionFace);

  // 次の生徒へ
  setTimeout(() => {
    nextStudent();
  }, 2000);
}

// リアクション表示
function showReaction(text, className, genderPrefix, face) {
  reactionMessageElement.textContent = text;
  reactionMessageElement.className = `reaction-message ${className}`;
  
  // 表情画像を追加
  const faceImg = document.createElement('img');
  faceImg.src = `img/${genderPrefix}_${face}.svg`;
  faceImg.alt = face;
  faceImg.onerror = function() {
    this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGRkM0NzAiLz4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMiIgZmlsbD0iIzMzMyIvPgo8Y2lyY2xlIGN4PSIyNSIgY3k9IjE1IiByPSIyIiBmaWxsPSIjMzMzIi8+CjxwYXRoIGQ9Ik0xNSAyNVEyMCAyOCAyNSAyNSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz4KPC9zdmc+';
  };
  reactionMessageElement.appendChild(faceImg);
}

// 生徒の表情更新
function updateStudentFace(genderPrefix, face) {
  const studentFaceImg = currentStudentElement.querySelector('.student-face img');
  if (studentFaceImg) {
    studentFaceImg.src = `img/${genderPrefix}_${face}.svg`;
    studentFaceImg.alt = face;
  }
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

// ゲーム終了
function endGame() {
  gameState.isGameRunning = false;
  clearInterval(gameInterval);
  
  if (bgmAudio) {
    bgmAudio.pause();
    bgmAudio.currentTime = 0;
  }

  const finalScore = gameState.score;
  const totalAttempts = gameState.correctAnswers + gameState.wrongAnswers;
  const accuracy = totalAttempts > 0 ? (gameState.correctAnswers / totalAttempts * 100).toFixed(1) : 0;

  finalScoreElement.textContent = finalScore;
  finalServedElement.textContent = gameState.served;
  accuracyElement.textContent = `${accuracy}%`;

  let resultMessage = '';
  if (accuracy >= 90) {
    resultMessage = "🏆 完璧な給食当番でした！みんな大満足で笑顔いっぱい！あなたは給食マスターです！";
  } else if (accuracy >= 70) {
    resultMessage = "✨ とても上手な給食当番でした！ほとんどの子が喜んでくれました！";
  } else if (accuracy >= 50) {
    resultMessage = "😊 まずまずの給食当番でした。みんなの好みを覚えて、次はもっと喜ばせちゃおう！";
  } else {
    resultMessage = "😅 ちょっと苦戦しちゃったけど、大丈夫！みんなの好みは難しいからね。次は頑張ろう！";
  }
  
  resultMessageElement.textContent = resultMessage;
  showResultScreen();
}

// UI更新
function updateUI() {
  scoreElement.textContent = gameState.score;
  timerElement.textContent = gameState.timer;
  servedElement.textContent = `${gameState.served}/${gameState.totalStudents}`;
}

// 画面制御
function showTitleScreen() {
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
  titleScreen.classList.add('hidden');
  gameScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
}

// 初期表示
showTitleScreen();

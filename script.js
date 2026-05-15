// ===========================================================================
// ITエンジニア アイコン・マスコット クイズ
// ===========================================================================

const QUESTIONS = [
  // --- マスコット (17問) ---
  {
    image: "images/duke.svg",
    mascot: "Duke",
    answer: "Java",
    hint: "1995年Sun Microsystems誕生。手を振っているのが定番ポーズ。",
    choices: ["Java", "C#", "Kotlin", "Scala"],
  },
  {
    image: "images/tux.svg",
    mascot: "Tux",
    answer: "Linux",
    hint: "1996年にLarry Ewingが描いたペンギン。Linus Torvaldsが採用。",
    choices: ["Linux", "FreeBSD", "Solaris", "Minix"],
  },
  {
    image: "images/bugdroid.svg",
    mascot: "Bugdroid (Android Robot)",
    answer: "Android",
    hint: "GoogleのモバイルOSのマスコット。緑色がトレードマーク。",
    choices: ["Android", "iOS", "HarmonyOS", "Tizen"],
  },
  {
    image: "images/octocat.png",
    mascot: "Octocat",
    answer: "GitHub",
    hint: "ネコとタコのキメラ。Cameron McEfee氏らによってデザイン。",
    choices: ["GitHub", "GitLab", "Bitbucket", "Gitea"],
  },
  {
    image: "images/gopher.svg",
    mascot: "Gopher",
    answer: "Go (Golang)",
    hint: "Renée Frenchがデザインしたホリネズミ。",
    choices: ["Go (Golang)", "Rust", "Crystal", "Nim"],
  },
  {
    image: "images/ferris.svg",
    mascot: "Ferris",
    answer: "Rust",
    hint: "オレンジ色のカニ。コミュニティ通称『Rustacean』はここから。",
    choices: ["Rust", "Go (Golang)", "Zig", "V"],
  },
  {
    image: "images/moby.png",
    mascot: "Moby Dock",
    answer: "Docker",
    hint: "コンテナを背負ったクジラ。コンテナ型仮想化のデファクト。",
    choices: ["Docker", "Podman", "Kubernetes", "Vagrant"],
  },
  {
    image: "images/gnu.svg",
    mascot: "GNU",
    answer: "GNU Project",
    hint: "Richard Stallman率いるフリーソフトウェア運動の象徴。",
    choices: ["GNU Project", "Debian", "FreeBSD", "MINIX"],
  },
  {
    image: "images/elephpant.svg",
    mascot: "elePHPant",
    answer: "PHP",
    hint: "PHPのロゴ文字を象に見立てたVincent Pontier作のマスコット。",
    choices: ["PHP", "Apache Hadoop", "PostgreSQL", "Perl"],
  },
  {
    image: "images/beastie.svg",
    mascot: "Beastie (BSD Daemon)",
    answer: "FreeBSD / BSD",
    hint: "三叉槍を持つ赤い小悪魔。daemonプロセスのもじり。",
    choices: ["FreeBSD / BSD", "GNU/Hurd", "Linux", "Solaris"],
  },
  {
    image: "images/camelia.svg",
    mascot: "Camelia",
    answer: "Raku (旧Perl 6)",
    hint: "ピンクの蝶。コミュニティの多様性を象徴。",
    choices: ["Raku (旧Perl 6)", "Perl 5", "Ruby", "Crystal"],
  },
  {
    image: "images/firefox.svg",
    mascot: "Firefox (実はレッサーパンダ)",
    answer: "Mozilla Firefox",
    hint: "燃えるキツネが地球を包む。名前の語源はレッサーパンダ。",
    choices: ["Mozilla Firefox", "Brave", "Opera", "Vivaldi"],
  },
  {
    image: "images/slonik.svg",
    mascot: "Slonik",
    answer: "PostgreSQL",
    hint: "ロシア語で『子象』。1997年から使われる青い象。",
    choices: ["PostgreSQL", "MySQL", "MariaDB", "SQLite"],
  },
  {
    image: "images/mysql.svg",
    mascot: "Sakila (イルカ)",
    answer: "MySQL",
    hint: "アフリカ・スワジランドの言葉に由来する名前のイルカ。",
    choices: ["MySQL", "PostgreSQL", "Oracle Database", "MariaDB"],
  },
  {
    image: "images/suzanne.svg",
    mascot: "Suzanne",
    answer: "Blender",
    hint: "オープンソース3DCGソフトのテストモデル兼マスコットの猿。",
    choices: ["Blender", "Maya", "Cinema 4D", "ZBrush"],
  },
  {
    image: "images/wilber.svg",
    mascot: "Wilber",
    answer: "GIMP",
    hint: "口にブラシをくわえた犬っぽい謎の生き物。",
    choices: ["GIMP", "Inkscape", "Krita", "Affinity Photo"],
  },
  {
    image: "images/hadoop.svg",
    mascot: "黄色い象",
    answer: "Apache Hadoop",
    hint: "創始者Doug Cuttingの息子のぬいぐるみが名前の由来。",
    choices: ["Apache Hadoop", "Apache Spark", "Apache Kafka", "MongoDB"],
  },

  // --- ブランドロゴ (13問) ---
  {
    image: "images/kubernetes.svg",
    mascot: "操舵輪 (Helm)",
    answer: "Kubernetes",
    hint: "ギリシャ語で『操舵手』。略称はk8s。",
    choices: ["Kubernetes", "Docker Swarm", "HashiCorp Nomad", "Apache Mesos"],
  },
  {
    image: "images/nodedotjs.svg",
    mascot: "六角形ロゴ",
    answer: "Node.js",
    hint: "Chrome V8エンジンを使ったサーバーサイドJavaScript実行環境。",
    choices: ["Node.js", "Deno", "Bun", "Electron"],
  },
  {
    image: "images/python.svg",
    mascot: "2匹の蛇ロゴ",
    answer: "Python",
    hint: "Guido van Rossumが1991年に公開した汎用プログラミング言語。",
    choices: ["Python", "Ruby", "Anaconda", "Conda"],
  },
  {
    image: "images/ruby.svg",
    mascot: "宝石ロゴ",
    answer: "Ruby",
    hint: "まつもとゆきひろ氏が日本で開発した動的型付け言語。",
    choices: ["Ruby", "Crystal", "Elixir", "Perl"],
  },
  {
    image: "images/react.svg",
    mascot: "原子マークロゴ",
    answer: "React",
    hint: "Metaが開発・公開した宣言的UIライブラリ。",
    choices: ["React", "Vue.js", "Svelte", "Solid.js"],
  },
  {
    image: "images/vuedotjs.svg",
    mascot: "Vロゴ",
    answer: "Vue.js",
    hint: "Evan You氏が個人プロジェクトとして始めたフロントエンドFW。",
    choices: ["Vue.js", "React", "Nuxt.js", "Angular"],
  },
  {
    image: "images/angular.svg",
    mascot: "盾ロゴ",
    answer: "Angular",
    hint: "Google製のTypeScriptベースのフルスタックWebフレームワーク。",
    choices: ["Angular", "AngularJS", "Backbone.js", "Ember.js"],
  },
  {
    image: "images/cloudflare.svg",
    mascot: "オレンジの雲",
    answer: "Cloudflare",
    hint: "世界規模のCDN・DNS・DDoS対策・Workers提供企業。",
    choices: ["Cloudflare", "Fastly", "Akamai", "AWS CloudFront"],
  },
  {
    image: "images/jenkins.svg",
    mascot: "蝶ネクタイ執事",
    answer: "Jenkins",
    hint: "CI/CDサーバーのオープンソース定番。元Hudsonからフォーク。",
    choices: ["Jenkins", "CircleCI", "Travis CI", "TeamCity"],
  },
  {
    image: "images/redis.svg",
    mascot: "赤い積み木ロゴ",
    answer: "Redis",
    hint: "REmote DIctionary Server。インメモリKVS。",
    choices: ["Redis", "Memcached", "KeyDB", "Hazelcast"],
  },
  {
    image: "images/mongodb.svg",
    mascot: "葉っぱロゴ",
    answer: "MongoDB",
    hint: "BSONドキュメントを扱うNoSQLデータベース。",
    choices: ["MongoDB", "CouchDB", "DynamoDB", "Cassandra"],
  },
  {
    image: "images/elasticsearch.svg",
    mascot: "黄色いマーク",
    answer: "Elasticsearch",
    hint: "Apache Luceneベースの全文検索エンジン。",
    choices: ["Elasticsearch", "Apache Solr", "OpenSearch", "Algolia"],
  },
  {
    image: "images/vim.svg",
    mascot: "緑のロゴ",
    answer: "Vim",
    hint: "モード型エディタの代表格。Bram Moolenaar作。",
    choices: ["Vim", "Emacs", "Nano", "Helix"],
  },
];

// ===========================================================================
// State & DOM
// ===========================================================================
const state = {
  order: [],
  current: 0,
  score: 0,
  answers: [],
  answered: false,
};

const $ = (sel) => document.querySelector(sel);
const el = {
  start: $("#screen-start"),
  quiz: $("#screen-quiz"),
  result: $("#screen-result"),
  btnStart: $("#btn-start"),
  btnNext: $("#btn-next"),
  btnRestart: $("#btn-restart"),
  qImage: $("#q-image"),
  qPrompt: $("#q-prompt"),
  choices: $("#choices"),
  feedback: $("#feedback"),
  counter: $("#q-counter"),
  scoreDisp: $("#score-display"),
  progressFill: $("#progress-fill"),
  resultScore: $("#result-score"),
  resultRank: $("#result-rank"),
  reviewList: $("#review-list"),
};

// ===========================================================================
// Helpers
// ===========================================================================
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(name) {
  ["start", "quiz", "result"].forEach((n) => {
    el[n].classList.toggle("active", n === name);
  });
}

function rankMessage(score, total) {
  const ratio = score / total;
  if (ratio === 1)   return "🏆 完璧! あなたはITマスコットマスター!";
  if (ratio >= 0.9)  return "🌟 すごい! ITカルチャー博士!";
  if (ratio >= 0.75) return "👍 上級者レベル!";
  if (ratio >= 0.5)  return "🙂 そこそこの腕前。あと一歩!";
  if (ratio >= 0.25) return "📚 知らないマスコットを覚えていこう!";
  return "🌱 これからのお楽しみ! 学んでいきましょう!";
}

// ===========================================================================
// Quiz lifecycle
// ===========================================================================
function startQuiz() {
  state.order = shuffle(QUESTIONS.map((_, i) => i));
  state.current = 0;
  state.score = 0;
  state.answers = [];
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  state.answered = false;
  const qIdx = state.order[state.current];
  const q = QUESTIONS[qIdx];

  el.counter.textContent = `${state.current + 1} / ${state.order.length}`;
  el.scoreDisp.textContent = `正解: ${state.score}`;
  el.progressFill.style.width = `${(state.current / state.order.length) * 100}%`;

  el.qImage.src = q.image;
  el.qImage.alt = "アイコン";
  el.qPrompt.textContent = "このアイコン/マスコットはどの技術のもの?";

  el.choices.innerHTML = "";
  const shuffled = shuffle(q.choices);
  shuffled.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.type = "button";
    btn.textContent = choice;
    btn.addEventListener("click", () => onChoose(qIdx, choice, btn));
    el.choices.appendChild(btn);
  });

  el.feedback.className = "feedback hidden";
  el.feedback.innerHTML = "";
  el.btnNext.classList.add("hidden");
  el.btnNext.textContent =
    state.current === state.order.length - 1 ? "結果を見る 🎯" : "次の問題 →";
}

function onChoose(qIdx, chosen, btnEl) {
  if (state.answered) return;
  state.answered = true;

  const q = QUESTIONS[qIdx];
  const isCorrect = chosen === q.answer;
  if (isCorrect) state.score++;
  state.answers.push({ index: qIdx, chosen, correct: isCorrect });

  Array.from(el.choices.querySelectorAll(".choice")).forEach((b) => {
    b.disabled = true;
    if (b.textContent === q.answer) b.classList.add("correct");
    else if (b === btnEl) b.classList.add("wrong");
  });

  el.feedback.classList.remove("hidden");
  if (isCorrect) {
    el.feedback.classList.add("correct");
    el.feedback.innerHTML =
      `<strong>正解!</strong> 『${q.mascot}』は <strong>${q.answer}</strong> のアイコン/マスコットです。<br/>${q.hint}`;
  } else {
    el.feedback.classList.add("wrong");
    el.feedback.innerHTML =
      `<strong>不正解…</strong> 正解は <strong>${q.answer}</strong> (${q.mascot})。<br/>${q.hint}`;
  }

  el.scoreDisp.textContent = `正解: ${state.score}`;
  el.btnNext.classList.remove("hidden");
}

function nextQuestion() {
  state.current++;
  if (state.current >= state.order.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function showResult() {
  showScreen("result");
  el.resultScore.textContent = state.score;
  el.resultRank.textContent = rankMessage(state.score, state.order.length);
  el.progressFill.style.width = "100%";

  el.reviewList.innerHTML = "";
  state.answers.forEach(({ index, chosen, correct }, i) => {
    const q = QUESTIONS[index];
    const item = document.createElement("div");
    item.className = `review-item ${correct ? "ok" : "ng"}`;
    item.innerHTML = `
      <div class="review-icon"><img src="${q.image}" alt="" /></div>
      <div class="review-label">
        <div><strong>Q${i + 1}.</strong> ${q.answer} <span style="opacity:.7">(${q.mascot})</span></div>
        ${correct ? "" : `<div style="opacity:.7">あなたの回答: ${chosen}</div>`}
      </div>
      <div class="review-mark">${correct ? "○" : "×"}</div>
    `;
    el.reviewList.appendChild(item);
  });
}

// ===========================================================================
// Init
// ===========================================================================
el.btnStart.addEventListener("click", startQuiz);
el.btnNext.addEventListener("click", nextQuestion);
el.btnRestart.addEventListener("click", startQuiz);

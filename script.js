// ===========================================================================
// ITエンジニア アイコン・マスコット & 企業ロゴ クイズ
// ===========================================================================

const QUESTIONS_MASCOT = [
  // --- マスコット (17問) ---
  {
    image: "images/duke.svg",
    subject: "Duke",
    answer: "Java",
    hint: "1995年Sun Microsystems誕生。手を振っているのが定番ポーズ。",
    choices: ["Java", "C#", "Kotlin", "Scala"],
  },
  {
    image: "images/tux.svg",
    subject: "Tux",
    answer: "Linux",
    hint: "1996年にLarry Ewingが描いたペンギン。Linus Torvaldsが採用。",
    choices: ["Linux", "FreeBSD", "Solaris", "Minix"],
  },
  {
    image: "images/bugdroid.svg",
    subject: "Bugdroid (Android Robot)",
    answer: "Android",
    hint: "GoogleのモバイルOSのマスコット。緑色がトレードマーク。",
    choices: ["Android", "iOS", "HarmonyOS", "Tizen"],
  },
  {
    image: "images/octocat.png",
    subject: "Octocat",
    answer: "GitHub",
    hint: "ネコとタコのキメラ。Cameron McEfee氏らによってデザイン。",
    choices: ["GitHub", "GitLab", "Bitbucket", "Gitea"],
  },
  {
    image: "images/gopher.svg",
    subject: "Gopher",
    answer: "Go (Golang)",
    hint: "Renée Frenchがデザインしたホリネズミ。",
    choices: ["Go (Golang)", "Rust", "Crystal", "Nim"],
  },
  {
    image: "images/ferris.svg",
    subject: "Ferris",
    answer: "Rust",
    hint: "オレンジ色のカニ。コミュニティ通称『Rustacean』はここから。",
    choices: ["Rust", "Go (Golang)", "Zig", "V"],
  },
  {
    image: "images/moby.png",
    subject: "Moby Dock",
    answer: "Docker",
    hint: "コンテナを背負ったクジラ。コンテナ型仮想化のデファクト。",
    choices: ["Docker", "Podman", "Kubernetes", "Vagrant"],
  },
  {
    image: "images/gnu.svg",
    subject: "GNU",
    answer: "GNU Project",
    hint: "Richard Stallman率いるフリーソフトウェア運動の象徴。",
    choices: ["GNU Project", "Debian", "FreeBSD", "MINIX"],
  },
  {
    image: "images/elephpant.svg",
    subject: "elePHPant",
    answer: "PHP",
    hint: "PHPのロゴ文字を象に見立てたVincent Pontier作のマスコット。",
    choices: ["PHP", "Apache Hadoop", "PostgreSQL", "Perl"],
  },
  {
    image: "images/beastie.svg",
    subject: "Beastie (BSD Daemon)",
    answer: "FreeBSD / BSD",
    hint: "三叉槍を持つ赤い小悪魔。daemonプロセスのもじり。",
    choices: ["FreeBSD / BSD", "GNU/Hurd", "Linux", "Solaris"],
  },
  {
    image: "images/camelia.svg",
    subject: "Camelia",
    answer: "Raku (旧Perl 6)",
    hint: "ピンクの蝶。コミュニティの多様性を象徴。",
    choices: ["Raku (旧Perl 6)", "Perl 5", "Ruby", "Crystal"],
  },
  {
    image: "images/firefox.svg",
    subject: "Firefox (実はレッサーパンダ)",
    answer: "Mozilla Firefox",
    hint: "燃えるキツネが地球を包む。名前の語源はレッサーパンダ。",
    choices: ["Mozilla Firefox", "Brave", "Opera", "Vivaldi"],
  },
  {
    image: "images/slonik.svg",
    subject: "Slonik",
    answer: "PostgreSQL",
    hint: "ロシア語で『子象』。1997年から使われる青い象。",
    choices: ["PostgreSQL", "MySQL", "MariaDB", "SQLite"],
  },
  {
    image: "images/mysql.svg",
    subject: "Sakila (イルカ)",
    answer: "MySQL",
    hint: "アフリカ・スワジランドの言葉に由来する名前のイルカ。",
    choices: ["MySQL", "PostgreSQL", "Oracle Database", "MariaDB"],
  },
  {
    image: "images/suzanne.svg",
    subject: "Suzanne",
    answer: "Blender",
    hint: "オープンソース3DCGソフトのテストモデル兼マスコットの猿。",
    choices: ["Blender", "Maya", "Cinema 4D", "ZBrush"],
  },
  {
    image: "images/wilber.svg",
    subject: "Wilber",
    answer: "GIMP",
    hint: "口にブラシをくわえた犬っぽい謎の生き物。",
    choices: ["GIMP", "Inkscape", "Krita", "Affinity Photo"],
  },
  {
    image: "images/hadoop.svg",
    subject: "黄色い象",
    answer: "Apache Hadoop",
    hint: "創始者Doug Cuttingの息子のぬいぐるみが名前の由来。",
    choices: ["Apache Hadoop", "Apache Spark", "Apache Kafka", "MongoDB"],
  },

  // --- ブランドロゴ (13問) ---
  {
    image: "images/kubernetes.svg",
    subject: "操舵輪 (Helm)",
    answer: "Kubernetes",
    hint: "ギリシャ語で『操舵手』。略称はk8s。",
    choices: ["Kubernetes", "Docker Swarm", "HashiCorp Nomad", "Apache Mesos"],
  },
  {
    image: "images/nodedotjs.svg",
    subject: "六角形ロゴ",
    answer: "Node.js",
    hint: "Chrome V8エンジンを使ったサーバーサイドJavaScript実行環境。",
    choices: ["Node.js", "Deno", "Bun", "Electron"],
  },
  {
    image: "images/python.svg",
    subject: "2匹の蛇ロゴ",
    answer: "Python",
    hint: "Guido van Rossumが1991年に公開した汎用プログラミング言語。",
    choices: ["Python", "Ruby", "Anaconda", "Conda"],
  },
  {
    image: "images/ruby.svg",
    subject: "宝石ロゴ",
    answer: "Ruby",
    hint: "まつもとゆきひろ氏が日本で開発した動的型付け言語。",
    choices: ["Ruby", "Crystal", "Elixir", "Perl"],
  },
  {
    image: "images/react.svg",
    subject: "原子マークロゴ",
    answer: "React",
    hint: "Metaが開発・公開した宣言的UIライブラリ。",
    choices: ["React", "Vue.js", "Svelte", "Solid.js"],
  },
  {
    image: "images/vuedotjs.svg",
    subject: "Vロゴ",
    answer: "Vue.js",
    hint: "Evan You氏が個人プロジェクトとして始めたフロントエンドFW。",
    choices: ["Vue.js", "React", "Nuxt.js", "Angular"],
  },
  {
    image: "images/angular.svg",
    subject: "盾ロゴ",
    answer: "Angular",
    hint: "Google製のTypeScriptベースのフルスタックWebフレームワーク。",
    choices: ["Angular", "AngularJS", "Backbone.js", "Ember.js"],
  },
  {
    image: "images/cloudflare.svg",
    subject: "オレンジの雲",
    answer: "Cloudflare",
    hint: "世界規模のCDN・DNS・DDoS対策・Workers提供企業。",
    choices: ["Cloudflare", "Fastly", "Akamai", "AWS CloudFront"],
  },
  {
    image: "images/jenkins.svg",
    subject: "蝶ネクタイ執事",
    answer: "Jenkins",
    hint: "CI/CDサーバーのオープンソース定番。元Hudsonからフォーク。",
    choices: ["Jenkins", "CircleCI", "Travis CI", "TeamCity"],
  },
  {
    image: "images/redis.svg",
    subject: "赤い積み木ロゴ",
    answer: "Redis",
    hint: "REmote DIctionary Server。インメモリKVS。",
    choices: ["Redis", "Memcached", "KeyDB", "Hazelcast"],
  },
  {
    image: "images/mongodb.svg",
    subject: "葉っぱロゴ",
    answer: "MongoDB",
    hint: "BSONドキュメントを扱うNoSQLデータベース。",
    choices: ["MongoDB", "CouchDB", "DynamoDB", "Cassandra"],
  },
  {
    image: "images/elasticsearch.svg",
    subject: "黄色いマーク",
    answer: "Elasticsearch",
    hint: "Apache Luceneベースの全文検索エンジン。",
    choices: ["Elasticsearch", "Apache Solr", "OpenSearch", "Algolia"],
  },
  {
    image: "images/vim.svg",
    subject: "緑のロゴ",
    answer: "Vim",
    hint: "モード型エディタの代表格。Bram Moolenaar作。",
    choices: ["Vim", "Emacs", "Nano", "Helix"],
  },
];

const QUESTIONS_COMPANY = [
  // --- グローバルメガキャップ (10) ---
  {
    image: "images/companies/google.svg",
    answer: "Google",
    hint: "1998年Larry PageとSergey Brinが創業。親会社はAlphabet。",
    choices: ["Google", "Microsoft", "Apple", "Meta"],
  },
  {
    image: "images/companies/apple.svg",
    answer: "Apple",
    hint: "1976年Steve JobsらがCupertinoで創業。リンゴマークは1977年から。",
    choices: ["Apple", "Samsung", "Sony", "LG"],
  },
  {
    image: "images/companies/microsoft.svg",
    answer: "Microsoft",
    hint: "1975年Bill GatesとPaul Allen創業。Windows / Azure / GitHubを擁する。",
    choices: ["Microsoft", "IBM", "Oracle", "Salesforce"],
  },
  {
    image: "images/companies/amazon.svg",
    answer: "Amazon",
    hint: "矢印は『a→z』。1994年Jeff Bezos創業。クラウドAWSも展開。",
    choices: ["Amazon", "eBay", "Alibaba", "Shopify"],
  },
  {
    image: "images/companies/meta.svg",
    answer: "Meta",
    hint: "Facebookから2021年に社名変更。Instagram・WhatsAppも傘下。",
    choices: ["Meta", "Threads", "Snap", "TikTok"],
  },
  {
    image: "images/companies/nvidia.svg",
    answer: "Nvidia",
    hint: "Jensen Huang創業のGPU大手。AI時代の半導体王。",
    choices: ["Nvidia", "AMD", "Intel", "Qualcomm"],
  },
  {
    image: "images/companies/intel.svg",
    answer: "Intel",
    hint: "1968年創業。x86 CPU・Core / Xeonシリーズで知られる老舗半導体。",
    choices: ["Intel", "AMD", "ARM", "TSMC"],
  },
  {
    image: "images/companies/amd.svg",
    answer: "AMD",
    hint: "Advanced Micro Devices。Ryzen / EPYC / RadeonでIntelとNvidiaの両方と競合。",
    choices: ["AMD", "Intel", "Nvidia", "Qualcomm"],
  },
  {
    image: "images/companies/tesla.svg",
    answer: "Tesla",
    hint: "Elon Musk率いるEV・蓄電・自動運転メーカー。1903年創業ではない (2003年)。",
    choices: ["Tesla", "Rivian", "Lucid", "BYD"],
  },
  {
    image: "images/companies/ibm.svg",
    answer: "IBM",
    hint: "Paul Rand作のストライプロゴ。メインフレーム時代から続く老舗。",
    choices: ["IBM", "Oracle", "SAP", "Cisco"],
  },

  // --- AI / SaaS (8) ---
  {
    image: "images/companies/openai.svg",
    answer: "OpenAI",
    hint: "ChatGPT・GPTシリーズ・DALL-E・Soraを開発。Sam Altman CEO。",
    choices: ["OpenAI", "Anthropic", "Google DeepMind", "Hugging Face"],
  },
  {
    image: "images/companies/anthropic.svg",
    answer: "Anthropic",
    hint: "Claudeシリーズの開発元。元OpenAIメンバーが2021年創業。",
    choices: ["Anthropic", "OpenAI", "Cohere", "Mistral AI"],
  },
  {
    image: "images/companies/huggingface.svg",
    answer: "Hugging Face",
    hint: "🤗マーク。オープンソースMLモデル・データセットの巨大ハブ。",
    choices: ["Hugging Face", "Replicate", "Weights & Biases", "Roboflow"],
  },
  {
    image: "images/companies/stripe.svg",
    answer: "Stripe",
    hint: "API一発で決済を組み込める。Collison兄弟が2010年創業。",
    choices: ["Stripe", "PayPal", "Square (Block)", "Adyen"],
  },
  {
    image: "images/companies/figma.svg",
    answer: "Figma",
    hint: "ブラウザ上で共同編集できるUIデザインツール。2024年にAdobe買収白紙。",
    choices: ["Figma", "Sketch", "Adobe XD", "InVision"],
  },
  {
    image: "images/companies/notion.svg",
    answer: "Notion",
    hint: "ドキュメント・DB・Wikiを統合したオールインワン作業ツール。",
    choices: ["Notion", "Evernote", "Coda", "Obsidian"],
  },
  {
    image: "images/companies/slack.svg",
    answer: "Slack",
    hint: "ビジネスチャットの代表格。2021年Salesforceが買収。",
    choices: ["Slack", "Microsoft Teams", "Discord", "Chatwork"],
  },
  {
    image: "images/companies/vercel.svg",
    answer: "Vercel",
    hint: "Next.jsの開発元。エッジ配信に強いフロントエンドホスティング。",
    choices: ["Vercel", "Netlify", "Cloudflare Pages", "Render"],
  },

  // --- コンシューマ / サービス (7) ---
  {
    image: "images/companies/netflix.svg",
    answer: "Netflix",
    hint: "オンライン動画ストリーミングの先駆け。OSSにも貢献 (Chaos Monkey等)。",
    choices: ["Netflix", "Hulu", "Disney+", "Amazon Prime Video"],
  },
  {
    image: "images/companies/spotify.svg",
    answer: "Spotify",
    hint: "音楽ストリーミング大手。技術ブログがエンジニアに人気。",
    choices: ["Spotify", "Apple Music", "YouTube Music", "Tidal"],
  },
  {
    image: "images/companies/uber.svg",
    answer: "Uber",
    hint: "ライドシェアの代表格。Uber Eatsで日本でも一般化。",
    choices: ["Uber", "Lyft", "DiDi", "Grab"],
  },
  {
    image: "images/companies/airbnb.svg",
    answer: "Airbnb",
    hint: "民泊のプラットフォーム。React Nativeを長く使ったことで有名。",
    choices: ["Airbnb", "Booking.com", "Expedia", "Vrbo"],
  },
  {
    image: "images/companies/shopify.svg",
    answer: "Shopify",
    hint: "カナダ発のECプラットフォーム。Ruby on Rails採用で知られる。",
    choices: ["Shopify", "WooCommerce", "BigCommerce", "Magento"],
  },
  {
    image: "images/companies/x.svg",
    answer: "X (旧Twitter)",
    hint: "2023年にTwitterから改名。Elon Muskが2022年に買収。",
    choices: ["X (旧Twitter)", "Threads", "Bluesky", "Mastodon"],
  },
  {
    image: "images/companies/linkedin.svg",
    answer: "LinkedIn",
    hint: "ビジネス特化SNS。2016年Microsoftが買収。",
    choices: ["LinkedIn", "Wantedly", "Indeed", "Glassdoor"],
  },

  // --- 日本のIT (5) ---
  {
    image: "images/companies/rakuten.svg",
    answer: "楽天",
    hint: "1997年創業。EC・金融・モバイル・プロ野球と多角化。",
    choices: ["楽天", "Yahoo! JAPAN", "ZOZO", "ぐるなび"],
  },
  {
    image: "images/companies/line.svg",
    answer: "LINE (LY Corporation)",
    hint: "日本・台湾・タイで圧倒的シェアのメッセージアプリ。",
    choices: ["LINE (LY Corporation)", "Kakao", "WeChat", "Viber"],
  },
  {
    image: "images/companies/mercari.svg",
    answer: "メルカリ",
    hint: "日本最大のフリマアプリ。山田進太郎氏が2013年創業。",
    choices: ["メルカリ", "ラクマ", "PayPayフリマ", "ヤフオク!"],
  },
  {
    image: "images/companies/cyberagent.svg",
    answer: "サイバーエージェント",
    hint: "AbemaTV・広告代理・ゲーム (Cygames)を擁する藤田晋氏率いる企業。",
    choices: ["サイバーエージェント", "DeNA", "GREE", "ミクシィ"],
  },
  {
    image: "images/companies/softbank.svg",
    answer: "ソフトバンク",
    hint: "孫正義氏率いる通信・投資企業。Vision Fundでも有名。",
    choices: ["ソフトバンク", "NTTドコモ", "KDDI / au", "楽天モバイル"],
  },
];

// ===========================================================================
// Categories
// ===========================================================================
const CATEGORIES = {
  mascot: {
    label: "マスコット編",
    questions: QUESTIONS_MASCOT,
    prompt: "このアイコン/マスコットはどの技術のもの?",
    feedbackPrefix: (q) => `『${q.subject}』は <strong>${q.answer}</strong> のアイコン/マスコットです。`,
  },
  company: {
    label: "IT企業編",
    questions: QUESTIONS_COMPANY,
    prompt: "このロゴはどの企業のもの?",
    feedbackPrefix: (q) => `これは <strong>${q.answer}</strong> のロゴです。`,
  },
};

// ===========================================================================
// State & DOM
// ===========================================================================
const state = {
  category: "mascot",
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
  categoryButtons: document.querySelectorAll("[data-category]"),
  resultTitle: $("#result-title"),
  resultTotal: $("#result-total"),
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
  if (ratio === 1)   return "🏆 完璧! あなたはITカルチャーマスター!";
  if (ratio >= 0.9)  return "🌟 すごい! 業界博士レベル!";
  if (ratio >= 0.75) return "👍 上級者レベル!";
  if (ratio >= 0.5)  return "🙂 そこそこの腕前。あと一歩!";
  if (ratio >= 0.25) return "📚 これを機に色々覚えていこう!";
  return "🌱 これからのお楽しみ!";
}

function currentCategory() {
  return CATEGORIES[state.category];
}

// ===========================================================================
// Quiz lifecycle
// ===========================================================================
function startQuiz(categoryKey) {
  state.category = categoryKey;
  const cat = currentCategory();
  state.order = shuffle(cat.questions.map((_, i) => i));
  state.current = 0;
  state.score = 0;
  state.answers = [];
  if (el.resultTotal) el.resultTotal.textContent = ` / ${cat.questions.length}`;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  state.answered = false;
  const cat = currentCategory();
  const qIdx = state.order[state.current];
  const q = cat.questions[qIdx];

  el.counter.textContent = `${state.current + 1} / ${state.order.length}`;
  el.scoreDisp.textContent = `正解: ${state.score}`;
  el.progressFill.style.width = `${(state.current / state.order.length) * 100}%`;

  el.qImage.src = q.image;
  el.qImage.alt = "アイコン";
  el.qPrompt.textContent = cat.prompt;

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

  const cat = currentCategory();
  const q = cat.questions[qIdx];
  const isCorrect = chosen === q.answer;
  if (isCorrect) state.score++;
  state.answers.push({ index: qIdx, chosen, correct: isCorrect });

  Array.from(el.choices.querySelectorAll(".choice")).forEach((b) => {
    b.disabled = true;
    if (b.textContent === q.answer) b.classList.add("correct");
    else if (b === btnEl) b.classList.add("wrong");
  });

  el.feedback.classList.remove("hidden");
  const prefix = cat.feedbackPrefix(q);
  if (isCorrect) {
    el.feedback.classList.add("correct");
    el.feedback.innerHTML = `<strong>正解!</strong> ${prefix}<br/>${q.hint}`;
  } else {
    el.feedback.classList.add("wrong");
    el.feedback.innerHTML = `<strong>不正解…</strong> ${prefix}<br/>${q.hint}`;
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
  const cat = currentCategory();
  showScreen("result");
  el.resultScore.textContent = state.score;
  el.resultRank.textContent = rankMessage(state.score, state.order.length);
  el.progressFill.style.width = "100%";
  if (el.resultTitle) el.resultTitle.textContent = `結果発表 🎉 [${cat.label}]`;

  el.reviewList.innerHTML = "";
  state.answers.forEach(({ index, chosen, correct }, i) => {
    const q = cat.questions[index];
    const item = document.createElement("div");
    item.className = `review-item ${correct ? "ok" : "ng"}`;
    const subjectSuffix = q.subject ? ` <span style="opacity:.7">(${q.subject})</span>` : "";
    item.innerHTML = `
      <div class="review-icon"><img src="${q.image}" alt="" /></div>
      <div class="review-label">
        <div><strong>Q${i + 1}.</strong> ${q.answer}${subjectSuffix}</div>
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
el.categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => startQuiz(btn.dataset.category));
});
el.btnNext.addEventListener("click", nextQuestion);
el.btnRestart.addEventListener("click", () => {
  // back to start screen so the user can pick another category
  showScreen("start");
});

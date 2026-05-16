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

const QUESTIONS_ADVANCED = [
  // --- マイナー・マスコット (10) ---
  {
    image: "images/advanced/hexley.gif",
    subject: "Hexley",
    answer: "Darwin (macOS)",
    hint: "Apple製OSの基盤。三叉槍を持つカモノハシ。BSD Daemonに似たデザイン。",
    choices: ["Darwin (macOS)", "FreeBSD", "NetBSD", "GNU/Hurd"],
  },
  {
    image: "images/advanced/konqi.svg",
    subject: "Konqi",
    answer: "KDE",
    hint: "Linuxデスクトップ環境のマスコット。緑のドラゴン。",
    choices: ["KDE", "GNOME", "XFCE", "Cinnamon"],
  },
  {
    image: "images/advanced/glenda.jpg",
    subject: "Glenda",
    answer: "Plan 9 from Bell Labs",
    hint: "Bell Labs製OSのうさぎ。Renée French作で、GoのGopherの源流。",
    choices: ["Plan 9 from Bell Labs", "Inferno OS", "MINIX", "Multics"],
  },
  {
    image: "images/advanced/puffy.gif",
    subject: "Puffy",
    answer: "OpenBSD",
    hint: "セキュリティ最重視のBSD系OSのマスコット。BlowfishやOpenSSHにちなむハリセンボン系。",
    choices: ["OpenBSD", "FreeBSD", "NetBSD", "DragonFly BSD"],
  },
  {
    image: "images/advanced/opensuse.svg",
    subject: "Geeko (カメレオン)",
    answer: "openSUSE",
    hint: "ドイツ発のLinuxディストリ。緑のカメレオンを様式化したロゴ。",
    choices: ["openSUSE", "Fedora", "Arch Linux", "Mandriva"],
  },
  {
    image: "images/advanced/rabbitmq.svg",
    subject: "うさぎ",
    answer: "RabbitMQ",
    hint: "Erlang製のAMQP実装メッセージブローカー。",
    choices: ["RabbitMQ", "Apache Kafka", "Apache Pulsar", "NATS"],
  },
  {
    image: "images/advanced/thunderbird.svg",
    subject: "サンダーバード",
    answer: "Mozilla Thunderbird",
    hint: "Mozilla財団のオープンソースメールクライアント。",
    choices: ["Mozilla Thunderbird", "Apple Mail", "Microsoft Outlook", "Spark"],
  },
  {
    image: "images/advanced/deno.svg",
    subject: "恐竜",
    answer: "Deno",
    hint: "Ryan Dahl が Node.js の反省を活かして作ったTypeScript標準ランタイム。",
    choices: ["Deno", "Node.js", "Bun", "tsx"],
  },
  {
    image: "images/advanced/gnubash.svg",
    subject: "GNU Bashロゴ",
    answer: "GNU Bash",
    hint: "Bourne Again SHell。GNUプロジェクト製のデフォルトシェル。",
    choices: ["GNU Bash", "Zsh", "Fish", "Ksh"],
  },
  {
    image: "images/advanced/lua.svg",
    subject: "月ロゴ",
    answer: "Lua",
    hint: "ブラジル発の組込み向けスクリプト言語。Nginx/Redis/Neovim等に組込まれる。",
    choices: ["Lua", "Tcl", "Squirrel", "Pawn"],
  },

  // --- ニッチ言語 (12) ---
  {
    image: "images/advanced/haskell.svg",
    answer: "Haskell",
    hint: "純粋関数型・遅延評価・強い型システム。ラムダ記号がトレードマーク。",
    choices: ["Haskell", "Idris", "Agda", "PureScript"],
  },
  {
    image: "images/advanced/ocaml.svg",
    answer: "OCaml",
    hint: "MLファミリーの関数型言語。Rust/ReasonML/F#に影響。Camel = OCamel。",
    choices: ["OCaml", "Standard ML", "Haskell", "F#"],
  },
  {
    image: "images/advanced/erlang.svg",
    answer: "Erlang",
    hint: "Ericssonの電話交換機用に開発された並行・分散指向言語。Actor model。",
    choices: ["Erlang", "Elixir", "Go", "Pony"],
  },
  {
    image: "images/advanced/elixir.svg",
    answer: "Elixir",
    hint: "BEAM (ErlangVM) 上で動くRuby風シンタックスの関数型言語。Phoenixで有名。",
    choices: ["Elixir", "Erlang", "Crystal", "Gleam"],
  },
  {
    image: "images/advanced/clojure.svg",
    answer: "Clojure",
    hint: "JVM上のLisp方言。不変データ構造とSTM、Rich Hickey作。",
    choices: ["Clojure", "Common Lisp", "Scheme", "Racket"],
  },
  {
    image: "images/advanced/crystal.svg",
    answer: "Crystal",
    hint: "Ruby風シンタックス・コンパイル/静的型付け。",
    choices: ["Crystal", "Ruby", "Elixir", "Nim"],
  },
  {
    image: "images/advanced/fsharp.svg",
    answer: "F#",
    hint: ".NET上のMLファミリー関数型言語。Microsoft Research発。",
    choices: ["F#", "OCaml", "Scala", "Haskell"],
  },
  {
    image: "images/advanced/r.svg",
    answer: "R言語",
    hint: "統計解析・データ可視化の定番。Tidyverse/ggplot2エコシステム。",
    choices: ["R言語", "Julia", "MATLAB", "SAS"],
  },
  {
    image: "images/advanced/zig.svg",
    answer: "Zig",
    hint: "Cの後継を目指すシステム言語。Andrew Kelley作。comptimeが特徴。",
    choices: ["Zig", "Rust", "Odin", "V"],
  },
  {
    image: "images/advanced/nim.svg",
    answer: "Nim",
    hint: "Python風シンタックスでCにコンパイル。マクロが強力。",
    choices: ["Nim", "Crystal", "V", "Cython"],
  },
  {
    image: "images/advanced/scala.svg",
    answer: "Scala",
    hint: "JVM上の関数型+オブジェクト指向。Apache Sparkの主言語。",
    choices: ["Scala", "Kotlin", "Groovy", "Clojure"],
  },
  {
    image: "images/advanced/kotlin.svg",
    answer: "Kotlin",
    hint: "JetBrains製。2017年Google公認のAndroid公式言語に。",
    choices: ["Kotlin", "Scala", "Swift", "Dart"],
  },

  // --- DevOps / インフラ (8) ---
  {
    image: "images/advanced/terraform.svg",
    answer: "Terraform",
    hint: "HashiCorp製マルチクラウドIaC。HCLでインフラを宣言的に記述。",
    choices: ["Terraform", "Pulumi", "AWS CDK", "Crossplane"],
  },
  {
    image: "images/advanced/ansible.svg",
    answer: "Ansible",
    hint: "Red Hatのエージェントレス構成管理ツール。YAMLでPlaybookを書く。",
    choices: ["Ansible", "Puppet", "Chef", "SaltStack"],
  },
  {
    image: "images/advanced/vagrant.svg",
    answer: "Vagrant",
    hint: "HashiCorp製の開発用VM/コンテナ管理。Vagrantfileで再現可能環境。",
    choices: ["Vagrant", "Docker Compose", "VirtualBox", "Multipass"],
  },
  {
    image: "images/advanced/consul.svg",
    answer: "Consul",
    hint: "HashiCorpのサービスディスカバリ&サービスメッシュ。",
    choices: ["Consul", "etcd", "Zookeeper", "Eureka"],
  },
  {
    image: "images/advanced/vault.svg",
    answer: "Vault",
    hint: "HashiCorpのシークレット管理。動的シークレット・暗号化サービスを提供。",
    choices: ["Vault", "AWS Secrets Manager", "1Password", "Doppler"],
  },
  {
    image: "images/advanced/istio.svg",
    answer: "Istio",
    hint: "Envoyベースのサービスメッシュ。Google/IBM/Lyft発。",
    choices: ["Istio", "Linkerd", "Consul Connect", "Cilium"],
  },
  {
    image: "images/advanced/argo.svg",
    answer: "Argo CD",
    hint: "Kubernetes向けGitOpsデプロイツール。CNCF Graduated。",
    choices: ["Argo CD", "Flux CD", "Spinnaker", "Jenkins X"],
  },
  {
    image: "images/advanced/helm.svg",
    answer: "Helm",
    hint: "Kubernetesのパッケージマネージャ。Chart形式でアプリを配布。",
    choices: ["Helm", "Kustomize", "Operator Framework", "Tanka"],
  },
];

const QUESTIONS_ART = [
  // --- Adobe Creative Cloud (8) ---
  {
    image: "images/art/adobe_photoshop.svg",
    answer: "Adobe Photoshop",
    hint: "『Ps』。ラスター画像編集の業界標準。1990年初リリース。",
    choices: ["Adobe Photoshop", "Adobe Illustrator", "Affinity Photo", "GIMP"],
  },
  {
    image: "images/art/adobe_illustrator.svg",
    answer: "Adobe Illustrator",
    hint: "『Ai』。ベクター描画ソフトの定番。",
    choices: ["Adobe Illustrator", "Adobe Photoshop", "Affinity Designer", "Inkscape"],
  },
  {
    image: "images/art/adobe_indesign.svg",
    answer: "Adobe InDesign",
    hint: "『Id』。雑誌・書籍など組版用のDTPアプリ。",
    choices: ["Adobe InDesign", "QuarkXPress", "Affinity Publisher", "Scribus"],
  },
  {
    image: "images/art/adobe_premiere.svg",
    answer: "Adobe Premiere Pro",
    hint: "『Pr』。プロ向けノンリニア動画編集ソフト。",
    choices: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve", "Avid Media Composer"],
  },
  {
    image: "images/art/adobe_aftereffects.svg",
    answer: "Adobe After Effects",
    hint: "『Ae』。モーショングラフィックス・VFXの定番。",
    choices: ["Adobe After Effects", "Apple Motion", "HitFilm", "Fusion"],
  },
  {
    image: "images/art/adobe_lightroom.svg",
    answer: "Adobe Lightroom",
    hint: "『Lr』。写真RAW現像・カタログ管理。",
    choices: ["Adobe Lightroom", "Capture One", "DxO PhotoLab", "Apple Photos"],
  },
  {
    image: "images/art/adobe_xd.svg",
    answer: "Adobe XD",
    hint: "『Xd』。AdobeのUI/UXデザインツール (新規開発は終了)。",
    choices: ["Adobe XD", "Figma", "Sketch", "Framer"],
  },
  {
    image: "images/art/adobe_substance.svg",
    answer: "Adobe Substance 3D",
    hint: "Painter / Designer / Sampler / Stagerからなる3Dテクスチャリング製品群。",
    choices: ["Adobe Substance 3D", "Marvelous Designer", "Quixel Mixer", "Mari"],
  },

  // --- UI/UX (6) ---
  {
    image: "images/art/figma.svg",
    answer: "Figma",
    hint: "ブラウザベースで共同編集できるUIデザインツール。",
    choices: ["Figma", "Sketch", "Adobe XD", "Penpot"],
  },
  {
    image: "images/art/sketch.svg",
    answer: "Sketch",
    hint: "Mac専用のUIデザインツール。ダイヤモンド型のロゴ。",
    choices: ["Sketch", "Figma", "Adobe XD", "Affinity Designer"],
  },
  {
    image: "images/art/framer.svg",
    answer: "Framer",
    hint: "デザインから本物のWebサイトまで作れるノーコード+コード両対応ツール。",
    choices: ["Framer", "Webflow", "Plasmic", "Figma Sites"],
  },
  {
    image: "images/art/canva.svg",
    answer: "Canva",
    hint: "オーストラリア発のオンライングラフィックデザインツール。テンプレートが豊富。",
    choices: ["Canva", "Adobe Express", "Visme", "Crello"],
  },
  {
    image: "images/art/miro.svg",
    answer: "Miro",
    hint: "オンラインホワイトボード。ワークショップ・ブレストの定番。",
    choices: ["Miro", "Mural", "FigJam", "Whimsical"],
  },
  {
    image: "images/art/invision.svg",
    answer: "InVision",
    hint: "プロトタイピング・デザインコラボの老舗。2024年末にサービス終了。",
    choices: ["InVision", "Marvel", "Zeplin", "Avocode"],
  },

  // --- 3D / VFX (6) ---
  {
    image: "images/art/blender.svg",
    answer: "Blender",
    hint: "無料・オープンソースの統合3DCGスイート。",
    choices: ["Blender", "Maya", "Cinema 4D", "3ds Max"],
  },
  {
    image: "images/art/autodeskmaya.svg",
    answer: "Autodesk Maya",
    hint: "AutodeskのハイエンドCGソフト。映画・ハイエンドアニメで定番。",
    choices: ["Autodesk Maya", "Autodesk 3ds Max", "Blender", "MotionBuilder"],
  },
  {
    image: "images/art/cinema4d.svg",
    answer: "Cinema 4D (Maxon)",
    hint: "Maxonのモーショングラフィックスで支配的な3Dソフト。",
    choices: ["Cinema 4D (Maxon)", "Houdini", "Modo", "LightWave"],
  },
  {
    image: "images/art/houdini.svg",
    answer: "Houdini (SideFX)",
    hint: "プロシージャル & VFX特化。VFX業界のシミュレーション標準。",
    choices: ["Houdini (SideFX)", "Cinema 4D", "Maya", "Nuke"],
  },
  {
    image: "images/art/zbrush.svg",
    answer: "ZBrush (Maxon Pixologic)",
    hint: "デジタルスカルプティングの代表格。高ポリゴンを軽快に扱える。",
    choices: ["ZBrush (Maxon Pixologic)", "Mudbox", "3D-Coat", "Nomad Sculpt"],
  },
  {
    image: "images/art/sketchup.svg",
    answer: "SketchUp",
    hint: "建築・インテリアで使われる軽快な3Dモデリング。",
    choices: ["SketchUp", "Rhinoceros", "FreeCAD", "Fusion 360"],
  },

  // --- 映像・アニメーション (3) ---
  {
    image: "images/art/davinciresolve.svg",
    answer: "DaVinci Resolve (Blackmagic)",
    hint: "カラーグレーディング起源のオールインワン映像編集。無料版も強力。",
    choices: ["DaVinci Resolve (Blackmagic)", "Adobe Premiere Pro", "Final Cut Pro", "Vegas Pro"],
  },
  {
    image: "images/art/toonboom.svg",
    answer: "Toon Boom Harmony",
    hint: "TV/映画用の2Dアニメ制作ソフト。シンプソンズ等が採用。",
    choices: ["Toon Boom Harmony", "OpenToonz", "Moho", "TVPaint"],
  },
  {
    image: "images/art/spine.svg",
    answer: "Spine (Esoteric Software)",
    hint: "ゲーム向けの2Dスケルタルアニメーションツール。",
    choices: ["Spine (Esoteric Software)", "DragonBones", "Live2D", "Rive"],
  },

  // --- ゲームエンジン (3) ---
  {
    image: "images/art/unity.svg",
    answer: "Unity",
    hint: "クロスプラットフォームのゲームエンジン。インディから商用まで幅広い。",
    choices: ["Unity", "Unreal Engine", "Godot", "Stride"],
  },
  {
    image: "images/art/unrealengine.svg",
    answer: "Unreal Engine (Epic)",
    hint: "Epic Games製。フォトリアル系&AAAタイトルの標準。",
    choices: ["Unreal Engine (Epic)", "Unity", "CryEngine", "Lumberyard / O3DE"],
  },
  {
    image: "images/art/godotengine.svg",
    answer: "Godot Engine",
    hint: "MITライセンスの無料オープンソースゲームエンジン。",
    choices: ["Godot Engine", "Unity", "Defold", "Stride"],
  },

  // --- ドローイング/その他 (4) ---
  {
    image: "images/art/procreate.png",
    answer: "Procreate",
    hint: "iPad専用のお絵かきアプリの定番。買い切り。",
    choices: ["Procreate", "Adobe Fresco", "Clip Studio Paint", "Concepts"],
  },
  {
    image: "images/art/krita.svg",
    answer: "Krita",
    hint: "KDE発・無料のデジタルペイントソフト。マスコットは『Kiki』のリス。",
    choices: ["Krita", "MyPaint", "GIMP", "Clip Studio Paint"],
  },
  {
    image: "images/art/affinity.svg",
    answer: "Affinity (Serif)",
    hint: "Photo/Designer/Publisher の3製品スイート。買い切り型でAdobeの代替。",
    choices: ["Affinity (Serif)", "Pixelmator Pro", "Corel Suite", "Sketchbook"],
  },
  {
    image: "images/art/inkscape.svg",
    answer: "Inkscape",
    hint: "無料・オープンソースのベクター描画ソフト。SVGネイティブ。",
    choices: ["Inkscape", "Adobe Illustrator", "Affinity Designer", "Boxy SVG"],
  },
];

// 2026年5月環境 (ニンジャスピナー 3/13 発売後) のメタを前提とした立ち回りクイズ。
// Tier1: ドラパルトex (使用率28.4%, サマヨール型「カースドボム」55%) / カミツオロチex
// Tier2: タケルライコex / メガルカリオex / オリーヴァex / フーディン / テラスタルバレット / シロナのガブリアスex / Nのゾロアークex
// Tier3: ヤドキング(キュレム) / マリィのオーロンゲex / メガゲッコウガex / ロケット団ミュウツーex
const QUESTIONS_POKETCG = [
  // ── ドラパルトex 立ち回り (6) ──────────────────────────
  {
    scenario:
      "【ドラパルトex (ボム型) vs タケルライコex】\nあなたはドラパルト側、後攻1ターン目。バトル場にスボミー、ベンチにドラメシヤ1体。手札に基本草エネルギー1枚と各種グッズ。相手は先攻でアカマツも撃てず、タケルライコexの起動が遅れている。",
    question: "後攻1ターン目の最も価値が高い動きは?",
    answer: "スボミーで『むずむずかふん』を撃ち、相手の次ターンのグッズ使用を封じる",
    hint: "タケルライコは『アカマツ』『プライムキャッチャー』などグッズ依存度が高いデッキ。スボミーのグッズロックで1ターン遅らせられれば、ドラパルト完成までの猶予が大きく伸びる。",
    choices: [
      "スボミーで『むずむずかふん』を撃ち、相手の次ターンのグッズ使用を封じる",
      "ドラメシヤをバトル場に出してターン終了",
      "ナンジャモを撃って相手の手札もリセット",
      "ペパーで進化パーツを揃えて先に展開",
    ],
  },
  {
    scenario:
      "【ドラパルトex ミラーマッチ】\nお互いドラパルトex 1体ずつ、ベンチに進化前ライン1体ずつ。サイドはお互い6枚。あなたは手札に『デヴォリューション』『ペパー』『カウンターキャッチャー』『博士の研究』を持つ。先攻 2ターン目ファントムダイブで取り合うとサイドレースで負け筋が見える。",
    question: "ミラーで勝ち切るための最善手は?",
    answer: "『デヴォリューション』で相手ドラパルトexを進化前に戻し、サイドプランを破壊",
    hint: "ドラパルトミラーはサイドレースが速攻で決着しにくい。デヴォリューションで相手アタッカーを退化させることで盤面リセットを強制し、その間にドラパルトラインを優先的に削るのが定石。",
    choices: [
      "『デヴォリューション』で相手ドラパルトexを進化前に戻し、サイドプランを破壊",
      "ファントムダイブを優先して殴り合いで先制",
      "ペパーで道具+グッズを揃え、攻撃は次ターンに回す",
      "博士の研究で山を回して耐久重視",
    ],
  },
  {
    scenario:
      "【ドラパルトex vs ルギアVSTAR】\n相手はアーケオスを早期にトラッシュへ送り、特殊エネ加速の準備が完了。ドラパルト側はばら撒きでサイド取り切りを狙うつもりだったが、ルギアの再展開速度に追いつけない。",
    question: "ドラパルト側が刺すべきメタカードは?",
    answer: "シンオウ神殿",
    hint: "ルギアの加速ギミックはミストエネルギーなど特殊エネの特性に強く依存する。シンオウ神殿は特殊エネルギーの特性をすべて消すため、アーケオスの加速を間接的に止められる。ジャミングタワーは道具を消すが特殊エネ特性は消えない。",
    choices: [
      "シンオウ神殿",
      "ジャミングタワー",
      "ロストスイーパー",
      "ナンジャモ",
    ],
  },
  {
    scenario:
      "【ドラパルトex 構築選択】\n環境が荒れており、ヨノワール型・サマヨール (ノココッチ等含む1進化軸) 型・バシャーモ型でどれを組むか迷っている。2026年5月のシティリーグでドラパルトexは55%程度がある型を選んでいる。",
    question: "現環境で最もシェアが高いボム型は?",
    answer: "サマヨール採用 (1進化、カースドボムでダメカン5個=50ダメージ)",
    hint: "ヨノワールは2進化で大きい (ダメカン13個=130) が出すのが重い。サマヨールは1進化で軽く、序盤からダメカン5個ばら撒けて、サイド負け状態を作ってカウンターキャッチャーを起動できる。これが現環境の主流。",
    choices: [
      "サマヨール採用 (1進化、カースドボムでダメカン5個=50ダメージ)",
      "ヨノワール採用 (2進化、ダメカン13個=130ダメージ)",
      "バシャーモ採用 (高打点底上げ型)",
      "ノココッチ単体採用 (ドロー特化型)",
    ],
  },
  {
    scenario:
      "【ドラパルトex vs ロケット団のミュウツーex】\n相手は『ロケット団のエネルギー』ベースでミュウツーexの威力を底上げするデッキ。ドラパルト側はTier1なのに勝ち切れず悩んでいる。",
    question: "ドラパルトの構築で最も有効なメタは?",
    answer: "シンオウ神殿で特殊エネルギーの特性をロックする",
    hint: "ロケット団デッキは特殊エネを多用するため、特殊エネ特性を消すシンオウ神殿が刺さる。また、ファントムダイブのベンチばら撒きでミュウツーexの加速元を狙撃するのも有効。",
    choices: [
      "シンオウ神殿で特殊エネルギーの特性をロックする",
      "クラッシュハンマーをフル投入する",
      "アンフェアスタンプを2枚採用 (ACE SPECは1枚しか入れられない)",
      "ジャミングタワーで道具を封じる",
    ],
  },
  {
    scenario:
      "【ドラパルトex vs カミツオロチex】\nカミツオロチ側は『オーガポンみどりのめんex』『メガニウム』『リククラゲex』を採用。ドラパルト先攻2ターン目、ファントムダイブの第1発を撃てる状況。",
    question: "最初のファントムダイブのバトル場ターゲットとして最も期待値が高いのは?",
    answer: "進化前後のメガニウム (おいしげるが切れるとカミツオロチが大幅に弱体化)",
    hint: "カミツオロチexは『おいしげる』(場の基本草エネが2倍扱い) でダメージを倍化している。メガニウムが落ちれば打点が半分以下になり、その間にカミツオロチexを安全に処理できる。バトル場のアタッカーよりベンチの加速エンジンを優先するのは多くのマッチで共通の原則。",
    choices: [
      "進化前後のメガニウム (おいしげるが切れるとカミツオロチが大幅に弱体化)",
      "バトル場のカミツオロチex (高HPで一撃では落ちない)",
      "リククラゲex (ベンチダメージ無効化が痛い)",
      "オーガポンみどりのめんex (加速元なので)",
    ],
  },

  // ── タケルライコex 立ち回り (6) ──────────────────────
  {
    scenario:
      "【タケルライコex vs リザードンex (ブライア入り)】\nお互いサイド6スタート。タケルライコ側にはスピンロトムが場に出せる。リザードン側は3回攻撃でサイド6を取り切る計算 (カースドボム130 + ファントムダイブ200×2)。",
    question: "タケルライコ側のサイドプランの初手として最善は?",
    answer: "スピンロトムを先に倒させてサイド1先取、1-2-2-2プランを敷く",
    hint: "リザードン側は3回でサイド6、タケルライコ側は『きょくらいごう』4回必要。先に非ルールのスピンロトムで『1』を相手に渡し、続けて2-2-2と取らせると、こちらが先に取り切れる構造になる。",
    choices: [
      "スピンロトムを先に倒させてサイド1先取、1-2-2-2プランを敷く",
      "タケルライコexで先制し、まずサイド2を取って速攻",
      "ジャッジマンで相手の手札を3枚に削って動きを遅らせる",
      "コライドンの『はじょうもうこう』で闘弱点を突く",
    ],
  },
  {
    scenario:
      "【タケルライコex ミラーマッチ】\nお互い先攻 2 ターン目に『きょくらいごう』を撃てる速度。先攻のあなたが相手タケルライコexをきぜつさせサイド2を取った。\n後攻側 (相手) の取れる切り返しは限られているが、サイドレースを覆す手段がある。",
    question: "後攻側 (相手) がサイドプランを覆すための鍵となる非ルールアタッカーは?",
    answer: "コライドンの『はじょうもうこう』(タケルライコの闘弱点を突く)",
    hint: "タケルライコexは闘弱点。コライドンは非ルールなので倒されてもサイド1のみ。先攻に取られたサイド2-0からでも、コライドンで弱点を突きつつサイド2-2-2を作り直すことで巻き返せる。これがミラーで後攻に唯一残された勝ち筋。",
    choices: [
      "コライドンの『はじょうもうこう』(タケルライコの闘弱点を突く)",
      "プライムキャッチャーでベンチを呼んで殴り続ける",
      "アンフェアスタンプで手札を流す",
      "アカマツでエネを増やしてタケルライコを再起動",
    ],
  },
  {
    scenario:
      "【タケルライコex vs Nのゾロアークex】\n相手は『とりひき』で安定ドロー、ヒヒダルマや闘ゲッコウガを使い分けるデッキ。あなたはタケルライコ側で展開の選択に迷う。",
    question: "ベンチに置いてはいけないポケモンは?",
    answer: "ラティアスex / ミュウex (どちらも悪弱点でヒヒダルマに狙撃される)",
    hint: "Nのゾロアーク戦ではラティアスex・ミュウexが悪弱点。『ひだるまキャノン』や『イノセントフレイム』で簡単に倒されサイドを失う。代わりにオーガポンいしずえのめんexやヨルノズク等で耐えるのが基本。",
    choices: [
      "ラティアスex / ミュウex (どちらも悪弱点でヒヒダルマに狙撃される)",
      "オーガポンみどりのめんex",
      "ニャースex",
      "スピンロトム",
    ],
  },
  {
    scenario:
      "【タケルライコex vs サーナイトex (リーリエのピッピex採用型)】\nサーナイト側のベンチは『サーナイトex / ラルトス / リーリエのピッピex』。バトル場はサーナイトex。タケルライコ側はサイド先行プラン (1-1-2-2) を狙いたい。",
    question: "ボスの指令で呼ぶべきターゲットは?",
    answer: "リーリエのピッピex (サーナイトの加速エンジンを早期に潰す)",
    hint: "リーリエのピッピexはサーナイトの加速元。これを取ることでサーナイト側の継戦能力を奪える。バトル場のサーナイトex本体はHP280と重く、無理に殴るより加速エンジン狙撃が高効率。タケルライコ系・ドラパルト系どちらでも共通の解。",
    choices: [
      "リーリエのピッピex (サーナイトの加速エンジンを早期に潰す)",
      "バトル場のサーナイトex (本体を倒せばサイド2)",
      "ラルトス (進化前を取って遅延)",
      "ベンチのサーナイトex (本体重複)",
    ],
  },
  {
    scenario:
      "【タケルライコex vs オーダイル (キュレム系含む)】\n相手のデッキにはワニノコの『かじりつく』(ベンチex狙撃) がある。\nまた、ゴージャスマント付きミミッキュも入っており、スピンロトム単体では突破できない。",
    question: "選出すべきベンチ要員として最も適切なのは?",
    answer: "オーガポンいしずえのめんex (ゴージャスマント付きミミッキュも貫通)",
    hint: "オーダイル戦ではラティアスex・イキリンコex (ベンチex) は『かじりつく』で狙われる。代わりにオーガポンいしずえのめんex を選出することで、ゴージャスマント付ミミッキュにも対応できる。",
    choices: [
      "オーガポンいしずえのめんex (ゴージャスマント付きミミッキュも貫通)",
      "ラティアスex (逃げエネ0で機動力◎)",
      "イキリンコex (引きで盤面整える)",
      "スピンロトム単体",
    ],
  },
  {
    scenario:
      "【タケルライコex デッキ運用】\n『きょくらいごう』(基本雷エネをすべてトラッシュして高火力) を撃った直後、次ターンも継続して殴りたい。",
    question: "サポート『アカマツ』を使う最も価値が高いタイミングは?",
    answer: "きょくらいごうでエネをトラッシュした次のターン (再加速して連続攻撃)",
    hint: "アカマツはトラッシュから基本雷エネをポケモンに2枚加速できるサポート。きょくらいごうで自エネを切った直後にアカマツで補充するのが基本ルート。序盤からドロー目的に切るのは効率が悪い。",
    choices: [
      "きょくらいごうでエネをトラッシュした次のターン (再加速して連続攻撃)",
      "初手でドローのために使う",
      "ナンジャモを撃った直後の手札補充に使う",
      "サイド残り1枚の詰めで使う",
    ],
  },

  // ── ACE SPEC・サポート判断 (6) ──────────────────────
  {
    scenario:
      "【ACE SPEC アンフェアスタンプ 使用条件】\nあなたは前ターンに『ボスの指令』で相手のアタッカーを呼んで倒した。相手のサイドは1枚減ったが、相手のバトル場には次のアタッカーが既に立っており手札は7枚もある。",
    question: "アンフェアスタンプを今このターン使えるか?",
    answer: "使えない (前の相手の番に自分のバトルポケモンがきぜつしていない)",
    hint: "アンフェアスタンプの使用条件は『前の相手の番に自分のバトルポケモンがきぜつしている場合のみ使える』。自分が殴って相手を倒しただけでは条件を満たさない。逆に自分が倒されて返しの番に使うのが正しいタイミング。",
    choices: [
      "使えない (前の相手の番に自分のバトルポケモンがきぜつしていない)",
      "使える、相手手札を2枚にできる",
      "使えるがACE SPECなので山に戻る",
      "使えるが効果は反転 (自分が2枚)",
    ],
  },
  {
    scenario:
      "【ボスの指令 vs カウンターキャッチャー】\nあなたはタケルライコ側、サイドは2-2状況 (お互い2枚取った)。相手ベンチに弱いポケモン1体 (取りたい)。手札にはボスの指令とカウンターキャッチャー両方ある。",
    question: "今このターン使うべきは?",
    answer: "ボスの指令 (カウンターキャッチャーはサイド負けてる時しか使えない)",
    hint: "カウンターキャッチャーは『相手より自分のサイドが多い (=サイド負けてる)』時のみ使えるグッズ。サイド同数や勝っているならボスの指令しか機能しない。サイド管理を間違えないことがACE SPEC級の重要判断。",
    choices: [
      "ボスの指令 (カウンターキャッチャーはサイド負けてる時しか使えない)",
      "カウンターキャッチャー (グッズなので他サポも撃てる)",
      "両方撃つ",
      "どちらも今撃たず温存",
    ],
  },
  {
    scenario:
      "【ペパー の使い方】\nペパーで山札からカードをサーチしたい。コンボとして『緊急ボード+カウンターキャッチャー』『勇気のおまもり+ハイパーボール』などが想定される。",
    question: "ペパーのサーチ範囲は?",
    answer: "ポケモンの道具1枚 + グッズ1枚 (山札から見せて手札に加える)",
    hint: "ペパーは『道具1+グッズ1』の同時サーチサポート。リーリエのピッピやレギュ落ち前のキハダ等とは違うので注意。サポート枠は1ターン1回なので何を持ってくるかの判断が重要。",
    choices: [
      "ポケモンの道具1枚 + グッズ1枚 (山札から見せて手札に加える)",
      "サポート1枚 + グッズ1枚",
      "ポケモン1枚 + エネルギー1枚",
      "好きなカード1枚",
    ],
  },
  {
    scenario:
      "【ジャッジマンを使うべき場面】\nタケルライコ vs リザードン、サイド進行3-4 (タケルライコ側がサイド先行)。相手リザードンexが場に2体揃い、相手の手札は7枚。相手は次のターンに『ブライア』『カウンターキャッチャー』を絡めた逆転プランを構築中。",
    question: "ジャッジマンを撃つべきか?",
    answer: "撃つべき (相手手札を3枚に削ってブライアパーツが揃わなくする)",
    hint: "リザードンexはサイド負けてる時に『ブライア+カウンターキャッチャー』で大火力+ベンチ呼び出しから逆転を狙う。手札を3枚に絞り込めばパーツが揃わずプランが崩壊する。攻撃直前ではなく『相手の準備ターン』に撃つのが鍵。",
    choices: [
      "撃つべき (相手手札を3枚に削ってブライアパーツが揃わなくする)",
      "撃つべきでない (自分も3枚に減って動きが止まる)",
      "ナンジャモのほうが優位 (相手も4枚以上引ける)",
      "ペパーのほうが優位",
    ],
  },
  {
    scenario:
      "【プライムキャッチャー】\nACE SPECのプライムキャッチャーは『相手バトルポケモンと相手ベンチポケモンを入れ替える』効果。\nミラーやサーフゴー戦などでベンチ狙撃に使う。",
    question: "プライムキャッチャーとアンフェアスタンプの最大の違いは?",
    answer: "プライムキャッチャーは能動的 (グッズ・条件なし)、アンフェアスタンプは受動的 (自分が倒された返しでのみ)",
    hint: "両者ともACE SPECで強力。プライムキャッチャーは『今ベンチを呼んで殴りたい』状況で能動的に撃てる。アンフェアスタンプは『自分が倒された直後』にのみ使え、相手の詰めを止める受動札。アンフェアスタンプはサイドビハインド時、プライムキャッチャーは積極的盤面攻撃。",
    choices: [
      "プライムキャッチャーは能動的 (グッズ・条件なし)、アンフェアスタンプは受動的 (自分が倒された返しでのみ)",
      "プライムキャッチャーはサポート、アンフェアスタンプはグッズ",
      "プライムキャッチャーは2枚積める",
      "プライムキャッチャーは特殊エネを呼べる",
    ],
  },
  {
    scenario:
      "【メガルカリオex vs サーフゴーex】\n相手は『スーパーエネルギー回収』や各種サポートでエネ・サポを再利用してくる。メガルカリオデッキには『ビワ』が採用されている。",
    question: "ビワの最大の役割は?",
    answer: "相手の山札上を2枚見て1枚トラッシュ (スーパーエネルギー回収を山から落とせる)",
    hint: "ビワは相手の山札を覗いて重要札 (主に再利用サポート) をトラッシュさせるサポート。サーフゴーの『スーパーエネルギー回収』はエネ循環の要なので、これを山から落とせると相手のテンポが大きく崩れる。",
    choices: [
      "相手の山札上を2枚見て1枚トラッシュ (スーパーエネルギー回収を山から落とせる)",
      "相手のトラッシュ全部除外",
      "相手の手札を1枚捨てさせる",
      "相手のサポを1枚返させる",
    ],
  },

  // ── デッキ性能とマッチアップ (8) ──────────────────────
  {
    scenario:
      "【メガルカリオex 序盤展開】\n先攻2ターン目、メガルカリオexに進化完了。手札に基本闘エネが2枚、はどうづきが宣言可能。",
    question: "『はどうづき』の効果と運用は?",
    answer: "エネ1で130ダメージ + ベンチに基本闘エネ最大3枚同時装着 (序盤のテンポ確保)",
    hint: "はどうづきはエネ1宣言で打点を出しながら、ベンチに基本闘エネを最大3枚加速できる強力ワザ。序盤からテンポを取りつつ、後続のメガブレイブの準備も同時進行できる。ハリテヤマの『どすこいキャッチャー』との相性も◎。",
    choices: [
      "エネ1で130ダメージ + ベンチに基本闘エネ最大3枚同時装着 (序盤のテンポ確保)",
      "エネ1で200ダメージだが反動でエネ全トラッシュ",
      "エネ2で攻撃せずベンチ加速のみ",
      "エネ3で必殺メガブレイブ",
    ],
  },
  {
    scenario:
      "【オリーヴァex 加速の仕組み】\nオリーヴァexは『まんようしぐれ』で攻撃。場の基本草エネを参照する打点が特徴。",
    question: "メガニウムの特性『おいしげる』は何をする?",
    answer: "自分の場にある基本草エネルギーすべてを2倍扱いにする (打点・加速の両方に寄与)",
    hint: "メガニウムの『おいしげる』で場の基本草エネが2倍扱いとなり、まんようしぐれの打点が倍化。同じ仕組みでカミツオロチexも倍化。オーガポンみどりのめんex の『みどりのまい』(手札から自身に草エネ + 1ドロー) と組み合わせる。",
    choices: [
      "自分の場にある基本草エネルギーすべてを2倍扱いにする (打点・加速の両方に寄与)",
      "ターンに1回追加でエネ加速ができる",
      "相手の特殊エネを無効化",
      "自分のすべての草ポケモンのHPを+30",
    ],
  },
  {
    scenario:
      "【カミツオロチex の生存戦略】\nカミツオロチ側、相手ドラパルト戦。次のターンも『ファントムダイブ』(バトル200/ベンチ50) で殴られる見込み。\nカミツオロチex本体はHP320、すでに130ダメージ受けて残HP190。『かがやくアマージョ』の50回復だけでは2発耐えられない。",
    question: "ベンチに置いてケアすべきポケモンは?",
    answer: "リククラゲex / ベラカス (ベンチダメージ無効化でカースドボム+ファントムダイブを止める)",
    hint: "ドラパルトの脅威はバトル直接ダメージだけでなくベンチばら撒き。リククラゲexやベラカスでベンチダメージを無効化できれば、カースドボム+ファントムダイブのコンボが大幅に弱体化する。アマージョだけでは間に合わない。",
    choices: [
      "リククラゲex / ベラカス (ベンチダメージ無効化でカースドボム+ファントムダイブを止める)",
      "ジニアを追加してドローを安定させる",
      "イキリンコexで毎ターン引き直す",
      "シェイミexで回復に専念",
    ],
  },
  {
    scenario:
      "【フーディン デッキ 火力公式】\nフーディンexの『ハンドパワー』は手札枚数を参照する火力ワザ。ノココッチでドロー、リッチエネルギー (特殊エネ) でも手札補充。",
    question: "手札10枚のときのハンドパワーの打点は?",
    answer: "200ダメージ (手札1枚あたり20)",
    hint: "ハンドパワーは『手札の枚数 × 20』ダメージ。10枚なら200。だからこそナンジャモやジャッジマンで手札枚数を削られると一気に弱体化する。逆に山を掘る札 (ノココッチ、リッチエネルギー) を厚く積むことで安定して高火力が出せる。",
    choices: [
      "200ダメージ (手札1枚あたり20)",
      "100ダメージ (手札1枚あたり10)",
      "300ダメージ (手札1枚あたり30)",
      "固定250ダメージ",
    ],
  },
  {
    scenario:
      "【テラスタルバレット / オーガポンバレット】\nバレット系の強みは各タイプのオーガポンexで弱点を突き分けること。相手はメガルカリオex (闘タイプ)。",
    question: "メガルカリオに最も刺さるアタッカーは?",
    answer: "オーガポンみずのめんex (水タイプ、闘弱点を突く)",
    hint: "メガルカリオexは闘タイプなので水弱点。オーガポンみずのめんex (げきりゅうポンプ) でちょうど弱点を突ける。テラスタルバレットの強みはこういう弱点分配。タイプ相性を見て選出するのが基本。",
    choices: [
      "オーガポンみずのめんex (水タイプ、闘弱点を突く)",
      "オーガポンいわのめんex (闘弱点なので不利)",
      "オーガポンみどりのめんex (草で加速役のみ)",
      "オーガポンいしずえのめんex (闘で同タイプ)",
    ],
  },
  {
    scenario:
      "【Nのゾロアークex の草弱点克服】\nゾロアーク本体は草弱点だが、現環境のオリーヴァ・カミツオロチ (草) 相手にも上位入賞している。",
    question: "Nのゾロアーク側が草環境で勝つ鍵となる非ルールアタッカーは?",
    answer: "ヒヒダルマ (『バックドラフト』でオーガポンの草弱点を逆襲)",
    hint: "ヒヒダルマは非ルールで『バックドラフト』を持ち、相手の草弱点ポケモン (オーガポン等) を効率よく狩れる。同時に『ひだるまキャノン』でホーホー2体同時きぜつも狙え、有利トレードを作り出す。",
    choices: [
      "ヒヒダルマ (『バックドラフト』でオーガポンの草弱点を逆襲)",
      "ラティアスex (悪弱点なので出さない方が良い)",
      "ミュウex (こちらも悪弱点)",
      "ヨルノズク単体 (打点不足)",
    ],
  },
  {
    scenario:
      "【マリィのオーロンゲex】\nマリィのオーロンゲexは『シャドウバレット』でダメカン配置、ユキメノコや『ナイトワンダラー』マシマシラを併用するテクニカルなデッキ。",
    question: "このデッキの主要な勝ち筋は?",
    answer: "ユキメノコでベンチにダメカン配置 + マシマシラでダメカン移動して相手バトル場を一撃で落とす",
    hint: "マリィのオーロンゲexは『直接攻撃で殴り倒す』というよりは『ダメカンを撒いて自由に移動させ、相手のexを一撃で落とす』タイプ。プレイ難易度は高いがハマるとTier1相手も食えるテクニカルデッキ。",
    choices: [
      "ユキメノコでベンチにダメカン配置 + マシマシラでダメカン移動して相手バトル場を一撃で落とす",
      "シャドウバレットで毎ターン180ダメージで殴り続ける",
      "オーロンゲexの高HPを活かして耐久戦",
      "ナンジャモロックで詰める",
    ],
  },
  {
    scenario:
      "【ヤドキング (キュレム OTK 系)】\nキュレムの『トライフロスト』を絡めたOTKデッキ。ヤドキングの『ひらめきチャレンジ』で軽いコストでワザを宣言する。",
    question: "このデッキが目指す発火ターンは?",
    answer: "先攻2ターン目に『トライフロスト』を撃って一気に相手盤面を崩壊",
    hint: "ひらめきチャレンジで本来重いトライフロストを軽コスト化し、先攻2ターン目から殴れるのがこのデッキのコンセプト。後攻だとロックが効きづらく性能を発揮しにくい。",
    choices: [
      "先攻2ターン目に『トライフロスト』を撃って一気に相手盤面を崩壊",
      "後攻1ターン目に最大火力",
      "ターン数より相手のHP削れ次第",
      "サイドが3枚残った時点で発動",
    ],
  },

  // ── 新弾 (ニンジャスピナー) と特殊カード判断 (4) ─────────
  {
    scenario:
      "【メガゲッコウガex (2026年3月発売 ニンジャスピナー収録)】\n特性『ひっさつしゅりけん』とワザ『ニンジャスピナー』を持つ新メガシンカex。",
    question: "ワザ『ニンジャスピナー』の特徴は?",
    answer: "ダメージ量を任意に調節できる (テクニカルにHP低めの相手を狙撃)",
    hint: "ニンジャスピナーはダメカン配置を調整できるタイプのワザ。確定数を意識して相手のHP残量に合わせて打点を作れるため、ピンポイント狙撃に強い。スピンロトムやホーホーなど小型を取り切る用途で輝く。",
    choices: [
      "ダメージ量を任意に調節できる (テクニカルにHP低めの相手を狙撃)",
      "一撃必殺 (相手HP無視)",
      "自分にも同量のダメージ",
      "ベンチに大量ばら撒き",
    ],
  },
  {
    scenario:
      "【シロナのガブリアスex】\n『スクリューダイブ』で継続攻撃ができるが、最大火力ワザ『リューノバスター』は強力な代わりにエネ全トラッシュ要件がある。",
    question: "リューノバスターを撃つべきタイミングは?",
    answer: "サイド残り少なめで一撃で確実に高HPex (リザードンex・サーナイトex 等) を取れるとき",
    hint: "リューノバスターはエネ全トラッシュなので連打できない『決め技』。スクリューダイブで継続攻撃して試合をコントロールし、勝負所で1度だけ撃って高HPexを落とすのが理想ルート。毎ターン撃つとリソース枯渇する。",
    choices: [
      "サイド残り少なめで一撃で確実に高HPex (リザードンex・サーナイトex 等) を取れるとき",
      "毎ターン撃って最大火力で押し切る",
      "先攻2ターン目に最速で撃つ",
      "後攻1ターン目に撃って先手を取る",
    ],
  },
  {
    scenario:
      "【スタジアム選択: シンオウ神殿 vs ジャミングタワー】\nどちらも相手のリソースを縛るスタジアムだが、効果は異なる。",
    question: "それぞれが封じるものは?",
    answer: "シンオウ神殿=特殊エネルギーの特性 / ジャミングタワー=お互いのポケモンのどうぐ",
    hint: "シンオウ神殿はミストエネルギーやレインボーエネルギー、ロケット団のエネルギーなど『特殊エネ特性』を消す。ジャミングタワーは『勇気のおまもり』『ゴージャスマント』『緊急ボード』など道具の効果を消す。相手依存で採用を選ぶ。",
    choices: [
      "シンオウ神殿=特殊エネルギーの特性 / ジャミングタワー=お互いのポケモンのどうぐ",
      "シンオウ神殿=ポケモンのどうぐ / ジャミングタワー=特殊エネ",
      "どちらも特殊エネを消す",
      "どちらも道具を消す",
    ],
  },
  {
    scenario:
      "【ジニア・ナンジャモ・博士の研究 の使い分け】\nドロー / 手札補充サポートの選択肢が複数ある状況。手札 1 枚、山にキー進化ポケモン残り。",
    question: "進化系統 (ヒトカゲ→リザード→リザードンex 等) を確実に揃えたい時に最も効率が良いのは?",
    answer: "ジニア (山札からたねポケモン と進化ポケモンを1枚ずつサーチ)",
    hint: "ジニアは進化ラインを直接サーチできるサポート。ボールに頼らず確実に進化系統を完成させたい時に強い。博士の研究はランダムドロー、ナンジャモは手札リセット+山下から引くので確実性が落ちる。",
    choices: [
      "ジニア (山札からたねポケモン と進化ポケモンを1枚ずつサーチ)",
      "ナンジャモ (手札リセット)",
      "博士の研究 (7枚ドロー)",
      "ペパー (道具+グッズなのでポケモン取れない)",
    ],
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
  advanced: {
    label: "上級者編",
    questions: QUESTIONS_ADVANCED,
    prompt: "このロゴ・マスコットはどの技術のもの? (上級者編)",
    feedbackPrefix: (q) =>
      q.subject
        ? `『${q.subject}』は <strong>${q.answer}</strong> のロゴ/マスコットです。`
        : `これは <strong>${q.answer}</strong> のロゴです。`,
  },
  art: {
    label: "アート職編",
    questions: QUESTIONS_ART,
    prompt: "このロゴはどの制作ツールのもの?",
    feedbackPrefix: (q) => `これは <strong>${q.answer}</strong> のロゴです。`,
  },
  poketcg: {
    label: "ポケカ 立ち回り編 (2026年5月環境)",
    questions: QUESTIONS_POKETCG,
    prompt: "状況を読み解いて最善の判断を選ぼう",
    feedbackPrefix: (q) => `正解は <strong>${q.answer}</strong>。`,
    textMode: true,
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
  imageFrame: document.querySelector("#screen-quiz .image-frame"),
  qScenario: $("#q-scenario"),
  cardQuiz: document.querySelector("#screen-quiz .card"),
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

  // 画像 / シナリオ表示の切り替え
  if (q.image) {
    el.qImage.src = q.image;
    el.qImage.alt = "アイコン";
    if (el.imageFrame) el.imageFrame.style.display = "";
  } else if (el.imageFrame) {
    el.imageFrame.style.display = "none";
  }

  if (q.scenario && el.qScenario) {
    el.qScenario.textContent = q.scenario;
    el.qScenario.classList.remove("hidden");
    el.qPrompt.textContent = q.question || "最善の判断は?";
  } else {
    if (el.qScenario) el.qScenario.classList.add("hidden");
    el.qPrompt.textContent = cat.prompt;
  }

  // テキストモードのカードに専用クラス
  if (el.cardQuiz) {
    el.cardQuiz.classList.toggle("card-textmode", !!cat.textMode);
  }

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

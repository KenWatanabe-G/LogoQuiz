# ITエンジニア アイコン & 企業ロゴ クイズ

ITエンジニア向けの「アイコン当てクイズ」。
スタート画面で 3 カテゴリから選べます:

- **マスコット編 (30問)**: Java の Duke、Linux の Tux、Go の Gopher、Rust の Ferris … IT界の有名マスコット&ブランドロゴ
- **IT企業編 (30問)**: GAFAM / Nvidia / OpenAI / Anthropic / Stripe / 楽天 / メルカリ / サイバーエージェント … 世界&日本のIT企業ロゴ
- **上級者編 (30問)**: Hexley (Darwin) / Konqi (KDE) / Glenda (Plan 9) / Puffy (OpenBSD) / Haskell / OCaml / Erlang / Elixir / Terraform / Vault / Istio … マイナーマスコット & ニッチ言語 & DevOps

**バックエンド不要・完全静的サイト**なのでGitHub Pages等に置くだけで動きます。

## デプロイ: GitHub Pages

1. GitHubで空のpublicリポジトリを作成 (例: `ItQuiz`)
2. ローカルでリモート登録 → push

   ```bash
   cd /Users/ken.watanabe/Documents/ItQuiz
   git remote add origin git@github.com:<your-account>/ItQuiz.git
   git push -u origin main
   ```

3. リポジトリの **Settings → Pages** を開く
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `(root)` を選択 → Save
4. 数十秒待つと `https://<your-account>.github.io/ItQuiz/` で公開される

`.nojekyll` を同梱済みなのでGitHub PagesのJekyll変換はスキップされ、ファイル名先頭`_`のSVG等もそのまま配信されます。
リポジトリ名を `<your-account>.github.io` にすればルートドメインで公開されます。

## ローカルで起動 (開発時)

```bash
cd /Users/ken.watanabe/Documents/ItQuiz
python3 -m http.server 8765
# → ブラウザで http://localhost:8765/ を開く
```

VS Codeなら Live Server 拡張、Node環境なら `npx serve` でも可。
`index.html` を直接ブラウザで開いても動きますが、HTTP経由を推奨します。

## 出題内容

### マスコット編 (30問)

- **マスコット17問**: Duke (Java) / Tux (Linux) / Bugdroid (Android) / Octocat (GitHub) / Gopher (Go) / Ferris (Rust) / Moby Dock (Docker) / GNU / elePHPant (PHP) / Beastie (BSD) / Camelia (Raku) / Firefox / Slonik (PostgreSQL) / Sakila (MySQL) / Suzanne (Blender) / Wilber (GIMP) / Hadoop象
- **ブランドロゴ13問**: Kubernetes / Node.js / Python / Ruby / React / Vue.js / Angular / Cloudflare / Jenkins / Redis / MongoDB / Elasticsearch / Vim

### IT企業編 (30問)

- **グローバルメガキャップ10**: Google / Apple / Microsoft / Amazon / Meta / Nvidia / Intel / AMD / Tesla / IBM
- **AI・SaaS 8**: OpenAI / Anthropic / Hugging Face / Stripe / Figma / Notion / Slack / Vercel
- **コンシューマ・サービス 7**: Netflix / Spotify / Uber / Airbnb / Shopify / X (旧Twitter) / LinkedIn
- **日本のIT 5**: 楽天 / LINE / メルカリ / サイバーエージェント / ソフトバンク

### 上級者編 (30問)

- **マイナーマスコット10**: Hexley (Darwin) / Konqi (KDE) / Glenda (Plan 9) / Puffy (OpenBSD) / Geeko (openSUSE) / RabbitMQ / Thunderbird / Deno / GNU Bash / Lua
- **ニッチ言語12**: Haskell / OCaml / Erlang / Elixir / Clojure / Crystal / F# / R / Zig / Nim / Scala / Kotlin
- **DevOps / インフラ8**: Terraform / Ansible / Vagrant / Consul / Vault / Istio / Argo CD / Helm

## ファイル構成

```
ItQuiz/
├── index.html              エントリーポイント (カテゴリ選択UI)
├── style.css               ダーク基調のスタイル
├── script.js               90問のクイズデータ + 3カテゴリ出題ロジック
├── favicon.svg             タブアイコン
├── .nojekyll               GitHub PagesのJekyll処理を無効化
├── images/                 マスコット・技術ロゴ画像 (30+点)
│   ├── companies/          IT企業ロゴ画像 (30点)
│   └── advanced/           上級者編用マスコット・ロゴ画像 (30点)
├── screenshots/            動作確認時のスクリーンショット
└── README.md
```

## 画像出典

- Wikimedia Commons (Duke, Tux, Bugdroid, GNU, elePHPant, Beastie, Camelia, Firefox, Slonik, Suzanne, Wilber, Hadoop ほか)
- [Simple Icons](https://simpleicons.org/) (ブランドロゴ全般、MySQL)
- [GitHub Octodex](https://octodex.github.com/) (Octocat)
- [Rustacean.net](https://rustacean.net/) (Ferris)
- [Docker, Inc.](https://www.docker.com/) (Moby Dock)
- [Go.dev](https://go.dev/) (Gopher)

各素材はそれぞれのライセンス (パブリックドメイン / CC-BY / CC-BY-SA / 各社の商標規定など) に従って利用してください。本リポジトリは個人学習目的のクイズアプリです。

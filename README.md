# ITエンジニア アイコン・マスコット クイズ

JavaのDukeをはじめとした、IT界の有名マスコットやブランドロゴを当てる30問クイズです。

## 起動方法

ローカルにHTTPサーバーを立てて `index.html` を開いてください。
`file://` 直開きでも一応動きますが、一部ブラウザでSVGがブロックされる可能性があるためHTTP経由を推奨します。

```bash
cd /Users/ken.watanabe/Documents/ItQuiz
python3 -m http.server 8765
# → ブラウザで http://localhost:8765/ を開く
```

VS Codeなら Live Server 拡張、Node環境なら `npx serve` でも可。

## 内容

- **マスコット17問**: Duke (Java) / Tux (Linux) / Bugdroid (Android) / Octocat (GitHub) / Gopher (Go) / Ferris (Rust) / Moby Dock (Docker) / GNU / elePHPant (PHP) / Beastie (BSD) / Camelia (Raku) / Firefox / Slonik (PostgreSQL) / Sakila (MySQL) / Suzanne (Blender) / Wilber (GIMP) / Hadoop象
- **ブランドロゴ13問**: Kubernetes / Node.js / Python / Ruby / React / Vue.js / Angular / Cloudflare / Jenkins / Redis / MongoDB / Elasticsearch / Vim

## ファイル構成

```
ItQuiz/
├── index.html       エントリーポイント
├── style.css        ダーク基調のスタイル
├── script.js        30問のクイズデータ + 出題ロジック
├── images/          マスコット・ロゴ画像 (SVG/PNG, 30+点)
├── screenshots/     動作確認時のスクリーンショット
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

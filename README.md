# Next.js アプリケーション

このプロジェクトは [Next.js](https://nextjs.org) の最新バージョンを使用し、[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) で初期化されています。App Routerを採用しており、TypeScript、ESLint、Tailwind CSSが設定済みです。

## 起動方法

開発サーバーを起動するには、以下のコマンドを実行してください：

```bash
# 依存関係のインストール（初回のみ）
npm install

# 開発サーバーの起動
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、アプリケーションが表示されます。

`src/app/page.tsx` ファイルを編集することで、ページの内容を変更できます。ファイルを保存すると、ブラウザが自動的に更新されます。

## ビルドと本番環境での実行

本番環境用にアプリケーションをビルドするには：

```bash
# ビルド
npm run build

# 本番サーバーの起動
npm start
```

## プロジェクト構成

このプロジェクトは以下の技術スタックを使用しています：

- **Next.js**: Reactベースのフレームワーク（App Router使用）
- **TypeScript**: 型安全な開発環境
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク
- **ESLint**: コード品質の維持

## 詳細情報

Next.jsについて詳しく知りたい場合は、以下のリソースをご覧ください：

- [Next.js ドキュメント](https://nextjs.org/docs) - Next.jsの機能とAPIについて
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsチュートリアル

[Next.js GitHub リポジトリ](https://github.com/vercel/next.js)もご覧ください。

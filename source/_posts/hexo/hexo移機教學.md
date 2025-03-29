---
title: hexo移機教學
tags: hexo
categories: hexo
abbrlink: 949953052
date: 2024-12-26 10:45:49
---
## 第一步：安裝 將之前在github備份的原始碼下載下來

## 第二步：安裝 Node.js 、Git 
- 點選[Node.js](https://nodejs.org/en/)官網，點選安裝最新版本的Node.js
- 點選[Git](https://git-scm.com/downloads)官網，點選安裝最新版本的Git
- 安裝完畢後，開啟命令提示字元**node -v**，**git --version**，，輸入以下指令，確認Node.js和Git是否安裝成功

### ps 需要將git與github帳號綁定，才能使用git指令
- 詳情請閱讀[CM喂飯 部落格文章](https://vercel.blog.cmliussss.com/p/HexoBlogNo1/)

## 第三步：安裝 Hexo 
- 開啟命令提示字元，輸入以下指令：
```bash
npm install -g hexo-cli
```
- 安裝完畢後，輸入**hexo -v**，確認Hexo是否安裝成功

## 第四步：設定 Hexo 
- 開啟命令提示字元，輸入以下指令：
```bash
hexo init blog
```
- 輸入完指令後，會在當前目錄下建立一個名為blog的資料夾，這是Hexo的專案資料夾
- 將第一步下載的原始碼複製到blog資料夾中：

## 第五步：重新安裝 theme anzhiyu
- 開啟命令提示字元，輸入以下指令：
```bash
git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```

---
## 參考資料
- [搭建Hexo博客，快速简洁高效，零成本搭建个人博客：Hexo + GitHub Pages + Cloudflare Pages 完整指南](https://vercel.blog.cmliussss.com/p/HexoBlogNo1/)
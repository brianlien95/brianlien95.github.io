var posts=["2024/10/07/AIS3 junior DAY2 網頁安全 writeup/","2024/08/18/AIS3 junior DAY1 AI-應用安全實務-共筆/","2024/08/18/AIS3-junior-DAY1-網路概論/","2024/08/18/AIS3-junior-DAY2-網頁安全/","2024/08/18/AIS3-junior-DAY3-下午-AI-應用安全實務/","2024/08/04/CSP（內容安全策略）、SOP（同源策略）和CORS（跨源資源共享）/","2024/08/04/CSRF-攻擊/","2024/08/05/CyberSecurity-Summer-Camp-2024-資訊安全暑訓營-逆向工程/","2024/08/07/FinTech-Summer-CAMP-金融產業資安實務研習營-Day1-下午/","2024/08/04/Url-快取漏洞/","2024/08/04/不安全的密碼更改功能/","2024/08/04/不安全的密碼術-對憑證的保護不足/","2024/08/04/不當身份驗證/","2024/08/04/不安全的密碼術-隨機性不安全/","2024/08/04/傳輸層保護不足-對憑證傳輸無保護措施/","2024/08/04/大量賦值漏洞/","2024/08/04/側通道漏洞-URL-方案使用不當/","2024/08/04/故障時的安全性/","2024/08/04/整數溢出（Integer-Overflow）/","2024/08/04/存取控制-不安全的直接物件引用/","2024/08/04/數據轉義不足/","2024/12/19/老莊選讀/","2024/12/13/英文單字L3、4/","2024/08/04/資安鑑識課程/","2024/08/04/資料保護/","2024/08/04/資訊曝露-敏感性資料曝露/","2024/08/04/路徑穿越/","2024/08/04/明文儲存敏感資訊/","2024/08/04/遺漏功能層級存取控制/","2024/08/03/對憑證的保護不足/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
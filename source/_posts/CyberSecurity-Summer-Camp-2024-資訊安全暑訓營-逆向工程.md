---
title: CyberSecurity Summer Camp 2024 資訊安全暑訓營-逆向工程
tags: 逆向工程
categories: security class
abbrlink: 2835330838
date: 2024-08-05 21:26:38
---
![enter image description here](https://i.imgur.com/fK2cMA6.png)
## 課程筆記
### 基礎 Linux 操作

**終端機基礎操作**
- 打開終端：通常可以通過快捷鍵 `Ctrl + Alt + T`。

**命令行提示（Prompt）自定義**
 - 終端機上，可以⽤來輸入指令的地⽅
 - 指令執⾏結束後，會再次跳出 Prompt
	 - 此時才能繼續輸入下個指令

**快捷鍵操作**
- 自動補全：輸入命令時按 `Tab` 鍵。
- 歷史指令：使用上箭頭鍵訪問之前輸入的命令。

**常用Linux命令示例**
- 列出當前目錄下的文件和文件夾：`ls`
- 更改文件權限，例如給予所有用戶對文件的讀寫執行權限：`chmod 777 filename`
- 查看文件類型：`file filename`
- 下載文件：`wget http://example.com/file.txt`
- 顯示文件內容：`cat filename`
- 切換目錄：`cd /path/to/directory`
- 複製文件：`cp source_file destination_file`
- 移動或重命名文件：`mv old_name new_name`
- 刪除文件：`rm filename`
- 使用管道連接命令：`ls | grep "pattern"`

**文本編輯器 vim 使用**
- 打開文件進行編輯：`vim filename`
- 保存並退出 vim：在 vim 的命令模式下輸入 `:wq`

### 逆向工程簡介

**逆向工程過程示例**
- 反編譯程序：使用工具如 `objdump -d ./program`

### Linux C 程式語言開發基礎

**C程式的編譯與執行**
- 編譯 C 程式：`gcc -o output program.c`
- 執行編譯後的程式：`./output`

### Linux 執行檔分析

**ELF文件格式分析**
- 查看 ELF 程式頭：`readelf -l filename`

### 解析組合語言

**組合語言指令示例**
- 移動數據：`mov eax, ebx`
- 減法操作：`sub eax, 5`
- 位運算 AND：`and eax, 0xFF`
- 條件跳轉如果相等：`je label`

### 逆向工程實務

**逆向工程工具使用**
- 使用 radare2 打開文件：`r2 ./binary`
- 使用 gdb 調試程式：`gdb ./program`



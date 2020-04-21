var tipuesearch = {"pages": [{'title': 'About', 'text': '--------------------------------------------------------------------- \n 個人網站: https://s40723146.github.io/cd2020 \xa0 \n 個人倉儲: https://github.com/s40723146/cd2020 \n --------------------------------------------------------------------- \n Group-2a-3 \n 小組倉儲: https://github.com/s40723110/cd2020ag3 \xa0 \n 小組網站: https://s40723110.github.io/cd2020ag3/content/index.html \n', 'tags': '', 'url': 'About.html'}, {'title': 'Group Members', 'text': 'Group 3 林晏瑩\xa0 Repository: \xa0 40723103 \xa0 | Site: \xa0 40723103 李正揚\xa0 Repository: \xa0 40723110 \xa0 | Site: \xa0 40723110 李冠廷\xa0 Repository: \xa0 40723112 \xa0 | Site: \xa0 40723112 林靖浩\xa0 Repository: \xa0 40723120 \xa0 | Site: \xa0 40723120 張詠全\xa0 Repository: \xa0 40723125 \xa0 | Site: \xa0 40723125 張瑋庭\xa0 Repository: \xa0 40723126 \xa0 | Site: \xa0 40723126 郭哲明\xa0 Repository: \xa0 40723128 \xa0 | Site: \xa0 40723128 陳彥旭\xa0 Repository: \xa0 40723130 \xa0 | Site: \xa0 40723130 黃柏翰\xa0 Repository: \xa0 40723139 \xa0 | Site: \xa0 40723139 詹昇澤\xa0 Repository: \xa0 40723142 \xa0 | Site: \xa0 40723142 劉光智\xa0 Repository: \xa0 40723145 \xa0 | Site: \xa0 40723145 劉敬中\xa0 Repository: \xa0 40723146 \xa0 | Site: \xa0 40723146 \n', 'tags': '', 'url': 'Group Members.html'}, {'title': '利用 cmsimde 建立靜態網誌方法', 'text': '1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': '利用 cmsimde 建立靜態網誌方法.html'}, {'title': 'Online lecture', 'text': '線上課程流程： \n 通過電子郵件將 \xa0 https://meet.google.com \xa0 會議網址發送給各組組長, 以進行線上會議. 講師使用 \xa0 Youtube \xa0 和 \xa0 OBS \xa0 直播每週的課程內容, 並將其 URL 發佈到各班 Gitter. 所有學員使用 \xa0 Youtube \xa0 和 \xa0 OBS \xa0 直播並錄製當週作業, 並將其 URL 發佈到各分組的網站上. 所有學員根據各學員的 Github 提交, Github Page 網站與 Youtube 影片內容, 完成自評與互評. \n', 'tags': '', 'url': 'Online lecture.html'}, {'title': 'Week 7', 'text': '4月15號 \n 1. 網站標題更改，可從檔案init.py裡面進行更改 \n 2. 將分組倉儲連結放進個人頁面 \n \n', 'tags': '', 'url': 'Week 7.html'}, {'title': 'Week 8', 'text': '', 'tags': '', 'url': 'Week 8.html'}, {'title': 'Week 9', 'text': '', 'tags': '', 'url': 'Week 9.html'}, {'title': 'Week 10', 'text': '\n', 'tags': '', 'url': 'Week 10.html'}, {'title': 'Book', 'text': 'https://drive.google.com/file/d/13THamnfayiRT4Wa9KzmjXQSP4ZW2jIej/view \n 翻譯 4.3~4.5 \n', 'tags': '', 'url': 'Book.html'}, {'title': '4.3', 'text': '', 'tags': '', 'url': '4.3.html'}, {'title': '4.4', 'text': '', 'tags': '', 'url': '4.4.html'}, {'title': '4.5', 'text': '', 'tags': '', 'url': '4.5.html'}, {'title': 'WEBOT', 'text': '', 'tags': '', 'url': 'WEBOT.html'}, {'title': 'Grouping', 'text': '', 'tags': '', 'url': 'Grouping.html'}, {'title': '簡單亂數抽取程式', 'text': '首先我們先做一個簡易的亂數抽取程式，主要是利用random模組來進行 \n random.randrange (100,200,10) 在100~200之間抽取一個10倍數的數字 \n 所以只會抽中100,110,120,130,140.....等數字。 \n #導入模組\nimport random\n#設定第一個數字\nx=input("first number")\n#設定第二個數字\ny=input("second number")\n在第一個數字和第二個數字之間亂數抽取一個數字\nprint(random.randrange(int(x),int(y),1)) \n 然而這只是一個最基礎的程式，亂數分組程式必須同時包含 \n 1.一次亂數列出許多人，再依照人數來分組。 \n 2.從網頁導入表單。 \n', 'tags': '', 'url': '簡單亂數抽取程式.html'}]};
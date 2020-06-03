var tipuesearch = {"pages": [{'title': 'week', 'text': 'week1-week5 \n week6-week9 \n week10-week14 \n week15-week18 \n', 'tags': '', 'url': 'week.html'}, {'title': 'week1-week5', 'text': 'week1 \n 建立cd2020個人倉儲和網站(步驟同創建cad2019) \n \n week2 \n 任務:將可攜系統python3.7.3更新到3.8.2 \n 下載網站:\xa0 https://www.python.org/downloads/windows/ \n 進入後下載\xa0 Download\xa0 Windows x86-64 executable installer \n 選擇customize installation->將pip取消打勾->路徑選擇自己要安裝的位置 \n 記得保留舊版以便新版發生錯誤可返回舊版 \n 更改start.bat 將路徑改成自己安裝的位置\xa0 ex py373->py382 \n 好了後儲存並重新啟動 \n 下圖是已更新為python3.8.2 \n \n 執行 \n python get-pip.py \n python -m pip install flask flask-cors markdown lxml bs4 pelican leo \n 好了後可測試python wsgi.py 是否能順利開啟 \n \n week3 \n 任務:從\xa0 https://www.coppeliarobotics.com/helpFiles/index.html \xa0了解甚麼來實現四輪機器人 \n 翻譯部分放在\xa0 downloads \n', 'tags': '', 'url': 'week1-week5.html'}, {'title': 'week6-week9', 'text': "Keyboard control car \n 參考資料: 組長 \n 將繪製好的，能直線運行的四輪車導入v-rep \n 轉好後將零件所對應的相對運動位置依照圖示中的方式排序 \n 設定馬達將電機開啟 \xa0( add > joint \xa0 中加入所想要的馬達電機) \n \n 勾選 motor enabled來 啟動馬達，調整轉動速度和力矩的參數 \n 勾選lock motor when target velocity is zero 則可以使馬達速度為零時鎖定住馬達 \n \n 動力學屬性設定:物體的碰撞和動態都必須打開，才能使剛剛設定好的馬達對輪胎作動 \n \n 將撰寫前後左右及加減速程式碼 載入v-rep(add > associated> non threaded) \n \n 心得:一開始照著v-rep bubble rob的教程來學習這套軟體，鍵盤控制一開始是3D繪圖軟體將零件轉成stl檔案導入v-rep，設定馬達、動力學參數細項等，之後撰寫程式碼來完成鍵盤控制的部分。沒發現摩擦系數相關的設定可能會有打滑現象，可透過設計改良此問題。 \n week6  \n task: \n 1.\xa0According to the material of Topic 0 and Topic 1, can you describe specifically what the mechanical design team need to do for accomplishing Assignment 1's\xa0 four wheeled robot. \n 2. What do you need to know from\xa0 https://cyberbotics.com/doc/guide/index \xa0 \xa0to implement a four-wheeled robot? \n 1.根據主題0和主題1的材料，您能具體描述機械設計團隊為完成分配1的四輪機器人需要做什麼。 \n 2.您需要從 https://cyberbotics.com/doc/guide/index \xa0 了解什麼\xa0 \xa0 \xa0以實現四輪機器人？ \n 翻譯部分放在 /downloads/assignment2.pdf \n \xa0week7 \n 直播影片 \n 前面12分鐘由於帶著耳機沒注意到聲音已經失控，所以花了時間尋找問題，應該是沒有調好輸入音源的關係。直播是使用桌電進行，使用obs加上手機的ivcam連到電腦上的ivcam來配合。 \n \n week8 \n 安裝上課老師教的3個模組 \n 1.pip install opencv-python \n 2.pip install imutils \n 3.pip install numpy \n 抽點影片 \n \n", 'tags': '', 'url': 'week6-week9.html'}, {'title': 'week10-week14', 'text': 'google 用戶登入設定 \n 1.建立專案cd2020(名稱無限制 \n 2.git clone\xa0 https://github.com/mdecourse/cd2020pj1 .git \n 3.啟用API和服務->google+Domains API->啟用 \n 4.憑證->設定同意畫面 \n 5.點內部->建立 \n 6.名稱cd2020->儲存 \n 7.建立憑證->oauth用戶端ID->網路應用程式->建立 \n 8.複製ID和密碼並儲存到pj1下 (檔案名稱 oauth_學號.txt \n 9.網路用戶端1-> 已授權的javascript來源 \xa0 https://localhost:8443 \n \xa0 \xa0 \xa0 \xa0 \xa0已授權的重新導向url\xa0 https://localhost:8443/login/google/ \xa0 \xa0 \xa0儲存 \n 10.leo->cd2020pj1->@edit config.py 將路徑改成自己的檔案名稱->儲存後點drawROCtojs \n 11.Y:\\>pip install authomatic \n 12.cd2020pj1\\python wsgi.py\xa0 \xa0 \xa0 \xa0 \n 13.輸入https://localhost:8443測試是否完成 \n \n 以ssh維護倉儲 \n 參考資料:老師 \n 1. 下載 Putty 工具組 \n 2. 利用 y:\\portablegit\\bin\\sh.exe\xa0\xa0 \n 在sh環境下輸入 \n \n \n \n \n \n \n 1 \n \n \n \n ssh-keygen -t rsa -b 4096 -C  "40723240" \n \n \n \n \n \n \n \n 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key \n 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. \n 3. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n 修改啟動的 start.bat 加入下列設定: \n \xa0 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\ \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n \n \n \n \n \n \n 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. \n 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位.\xa0 \n 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為::69埠號設為 3128. \n 5. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n # no proxy at home \n #ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p \n # set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup \n ProxyCommand y:/putty/plink.exe github.com %h %p \n \xa0 \xa0 \n Host github.com \n \xa0\xa0\xa0\xa0 User git \n \xa0\xa0\xa0\xa0 Port 22 \n \xa0\xa0\xa0\xa0 Hostname github.com \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 # for connect.exe need openssh key format \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse" \n \xa0\xa0\xa0\xa0 # for plink.exe need rsa key format but set under putty github.com session \n \xa0\xa0\xa0\xa0 # plink.exe do not need the following setting \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk" \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 TCPKeepAlive yes \n \xa0\xa0\xa0\xa0 IdentitiesOnly yes \n \n \n \n \n \n \n \n 6. 最後再將cd2020倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n [core] \n \xa0\xa0\xa0\xa0 repositoryformatversion = 0 \n \xa0\xa0\xa0\xa0 filemode =  false \n \xa0\xa0\xa0\xa0 bare =  false \n \xa0\xa0\xa0\xa0 logallrefupdates =  true \n \xa0\xa0\xa0\xa0 symlinks =  false \n \xa0\xa0\xa0\xa0 ignorecase =  true \n [submodule] \n \xa0\xa0\xa0\xa0 active = . \n [remote  "origin" ] \n \xa0\xa0\xa0\xa0 #url = https://github.com/s40723240/cd2020.git \n \xa0\xa0\xa0\xa0 url = git@github.com:s40723240/cd2020.git \n \xa0\xa0\xa0\xa0 fetch = +refs/heads/*:refs/remotes/origin/* \n [branch  "master" ] \n \xa0\xa0\xa0\xa0 remote = origin \n \xa0\xa0\xa0\xa0 merge = refs/heads/master \n [submodule  "cmsimde" ] \n \xa0\xa0\xa0\xa0 url = https: //github.com/mdecourse/cmsimde.git \n \n \n \n \n \n \n \n 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push. \n \n ubuntu virtualbox設定 \n 下載 \n 1. ubuntu \n 2. Self-driving car \n 3. virtual box \n 設定網路新增NAT網路 \n 匯入ubuntu \n 設定中的網路中的附加到設定為僅限主機介面卡 (host-only) \n 啟動ubuntu \n 輸入密碼kmol2020 \n 點選右上方 activites-> show application \n 點選 LX terminal \n 輸入 xterm& \n 輸入 ls 顯示資料 \n 進入資料夾中輸入 cd coppeliasim4_rev4 \n 輸入 ls 查看資料夾中之資料 \n 輸入 cd CoppeliaSim_Edu_V4_0_0_ubuntu18_04 \n 輸入 ./coppeliaSim.sh \n coppeliasim car_model.py 模擬 \n 設定NAT和網路埠號 22 19999 \n 開啟coppeliasim匯入sdc.ttt \n 將car_model.py拉入編輯器將它啟動 \n 將ubuntu中的coppeliasim執行模擬 \n \n ivp4對外連線\xa0 (可用於自己電腦) \n 密碼:kmol2020 \n 1.喜好設定NatNetwork設定Ipv4，ubuntu設定網路調成Nat網路 \n \n 2. 開啟Lxterminal->ifconfig->sudo apt install net-tools \n 3.輸入ping 127.0.0.1進行測試 \n 4.到cd2020pj1進行git pull \n 5.輸入sudo vi wsgi.py-> i(編輯內容)-> 對 host近端編輯設置為10.0.2.4 \n 6.ESC->:wq儲存 \n 7.開啟cd2020pj1.leo，在Nav搜尋allowExt(在fileuploadform位置新增ttt檔案) \n 8.在tmp輸入sudo vi oauth_scrum.txt (做測試) \n 9.返回cd2020pj1輸入python3 wsgi.py \n 10.進入https://127.0.0.1:18443/alogin->輸入admin->測試是否可以上傳ttt檔案 \n ipv4環境下遠端連線 (可用於自己電腦) \n 1.搜尋自己電腦ip (cmd->ipconfig)\xa0 將自己的ipv4位址輸入到ubuntu網路的主機ip \n 2.開啟XLaunch.exe \n 3.設定putty(主機ip->X11允許打勾 輸入localhost0.0並儲存 \n 4.開啟LXtermial->開啟putty->輸入帳密->輸入xterm& \n 5.cd tmp->cd cd2020pj1->git pull確認是否有新版本 \n 6.cd docs->cd cmsimde \n 7.vi wsgi.py 按i編輯->host改為10.0.2.4->按ESC並輸入:wq儲存 \n 8.輸入python3 wsgi.py\xa0 \n 9.網址:\xa0https://自己的ip:17443 \n ipv6對外連線(學校使用) \n ipv6下環境遠端連線(學校使用) \n \n \xa0 \n \xa0', 'tags': '', 'url': 'week10-week14.html'}, {'title': 'week15-week18', 'text': '', 'tags': '', 'url': 'week15-week18.html'}, {'title': 'Assignment', 'text': '', 'tags': '', 'url': 'Assignment.html'}, {'title': 'assignment1', 'text': '任務 \n 1. Describe how\xa0to\xa0do an efficient random grouping for this\xa0course or do the roll calling randomly? \n 2. Describe how to prepare a portable Python programming system for Windows 10 64bit system to allow one the maintain \xa0 CMSiMDE \xa0 website, \xa0 Pelican blog \xa0 and \xa0 Reveal.js \xa0 presentation on \xa0 Github ? \n 3. What do you need to know from\xa0 http://www.coppeliarobotics.com/helpFiles/index.html \xa0to implement a four-wheeled robot? \n 作業檔案 \n Assignmemt1.pdf \n', 'tags': '', 'url': 'assignment1.html'}, {'title': 'assignment2', 'text': "任務 \n 1.\xa0According to the material of Topic 0 and Topic 1, can you describe specifically what the mechanical design team need to do for accomplishing Assignment 1's\xa0 four wheeled robot. \n 2. What do you need to know from\xa0 https://cyberbotics.com/doc/guide/index \xa0 \xa0to implement a four-wheeled robot? \n 作業檔案 \n assignment2.pdf \n", 'tags': '', 'url': 'assignment2.html'}, {'title': 'assignment3', 'text': '任務 \n According to the reading of Topic 2 and Topic 3, propose a Mechatronic project by using\xa0 CoppeliaSim \xa0 or \xa0 Webots \xa0 and \xa0 Onshape . \n 作業檔案 \n MechaEducFutureNeed翻譯 \n Assignment3.pdf \n', 'tags': '', 'url': 'assignment3.html'}, {'title': 'Group meeting', 'text': '小組工作分配 \n 第一次 \n 分工內容: \n 40523253:亂數分組程式 40623117:亂數分組程式 40623252:4輪車 40723221 (group leader) :4輪車 40723222:4輪車 40723228:亂數分組程式 40723236:4輪車 40723237:可攜系統 40723240:4輪車 40723243:4輪車 40723244:可攜系統 40723249:可攜系統 40732331:4輪車\xa0 \n 注意事項: \n 1.視課堂進度上傳影片 2.不管會不會做每周都要push 3.可以從gitter上面提問 4.直播大家輪流主持，直播前半部分有教大家如何開直播了 5.git pull request每個人都要會之後要更改東西比較方便 6.不會做的可以去看我的網站我會盡可能提早更新，再不行就到gitter上面提問可以在這邊提問 gitter:https://gitter.im/mdecourse/cd2020 7.2020年3月26日到期assignment 1的pdf繳交請在時間內上傳到自己倉儲的download上 8.pdf上寫上進度，之後打分數依照pdf打分 \n \n 第二次 \n w6直播進程: \n 分工內容: \n topic0: 40723237 40723221 40723222 40723228 40723243 40723244 40723236 40623117 \n topic1: 40723221 40723222 40623252 40523253 40723249 40732331 40723240 40723237 \n \n 第三次 \n w10開會紀錄: \n topic2: \n coppeliasim :40723221 \n MSModelingAndTFApproaches.pdf . 207頁:7人 40723249 40623117 40723221 40723228 40723236 40723237 40723243 \n MechatronicDesignCases.pdf . 46頁:2人 40723222 40723244 \n topic3: \n MechaFutureAndChallenges.pdf . 38頁:2人 40623252 40523253 \n MechaEducFutureNeed.pdf . 20頁:1人 40723240 \n \n 第四次 \n ubuntu操作，ssh設定 \n \n 第五次: \n 提醒組員assignment3繳交，ubuntu對外連線影片要看，ssh沒設定的記得設定。 \n \n 第6次: \n \n 1.提醒各組員倉儲提交進度要補上 \n 2.filezilla設定教學操作影片在底下 \n', 'tags': '', 'url': 'Group meeting.html'}]};
<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2"/>
<globals/>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20180902120538.1"><vh>@settings</vh>
<v t="leo.20180902120538.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20180902120538.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="leo.20180902120523.1"><vh>編輯 reveal</vh>
<v t="leo.20180902120523.2"><vh>@path ./../reveal</vh>
<v t="leo.20180902120523.3"><vh>@clean index.html</vh>
<v t="leo.20180902120523.4"><vh>html</vh>
<v t="leo.20180902120523.5"><vh>head</vh></v>
<v t="leo.20180902120523.6"><vh>body</vh>
<v t="leo.20180902120523.7"><vh>reveal div</vh>
<v t="leo.20180902120523.8"><vh>slides div</vh>
<v t="leo.20180902120523.9"><vh>首頁</vh>
<v t="leo.20180902120523.10"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200422221720.1"><vh>week1~5</vh>
<v t="leo.20200422221720.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200622153134.1"><vh>week6~9</vh>
<v t="leo.20200622153134.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200622153502.1"><vh>week10~17</vh>
<v t="leo.20200622153502.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200623204550.1"><vh>week11</vh>
<v t="leo.20200623204550.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200623204552.1"><vh>week12</vh>
<v t="leo.20200623204552.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200623204554.1"><vh>week13</vh>
<v t="leo.20200623204554.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200623205039.1"><vh>week14</vh>
<v t="leo.20200623205039.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200623205041.1"><vh>week15</vh>
<v t="leo.20200623205041.2"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20200623205310.1"><vh>week16</vh>
<v t="leo.20200623205310.2"><vh>封面投影片內容</vh></v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="leo.20180902120523.1"></t>
<t tx="leo.20180902120523.10">## s40723240 cd2020


&lt;small&gt;
Created by [s40723240](https://s40723240.github.io/cd2020/content/index.html)
&lt;/small&gt;

[網誌](https://s40723240.github.io/cd2020/blog/index.html)

[倉儲](https://github.com/s40723240/cd2020)


</t>
<t tx="leo.20180902120523.2"></t>
<t tx="leo.20180902120523.3">@language xml
@tabwidth -4
@others

</t>
<t tx="leo.20180902120523.4">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
@others
&lt;/html&gt;
</t>
<t tx="leo.20180902120523.5">&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
&lt;title&gt;
s40723240 cd2020
&lt;/title&gt;
    &lt;meta name="description" content="A framework for easily creating beautiful presentations using HTML"&gt;
    &lt;meta name="author" content="Hakim El Hattab"&gt;
    
    &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
    &lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;
    
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
    
    &lt;link rel="stylesheet" href="css/reveal.css"&gt;
    &lt;link rel="stylesheet" href="css/theme/black.css" id="theme"&gt;
    
    &lt;!-- Theme used for syntax highlighting of code --&gt;
    &lt;link rel="stylesheet" href="lib/css/zenburn.css"&gt;

    &lt;!-- Printing and PDF exports --&gt;
    &lt;script&gt;
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
    &lt;/script&gt;

    &lt;!--[if lt IE 9]&gt;
    &lt;script src="lib/js/html5shiv.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
&lt;/head&gt;

</t>
<t tx="leo.20180902120523.6">&lt;body&gt;
@others
&lt;script src="lib/js/head.min.js"&gt;&lt;/script&gt;
&lt;script src="js/reveal.js"&gt;&lt;/script&gt;
&lt;script&gt;
        // More info https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,

            transition: 'slide', // none/fade/slide/convex/concave/zoom

            // More info https://github.com/hakimel/reveal.js#dependencies
            dependencies: [
                { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
                { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                { src: 'plugin/zoom-js/zoom.js', async: true },
                { src: 'plugin/notes/notes.js', async: true },
                { src: 'plugin/math/math.js', async: true }
            ]
        });
&lt;/script&gt;
&lt;/body&gt;

</t>
<t tx="leo.20180902120523.7">&lt;div class="reveal"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.8">&lt;!-- Any section element inside of this container is displayed as a slide --&gt;
&lt;div class="slides"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.9">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120538.1"></t>
<t tx="leo.20180902120538.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20180902120538.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20200422221720.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200422221720.2">## week1~5

#### week1:建立倉儲和網站
#### week2:更新至python3.8.3
#### week3~5:組長開會並分配assignment1任務

[assignment1](https://s40723240.github.io/cd2020/downloads/Assignmemt1.pdf)

[week1~9網頁](https://s40723240.github.io/cd2020/content/week1-week9.html)



</t>
<t tx="leo.20200622153134.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200622153134.2">## week6~9

#### week6:assignment1任務完成
#### week7:抽點直播
#### week8:remote python API講解
#### week9:期中影片

[week1~9網頁](https://s40723240.github.io/cd2020/content/week1-week9.html)

[assignment2](https://s40723240.github.io/cd2020/downloads/assignment2.pdf)


</t>
<t tx="leo.20200622153502.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200622153502.2">## week10~17

#### week10:googleAPI
#### week11:ssh設定
#### week12:ubuntu virtualbox設定
#### week13-14:ipv4跟6對外及遠端連線
#### week15-16:抽點分組及ipv6主機遠端連線

[week10~17網頁](https://s40723240.github.io/cd2020/content/week10-week17.html)

[assignment3](https://s40723240.github.io/cd2020/downloads/Assignment3.pdf)



</t>
<t tx="leo.20200623204550.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200623204550.2">## google用戶登入設定

&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/iXfxMBBuNLo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;



</t>
<t tx="leo.20200623204552.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200623204552.2">## ipv4對外連線

&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/uS2XDsIKon4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;



</t>
<t tx="leo.20200623204554.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200623204554.2">## ipv4遠端連線

&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/RQbx4Iour4k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;)



</t>
<t tx="leo.20200623205039.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200623205039.2">## ipv6遠端連線

&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/YPcsk8HnAuk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;



</t>
<t tx="leo.20200623205041.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200623205041.2">## 不同主機下ipv6遠端連線倉儲

&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/JTEpjB1dSKE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;



</t>
<t tx="leo.20200623205310.1">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20200623205310.2">## 期末報告

&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/HVitgWvItRQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;



</t>
</tnodes>
</leo_file>

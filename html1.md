html总结

1.html{页面的跟标签，一个页面只能有一个跟标签。 其余所有的内容 都应该写在html标签内部。}
2.<head> {这里的内容不会再浏览器中直接显示，该标签用于辅助浏览器解析页面。}
3.<meta> 用于设置网页的元数据，比如使用的字符集编码等 <meta charset="utf-8">
         用于设置关键字 <meta name="keywords" content="xxx" />
         用于设置描述信息 <meta name="description" content="xxxx" />
4.<title>用于设置页面显示的标题，再浏览器的选项卡头部显示，可能对seo有帮助

5.<body>用于设置网页的主题，网页中所展示的所有内容 都在body中。
注意： body中的多个换行和多个空格都会被当做一个空格来处理。




6.<h1~h6>是标题标签,在HTML中共有6级标题,其中H1最大,页面中通常只会存在一个H1标签,其他的无所谓
  !:H标签不能嵌套H标签.
7.P标签是段落标签 P标签不能嵌套P标签

8."br"是段落换行符    "hr"是水平换行标签

9. "img"是加载图片
    (1.绝对路径)
    网络绝对路径指的是:https://www.*****.com.*****
    本地绝对路径是指: D:/前端1901/html基础/01-html基础标签/dev/img/fbb.jpg 
    (2.相对路径)
      a) 同级路径  xx.jpg
	    b) 同级文件夹下的文件  xx/xxx.jpg
	    c) 上一级/上多级文件   ../xx.jpg   ../../xx.jpg
	    假如找不到图片则显示#

10.a指的是超链接  在href里写网址就会跳转到写入的网址
     target后加入不同的词会出现以下效果
        _self 默认
        _blank 会打开一个新的窗口
        _parent 这个目标使得文档载入父窗口或者包含来超链接引用的框架的框架集。如果这个引用是在窗口或者在顶级框架中，那么它与目标 _self 等效。
        _top 这个目标使得文档载入包含这个超链接的窗口，用 _top 目标将会清除所有被包含的框架并将文档载入整个浏览器窗口。

11.<strong>加粗</strong>
    <em>斜体(少用)</em>
    <ins>底线</ins>
    <del>打折线--定义文档中已被删除的文本</del>
    <sub>定义为下标文本</sub>
    <sup>定义为上标文本</sup>

12.<ul></ul> 定义为无序列表,一般只会用到Ul标签  ul ol {list-style: none;}去掉小黑点
    <ol></ol> 定义为有序列表
    <dl>
    	<dt>
    		<dd>
    			
    		</dd>
    	</dt>
    </dl> 定义了定义列表中的项目,类似于文章结构

1.  <form> 标签用于为用户输入创建 HTML 表单。 表单必须写form中 action是用于设置提交的网址
	        method后加入GET和POST表示不同意思
	        get是表单的默认提交方式 
		        1. 地址栏显示提交内容
		        2. 不安全
		        3. 提交的内容容量有限
		        4. 有缓存
		    post提交
		 	    1. 数据在请求体保存
		 	    2. 相对安全
		 	    3. 容量无限
		 	    4. 么有缓存

14. legend表示单行输入框
          任何标签都有ID属性,ID在当前页面不能重复
          name是表单特有属性,用于表示表单作用,用于向后台传递作用
          可以设置默认值 但是会被重新输入的内容覆盖 
		  隐藏域:用于保存一些无需用户关注的数据,但是后台服务器需要获取的部分

15.<iframe> 内联框架标签，画中画
            src 内容的链接     比如 src="http://www.baidu.com"
            widht/height      定义iframe的宽和高
            frameborder = 0   去掉默认边框

16.<input>标签用于搜集用户信息。 每一个input都具有name属性
          根据不同的 type 属性值，输入字段拥有很多种形式。输入字段可以是文本字段、复选框、掩码后的文本控件、单选按钮、按钮等等。
          input text 是单行文本的样式
                password 密码
                radio checked 单选
                checkbox checked 多选
                file 加入文件
                submit 提交
                reset 重置
          select>option下拉框
          textarea 多行文本框
          在input里加入readonly value 表示只读 
                      disabled  value 表示表单不可用

17. <table> 标签定义 HTML 表格。

            简单的 HTML 表格由 table 元素以及一个或多个 tr、th 或 td 元素组成。

            tr 元素定义表格行，th 元素定义表头，td 元素定义表格单元。
            bgcolor 设置表格背景颜色
            align  left/center/right 文字对齐方式
            colspan 表格所占据的列
            rowspan 表格所占据的行                    

18.转译字符   空格	&nbsp;/&#160;
             大于号>  &gt;/&#62;
             小于号<  &lt;/&#60;

css样式


1.   <style> 标签用于为 HTML 文档定义样式信息。

     在 style 中，您可以规定在浏览器中如何呈现 HTML 文档。

     type 属性是必需的，定义 style 元素的内容。唯一可能的值是 "text/css"。

     style 元素位于 head 部分中。
     在style 中选择的样式有标签选择器 class选择器 id选择器

2. 每个标签都有class属性和ID属性 关于class如何命名,最好能表述它所代表的意思      

3.css 选择器的选择{
	标签选择器(不常用 p{} 标签选择器在页面中用的不多只是起补充作用,慎用
	ID选择器(不常用)  #title{}(#后面的根据ID的属性来命名) ID选择器在样式中几乎不用,在JS中可能用到
	class选择器(常用) .title{}   class的命名最好根据标签的意思来命名
}

4 css的引用方式 {
	行内样式极少用 <p style:xxx;>xxx<p>
	内部样式
	<style>
}        .title{
	color: red;
	font-size: 20px;
}
    </style>
    外部引入样式{开发常用}
    <link rel="stylesheet" href="xxx.css">
5 权重选择
      基本选择器优先级
  标签选择器< class选择器<id>选择器<行内样式<
  引入外部样式和内部style的优先级 采用 就近原则
  相同的选择器后面覆盖前面的

6.  组合选择器{
	交集选择器:相交的部分就是要设置属性的标签比如
	 <style>
        p.para1{
            color: red;
        }
      </style>
   </head>
   <body>

 <p>我是段落</p>
 <p>我是段落</p>
 <p class="para1">我是段落</p>
 <p class="para1">我是段落</p>
 <p>我是段落</p>
  </body>  其中相交的para1就是交集的选择
    并集选择器:就是选择了复数个标签里的CLASS选项,链接,形成想要的样式(其中可以用标签或者是ID都可以选择)
              .p1,.p2{}

    后代选择器:可以选择某元素的后代
               比如想在h1元素里的em改变颜色大小,可以使用后代选择器样式是 h1 em {color:"red"}
               在后代选择器中，规则左边的选择器一端包括两个或多个用空格分隔的选择器。选择器之间的空格是一种结合符（combinator）。每个空格结合符可以解释为“... 在 ... 找到”、“... 作为 ... 的一部分”、“... 作为 ... 的后代”，但是要求必须从右向左读选择器。

               因此，h1 em 选择器可以解释为 “作为 h1 元素后代的任何 em 元素”。如果要从左向右读选择器，可以换成以下说法：“包含 em 的所有 h1 会把以下样式应用到该 em”。
}

7.选择器的权重{
	 通配符权重0   继承样式权重是0
     标签选择器权重 1
     class选择器权重 10
     id选择器权重 100
     内部样式权重 1000 
     选择器可以组合,权重叠加
}
8.   权重判断: 
			1. 如果选择器类型相同,则后面覆盖前面的.
				a) .p1 a{}    .p1 a{};
				b) .p1 a{}    .danger a{}   假如: <p class="p1 danger"> <a></a></p>
			2. 如果选择器不同,则需要计算权重
				.p1 a{}   .d1 .p1 a{}




9.css颜色{
	        显示器的三原色
			r red
			g green
			b blue
			0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
			13 ==> 1*10+3  
			0 1 2 3 4 5 6 7 8 9  a  b  c  d  e  f 
			ff ==> f*16+ f ==>  15*16+15 ==> 255
			每个色值区间 0~255
			
}

10.css特点: 
			1. 层叠性
				.p1{font-size:20px;} .danger{font-size:30px;color:red;}
			2. 继承性
				字体的属性 都可以被继承
				.d1{color:red;}   .d1 .p1{font-size:20px}  .p1颜色?
				a) a标签的颜色无法实现继承


11.css常用属性
       -0)ling-height  行高 两行文字基线之间的距离 可以简单理解为"行间距"
			           单行文字垂直居中 如果文字的行高= 父类盒子高度
       0)color 颜色
       1)font-size 字体大小
       2)font-family 字体 比如黑体 楷体 微软雅黑....可以使用中文,但通常使用英文
       3)font-weight 字体宽度 700px-900px 之间 lighter/normal/bolder 
       4)font-style Italic 斜体 / normal 正常
       5)font综合写法 font:italic bolder 20px/1.2em 黑体
       
       6)text-align 文字对齐方式 left/center/right
       7)text-index+数值  首行缩进
       8)text-decoration 去掉下划线
       
       9)颜色 background-color: 数值
       10)图片 background-image: url() | none
       11)滚动 background-attachment: fixed | scroll
       12)位置 background-position:数值 | top | bottom | left | right | center
       13)重复 background-repeat: inherit | no-repeat | repeat | repeat-x | repeat-y
       14)background简写 background:背景颜色 | 背景图象 | 背景重复 | 背景附件 | 背景位置
       
       15)边框样式 border-style: dotted;(点线) dashed;(虚线) solid(实线); double;(双线) groove;(槽线) 
       16)边框宽度 border-width: 数值
       17边框颜色 border-color: top值 right值 bottom值 left值
       18)简写 border: width style color 
       
       19)opacity:0~1之间

       20) margin（边界）
           margin-top:*px; (上边界)
           margin-right:*px; (右边界)
           margin-bottom:*px; (下边界值)
           margin-left:*px; (左边界值)
           margin:0 auto 居中

        21) padding（填充）
            padding-top:*px; /*上边框留空白*/
            padding-right:*px; /*右边框留空白*/
            padding-bottom:*px; /*下边框留空白*/
            padding-left:*px; /*左边框留空白 

        22)body会有一个默认的Padding,一般会把标签的padding和margin改为0
            *{
            padding:"0";
            margin:"0";
        }
        23)嵌套崩塌{
        当两个盒子发生嵌套的时候,内部盒子设置margin-top 会发生嵌套崩盘
	    解决方案 1:父类盒子设置overflow:hidden;
			    2:父类盒子具有padding;
			    3. 父类盒子具有border;
        }
        24)span标签可以用于包括某一个元素 不具备任何样式 而且不会换行 是一个行内元素

        25)display
           block:设置为块元素
           inline:设置元素为行内元素
           inline-block;设置行内块元素
           none:隐藏元素
           display:none和visibility: visible;都是隐藏元素,但是前者是隐藏了不占位置,后者是隐藏了占据原来位置
        26) overflow{
            visible	默认值。内容不会被修剪，会呈现在元素框之外。
            hidden	内容会被修剪，并且其余内容是不可见的。
            scroll	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
            auto	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
            inherit	规定应该从父元素继承 overflow 属性的值。
        } 
        27)行内标签转行内块标签{
            行内 ==> 行内块
	        行内 ==> 块状
	        行内块==> 行内
	        行内块==> 块状
	        块状==> 行内
	        块状==> 行内块
	        根据标签的表现形式,把标签分类 
		1. 块状标签 
			a) 独占一行
			b) 宽高有效
			比如:  div  p  br hr  table  tr  h1~h6   form
		2. 行内块标签
			a) 可以在同一行展示
			b) 宽高有效
			比如: img th  td  input select  textarea
		3. 行内标签
			a) 可以在同一行展示
			b) 宽高无效
			比如: a  span i  em  strong  sup  sub ...
        }
        28)浮动{
        浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

        由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。(要浮动就要全部浮动,右浮动会造成元素顺序颠倒,尽量少用)
        详情参考<a href="http://www.w3school.com.cn/css/css_positioning_floating.asp">浮动</a>

        }
        29)浮动存在的问题{
        一旦子类发生浮动,那么父类不需要写高度
        如果父类没有写高度,子类盒子发生了浮动,可以设置父类盒子overflow:hidden;
        还可以用clear:clear:both  不允许当前元素的左右有浮动元素 通常用于处理清除浮动造成的影响
        如果父类盒子没有设置高度,子类没有设置浮动,那么父类会撑开子类盒子
        } 
        30)定位{
        1定位用于精准某个元素的位置
            页面布局的原则: 
			1. 优先使用标准文档流
			2. 标准文档流处理不了用浮动
			3. 浮动处理不了用定位
			postion属性可以实现元素定位,元素定位后使用left和top 属性来对元素进行定位
			relative 相对定位。 相对元素本身的位置定位。
            当开启了相对定位以后，可以使用top、right、bottom、left四个属性对元素进行定位。
            如果不设置元素的偏移量，元素位置不会发生改变。
            相对定位不会使元素脱离文本流。元素在文本流中的位置不会改变。
            相对定位不会改变元素原来的特性。

            相对定位会使元素的层级提升，使元素可以覆盖文本流中的元素。
            absolute 绝对定位指使元素相对于html元素或离他最近的祖先定位元素进行定位。
            当开启了绝对定位以后，可以使用top、right、bottom、left四个属性对元素进行定位。
            绝对定位会使元素完全脱离文本流。
            绝对定位的块元素的宽度会被其内容撑开。
            一般使用绝对定位时会同时为其父元素指定一个相对定位，以确保元素可以相对于父元素进行定位。
            
            fixed 固定定位。元素会被锁定在屏幕的某个位置上，当访问者滚动网页时，固定元素会在屏幕上保持不动。
            固定定位不占据原来的位置，会脱标。
            给元素设置固定定位之后，元素位置从浏览器左上角出发。
            可以将行内元素转换为行内块元素。         
        } 
        31)z-index{
            z-index 当元素开启定位以后就可以设置z-index这个属性。默认是0.值越大，越靠上。
            z-index可以指定一个整数作为参数，值越大元素显示的优先级越高，也就是z-index值较大的元素会显示在网页的最上层。
        }









# canvas

+ canvas是一种矩形区域的画布,可以在JS上绘画并控制每一个元素

+ canvas本身不具备绘画功能

+ 语法: 标签名canvas,可以甚至宽度和高度,单位是px,canvas有默认值是300*150像素

+ 使用css控制宽高会出现图片拉伸

``` 
- 设置样式
var canvas = document.querySelector('#cvs1');
var ctx = canvas.getContext('2d')[有设置3d的方法,后写法是'webgl];
```

+ 绘制路径

```

- 开始路径:ctx.beginPath();

- 每次绘画前都要先设置开始路径

- 设置起点

- 语法:ctx.moveTo(x,y);
- 解释:设置上下文绘制路径的起点.相当于移动画笔到某个位置.
- 参数:x,y都是相当于canvas盒子的左上角.
- 如果不设置起点则无效

- 绘制直线

- 语法: ctx.lineTo();
- 从设置起点的位置开始绘制直线或者是上一个结束的点开始绘制
- x,y是绘制的坐标

- 描边语法:ctx.stroke();
 - 如果不加stroke的话只是草稿,真正执行必须执行stroke

- 填充语法: ctx.fill();
- 填充,将闭合的区域填充,如果直线没有连上,仍会填充

- 闭合路径:ctx.closePath();

- 闭合路径会自动把最后的线头和开始的线头连在一起。

- 每次执行开始闭合路径，会重新绘制一个路径,跟之前的绘制的墨迹可以进行分开样式设置和管理。

- canvas绘制基本步骤

- 第一步：获得上下文 =>canvasElem.getContext('2d');
- 第二步：开始路径规划 =>ctx.beginPath()
- 第三步：移动起始点 =>ctx.moveTo(x, y)
- 第四步：绘制线(矩形、圆形、图片...) =>ctx.lineTo(x, y)
- 第五步：闭合路径 =>ctx.closePath();
- 第六步：绘制描边 =>ctx.stroke()

```

例子::绘制表格

```
var cvs = document.querySelector('#cvs1');
		// 2.获取上下文对象
		var ctx = cvs.getContext("2d");

		var stepX = 50;
		var stepY = 50;
		ctx.strokeStyle = 'black';
		for(var i = 1;i<cvs.width/stepX;i++){
			ctx.beginPath();
			ctx.moveTo(i*stepX, 0);
			ctx.lineTo(i*stepX, cvs.height);
			ctx.stroke();
			ctx.closePath();
		}
		for(var i = 1;i<cvs.height/stepY;i++){
			ctx.beginPath();
			ctx.moveTo(0,i*stepY);
			ctx.lineTo(cvs.width,i*stepY);
			ctx.stroke();
			ctx.closePath();
		}

+ 设置表格宽和高所占比,之后循环,从第一个开始循环,循环的次数用canvas设置的宽和高除以在前面设置的表格占比,之后设置起点位置用次数*step,直线设置根据设置是宽和高用canvas定的值来确定
```        

+ 快速创建矩形rect()方法

```
- ctx.rect(x,y,width,height);
- rect方法只是规划的矩形的路径,并没有填充和描边,需要在后面自己设置
```

+ 快速创建描边矩形和填充矩形

```

- 语法： ctx.strokeRect(x, y, width, height);
- 语法：ctx.fillRect(x, y, width, height);

```

+ 清除矩形(clearRect)

```

- 语法：ctx.clearRect(x, y, width, hegiht);
- 解释：清除某个矩形内的绘制的内容，相当于橡皮擦。
```

+ 绘制圆形（arc)

+ 概述：arc() 方法创建弧/曲线（用于创建圆或部分圆）。

+ 语法:ctx.arc(x,y,r,sAngle,eAngle,counterclockwise);

1. x,y：圆心坐标
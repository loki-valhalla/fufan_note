# 安装node

+ 使用express框架
  
+ 打开黑窗口cmd,全局安装 express生成器
 npm install express-generator -g

+ 安装好后可以通过express --version 查看版本 
  
+ 安装后,在一个你在的文件里打开cmd,输入express -e
 作用：通过修改配置 使express支持  ejs模板(跟html一样)，默认支持 jade

+ 在项目文件夹执行命令，安装package.json中配置的依赖库,命令是npm install
  
+ 启动命令npm start
+ cls 清空cmd命令
+ ctrl+c  终止操作

## node-express

+ res response对象 响应对象
+ res.render 找到index的模板引擎,并用第二的参数,渲染页面的内容
+ / 拦截news请求 找xxx.ejs模板引擎渲染,用第二个参数替换占位符
+ 在ejs文件里 通过后台更改添加文字时在标签里用<%= xxx %>添加,xxx里是后台里声明的变量
+ 在routes里的js文件里可以修改ejs里的标签文字
+ res.render('aaaa', { dddd: 'xxxx' , dddd: 'xxxx'});a指的是你的ejs文件,dddd指的是你在ejs里声明的量,最后是你要输出的文字.
  
### 判断输入帐号密码正确与否

+ 在JS里创建一个假的数据库,来储存一些
  
```
var bd = [
    {
        username = 'xx',
        password = 'ccc'
    }
]
```

+ 先在网页上写一个A标签,来链接到输入帐号密码的页面,跳转到登录页面后在登录页面里写入样式(input里method 属性规定如何发送表单数据,在method里面写post,不写get是因为get会把参数写入在地址栏上,并且有上限,所以使用post),在form里action里写上向何处发送表单数据,声明输入进去的帐号密码,在循环判断,数据库是否存在该数值,如果存在为正确的.

```
<a herf= "xxx.ejs"> 跳转进登录界面
 
<form action="/doLogin" method="post">
        用户名: <input type="text" class="username" name="username"><br>
        密码: <input type="text" class="password" name="password"><br>
        <input type="submit" value="登陆">
</form>

+ 默认一个值存在,如果正确跳转进正确页面,如果为错进入错误页面
+ 如果正确应该重新定向进入正确或错误页面使用res.redirect('/xxx'),在下面重新渲染一个新的页面
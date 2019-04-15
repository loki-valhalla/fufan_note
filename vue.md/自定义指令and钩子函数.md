## 自定义指令

> Vue 也允许注册自定义指令,代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。

+ 使用directive可以注册一个自定义指令

+ 全局指令

```
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

```
+ 局部指令

```
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
       // 聚焦元素
      el.focus()
    }
  }
}

这样可以在任意地方使用v-focus 
<input v-focus>
```


## 钩子函数

+ bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  
+ inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  
+ update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 

+ componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。

+ componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  

### 钩子函数参数

+ el：指令所绑定的元素，可以用来直接操作 DOM 。

> binding：一个对象，包含以下属性：

+ name：指令名，不包括 v- 前缀。
+ value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
+ oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
+ expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
+ arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
+ modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。

+ 可通过修饰符 传递额外的参数  ,多个参数是对象类型,其中每一个为boolean类型

```
color(el,binding){
    console.log('color 指令===');
    console.log(binding);
    // binding.value 可以获取指令的参数
       el.style.color = binding.value;
    // 可通过修饰符 传递额外的参数,对象类型,其中每一个为boolean类型
    if(binding.modifiers.strong){
    	el.style.fontWeight = 'bolder';
    }
    if(binding.modifiers.big){
    	el.style.fontSize = '30px';
    }
}

```

+ 例子:拖拽案例

```

	<div id="app">
		 <div v-drag.all class="box">
		 	
		 </div>
		 <div v-drag class="box2">
		 	
		 </div>
	</div>
	<script src="lib/vue.js"></script>
	<script>
		
		var vm = new Vue({
			el: '#app',	
			data:{
				msg: '不凡学院'
			},
			directives:{
				drag(el,binding){
					// 运动时变透明
					el.onmousedown = function(e){
						if(binding.modifiers.all){
							el.style.opacity = .5;
						}
						var startX = e.pageX-el.offsetLeft;
						var startY = e.pageY - el.offsetTop;
						document.onmousemove = function(e){
							el.style.left = e.pageX - startX+'px';
							el.style.top = e.pageY - startY + 'px';
						}
						el.onmouseup = function(){
							// 松开鼠标回复透明度
							if(binding.modifiers.opacity){
								el.style.opacity = 1;
							}
							//解绑事件
							document.onmousemove = null;
						}
					}
				}
			}
		})
	</script>

```

### 过滤器

+ Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

```
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

+ 全局过滤器:Vue.filter

```
<!-- 定义了一个全局过滤器 'money' -->
Vue.filter('money',function(v){
     console.log(v);
     return '$'+v+'.00';
})
```	

```
var vm = new Vue({
			el: '#app',	
			data:{
				msg: '不凡学院',
				price: 30
			},
			<!-- 定义了一个局部过滤器 'bufan' -->
			filters:{
				'bufan'(v,sp){
					return  'bufan'+sp+v;
				},
			}
		})
```
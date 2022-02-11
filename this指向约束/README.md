### 在js中this指向的集中情况
```
1. 如果直接调用函数(全局调用),this指向全局模式或者undefined
2. 如果使用 object.function
3. 如果dom事件的处理函数,this指向事件处理对象
```

### 特殊情况
```
1. 箭头函数，this在函数声明时确定指向，指向函数位置的this
2. 使用bind，apply，call手动绑定this对象
```

### 注意：在ts中严格约束隐式的this指向，需要在配置文件中配置 noImplicitThis
```
不允许this的隐式指向为any
且需要手动约定this的指定约束，将this作为函数的第一个参数
```
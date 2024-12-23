---
title: 使用
---


## 配置 Medivh

:::: code-group
::: code-group-item kotlin DSL
```kts
medivh {
    include("com.example") // 你的包名
}
```
:::
::: code-group-item Groovy DSL
```gradle
medivh {
    include 'tech.medivh' // 你的包名
}
```
:::
::::


## 编写测试

```kotlin
import org.junit.jupiter.api.Test

class DemoClassTest{
    
    @Test
    fun testDemo(){
        val demoClass = DemoClass()
        repeat(10){
            demoClass.helloWorld()
        }
    }
}

```

## 在你的 IDE中执行


![Run your test](/images/run-test.png)


## 打开控制台查看报告链接

![控制台](/images/zh/console.png)

点击链接，你会在浏览器中看到报告


## 完整流程
![完整流程](/images/zh/use.gif)

## 更多配置查看

[这里有更多配置](../configuration/language.md)





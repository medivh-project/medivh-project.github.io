---
title: 使用
---


## 引入gradle插件

:::: code-group
::: code-group-item kotlin DSL
```kts
id("tech.medivh.plugin.gradle") version "0.0.1"
```
:::
::: code-group-item Groovy DSL
```gradle
id 'tech.medivh.plugin.gradle' version '0.0.1'
```
:::
::::

::: warning
如果你是通过源码构建，别忘了在`setting.gradle`中添加 `mavenLocal()`配置

```gradle
pluginManagement {
    repositories {
        mavenLocal()
        gradlePluginPortal()
    }
}
```
:::

<br>


## 配置 Medivh

 构建完成之后，你可以直接在 Gradle配置文件中使用 Medivh


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
    include 'tech.medivh' // your package name here
}
```
:::
::::


## 在需要的地方加注解
```kotlin
package tech.medivh.demo.kotlin
//  注意这里的包要和配置的包一致
import tech.medivh.api.DebugTime

class DemoClass {
    @DebugTime
    fun helloWorld(){
        println("Hello World")
    }

}
```

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

## 或者使用命令

```shell
./gradlew test
```

## 查看控制台输出

你会看到类似于这样的输出:

> you can open  file:///xxx/report.html to see the report

点击上面的链接，你将看到你的测试报告


## 完整示例

这里有一个完整示例，你可以参考这个[示例](https://github.com/medivh-project/medivh-demo-kotlin)来使用Medivh







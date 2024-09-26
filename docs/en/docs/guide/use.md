---
title: Use
---


## import gradle plugin

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

If you build from source, don't forget to add `mavenLocal()` in `setting.gradle`


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


## config Medivh

You can use Medivh in your Gradle file after build


:::: code-group
::: code-group-item kotlin DSL
```kts
medivh {
    include("tech.medivh") // your package name here
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


## add annotation to your code
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

## write test case

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

## Run case in your IDE


![Run your test](/images/run-test.png)

## Or run in terminal

```shell
./gradlew test
```

## see the console output


you will see output like this:

> you can open  file:///xxx/report.html to see the report

click the link above, you will see your Medivh report



## Complete Example

this is a complete example, you can refer to this [example](https://github.com/medivh-project/medivh-demo-kotlin) to use Medivh

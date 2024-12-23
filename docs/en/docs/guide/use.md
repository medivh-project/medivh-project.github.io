---
title: Use
---


## import gradle plugin

:::: code-group
::: code-group-item kotlin DSL
```kts
id("tech.medivh.plugin.gradle") version "0.4.2"
```
:::
::: code-group-item Groovy DSL
```gradle
id 'tech.medivh.plugin.gradle' version '0.4.2'
```
:::
::::



## config Medivh

You can use Medivh in your Gradle file after build


:::: code-group
::: code-group-item kotlin DSL
```kts
medivh {
    include("com.example") // your package name here
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


## see the console output

you will see output like this:

![Run your test](/images/en/console.png)

click the link above, you will see your Medivh report

## Complete Process

![Run your test](/images/en/use.gif)

## Configuration

[For more configurations, click here.](../configuration/language.md)


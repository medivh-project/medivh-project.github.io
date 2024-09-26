---
title: Quick Start
---


## import gradle plugin


::: warning
Gradle Plugin is Pending Approval，Currently only available through source code build
:::



:::: code-group
::: code-group-item kotlin DSL
```kts
Kotlin todo
```
:::
::: code-group-item Groovy DSL
```gradle
Groovy todo
```
:::
::::



## build from source

Require:
>  JDK 17+
> 
>  kotlin 2+

run the following command

```shell
git clone https://github.com/medivh-project/medivh.git

cd medivh

./gradlew build publishToMavenLocal

```

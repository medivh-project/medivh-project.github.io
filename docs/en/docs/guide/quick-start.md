---
title: Quick Start
---


## 引入gradle插件


::: warning
Gradle插件仓库在审核中，目前只能通过源码构建
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

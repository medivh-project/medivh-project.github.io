---
title: 快速开始
---


## 引入gradle插件


:::: code-group
::: code-group-item kotlin DSL
```kts
id("tech.medivh.plugin.gradle") version "1.1.0"

```
:::
::: code-group-item Groovy DSL
```gradle
id 'tech.medivh.plugin.gradle' version '1.1.0'
```
:::
::::


## 从源码构建

你需要:
> JDK 17+
>
> kotlin 2+

执行以下命令

```shell
git clone https://github.com/medivh-project/medivh.git

cd medivh

./gradlew build publishToMavenLocal

```

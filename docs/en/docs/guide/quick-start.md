---
title: Quick Start
---


## import gradle plugin



:::: code-group
::: code-group-item kotlin DSL
```kts
id("tech.medivh.plugin.gradle") version "0.2.0"

```
:::
::: code-group-item Groovy DSL
```gradle
id 'tech.medivh.plugin.gradle' version '0.2.0'
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

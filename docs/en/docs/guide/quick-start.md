---
title: Quick Start
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
Groovy todo
```
:::
::::
id 'tech.medivh.plugin.gradle' version '0.0.1'




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

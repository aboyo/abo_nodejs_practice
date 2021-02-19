# cyrdg_exercise

## _exercise for cyrdg_

以 Node.js 環境開發，並使用 JacaScript 實作功能。

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd cyrdg_exercise
npm install
```

## Dependencies

專案功能目前有使用以下 packages:

| Package    | Description              |
| ---------- | ------------------------ |
| node-fetch | 在 node 中實現 Fetch API |
| cheerio    | 解析 html dom tag 工具   |
| commander  | 開發 node CLI 工具       |

## Test

針對 Exercise 1 & 2 function 進行 Unit test

```sh
$ cd cyrdg_exercise
$ npm run test
```

## CLI

提供 `top` 及 `country` 兩種 command

usage:

```sh
$ clawer <action> <arg1> [<arg2>...]
```

ex1: 取得 [alexa](https://www.alexa.com/topsites/) 網站中，前 `<Number>` 名網站資訊

```sh
$ cd cyrdg_exercise
$ clawer top 20
```

ex2: 取得 [alexa](https://www.alexa.com/topsites/) 網站中，以 `<Country>` 篩選前 20 名網站資訊

```sh
$ cd cyrdg_exercise
$ clawer country TW
```

> Note 查詢 Country code 列表

```sh
$ clawer help country
```

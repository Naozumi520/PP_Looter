<h1 align="center">
  <a href="https://github.com/Naozumi520/Sawayo"><img src="https://cdn.discordapp.com/attachments/859094490395574302/875771736744947762/PPL.png" PPL_c_icon" width="200"></a>
  <br>
  osu! PP Looter
  <br>
  <br>
</h1>

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)<br/>

## Introduction
This is osu! PP Looter. A crazy idea has just been born. This tools search player that similar to you via google, then list their best performace via the osu! api.

![Preview](https://cdn.discordapp.com/attachments/859094490395574302/875778476538478642/unknown.png)

## Release
Latest verisons:
[Windows (x64)](https://github.com/Naozumi520/PP_Looter/releases/download/1.0.0/PPL_1.0.0_win.zip)

Before you start to using the tool, an osu! [`api key`](https://osu.ppy.sh/p/api) is required to get the user info. `config.json` is the place to save the api key and the settings. [**Sample config.json**](https://github.com/Naozumi520/PP_Looter#sample-configjson)

## Self-execution
If you're getting problem when running the .exe, you can try to do **self-execution**.
This tool was built with nodeJS. To run the tool, you will need to get [`node.js`](https://nodejs.org/en/) installed.

This tool uses npm module. Use the following command if you don't have them locally installed.
```bash
$ cd PP_looter/
$ npm install
```

Before you start to using the tool, an osu! [`api key`](https://osu.ppy.sh/p/api) is required to get the user info. `config.json` is the place to save the api key and the settings.

## Sample config.json
```
{
    "api_key": "gsd3faketokenlsU",
    "uurl": "site:osu.ppy.sh/users/",
    "nfpr": 1,
    "filter": 0,
    "pws": 0,
    "delay": 2000,
    "num": 100
}
```

## Start the tool
```bash
node index.js
```

## Special thanks
[![](https://github.com/ChinHongTan.png?size=50)  ChinHongTan](https://github.com/ChinHongTan)<br/>
[![](https://github.com/veeeleven.png?size=50)  veeeleven](https://github.com/veeeleven)

## TO-DO
- [ ] Improve search accuracy, more results and more similar to user.

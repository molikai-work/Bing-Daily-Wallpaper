# Bing-Daily-Wallpaper
一个使用 Cloudflare Workers 将 Bing 每日壁纸发布到 Telegram 频道的程序。

基于 [hkint/Bing-Daily-Wallpaper](https://github.com/hkint/Bing-Daily-Wallpaper) 项目的更改，<br />
已新增、修改或优化了某些功能。

---

请将您的 Telegram Bot Token 填入代码中的`TG_BOT_TOKEN`部分，<br />
然后将您的 Telegram Chat ID 填入代码中的`TG_CHAT_ID`部分。

最后设置 Cloudflare Worker 的触发事件：Cron 触发器即可，注意时间时区问题。

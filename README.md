# FitNote AI · Redwood 静态版

将 fitnote-redwood-static.zip 上传到 Redwood（REDcowork）的 STATIC_SITE 项目。解压后的发布根目录应直接包含 index.html、_next、images 与 exercises。使用站点根路径部署，静态托管需支持目录索引，例如 /exercises/barbell-hip-thrust/ 返回同名目录下的 index.html。

本地构建需要 Node.js 22。先运行 npm install，再运行 npm run build。发布目录是 out/，也可用任意静态文件服务器从该目录预览。部署后浏览器无需配置环境变量或 API Key。

文字按关键词匹配本地训练计划，支持徒手、臀腿、背部和肩部示例。链接和上传图保留提交及加载流程，返回本地示例，不抓取视频或执行 OCR。追问支持动作要点和部分计划修改，训练反馈使用关键词匹配。动作示范来自随包提供的原版动作库，未匹配动作使用原界面的缺省状态。钱包余额、计划和跟练记录保存在当前浏览器中。

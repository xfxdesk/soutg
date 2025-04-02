# soutg - 高性能 Telegram 搜索引擎

soutg 是一个强大的 Telegram 内容搜索系统，提供群组、频道、消息的全文检索服务。本项目采用现代化的分布式架构，结合爬虫系统和搜索引擎，为用户提供快速、精准的 Telegram 内容检索体验。

# 项目演示

在telegram中可以进行搜索，包含群组，频道，媒体资源以及讨论，支持上页，下一页
![image](https://github.com/user-attachments/assets/3a0401eb-c811-4450-93ac-47a1ba054eff)

也可以在浏览器中搜索内容
![image](https://github.com/user-attachments/assets/89c2ac51-9921-4c17-be2d-ef6552d16b0b)

搜tg,搜tg <a href="soutg.com">soutg.com</a> 提供🔍中文搜索🔍资源直达  在telegram中搜索 机器人 @baidusou_bot  帮你找到telegram上有趣的群组、频道、视频、音乐、电影、新闻
如需加入机器人索引请在频道中添加机器人 @baidusou_sp01_bot ，并赋予读取信息权限


## 🚀 系统特点

- 分布式爬虫架构，支持大规模数据采集
- 高性能全文检索引擎，毫秒级搜索响应
- 支持多维度搜索：群组、频道、消息内容
- 提供 Web 界面和 Telegram Bot 双重访问方式
- 实时数据更新，保持内容时效性

## 🔧 技术架构

### 1. 爬虫系统
- 基于 Crawlab 分布式爬虫管理平台
- 支持多任务并行处理
- 自动化任务调度
- 可视化监控和管理界面
- 智能代理池管理

### 2. 数据存储
- MongoDB 作为主数据存储
- 优化的索引结构设计
- 支持亿级数据检索
- 数据自动分片与负载均衡
- 定期数据清理与优化

### 3. 搜索引擎
- 基于 Node.js 的高性能搜索服务
- 多字段复合索引
- 模糊搜索支持
- 相关度排序算法
- 搜索结果缓存机制

### 4. 前端页面
- 响应式设计
- 实时搜索建议
- 高级筛选功能
- 搜索历史记录
- 个性化展示设置

### 5. Telegram Bot
- 命令式交互
- 内联模式支持
- 多语言界面
- 用户会话管理
- 权限控制系统

## 💡 核心功能

1. **内容检索**
   - 群组搜索
   - 频道搜索
   - 消息全文检索
   - 多条件组合查询

2. **数据采集**
   - 自动发现新群组/频道
   - 定期更新现有内容
   - 智能内容过滤
   - 违规内容屏蔽

3. **用户服务**
   - 搜索历史记录
   - 收藏夹功能
   - 订阅更新提醒
   - 个性化推荐

## 🛠 技术栈

- **后端框架**: Node.js + Express
- **爬虫系统**: Crawlab + Puppeteer
- **数据库**: MongoDB
- **缓存系统**: Redis
- **前端框架**: Vue.js
- **Bot 开发**: Telegraf

## 📈 性能指标

- 支持每日千万级消息索引
- 搜索响应时间 < 200ms
- 系统可用性 > 99.9%
- 支持并发用户数 > 10000

## 🔒 安全特性

- 数据加密存储
- 访问频率限制
- IP 黑名单机制
- 敏感内容过滤
- 用户行为审计

## 🌟 未来规划

1. **功能扩展**
   - 图片识别搜索
   - 语音转文字搜索
   - 多语言支持优化
   - 深度学习推荐

2. **性能优化**
   - 分布式搜索集群
   - 智能缓存策略
   - 索��结构优化
   - 查询性能提升

3. **用户体验**
   - 移动端 APP
   - 界面个性化
   - 搜索精准度提升
   - 实时推送服务

## 🤝 参与贡献

欢迎提交 Issue 和 Pull Request 来帮助改进项目。详细的贡献指南请参考 CONTRIBUTING.md 文件。

## 📄 开源协议

本项目采用 MIT 协议开源，详细信息请参考 LICENSE 文件。 

- 免费节点分享 
- 域名: ['https://ytxfx.xyz'] 
- 标题:免费分享V2Ray节点！2025年4月2日提供20个高效的免费节点和10个订阅链接，兼容Clash、V2rayN等常用软件。享受瞬时连接的高速服务器，给你终身免费的VPN服务，轻松体验科学上网的新方式，获得优质的代理，畅通无阻的免费上网工具，快速且稳定！包括Shadowsocks，Trojan机场，免费代理服务，翻墙白嫖节点，永久免费代理  |  羊驼想分享 
- 内容: 
http://subssr.xfxvpn.me/api/v1/client/subscribe?token=388d9faa9113a665cec9652cc3248ee4
http://subssr.xfxvpn.me/api/v1/client/subscribe?token=cde5d649b17a79b5614e3e09c8407168
http://subssr.xfxvpn.me/api/v1/client/subscribe?token=94cc4c5f43e9bbc719225818c2923b67
http://subssr.xfxvpn.me/api/v1/client/subscribe?token=b4fd5ae26f6f44b6727503074cbf37fe
http://subssr.xfxvpn.me/api/v1/client/subscribe?token=cb85a94f8fa5f751926a7173a9c38863
http://subssr.xfxvpn.me/api/v1/client/subscribe?token=a4118f1ef52af841d378646ef1987057
http://subssr.xfxvpn.me/api/v1/client/subscribe?token=e2b276bf5fd3f0c37ac07bde24372ae2
http://subssr.xfxvpn.me/api/v1/client/subscribe?token=81f77719095f28ea24c3bcc1eb3cd6a8
http://subssr.xfxvpn.me/api/v1/client/subscribe?token=dd7544014ab1f39f32d17fd93322eb61
http://subssr.xfxvpn.me/api/v1/client/subscribe?token=8ff4b1adf43b007b2b3effdf0b4e58b2 
- 更新时间: 2025年04月03日05点34分 
结束

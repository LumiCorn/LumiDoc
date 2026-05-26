---
title: 获取 DeepSeek 的 API
date: 2026-05-25
article: true
---

## 什么是 API Key
LumiDoc 不提倡衡水式编程教学，非必要不教理论知识。如果你只是个编程小白，你不需要知道什么是 API Key；大佬不可能会看这一篇的。

## API Key 使用规则
对于 DeepSeek，API 有三个元素：
``` yaml
api_key="sk-xxxxxxxxxx...xxx"
base_url="api.deepseek.com"
model="deepseek-v4-flash"
```
其中，`api_key`是调用你账户的 API 的关键密钥，请勿泄露，以免造成财产损失。

## 注册 DeepSeek 开放平台
浏览器中输入 `platform.deepseek.com`即可进入 DeepSeek 开放平台。你也可以点击下面的链接进入 DeepSeek 开放平台。
<VPBanner
  title="DeepSeek 开放平台"
  logo="/assets/icon/DeepSeek.svg"
  :actions='[
    {
      text: "进入网站",
      link:"https://platform.deepseek.com/"
    },
  ]'
/>

根据网站要求，你可能需要手机号注册后，再进行**实名认证**与**预充值 10 元人民币**的操作。

当你完成注册后，你可以看到左侧有**API Keys**界面。
![API Keys 界面](/assets/image/AIpics/Snapzy_2026-05-25_20-39-01_364_annotated.png)
你可以在 API Keys 里点击**“创建 API Key“**。

![API Keys 创建页面](/assets/image/AIpics/Snapzy_2026-05-25_20-40-30_926_annotated.png)
创建后需要先设定一个备注。随后会生成一个唯一密钥，且该密钥只会显示一次。

DeepSeek 会自动将其复制进设备的剪贴板，请妥善保管此 Key。如果 Key 丢失或遗忘，请删除此 Key 并新建一个 API Key。

``` text
sk-0413fa8b09104795b828c5d24efdcbda
```

你会收到一个如上样式的 API Key。

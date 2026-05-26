---
title: 安装 Claude Code，但是用 DeepSeek 的 API
date: 2026-05-25
article: true
---
接下来将会按步骤教你**安装 Claude Code**、**更换 DeepSeek API**的操作，让你拥有强大 Vibe Coding 能力的同时，能选择更便宜的 AI。

## 安装 Claude Code

Claude Code 的安装方法可以参考 [Claude Code Docs 官方文档](https://code.claude.com/docs/zh-CN/quickstart)。
下面将会安装 Claude Code CLI：

首先，请确保你认识**终端**（或者叫**命令行**）程序。
> **Windows**： 按 <Kbd k="Win" />+<Kbd k="R" />，并在弹出的窗口输入`cmd`，回车即可运行。或者在启动菜单中找到**"命令行"**程序。
> **macOS**：按 <Kbd k="Cmd" />+<Kbd k="Space" />(空格键)，并在弹出的“聚焦搜索“输入`terminal`，回车即可运行。或者在 App 资源库中找到**"终端"**程序。

### Windows：
在**命令行**窗口中输入：
``` bash
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```
你可以直接复制并回车运行。可能需要*科学上网*。

### macOS： (Linux 适用)
在**终端**窗口中输入：
``` bash
curl -fsSL https://claude.ai/install.sh | bash
```
你可以直接复制并回车运行。可能需要*科学上网*。

#### 安装 Git
通常你的电脑需要支持 Git 才能让 Claude Code 使用 Bash 工具。如果你已经安装过了就可以跳过这一段。

你可以进入下面的网站，下载最新的 Git。
<VPBanner
  title="Git"
  content="下载 Git 的网站"
  logo="/assets/icon/Git.svg"
  :actions='[
    {
      text: "进入网页",
      link:"https://git-scm.com/install/"
    },
  ]'
/>

进入网站后，可能需要你手动选择你当前的平台（Windows、macOS、Linux）。

#### 在 macOS 上添加 PATH 引导
如果你是 macOS 端，你可能会发现安装完 Claude Code 后，实际在终端中输入`claude`时无法运行。
原因是没有将`claude`指令添加进 PATH。
输入以下代码即可解决：
``` bash 
echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

---

以上我们就完成了 Claude Code 的安装。如果你想用 Claude 的 AI，则下文部分就可以不用阅读了。

## 将 DeepSeek 替换 Claude AI

此篇文档假设你已经正常学会获取 DeepSeek 的 API，并已经新建了一个 API Key。
如果你不会获取 API Key，可参考下面的文档：
<VPBanner
  title="获取 DeepSeek 的 API Key"
  content="LumiDoc 教程"
  :actions='[
    {
      text: "进入文档",
      link:"/工具与教程/AI类工具、教程/获取 DeepSeek 的 API.md"
    },
  ]'
/>

现在请你将你的 API Key 复制在可信的安全环境中（比如微信传输助手？）
``` text
sk-0413fa8b09104795b828c5d24efdcbda
```

### Windows：修改 `.json` 配置文件
接下来将会配置在**全局设置**中，每个项目都会生效：
请在**"资源管理器"** App 中进入 `C:\Users\[你的用户名]\.claude` 文件夹。
你可以直接在窗口上方的地址栏中粘贴。
``` text
C:\Users\[你的用户名]\.claude
```
请在 `\.claude`文件夹中找到 `settings.json` 文件，并将其打开。
![资源管理器](/assets/image/AIpics/OHTakW6f0r.png)
将接下来的所有文本粘贴进文件中，并将其中的 API Key 替换成你自己的 API Key。
``` json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "[填入你的 API Key]",
    "ANTHROPIC_BASE_URL": "https://api.deepseek.com/anthropic",
    "API_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "deepseek-v4-flash",
    "ANTHROPIC_MODEL": "deepseek-v4-pro",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "deepseek-v4-pro",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "deepseek-v4-pro"
  }
}
```
此时，Claude 的设置部分已经完成。重新打开命令行，并输入`claude`指令即可激活 Claude Code，且使用 DeepSeek 的 API。
![windowsclaude](/assets/image/AIpics/B82NFyhh5y.png)

---

### macOS： 使用 CC Switch 来快速配置
Windows 的配置部分稍微麻烦一些，但 macOS 版本可以通过 CC Switch 软件来快速调整。
请先前往 GitHub 发布页下载最新的 CC Switch App。
<VPBanner
  title="CC Switch"
  content="GitHub 发布页"
  logo="/assets/image/AIpics/CCSwitchLOGO.png"
  :actions='[
    {
      text: "进入网页",
      link:"https://github.com/farion1231/cc-switch/releases"
    },
  ]'
/>

如果你不太懂 GitHub，请在最新版本的框下找到 **Assets**，并展开，然后找到符合下面这个名字的文件：
::: center
CC-Switch-[当前版本号]-macOS.dmg
:::
下载完成后，双击进入 macOS 安装流程。
安装完成后，打开 CC Switch App。

::: warning 如果打不开
macOS 可能会提示 **"无法验证开发者"**，这是正常现象。前往 **系统设置 → 隐私与安全性**，找到 CC Switch 并点击 **"仍要打开"** 即可。
:::

打开后，确保顶部选中的是 **Claude Code** 标签页。

#### 添加 DeepSeek 提供商

1. 点击右上角的 **+** 按钮
2. 在"预设"下拉菜单中选择 **DeepSeek**
3. 在 **API Key** 输入框中粘贴你之前获取的 Key（类似 `sk-0413fa8b09104795b828c5d24efdcbda`）
   - 预设会自动填充端点地址，不需要手动填写
4. 点击 **"添加"**



#### 启用 DeepSeek

添加完成后，DeepSeek 会出现在提供商列表中。点击卡片上的 **"启用"** 按钮即可。

Claude Code 支持热重载，不需要重启终端就能立即生效。

::: tip 跳过首次配置确认
如果你是第一次使用 Claude Code，启动时可能会弹出登录引导。可以在 CC Switch 中 **设置 → 通用 → 跳过 Claude Code 初次安装确认**，开启后重新启动 Claude Code 即可。
:::

## 验证配置

打开终端（或命令行），输入：

``` bash
claude
```

然后尝试和 AI 对话：

``` text
> 你好，请简单介绍一下自己
```

如果能正常收到回复，说明配置成功了。现在你已经可以用 **DeepSeek 的价格**享受 **Claude Code 的体验**了。

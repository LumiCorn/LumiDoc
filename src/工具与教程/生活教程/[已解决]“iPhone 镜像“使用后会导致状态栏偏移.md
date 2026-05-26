---
title: 【已解决】“iPhone 镜像“使用后会导致状态栏偏移
date: 2026-05-26
article: true
---

## Bug 复现

每次在正常使用完 macOS 上的 **"iPhone 镜像"** 后，都会使 iPhone 的状态栏向左右两侧移动。该问题仅出现在 **拥有灵动岛的 iPhone** 机型。不影响原有非全面屏以及刘海屏机型。

如下图，上半为使用 **"iPhone 镜像"** 前的状态栏，而下半为使用后的状态栏。可见状态栏存在 **向两侧移动** 的现象。
![iPhone 状态栏](/assets/image/tools/Image_01.png)

- 可能可复现的设备：拥有**灵动岛**的 iPhone
- 确认问题存在的设备：iPhone 16 Pro Max；iPhone 17 Pro
- 可复现的系统：iOS 18.0 ~ iOS 26.5
- 可复现成功率：<a style="color: #e8b730"><i class="fa-solid fa-ranking-star"></i> 100% 完美复现</a>

经过验证可见偏移的距离刚好可以塞得下 **“带有锁的灵动岛“**，故判断该 Bug 可能与锁屏界面有关。
![iphone状态栏距离](/assets/image/tools/IMG_8742.png)

这个 Bug 如此明确清晰，结果 Apple 一直不修复。希望在 iOS 27 能被修复。

## 修复方案

网络上搜了一圈没人提问，但抖音评论区大佬研究出来了一套完善的解决方案：

1. 将 iPhone 进入**待机显示**模式（Stand-by）
    - 如果没有进入待机显示模式，则需要进入设置 App 找到“待机显示“，并将其启用。
    - 然后将 iPhone 接入电源，并横屏静止放置即可。
2. 用 Mac 的 **“iPhone 镜像“** App 连接你的 iPhone。
    - 你可以正常使用 iPhone 镜像，或者继续下一步操作。
3. 在 iPhone 不退出**待机显示**模式的情况下，退出 iPhone 镜像的连接。

::: note
也就是先确保在连接前，**iPhone 已进入待机显示模式。**
并确保 **iPhone 一直处于待机显示模式**，直到 iPhone 镜像结束连接。
:::

# heci

一个最小的 DeepSeek Harness 插件包（bundle），外加跑通 Git 流程的记录。

## 这个仓库是什么

它不只是文档，本身就是一个可以被 Harness 安装的插件包：

| 文件 | 作用 |
| --- | --- |
| `package.json` | 包清单：`dsh.bundle.patch` 指向补丁，`dsh.client` 声明 Web 端入口 |
| `cordis.patch.yml` | 往 profile 里插入插件行（`id: heci-plugin`） |
| `index.js` | Host 半边，空实现——没有服务端逻辑 |
| `client.js` | Client 半边，在输入框下方渲染一个 `heci` 小徽标 |
| `locale/*.json` | 插件管理器里显示的标题与描述（中英双语） |
| `icon.svg` | 插件列表里的图标 |

## 安装（本机已验证可用）

```bash
dsh plugin --profile desktop add C:\Users\mkt\Documents\deepseek-harness\default-workspace
```

安装会把包以 junction 链接到 profile，并写进 `dsh.profile.bundles`；重启 Harness 后，
输入框下方会出现一个写着 `heci` 的蓝色小徽标。

## 卸载

```bash
dsh plugin --profile desktop remove @local/heci-plugin
```

## 换成从 GitHub 安装

仓库是 private，pnpm 拉 git 需要凭据。转成 public 后可以直接：

```bash
dsh plugin --profile desktop add github:heci3973/heci
```

## 踩过的坑

- 本机 schannel 拿不到 TLS 凭据，仓库里配了 `http.sslBackend=openssl` 才能连 GitHub。
- 沙箱会拦 pnpm 派生的 `git ls-remote`（`spawn EPERM`），git 相关安装要放开权限。
- 第一次推送到 private 仓库时，`git ls-remote` 会被凭据弹窗卡住，登录一次即可。

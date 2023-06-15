最近，在 VSCode 终端中执行 pnpm 命令时，可能会遇到以下错误信息：

```
pnpm : 无法加载文件 D:\99\app\Nodejs\node_global\pnpm.ps1，因为在此系统上禁止运
行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 
about_Execution_Policies。
所在位置 行:1 字符: 1
+ pnpm docs:dev
+ ~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException        
    + FullyQualifiedErrorId : UnauthorizedAccess
```

该错误提示表明，您的计算机在 PowerShell 中设置了脚本执行策略，并且该策略限制了您运行 `pnpm` 命令。为了解决此问题，您可以尝试以下几种方法：

## 方法一：更改 PowerShell 执行策略

首先，您需要以管理员权限打开 PowerShell 终端。然后，使用以下命令检查您当前的 PowerShell 执行策略：

```
Get-ExecutionPolicy
```

如果显示的策略为 `Restricted`，则会限制您运行任何脚本，包括 `pnpm` 命令。为了解决此问题，您可以使用以下命令来更改执行策略：

```
Set-ExecutionPolicy Unrestricted
```

该命令将允许您在计算机上运行任何脚本。请注意，更改执行策略可能会影响您的计算机的安全性。因此，请确保在更改执行策略之前了解其含义。

## 方法二：使用 PowerShell 命令行解决该问题

如果您不想更改执行策略，可以考虑使用以下命令来在 PowerShell 命令行中解决该问题：

```
powershell -ExecutionPolicy Bypass -Command "pnpm docs:dev"
```

该命令将在 PowerShell 会话中解除执行策略限制，以便您可以运行 `pnpm` 命令。需要注意的是，此方法只会对当前会话解除限制。

综上所述，在 VSCode 终端中运行 `pnpm` 命令时出现 PowerShell 执行策略错误是一种常见问题，但通过更改 PowerShell 执行策略或使用 PowerShell 命令行可以轻松解决此问题。
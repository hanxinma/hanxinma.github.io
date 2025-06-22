@echo off 
setlocal enabledelayedexpansion 
 
echo 正在执行Git自动化操作...
echo 今天是2025年6月20日 星期五 农历五月廿五 
echo.
 
set "error_messages=" 
 
:: 添加文件 
git add .
if errorlevel 1 (
    set "error_messages=!error_messages![错误] 添加文件失败%0D%0A"
    goto :skip_commit 
)
 
:: 提交变更 
git commit -m "更新描述"
if errorlevel 1 (
    set "error_messages=!error_messages![警告] 无变更可提交 或 提交失败%0D%0A"
)
 
:skip_commit 
:: 推送到origin 
git push origin master 
if errorlevel 1 (
    set "error_messages=!error_messages![错误] 推送至origin失败%0D%0A"
)
 
:: 推送到github 
git push github master 
if errorlevel 1 (
    set "error_messages=!error_messages![错误] 推送至github失败%0D%0A"
)
 
:: 显示结果 
echo.
if "!error_messages!"=="" (
    echo 所有操作已完成！
) else (
    echo 操作完成，但遇到以下问题：
    echo --------------------------
    echo !error_messages!
    echo --------------------------
)
 
pause 
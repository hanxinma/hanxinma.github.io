@echo off 
echo 正在执行Git自动化操作...
echo 今天是2025年6月20日 星期五 农历五月廿五 
 
git add .
if errorlevel 1 (
    echo [错误] 添加文件失败 
    pause 
    exit /b 1 
)
 
git commit -m "更新描述"
if errorlevel 1 (
    echo [警告] 无变更可提交 或 提交失败 
)
 
git push origin master 
if errorlevel 1 (
    echo [错误] 推送至origin失败 
    pause 
    exit /b 1 
)
 
git push github master 
if errorlevel 1 (
    echo [错误] 推送至github失败 
    pause 
    exit /b 1 
) 
 
echo 所有操作已完成！
pause 
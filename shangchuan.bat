@echo off 
rem 进入项目所在目录，将 D:\hanxinma.gitlab.io  替换为你实际的项目路径 
cd /d D:\hanxinma.gitlab.io  
rem 添加所有更改到暂存区 
git add . 
rem 提交更改到本地仓库，可根据实际情况修改提交信息 
git commit -m "描述此次更改的信息" 
rem 推送本地仓库的更改到远程仓库 
git push 
rem 暂停批处理文件的执行，方便查看执行结果 
pause 
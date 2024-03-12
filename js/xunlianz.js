

let 自动模式 = "开"



let 页面路径 = window.location.pathname;

let 存储键 = '页面数据_' + 页面路径;
let 页面数据 = JSON.parse(localStorage.getItem(存储键)) || { 根队列: 根队列1, 答对总分数: 0 };

if (页面数据.根队列 === null || 页面数据.根队列 === undefined) {
        页面数据.根队列 = 根队列1;
}



let 根队列 = 页面数据.根队列;
var 答对总分数 = 页面数据.答对总分数;


window.addEventListener('beforeunload', saveData);
window.addEventListener('pagehide', saveData);

function saveData() {
        // 更新页面数据对象
        页面数据 = { 根队列, 答对总分数 };
        // 保存更新后的页面数据到本地存储
        localStorage.setItem(存储键, JSON.stringify(页面数据));

}




function 更新总分数的值() {
        document.getElementById('总分数').innerText = 答对总分数.toFixed(0);  // 将总分数更新到页面上


}

更新总分数的值();

// 定义一个函数来重置答对总分数
function 重置答对总分数() {
        答对总分数 = 0;
}

// 点击链接重置分数
document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (event) {
                重置答对总分数();


                document.getElementById('总分数').innerText = 答对总分数.toFixed(0);
        });
});





// 超链接 样式更新---
let 链接列表 = document.querySelectorAll("[class*='link']");

链接列表.forEach(链接 => {
        链接.addEventListener('click', function () {
                链接列表.forEach(链接 => {
                        链接.style.fontWeight = 'normal';
                });

                this.style.fontWeight = 'bold';

                localStorage.setItem('加粗链接索引', Array.from(链接列表).indexOf(this));
        });
});

if (localStorage.getItem('加粗链接索引') !== null) {
        let 加粗链接索引 = parseInt(localStorage.getItem('加粗链接索引'));
        if (链接列表[加粗链接索引]) {
                链接列表[加粗链接索引].style.fontWeight = 'bold';
        } else {
                console.log('加粗链接索引对应的链接不存在');
        }
} else {
        console.log('加粗链接索引未设置或为null');
}

// ---超链接 样式更新


// 下载统计错误次数---
function 保存错误统计数据() {
        let 排序后的错误统计 = Object.entries(错误统计).sort((a, b) => b[1] - a[1]); // 对错误统计数据按照尾部数字从大到小进行排序
        let 错误统计文本 = "";
        for (let [key, value] of 排序后的错误统计) {
                错误统计文本 += `${key}: ${value}\n`;
        }
        let blob = new Blob([错误统计文本], { type: "text/plain" });
        let url = URL.createObjectURL(blob);
        let 下载链接 = document.createElement("a");
        下载链接.href = url;
        下载链接.download = "错误次数统计.txt";
        下载链接.click();
}
document.getElementById("保存按钮").addEventListener("click", 保存错误统计数据);      // 调用保存错误统计数据函数的按钮点击事件

// ---下载统计错误次数

// 音效功能---

var 音效开关 = false;
let 启用按钮音效状态 = false; // 这个状态，需要和按钮状态一致   <div class="toggle-button active" onclick="切换音效()">  关着状态  active对应 false

function 切换音效() {
        音效开关 = !音效开关;
        启用按钮音效状态 = !启用按钮音效状态;
        const toggleButton = document.querySelectorAll('.toggle-button')[1]; // 选择第二个按钮
        toggleButton.classList.toggle('active', !启用按钮音效状态);
}
function 正确声() {
        if (音效开关) {
                var audio正确 = new Audio('正确.mp3');
                audio正确.play();

        }
}
function 错误声() {
        if (音效开关) {
                var audio错误 = new Audio('错误.mp3');
                audio错误.play();
        }
}




document.getElementById('打开文件按钮').addEventListener('click', function () {
        const 输入框 = document.createElement('input');
        输入框.type = 'file';
        输入框.accept = '.txt';
        输入框.addEventListener('change', function () {
                const 文件 = 输入框.files[0];
                const 读取器 = new FileReader();
                读取器.onload = function () {
                        const 新字根 = 读取器.result;
                        const 新根队列 = 新字根.split('\n').map(line => line.trim());

                        // 更新根队列
                        根队列 = 新根队列;

                        显示当前根();
                        显示所有根();
                };
                读取器.readAsText(文件);
        });
        输入框.click();


});

//---------------------------------------

let 对应次数队列 = Array(根队列.length).fill(0)
let 当前索引 = 0;

//---------------------------------------



// 非动画效果显示字根
//function 显示当前根() {
//    let 当前根显示 = document.getElementById("当前根显示");
//    当前根显示.innerHTML = 根队列[当前索引].split("\t")[0];
//}

// 动画显示当前字根函数--
// 监听具有class "link2"的链接的点击事件

// 等待文档加载完成
// document.addEventListener('DOMContentLoaded', function () {
//         // 获取class为'link1'的元素
//         var link = document.querySelector('.link1');

//         // 给这个元素添加点击事件监听器
//         link.addEventListener('click', function (event) {
//                 // 阻止链接的默认行为，即不让页面跳转
//                 event.preventDefault();
//                 setTimeout(() => {
//                         // 弹出提示框
//                         alert('电脑端优先，听语音记忆，因为拼音打字以想音为主\n【尽量不要看拼音记】因为会打字的时候想不起来\n语音读的是汉字所以会不准，可以按回车让他再读，或按Ctrl显示文字\n单词法记忆这个练熟了，就可以打字了。\n但是打字会难受,很慢.坚持一个星期就会过去\n或者先不打字,练习后面单个韵母条反,练熟,上手打字就不用想.\n或练习,前500单字,把这些练熟了再打字,就不会有痛苦期.\n手机端,无语音,手机端需刷新保存进度\n[注意],点链接会导致进度丢失');
//                 }, 1000);
//         });
// });

// 开始弹窗
// function showPopup() {
//         setTimeout(() => {
//                 alert('电脑端优先，听语音记忆，因为拼音打字以想音为主\n【尽量不要看拼音记】因为会打字的时候想不起来\n语音读的是汉字所以会不准，可以按回车让他再读，或按Ctrl显示文字\n单词法记忆这个练熟了，就可以打字了。\n但是打字会难受,很慢.坚持一个星期就会过去\n或者先不打字,练习后面单个韵母条反,练熟,上手打字就不用想.\n或练习,前500单字,把这些练熟了再打字,就不会有痛苦期.\n手机端,无语音,手机端需刷新保存进度\n[注意],点链接会导致进度丢失');
//         }, 1000);
// }
// showPopup();


// 超级连接跳转源数据---这里会清空记忆

var link0Element = document.querySelector(".link0");
if (link0Element) {
        link0Element.addEventListener("click", function () {
                根队列 = [...根队列0];
                显示当前根();
                显示所有根();
        });
} else {
        console.log(".link0 元素不存在，无法添加跳转。");
}


var link2Element = document.querySelector(".link1");
if (link2Element) {
        link2Element.addEventListener("click", function () {
                根队列 = [...根队列1];
                显示当前根();
                显示所有根();
        });
} else {
        console.log(".link1 元素不存在，无法添加跳转。");
}


var link2Element = document.querySelector(".link2");
if (link2Element) {
        link2Element.addEventListener("click", function () {
                根队列 = [...根队列2];
                显示当前根();
                显示所有根();
        });
} else {
        console.log(".link 元素不存在，无法添加跳转。");
}

var link2Element = document.querySelector(".link3");
if (link2Element) {
        link2Element.addEventListener("click", function () {
                根队列 = [...根队列3];
                显示当前根();
                显示所有根();
        });
} else {
        console.log(".link 元素不存在，无法添加跳转。");
}
var link2Element = document.querySelector(".link5");
if (link2Element) {
        link2Element.addEventListener("click", function () {
                根队列 = [...根队列5];
                显示当前根();
                显示所有根();
        });
} else {
        console.log(".link 元素不存在，无法添加跳转。");
}
var link2Element = document.querySelector(".link6"); //规则
if (link2Element) {
        link2Element.addEventListener("click", function () {
                根队列 = [...根队列6];
                显示当前根();
                显示所有根();
        });
} else {
        console.log(".link 元素不存在，无法添加跳转。");
}

var link2Element = document.querySelector(".link7"); // 字元
if (link2Element) {
        link2Element.addEventListener("click", function () {
                根队列 = [...根队列7];
                显示当前根();
                显示所有根();
        });
} else {
        console.log(".link 元素不存在，无法添加跳转。");
}
// ---超级连接


let 听写模式共同变量 = "关";

// 链接点击后 状况改变-----
var linkElement = document.querySelector('.link0');
if (linkElement) {
        linkElement.addEventListener('click', function (event) {
                event.preventDefault();

                听写模式 = "关";
                显示当前根();
        });
} else {

        console.log('不存在');
}

document.addEventListener('DOMContentLoaded', function () {
        var link0Element = document.querySelector('.link0');

        if (link0Element) {
                // 页面加载后判断执行,加粗就
                if (link0Element.style.fontWeight === 'bold') {
                        听写模式 = "关";
                        显示当前根();
                }
        } else {
                console.log('.link0 不存在');
        }
});

// -----链接点击后 状况改变

// 链接点击后 状况改变
var linkElement = document.querySelector('.link2');
if (linkElement) {
        linkElement.addEventListener('click', function (event) {
                event.preventDefault();

                听写模式 = "关";
                显示当前根();
        });
} else {

        console.log('.link2 不存在');
}

document.addEventListener('DOMContentLoaded', function () {
        var link0Element = document.querySelector('.link2');

        if (link0Element) {
                // 页面加载后判断执行,加粗就
                if (link0Element.style.fontWeight === 'bold') {
                        听写模式 = "关";
                        显示当前根();
                }
        } else {
                console.log('.link不存在');
        }
});

// 首先尝试获取页面上的目标元素






// 首先尝试获取页面上的目标元素
var linkElement = document.querySelector('.link3');

if (linkElement) {
        linkElement.addEventListener('click', function (event) {
                event.preventDefault();
                if (是手机状态) { // 如果手机模式就..点击后效果
                        听写模式 = "关";
                } else {
                        听写模式 = "关";
                }
                显示当前根();
        });
} else {
        console.log('.link1 不存在');
}

document.addEventListener('DOMContentLoaded', function () {
        var link0Element = document.querySelector('.link3');

        if (link0Element && 是手机状态) {
                // 页面加载后判断执行,加粗就
                if (link0Element.style.fontWeight === 'bold') {
                        听写模式 = "关";
                        显示当前根();
                }
        } else {
                console.log('.link不存在');
        }
});



// 首先尝试获取页面上的目标元素
var linkElement = document.querySelector('.link5');

if (linkElement) {
        linkElement.addEventListener('click', function (event) {
                event.preventDefault();
                if (是手机状态) { // 如果手机模式就..点击后效果
                        听写模式 = "关";
                } else {
                        听写模式 = "关";
                }
                显示当前根();
        });
} else {
        console.log('.link1 不存在');
}

document.addEventListener('DOMContentLoaded', function () {
        var link0Element = document.querySelector('.link5');

        if (link0Element && 是手机状态) {
                // 页面加载后判断执行,加粗就
                if (link0Element.style.fontWeight === 'bold') {
                        听写模式 = "关";
                        显示当前根();
                }
        } else {
                console.log('.link不存在');
        }
});




if (自动模式 === "开") {
        听写模式 = "关";
}
else {
        听写模式 = "关";
        //两个有用，需要这个变量
}






// let 听写模式 = "关";
let 动画标记 = true;
document.getElementById("听写按钮").addEventListener("click", function () {
        听写模式 = 听写模式 === "关" ? "开" : "关";
        显示当前根();

        // 更新按钮的文本内容
        var 按钮 = document.getElementById("听写按钮");
        按钮.innerText = 听写模式 === "关" ? "已关听写" : "已开听写";
});

// 显示当前根
function 显示当前根() {
        let 当前根显示 = document.getElementById("当前根显示");
        // 判断动画标记是否被设置，如果设置则不执行动画
        if (动画标记) {
                当前根显示.classList.remove('slideFromLeftAnimation');
                void 当前根显示.offsetWidth;
                当前根显示.classList.add('slideFromLeftAnimation');
        }
        if (听写模式 === "关") {
                当前根显示.innerHTML = 根队列[当前索引].split("\t")[0];
        } else {
                当前根显示.innerHTML = "🐉";
                // 在这里添加显示弹窗的代码



        }
}



document.addEventListener("keydown", function (event) {
        // if (event.altKey && event.key === "Enter") {
        if (event.key === 'Enter') {
                显示当前根();
                读取字根()
        }
});

// 添加按下键时的操作，只添加一次事件监听器
document.addEventListener('keydown', function (event) {
        if (event.key === 'Control') {
                // if (event.key === 'Alt' || event.key === 'Control') {
                显示当前根();
                let 当前根显示 = document.getElementById("当前根显示");

                当前根显示.innerHTML = 根队列[当前索引].split("\t")[0];
        }
});

function 切换字根动画状态() {
        动画标记 = !动画标记; // 正确切换动画标记的值
        var 按钮 = document.getElementById('关闭动画');
        if (动画标记) {
                按钮.innerText = '字根动画已开';
        } else {
                按钮.innerText = '字根动画已关';
        }
}


// ---动画显示当前字根函数


// 删除当前字根功能-------
document.addEventListener("keydown", function (event) {
        if (event.key === "-") { // 按下 - 号， 执行删除当前根函数 
                setTimeout(function () {
                        删除当前根();
                        清空操作();
                }, 300); // 0.5秒的延时（500毫秒）延迟 删除 setTimeout 延时函数
        }
});

function 清空操作() {
        document.getElementById("用户输入").value = "";  // 清空文本框内容
}


document.getElementById("删除当前根按钮").addEventListener("click", function () {    // 识别按钮点击事件
        删除当前根();
});



function 删除当前根() {
        根队列.splice(当前索引, 1);  // 从根队列中删除当前根值

        // 1000毫秒 = 1秒
        document.getElementById('错误消息').innerText = '已删除';
        setTimeout(function () {
                document.getElementById('错误消息').innerText = '';
        }, 1000);
        setTimeout(function () {
                显示当前根();
                显示所有根();
        }, 1000);
}
// -------删除当前字根功能






// 快捷键------
document.addEventListener("keydown", function (event) {
        if (event.key === "=") {
                setTimeout(function () {
                        添加当前根();
                        清空操作();
                }, 300); // 0.5秒的延时（500毫秒）延迟 删除 setTimeout 延时函数--添加到特训 快捷键
        }
});

// 利用2键，快速过一遍。对了就删，错了就后移。
document.addEventListener("keydown", function (event) {
        const 用户输入9 = document.getElementById("用户输入").value;
        const 用户输入9去2 = 用户输入9.replace(/2/g, '');
        let 正确答案9 = 根队列[当前索引].split("\t")[1];
        if (event.key === "2") {
                if (用户输入9去2 === 正确答案9) {
                        删除当前根();
                } else {
                        后移到最后();
                        错误显示消失函数("错误,后移");

                }

                setTimeout(function () {

                        清空操作();
                }, 300);
        }
});


document.addEventListener("keydown", function (event) {
        if (event.key === "7") {
                setTimeout(function () {
                        添加一组当前根();
                        清空操作();
                }, 300); // 0.5秒的延时（500毫秒）延迟 删除 setTimeout 延时函数--添加到特训 快捷键
        }
});

document.addEventListener("keydown", function (event) {
        if (event.key === "8") {
                setTimeout(function () {
                        特训程序();
                        清空操作();
                }, 300); // 0.5秒的延时（500毫秒）延迟 删除 setTimeout 延时函数--添加到特训 快捷键
        }
});



document.addEventListener("keydown", function (event) {
        if (event.key === "9") {
                setTimeout(function () {
                        后移到前();
                        清空操作();
                }, 300); // 0.5秒的延时（500毫秒）延迟 删除 setTimeout 延时函数--添加到特训 快捷键
        }
});

document.getElementById("加到特训").addEventListener("click", function () {    // 识别按钮点击事件 --添加到特训-按钮
        添加当前根();
});

// ------快捷键
function 特训清空() {
        // 特训新列表.splice(0, 特训新列表.length);
        特训新列表.length = 0;
        document.getElementById("当前根显示2").innerHTML = 特训新列表;
}

function 添加当前根() {
        // 特训新列表.length = 0;
        特训新列表.push(根队列[当前索引]); // 将当前字根添加到新列表中

        显示当前根();
        显示所有根();

        // 1000毫秒 = 1秒
        document.getElementById('错误消息').innerText = '已添加到特训';
        setTimeout(function () {
                document.getElementById('错误消息').innerText = '';
        }, 1000);
        特训程序();
}


function 添加一组当前根() {
        特训新列表.length = 0;
        特训新列表.push(根队列[当前索引]);
        特训新列表.push(根队列[当前索引 + 1]);
        特训新列表.push(根队列[当前索引 + 2]);
        特训新列表.push(根队列[当前索引 + 3]);// 将当前字根添加到新列表中

        显示当前根();
        显示所有根();

        // 1000毫秒 = 1秒
        document.getElementById('错误消息').innerText = '已添加到特训';
        setTimeout(function () {
                document.getElementById('错误消息').innerText = '';
        }, 1000);
        特训程序();
}


document.getElementById("特训").addEventListener("click", function () {
        // 在这里放置要执行的代码
        // 更新根队列

        显示当前根();
        显示所有根();
});







var 特训新列表 = [];

function 移除输入探测器() {
        let 输入元素 = document.getElementById("用户输入特训");

        if (输入元素._用户输入监听器) {
                输入元素.removeEventListener('input', 输入元素._用户输入监听器);
        }
}

function 添加输入探测器(处理函数) {
        let 输入元素 = document.getElementById("用户输入特训");

        移除输入探测器();

        输入元素.addEventListener('input', 处理函数);

        输入元素._用户输入监听器 = 处理函数;
}

function 特训程序() {
        // 从特训新列表中随机选择一个值
        let 随机索引 = Math.floor(Math.random() * 特训新列表.length);
        let 选中项 = 特训新列表[随机索引];
        let 分割结果 = 选中项.split("\t");


        // 显示这个值的第一部分
        let 显示元素 = document.getElementById("当前根显示2");
        显示元素.innerText = ''; // 先清空文本
        显示元素.classList.remove('slide-in-from-left'); // 移除动画类以确保动画能再次触发

        requestAnimationFrame(() => {
                显示元素.classList.add('slide-in-from-left');
                显示元素.innerText = 分割结果;
                显示元素.style.color = 'green';
        });

        // 清空用户输入
        setTimeout(function () {
                document.getElementById("用户输入特训").value = "";
        }, 200);

        // 添加输入事件监听器，确保在此之前移除旧的监听器
        添加输入探测器(function (event) {
                let 用户输入 = event.target.value;


                if (用户输入.endsWith(" ")) {
                        用户输入 = 用户输入.trim(); // 去除尾部空格符以进行准确比较

                        if (用户输入 === 分割结果[1]) {

                                特训程序();
                        } else {

                                document.getElementById("用户输入特训").value = "";
                        }
                }
        });
}



function 特训去重() {
        特训新列表 = [...new Set(特训新列表)];
        document.getElementById("result").innerText = 特训新列表;
}

function 显示确认框() {
        var result = confirm("要去重吗？点确定,不需要点取消!");
        if (result) {
                特训去重();
        }
}


function 下载特训() {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(特训新列表.join('\n')));
        element.setAttribute('download', '特训加入的列表.txt');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
}
// -------添加当前字根功能




function 显示所有根() {
        let 所有根显示 = document.getElementById("所有根显示");
        所有根显示.innerHTML = "";
        根队列.forEach((项目, 索引) => {
                let 根 = 项目.split("\t")[1];
                let 字 = 项目.split("\t")[0];
                let div = document.createElement("div");
                div.className = "队列项";
                div.innerText = (索引 + 1) + ": " + 字 + "=" + 根;
                所有根显示.appendChild(div);
        });
}


function 后移(移动距离) {
        移动距离 = Math.min(移动距离, 根队列.length - 1)// 最多只能后移 队列长度-1
        let tmp
        tmp = 根队列[当前索引]
        根队列.splice(当前索引, 1) // 删最前面
        根队列.splice(当前索引 + 移动距离, 0, tmp) // 插入

        tmp = 对应次数队列[当前索引]
        对应次数队列.splice(当前索引, 1) // 删最前面
        对应次数队列.splice(当前索引 + 移动距离, 0, tmp) // 插入
}



// var 答对总分数 = 0; 这个上面加到缓存里了
// 自动显示答案模块 -------------------------------------
document.addEventListener("DOMContentLoaded", function () {
        const 按钮 = document.getElementById("toggleButton");
        按钮.click();
});

const 按钮 = document.getElementById("toggleButton");
按钮.addEventListener("click", function () {
        if (自动模块开关 === "开") {
                自动模块开关 = "关";
                按钮.innerText = '自显模式-已关';
        } else {
                自动模块开关 = "开";
                按钮.innerText = '自显模式-已开';
        }
        console.log("自动模块开关变为：" + 自动模块开关);
});




let 自动模块开关 = "开";
if (自动模块开关 === "开") {
        function 自动显示答案(根队列, 当前索引) {

                let 已学过字根的次数 = 获取已学过的次数(根队列, 当前索引, 学过的字根);
                //信息传递到页面
                let 学过否 = 有没有学过结果;
                console.log("自动显示答案,学过否", 学过否);


                if (已学过字根的次数 < 3 && 显示答对的计数 <= 位数) { // 显示答案小于5,就显示答案，且没有多次学过的。
                        显示正确消失功能函数(根队列[当前索引].split("\t")[1]);

                        console.log("自动模式,多次学习,根据一个计数器,计数器,在主程序里,++.自动----显示4个题目和答案");

                } else { // 显示n个答案后，就不显示，并启动复习记数。if (显示答对的计数 > 3)
                        console.log("启动复习,等待计数++");
                        等待计数++;

                };

                if (学过否 === 0) {
                        显示正确消失功能函数(根队列[当前索引].split("\t")[1]);
                        console.log("自动模式,这个没有学过,所以一定要显示答案");
                };


                // 只要没学过，就一定会显示答案

                // 总体就是，显示4个答案，如果过了。就不显示，并启动复习 记数。因为不显示答案，就默认进入复习了。因为字根会后移。
                // return 自动显示答案29;


        }

        function 等待后显示(根队列, 当前索引) {

                // let 自动显示答案3 = 根队列[当前索引].split("\t")[1];

                let 学过否 = 有没有学过结果;
                console.log("等待后显示,学过否", 学过否);


                if (学过否 === 0) {
                        显示正确消失功能函数(根队列[当前索引].split("\t")[1]);
                        console.log("复习模式---这个没有学过,所以一定要显示答案");
                        // return 自动显示答案3;

                } else {



                        错误消息二.innerText = "";
                        // 错误消息三.innerText = "";
                        // 复习模式
                };


                if (等待计数 > 位数) {
                        等待计数 = 0;
                        显示答对的计数 = 0;
                        console.log("等待中的复习完成4个了,等待计数变成0,显示答对的计数也变0,好让自动显示启动.");

                };
                // 等待计数，如果跑到4 以后，就复位 两个记数。好让，显示答案函数从新运行。



        }




        let 有没有学过结果;
        function 有没有学过(当前字根判断) {

                if (学过的字根.hasOwnProperty(当前字根判断)) {
                        有没有学过结果 = 1;
                        console.log("运行有没有学过函数,判断学过了");

                } else {
                        有没有学过结果 = 0;
                };
                // console.log("当前字根判断-----------", 当前字根判断);
                console.log("判断是不是学过了", 有没有学过结果); // 在函数返回之前打印结果
                return 有没有学过结果; // 根据字根是否学过返回1或0
        }



        var autoHide = true;
        function 显示正确消失功能函数(correctAnswer2) {
                错误消息二.innerText = "," + correctAnswer2;
                setTimeout(function () {
                        if (autoHide) {
                                错误消息二.innerText = "";
                        }
                }, 1500);

        }

        // function 显示正确消失功能函数错误消息三(correctAnswer2) {
        //         错误消息三.innerText = "," + correctAnswer2;
        //         setTimeout(function () {
        //                 if (autoHide) {
        //                         错误消息三.innerText = "";
        //                 }
        //         }, 150000);

        // }





        // 自动显示答案(根队列, 当前索引);
        // 等待后显示(根队列, 当前索引);

} else {


}
// -------------------------------------自动显示答案模块 

if (自动模块开关 === "开") {
        位数 = 3;
} else {
        位数 = 4;
        // 两种模式初步后移位置
}

let 显示答对的计数 = 0;
let 等待计数 = 0;



let 错误统计 = {};
var 答对分数 = 0;
let 学习开关 = "关";
let 学习次数 = 0;
let 连续学习次数 = 0;

let 学过的字根 = {};

错误显示消失函数('加载进度...');

let 判断答案长度的值; 

function 检查答案() {
        if (自动模式 === "开") {
                用户输入 = document.getElementById("用户输入").value;  // 自动模式启用这个，let -
        } else {
                用户输入 = document.getElementById("用户输入").value.trim();  // 如果用空格提交需要启用这个 .value.trim(); 
        }
        let 正确答案 = 根队列[当前索引].split("\t")[1];
        // let 正确解释 = 根队列[当前索引].split("\t")[3];
        判断答案长度的值 = 根队列[当前索引].split("\t")[1].length; // 更新全局变量的值-自动提交判断答案的长度
        // 判断答案长度的值 = 正确答案.length;
        let 根队列整个 = 根队列[当前索引 + 1];
        console.log("判断答案长度的值----11------", 判断答案长度的值);


        let 错误消息 = document.getElementById("错误消息");
        console.log("正确答案----11------", 正确答案);
        console.log("根队列整个222----------", 根队列整个);
        // let 错题 = 错误消息.innerText.substring(0, 2);

   


        if (用户输入 === 正确答案) {
           
                判断答案长度的值 = 根队列[当前索引+1].split("\t")[1].length; // 再次提前更新下个全局变量

                // 显示答对的计数复位();

                setTimeout(function () {
                        document.getElementById("用户输入").value = "";
                }, 200);
                错误消息.innerText = "";

                对应次数队列[当前索引] += 1;

                // ---自动模块
                if (自动模块开关 === "开") {
                        显示答对的计数++;
                        有没有学过(根队列整个);

                        console.log("显示答对的计数++;", 显示答对的计数);
                };
                // ---自动模块

                // 学过的字根 回答对，就加到里面---

                if (学过的字根.hasOwnProperty(根队列[当前索引])) {
                        学过的字根[根队列[当前索引]] += 1;
                        console.log("对了加入.", JSON.stringify(学过的字根));
                } else {
                        学过的字根[根队列[当前索引]] = 1;
                        console.log("对了加入.", JSON.stringify(学过的字根));

                };
                // ---学过的字根 加到里面



                计算并执行后移(对应次数队列, 当前索引);


                // ---自动模块
                if (自动模块开关 === "开") {

                        setTimeout(function () {
                                自动显示答案(根队列, 当前索引);
                                等待后显示(根队列, 当前索引);
                                console.log("自动显示答案.等待后显示");
                                // 显示正确消失功能函数("字根在里面",当前索引);
                                // 显示正确消失功能函数("字根在里面",根队列整个);
                                // if (学过的字根.hasOwnProperty(根队列整个)) { 
                                // 显示正确消失功能函数(根队列整个);
                                // }
                                // else {
                                //         显示正确消失功能函数(根队列[当前索引].split("\t")[1]);
                                // };


                        }, 200);

                };
                // ---自动模块
                // 下一个有没有学过(根队列整个下一个);
                正确声();



                答对分数++;
                夸奖函数(答对分数);


                显示当前根();
                显示所有根();


                执行连击加分函数一显示加分效果();


                if (学习开关 === "关") {
                        连续学习次数 = 0;
                        console.log("输入后连续学习次数" + 连续学习次数);
                };






                // console.log("有没有学过,拿的数值,到里面判断.", 根队列整个);




                学习开关 = "关";
                // ---默认都需要关着
                计算学习进度();



        } else {


                var 用户输入二 = 用户输入.replace(/\s+/g, ''); // 过滤一下 空字符，不算字符。
                if (用户输入二 === "") {
                        学习开关 = "开";
                        学习次数 += 1;
                        连续学习次数 += 1;
                        console.log("错误后连续学习次数" + 连续学习次数);
                        console.log("检查答案错误学习次数：" + 学习次数);

                } else {
                        答对分数 = 0;
                        学习开关 = "关";
                        学习次数 = 0;
                        连续学习次数 = 0;
                        console.log("错误后连续学习次数" + 连续学习次数);
                        console.log("检查答案错误学习次数：" + 学习次数);



                }

                对应次数队列[当前索引] = 0;
                setTimeout(function () {
                        document.getElementById("用户输入").value = "";
                }, 200);
                // 错误消息.innerText = " " + 正确答案;
                // 将正确答案显示在页面上
                错误声();
                错误显示消失函数(正确答案);

                // 显示正确消失功能函数错误消息三(正确解释)
                执行学过减分一显示学过减分效果();


                // 将错误的字根和错误次数记录到错误统计对象中---
                if (错误统计.hasOwnProperty(根队列[当前索引])) {
                        错误统计[根队列[当前索引]] += 1;
                } else {
                        错误统计[根队列[当前索引]] = 1;
                }
                // ---将错误的字根和错误次数记录到错误统计对象中





                计算学习进度();

        }
}

显示当前根();
显示所有根();
document.getElementById("用户输入").focus(); // 页面加载时将焦点设置在输入框上  let 输入内容 = event.target.value.trim();


function 计算并执行后移(对应次数队列, 当前索引) {
        // 根据对应次数队列和当前索引计算后移距离
        if (对应次数队列[当前索引] > 3) {
                后移(对应次数队列[当前索引] * 100);
        } else if (对应次数队列[当前索引] === 3) {
                后移(对应次数队列[当前索引] * 7);
        } else {
                后移(对应次数队列[当前索引] * (位数 - 1));
                // 这里初始后移位置
        }
}



// 重置display属性使元素可见
// 根据需要调整为 'inline', 'inline-block' 等
// 移除动画类以重置动画，然后再次添加
// 强制浏览器重绘，确保动画类被正确移除
// 重新添加动画类以重新开始动画
// function 显示加分() {
//         let 加分元素 = document.getElementById('加分值');        
//         加分元素.style.display = 'block';         
//         加分元素.classList.remove('动画效果');       
//         void 加分元素.offsetWidth;       
//         加分元素.classList.add('动画效果');
// }


//-----------------------------

// 控制变量，决定是否允许播放音效
var 允许播放 = true;

var 上次播放时间二 = 0;

function 播放鼓掌1() {
        var 当前时间 = new Date().getTime();
        if (!允许播放 || 当前时间 - 上次播放时间二 < 600000) return;
        // if (!允许播放) return;
        var audio = new Audio('鼓掌哦哦.mp3');
        audio.play();
        上次播放时间二 = 当前时间;
}

// 定义一个全局变量来存储上一次播放的时间戳，初始值为0
var 上次播放时间 = 0;

function 播放鼓掌2() {
        var 当前时间 = new Date().getTime();
        if (!允许播放 || 当前时间 - 上次播放时间 < 120000) return;
        var audio = new Audio('纯鼓掌.mp3');
        audio.play();
        上次播放时间 = 当前时间;
}


function 切换播放状态() {
        允许播放 = !允许播放;
        var 按钮 = document.getElementById('播放控制按钮');
        if (允许播放) {
                按钮.innerText = '关闭鼓掌';
        } else {
                按钮.innerText = '启用鼓掌';
        }
}



// --------------------

function 消失夸奖() {
        setTimeout(function () {
                var element = document.getElementById('单分数');
                if (element) { // 确保找到了元素
                        element.style.color = 'white';
                }
        }, 800);
}



// 判断当前根显示的内容是否在学过的字根中
// 当前根显示数据.innerHTML = 根队列[当前索引];
// if (学过的字根.hasOwnProperty(当前根显示数据.innerHTML)) {

//         已经学过的次数 = 学过的字根[当前根显示数据.innerHTML];
// } else {
//         已经学过的次数 = 0;
// }
function 获取已错误的次数(根队列, 当前索引, 错误统计) {
        // 获取当前根显示的内容
        let 当前根 = 根队列[当前索引];
        let 已错误的次数 = 0;
        // 判断当前根显示的内容是否在学过的字根中
        if (错误统计.hasOwnProperty(当前根)) {
                // 如果在，获取已学过的次数
                已错误的次数 = 错误统计[当前根];
        }

        return 已错误的次数;
}


function 获取已学过的次数(根队列, 当前索引, 学过的字根) {
        // 索引匹配

        let 当前根 = 根队列[当前索引];
        let 已学过的次数 = 0;
        // 判断当前根显示的内容是否在学过的字根中
        if (学过的字根.hasOwnProperty(当前根)) {
                // 如果在，获取已学过的次数
                已学过的次数 = 学过的字根[当前根];
        }

        return 已学过的次数;
}


function 学过减分() {
        let 加分值三 = 0;
        let 已学过的次 = 获取已学过的次数(根队列, 当前索引, 学过的字根);
        let 已错的次数 = 获取已错误的次数(根队列, 当前索引, 错误统计);
        console.log("已错的次数---" + 已错的次数);

        if (已学过的次 > 5 && 已学过的次 < 11) {
                加分值三 = 已错的次数 * 1;
                答对总分数 -= 加分值三;



        }
        else if (已学过的次 > 10 && 已学过的次 < 21) {
                加分值三 = 已错的次数 * 2;
                答对总分数 -= 加分值三;


        }
        else if (已学过的次 > 20 && 已学过的次 < 31) {
                加分值三 = 已错的次数 * 3;
                答对总分数 -= 加分值三;

        }

        else if (已学过的次 > 30 && 已学过的次 < 51) {
                加分值三 = 已错的次数 * 5;
                答对总分数 -= 加分值三;


        }
        else if (已学过的次 > 50) {
                加分值三 = 已错的次数 * 10;

                答对总分数 -= 加分值三;
        }

        return { 答对总分数, 加分值三 };
}

function 执行学过减分一显示学过减分效果() {
        let 结果 = 学过减分(); // 调用函数并获取返回值

        let 加分元素 = document.getElementById('加分值'); // 更新页面元素并添加动画效果
        加分元素.innerHTML = '<span class="加分样式">' + "－" + 结果.加分值三 + '</span>';
        加分元素.classList.add('动画效果');
        加分元素.style.display = ''; // 确保加分元素是可见的

        加分元素.addEventListener('animationend', function () {  // 动画结束后隐藏元素
                加分元素.style.display = 'none';
        });

        // 更新总分数显示
        // document.getElementById('总分数').innerText = 结果.答对总分数; // 更新总分数显示
        document.getElementById('总分数').innerText = 结果.答对总分数.toFixed(0);
}



function 执行连击加分函数一显示加分效果() {
        let 结果 = 连击加分函数(); // 调用函数并获取返回值

        let 加分元素 = document.getElementById('加分值'); // 更新页面元素并添加动画效果
        加分元素.innerHTML = '<span class="加分样式">+' + 结果.加分值 + '</span>';
        加分元素.classList.add('动画效果');
        加分元素.style.display = ''; // 确保加分元素是可见的

        加分元素.addEventListener('animationend', function () {  // 动画结束后隐藏元素
                加分元素.style.display = 'none';
        });
        document.getElementById('总分数').innerText = 结果.答对总分数.toFixed(0);

}

function 连击加分函数() {
        let 已学过的次数 = 获取已学过的次数(根队列, 当前索引, 学过的字根);
        let 加分值 = 0;
        console.log("已学过的次数" + 已学过的次数);


        if (学习开关 === "开") {
                if (连续学习次数 > 4 || 已学过的次数 > 3) {  // 连续学习4以上减分，或，以学过，还学，也减分。
                        if (答对分数 < 3) {
                                答对总分数 -= 答对分数 * 1;
                                加分值 -= 答对分数 * 1;
                        }
                        else if (答对分数 >= 3 && 答对分数 < 10) {
                                答对总分数 -= 答对分数 * 2 * 0.2;
                                加分值 -= 答对分数 * 2 * 0.2;
                        }
                        else if (答对分数 >= 10 && 答对分数 < 20) {
                                答对总分数 -= 答对分数 * 5 * 0.5;
                                加分值 -= 答对分数 * 5 * 0.5;
                        }
                        else if (答对分数 >= 20 && 答对分数 < 30) {
                                答对总分数 -= 答对分数 * 10 * 0.7;
                                加分值 -= 答对分数 * 10 * 0.7;
                        }
                        else if (答对分数 >= 30 && 答对分数 < 50) {
                                答对总分数 -= 答对分数 * 15 * 0.9;
                                加分值 -= 答对分数 * 15 * 0.9;
                        }
                        else if (答对分数 >= 50 && 答对分数 < 1000000) {
                                答对总分数 -= 答对分数 * 20 * 1.2;
                                加分值 -= 答对分数 * 20 * 1.2;

                        }


                        答对分数 = 0;

                        学习次数 = 0;

                } else {
                        答对总分数 += 1;
                        加分值 = 1;

                }

        }
        // 连击加分
        else if (答对分数 < 3) {
                答对总分数 += 答对分数;
                加分值 = 答对分数 * 1;
        }
        else if (答对分数 >= 3 && 答对分数 < 10) {
                答对总分数 += 答对分数 * 2;
                加分值 = 答对分数 * 2;
        }
        else if (答对分数 >= 10 && 答对分数 < 20) {
                答对总分数 += 答对分数 * 5;
                加分值 = 答对分数 * 5;
        }
        else if (答对分数 >= 20 && 答对分数 < 30) {
                答对总分数 += 答对分数 * 10;
                加分值 = 答对分数 * 10;
        }
        else if (答对分数 >= 30 && 答对分数 < 50) {
                答对总分数 += 答对分数 * 15;
                加分值 = 答对分数 * 15;
        }
        else if (答对分数 >= 50 && 答对分数 < 1000000) {
                答对总分数 += 答对分数 * 20;
                加分值 = 答对分数 * 20;
        }
        return { 答对总分数, 加分值 };
}


function 夸奖函数(答对分数) {
        // document.getElementById('单分数').innerText = 答对分数;  // 将单分数更新到页面上
        if (答对分数 < 4) {
                document.getElementById('单分数').innerText = "加油";
                document.getElementById('单分数').style.color = "black";

                消失夸奖();

        }
        else if (答对分数 < 7) {
                document.getElementById('单分数').innerText = "真棒";
                document.getElementById('单分数').style.color = "red";
                消失夸奖();
        }
        else if (答对分数 < 10) {
                document.getElementById('单分数').innerText = "厉害";
                document.getElementById('单分数').style.color = "black";
                消失夸奖();
        }
        else if (答对分数 < 15) {
                document.getElementById('单分数').innerText = "太棒了,鼓掌!(更多功能可关闭鼓掌)";
                document.getElementById('单分数').style.color = "red";
                播放鼓掌2();


        }
        else if (答对分数 < 20) {
                document.getElementById('单分数').innerText = "你已经超神了,太棒了";
                document.getElementById('单分数').style.color = "red";

        }
        else if (答对分数 < 30) {
                document.getElementById('单分数').innerText = "你已经无敌了,你超过大多数人记忆力了,加油";
                document.getElementById('单分数').style.color = "green";
                播放鼓掌1();

        }
}





// 显示错误信息，函数，1秒后消失答案消失
var autoHide = true;


function 错误显示消失函数(correctAnswer) {
        // let 根队列数组 = 根队列[当前索引].split('\t');
        // let 第四列 = 根队列数组.length > 3 ? 根队列数组[3] : " ";

        // 使用innerHTML替代innerText，并为第四列的文本设置黑色字体
        错误消息.innerHTML = correctAnswer ;

        setTimeout(function () {
                if (autoHide) {
                        错误消息.innerText = ""; // 这里保留innerText，因为我们只是清空内容
                }
        }, 1000);
}

function 切换答案消失状态() {
        autoHide = !autoHide;
        var 按钮 = document.getElementById('关闭按钮');
        if (autoHide) {
                按钮.innerText = '答案消失已开';
        } else {
                按钮.innerText = '答案消失已关';
        }
}


// 语音模块-------------------------

let 启用语音 = true;


function 切换语音() {
        启用语音 = !启用语音;
        const toggleButton = document.querySelector('.toggle-button');
        toggleButton.classList.toggle('active', !启用语音);
}

function 读取字根() {
        if (启用语音) { // 只有在启用语音状态下才读取字根
                let 当前字根 = 根队列[当前索引].split("\t")[2];

                // 创建一个新的SpeechSynthesisUtterance对象
                const utterance = new SpeechSynthesisUtterance(当前字根);
                utterance.lang = 'zh-CN';

                // 使用浏览器内置的语音合成引擎来播放语音
                speechSynthesis.speak(utterance);
        }
}
// 自动语音朗读---移到下面了
// 空格语音---移到下面了
// -------------------------语音模块----

// 自动语音朗读---



if (自动模式 === "开") {


        // 自动提交---------------------------检查答案--也要启用自动代码

        document.addEventListener("DOMContentLoaded", function () {

                更新正确答案();
        });
        document.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function () {
                        更新正确答案();
                });
        });
        window.addEventListener('beforeunload', function (event) {
                更新正确答案();
        });
        function 更新正确答案() {
                正确答案 = 根队列[当前索引].split("\t")[1];
                判断答案长度的值 = 正确答案.length;
        }
        // 更新答案长度



        document.addEventListener('input', function (event) {
                if (event.target.value.length >= 判断答案长度的值) {
                        读取字根();
                }
        });

        document.getElementById("用户输入").addEventListener("input", function (event) {
                let 输入内容 = event.target.value.trim(); // 去除首尾空格

                if (输入内容 === "") {
                        检查答案();
                        读取字根();
                } else if (输入内容.length >= 判断答案长度的值) {
                        检查答案();
                } //自动获取答案长度并自动判断
        });
}

else {
        // ----------------自动提交

        // 空格提交----------------------------语音模块----检查答案--也要启用空格代码

        let 空格计数器 = 0;
        document.addEventListener('keydown', function (event) {
                if (启用语音 && event.code === 'Space') {
                        空格计数器++;
                        读取字根();
                }
        });


        document.getElementById("用户输入").addEventListener("input", function (event) {
                let 输入内容 = event.target.value;
                if (输入内容.includes(" ")) {
                        检查答案();
                        document.getElementById("用户输入").value = "";
                }
        });
        document.getElementById("用户输入").addEventListener("keydown", function (event) {
                if (event.keyCode === 32) {
                        event.preventDefault();
                        检查答案();
                } else if (event.keyCode === 13) {
                        event.preventDefault();
                        document.getElementById("用户输入").value = "";
                }
        });

        // ----------------------空格提交

}


// 打乱字根顺序
function shuffleList() {
        var currentIndex = 根队列.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = 根队列[currentIndex];
                根队列[currentIndex] = 根队列[randomIndex];
                根队列[randomIndex] = temporaryValue;
                显示当前根();
                显示所有根();
                检查答案();
        }

        var output = document.getElementById("output");
        output.innerHTML = 根队列.join("<br>");
}


// 刷新页面

document.getElementById('refreshButton').addEventListener('click', function () {
        location.reload();
        // 弹出信息
        alert('进度已保存');
});


// if (根队列 !== 根队列0) {
//         const links = document.querySelectorAll('a');
//         links.forEach(link => {
//                 link.classList.remove('bold');

//         });
//         错误显示消失函数('加载进度...');
// }



// 后移到最后函数
function 后移到最后() {
        if (根队列.length > 1) {
                let firstElement = 根队列.shift();
                根队列.push(firstElement);
                console.log("移动后的根队列：", 根队列);
                显示当前根();
                显示所有根();
                setTimeout(function () {
                        document.getElementById("用户输入").value = "";
                }, 200);
        } else {
                console.log("根队列中只有一个元素，无需移动。");
                setTimeout(function () {
                        document.getElementById("用户输入").value = "";
                }, 200);
        }
}

function 后移到前() {
        if (根队列.length > 1) {
                let lastElement = 根队列.pop(); // 移除并获取数组的最后一个元素
                根队列.unshift(lastElement); // 将获取的元素插入到数组的开头
                console.log("移动后的根队列：", 根队列);
                显示当前根();
                显示所有根();
                setTimeout(function () {
                        document.getElementById("用户输入").value = "";
                }, 200);
        } else {
                console.log("根队列中只有一个元素，无需移动。");
                setTimeout(function () {
                        document.getElementById("用户输入").value = "";
                }, 200);
        }
}


document.addEventListener('keydown', function (event) {
        if (event.key === '0') {
                后移到最后();
        }
});




// 竞赛模式 ------------
let 计时器 = null;
// 定义一个变量来跟踪竞赛模式是否激活
let 竞赛模式激活 = false;

document.getElementById('竞赛模式').onclick = function () {
        用户输入 = 1;
        检查答案() ;
        竞赛模式激活 = !竞赛模式激活;
        if (竞赛模式激活) {
                // 隐藏包含所有字根的<details>元素
                document.querySelector('.所有根').style.display = 'none';
                // 显示码表并开始计时
                const 时间Div = document.getElementById('时间');
                时间Div.style.display = 'block'; // 显示码表   
                答对总分数 = 0;

                let 总秒数 = 0;

                // 创建一个新的计时器
                if (计时器 !== null) {
                        clearInterval(计时器);
                }
                计时器 = setInterval(function () {
                        总秒数++;
                        let 小时 = Math.floor(总秒数 / 3600);
                        let 分钟 = Math.floor((总秒数 - (小时 * 3600)) / 60);
                        let 秒数 = 总秒数 - (小时 * 3600) - (分钟 * 60);

                        // 格式化时间显示为 "时:分:秒"
                        时间Div.innerHTML = `${"竞赛模式-时间：".concat(小时.toString().padStart(2, '0')).concat(":").concat(分钟.toString().padStart(2, '0')).concat(":").concat(秒数.toString().padStart(2, '0'))}`;
                }, 1000);
        } else {
                // 如果取消了竞赛模式

                // 显示之前隐藏的<details>元素
                document.querySelector('.所有根').style.display = 'block';

                // 隐藏码表
                const 时间Div = document.getElementById('时间');
                时间Div.style.display = 'none';

                // 停止计时器
                if (计时器 !== null) {
                        clearInterval(计时器);
                        计时器 = null;
                }
        }
};
// ------------竞赛模式 



// document.getElementById('学习进度').innerText = 还有多少条未学.toFixed(0);

function 计算学习进度() {
        let 学过的字根数量 = Object.keys(学过的字根).length;
        //     console.log("学过的字根数量:", 学过的字根数量);
        let 原有队列长度 = 根队列.length;
        //     console.log("原有队列长度:", 原有队列长度);
        let 还有多少条未学 = 原有队列长度 - 学过的字根数量;

        let 学习进度描述 = "学习进度:还有 " + (还有多少条未学.toFixed(0)) + " 条未学，共有 " + 原有队列长度 + " 条";
        document.getElementById('学习进度').innerText = 学习进度描述;
}

// 使用示例



var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var 是手机状态 = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
// 手机默认,无听写模式
if (自动模式 === "开" && 是手机状态) {
        听写模式 = "关";
        显示当前根();
}


function showDialog() {
        var dialog = document.getElementById("dialog");
        dialog.style.display = "block";
    }
    
    function 自定义位数() {
        var inputNumber = document.getElementById("inputNumber").value;
        var parsedNumber = parseInt(inputNumber);
        
        if (!isNaN(parsedNumber)) {
            位数 = parsedNumber;
            var dialog = document.getElementById("dialog");
            dialog.style.display = "none";
     
        } else {
            alert("请输入一个有效的数字");
        }
    }
    



function 切换按钮文字(element) {
  var 按钮 = document.getElementById("按钮");
  按钮.innerHTML = element.innerHTML;
}
function 切换按钮文字2(element) {
        var 按钮 = document.getElementById("按钮2");
        按钮.innerHTML = element.innerHTML;
      }



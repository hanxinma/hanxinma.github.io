// 获取目标容器-------------------------
const container = document.getElementById('my-select-box');

// 创建 <select> 元素
const select = document.createElement('select');
select.style.float = 'left';

// 添加选项
addOption(select, document.getElementById('mulu').innerText, '#');
addOption(select, '拼音版-汉心', 'https://hanxinma.gitee.io/hanxin/js/pinyin');
addOption(select, '汉心-自然版', 'https://hanxinma.gitee.io/hanxin/js/hxzr');
addOption(select, '汉心-小鹤版', 'https://hanxinma.gitee.io/hanxin/js/hxxh');


// 将 <select> 添加到容器中
container.appendChild(select);

// 监听 onchange 事件
select.addEventListener('change', function () {
    window.location.href = this.value;
});

// 添加选项的函数
function addOption(select, text, value) {
    const option = document.createElement('option');
    option.text = text;
    option.value = value;
    select.add(option);
}



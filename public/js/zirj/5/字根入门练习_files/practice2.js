

const onlyRootEle = document.getElementById("main-root");
const curEle = document.getElementById("cur");
const maxEle = document.getElementById("max");
const allEle = document.getElementById("all");
const rootEle = document.getElementById("root");
const codeEle = document.getElementById("code");
const inputEle = document.getElementById("input");
const progressEle = document.getElementById("progress");
// const host = 'https://tiger-code.com'
const trank = []
let loginUser = {}
let score = 0;
let account = ''
let onlyMain = onlyRootEle.checked;
let checkLength = 2;
let successCount = 0
let topChi = 0
let nowIndex = -1
let failCount = 0
let diffScore = -1
let mode = 0
function changeMainRoot() {
    onlyMain = onlyRootEle.checked;
    if (codeEle.textContent !== "") {
        codeEle.textContent = onlyMain ? root_code[index[0]].substring(0, 1) : root_code[index[0]];
    }
    inputEle.value = "";
    if (mode == 0) {
        mode = 1
    }else {
        mode = 0
    }
    checkLength = onlyMain ? 1 : 2;
}

const root_char =['jiào', 'tóng', 'bù', 'tiān', 'kě', 'qiú', 'jīng', 'jūn', 'jiāo', 'lùn', 'ān', 'suàn', 'kuài', 'pò', 'dào', 'guāng', 'bié', 'rén', 'děng', 'de', 'yuè', 'gěi', 'xiǎo', 'wèi', 'jiāng', 'mín', 'guò', 'yǒu', 'huá', 'xíng', 'lǘ', 'nián', 'guān', 'dìng', 'zhǒng', 'men', 'zhǔn', 'shuǐ', 'lái', 'suǒ', 'duō', 'zhōng', 'hòu', 'jìn', 'yòng']
const root_code = ['oq', 'te', 'dl', 'tj', 'pt', 'lu', 'og', 'oy', 'ob', 'gx', 'mx', 'yt', 'px', 'qn', 'hi', 'it', 'dp', 'ri', 'hb', 'hb', 'uz', 'ie', 'nm', 'sh', 'ow', 'vm', 'ij', 'ub', 'cq', 'nk', 'gf', 'rn', 'ig', 'hd', 'kh', 'vz', 'kg', 'jn', 'gh', 'yd', 'ht', 'kf', 'cc', 'ot', 'ur']
const total = root_char.length;// 字根总数
let pcount = 0
let maxProgress = 0;

let index = new Array(total); // 字根队列
let count = new Array(total); // 字根答对次数
setInterval(()=>{
    $("#tip").text('实在想不起可以按空格')

}, 15000)

getProgress();
function saveScore(count) {

    axios.put(host+"/users", {
        score: score,
        account: account,
        count: pcount,
        uname: loginUser.uname,
        topchi: topChi,
        passwd: loginUser.passwd
    }).then(res=>{
        reflash()
    })
}

function fhdz(func, time,count) {
    let timer
    return function() {
        let _this = this
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func(count)
        }, time)
    }
}
function showTips() {
        $('#tip').text('实在想不起时按空格')

}
const debounce = (fn, delay) =>{
    let timer = null
    return ()=>{
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.call(this)
            timer = null
        }, delay)
    }
}
let timer = null
let tiemr_save = null


function inputChanged() {
    // 只要有空格就是错的

    if (input.value.indexOf(' ') > -1) {
        count[0] = -1;
        showQuest();
        successCount = 0
        failCount++;
        $('#tip').addClass('text-red')
            changePoints(computeFail())



    }
    if (inputEle.value.length >= checkLength) {
        let oldValue = inputEle.value.substring(0, checkLength);
        // 答对，该字根进度加1
        if (oldValue === root_code[index[0]].toLowerCase().substring(0, checkLength)) {
            count[0]++;
            successCount++;
            failCount = 0;
            nextRoot();
            $('#tip').removeClass('text-red')

                changePoints(computeSuc())
            if (successCount > topChi) {
                topChi = successCount
            }


        }
        // 答错，该字根进度置为-1
        else {
            $('#tip').addClass('text-red')

            count[0] = -1;
            failCount++;
            showQuest();
            successCount = 0


            changePoints(computeFail())



         
          
        }


    }
}

function initCounter()  //初始化进度，所有字根初始学习进度为-1
{
    for (let i = 0; i < total; i++) {
        count[i] = -1;
        index[i] = i;
    }
}

function showQuest() // 显示问题
{
    rootEle.textContent = root_char[index[0]];
    if (count[0] === -1) // 第一次直接显示答案
    {
        codeEle.textContent = onlyMain ? root_code[index[0]].substring(0, 1) : root_code[index[0]];
    } else {
        codeEle.textContent = "";
    }
    inputEle.value = ""; // 清空输入框

    maxProgress = Math.max(maxProgress, index[0]);

    curEle.textContent = (index[0] + 1).toString();
    maxEle.textContent = (maxProgress + 1).toString();
    allEle.textContent = total.toString();
    progressEle.value = (maxProgress + 1).toString();
    progressEle.max = total.toString();
}

function nextRoot() // 下一个字根显示
{
    let tmp1;
    let tmp2;
    let move = 0;

    // 根据上一个字根的进度，将答对的字根移至字根队列后面
    if (count[0] === 0) {
        count[0] = 1;
        move = 2;
    } else if (count[0] === 1) {
        count[0] = 2;
        move = 4;
    } else if (count[0] === 2) {
        count[0] = 3;
        move = 8;
    } else if (count[0] === 3) {
        count[0] = 4;
        move = 12;
    } else if (count[0] === 4) {
        count[0] = 5;
        move = 20;
    } else if (count[0] === 5) {
        count[0] = 6;
        move = 30;
    } else if (count[0] === 6) {
        count[0] = 7;
        move = 60;
    } else if (count[0] === 7) {
        count[0] = 8;
        move = 100;
    } else if (count[0] >= 8) {
        count[0] = 8;
        move = total - 1;
    }

    tmp1 = index[0];
    tmp2 = count[0];
    move = Math.min(move, total- 1);
    for (let i = 0; i < move; i++) {
        index[i] = index[i + 1];
        count[i] = count[i + 1];
    }
    index[move] = tmp1;
    count[move] = tmp2;


    showQuest();
}


function getProgress() {
    let loginUser = JSON.parse(localStorage.getItem('loginUser'))

    if (loginUser) {
        account = loginUser.account
        user = loginUser
        console.log('获取在线进度....');
        axios.get(host + '/practise/'+account, {
            account: loginUser.account
        }).then(res=>{
            if (res.data.code == 200) {
                let practiseInfo = (res.data.data)

                index = JSON.parse(practiseInfo.index);
                count = JSON.parse( practiseInfo.count);
                console.log('获取成功');
                showQuest();
            }else {
                let progress = JSON.parse(window.localStorage.getItem("progress"));
                if (!progress) {
                    initCounter();
                    saveProgress()
                } else {
                    index = progress.index;
                    count = progress.count;
                    
                }
                showQuest();
            }
        })
    }else {

        let progress = JSON.parse(window.localStorage.getItem("progress"));
        if (!progress) {
            initCounter();
            saveProgress()
        } else {
            index = progress.index;
            count = progress.count;
            
        }
        showQuest();
    }}


function saveProgress() {
    window.localStorage.setItem("progress", JSON.stringify({
        "index": index,
        "count": count
    }));
    if (loginUser) {
    console.log('正在联网保存进度');
    axios.delete(host + '/practise/'+loginUser.account).then(res=>{
            axios.post(host + '/practise', {
                account: loginUser.account,
                index: JSON.stringify(index),
                count: JSON.stringify(count)
            }).then(res=>{
                console.log('保存成功');

            })
    })
}

}

function clearProgress() {
    localStorage.removeItem("progress");
    initCounter();
    saveProgress();
    maxProgress = 0;
    showQuest();
    index[0] + 1
    if (index[0] + 1 <= 240) {

        successCount = 0
        changePoints(computeFail())
    }


}
function showDrww(e) {
    if (e >= 0 && e < 200) {
        return '黑铁Ⅲ'
    }
    else if (e >=200  && e < 400) {
        return '黑铁Ⅱ'
    }else if (e >= 400&& e < 600) {
        return '黑铁Ⅰ'
    }else if (e >= 600 && e < 1100) {
        return '青铜Ⅲ'
    }else if (e >=  1100&& e < 1600) {
        return '青铜Ⅱ'
    }else if (e >= 1600 && e < 2100) {
        return '青铜Ⅰ'
    }else if (e >= 2100 && e < 2900) {
        return '白银Ⅲ'
    }else if (e >= 2900 && e < 3700) {
        return '白银Ⅱ'
    }else if (e >=  3700&& e <4500) {
        return '白银Ⅰ'
    }else if (e >=  4500&& e < 6000) {
        return '黄金Ⅲ   '
    }else if (e >=  6000&& e < 7500) {
        return '黄金Ⅱ'
    }
    else if (e >= 7500 && e < 9000) {
        return '黄金Ⅰ'
    }else if (e >= 9000 && e < 12000) {
        return '铂金Ⅳ'
    }else if (e >= 12000 && e < 15000) {
        return '铂金Ⅲ'
    }else if (e >=  15000&& e < 18000) {
        return '铂金Ⅱ'
    }else if (e >=  18000&& e < 21000) {
        return '铂金Ⅰ'
    }else if (e >=  21000&& e < 27000) {
        return '钻石Ⅴ'
    }else if (e >=  27000&& e < 33000) {
        return '钻石Ⅳ'
    }else if (e >=  33000&& e <39000) {
        return '钻石Ⅲ'
    }else if (e >=  39000&& e < 45000) {
        return '钻石Ⅱ'
    }else if (e >=  45000&& e < 51000) {
        return '钻石Ⅰ'
    }else if (e >= 51000 && e <81000 ) {
        return '超凡大虎'
    }else if (e >= 81000 && e <150000 ) {
        return '傲世之虎'
    }
    else if (e >= 150000 && e < 1140000) {
        return '最强虎人' +(Math.trunc( ( e - 150000) / 10000)+1)+"星"
    }else if (e >= 1140000 && e < 11400000) {
        return '超级秃境' +(Math.trunc( ( e - 1140000) / 1000000)+1)+"重"

    }else if (e >= 11400000) {
        return '逆天秃神';

    }
    else {
        return '神秘段位'
    }
}
$(document).ready(()=>{
    let isLog =JSON.parse( localStorage.getItem('isLog'))
    $('#input').attr('disabled',true);

    if (isLog) {
        $('.showOnLog').html('')
    }
    $('#islog').click(()=>{
        if (!isLog) {
            isLog = true
        }
    })
    $('#log-submit').click(()=>{
        // localStorage.setItem('isLog', 'true')
        $('.showOnLog').html('')
        localStorage.setItem('isLog', isLog)
    })
    
    loginUser = JSON.parse(localStorage.getItem('loginUser'))
    
    if (loginUser) {
        account = loginUser.account
        user = loginUser
        
    }
    $('.box5').click(function(){
        $(location).attr('href', './login.html')
    })
    $.get(host + '/users', (res)=>{
        if (res.code != 200) {
            return
        }
        let list = res.data
        list.sort((a, b)=>{
            return b.score - a.score
        })
        let _html = `
        <div class="rank-header">
                <div class="he1">排行</div>
                <div class="he2">虎名</div>
                <div class="he3">分数</div>
                <div class="he3">连🐔</div>

                <div class="he4">段位</div>

            </div>
        `
         
        for (let i = 0; i < list.length; i++) {
            if (loginUser)
            if (list[i].uname == loginUser.uname) {
                score = list[i].score
                topChi = list[i].topchi
                $('#score').text(score)
                nowIndex = i
                $('.ranknum').text(i+1)
                if (i == 0) {
                    $('.diffScore').text('您已经天下无敌！')
                }else {
                    diffScore = list[i-1].score-list[i].score
                    $('.diffScore').text(list[i-1].score-list[i].score+'分')

                }
                $('.tdrww').text(showDrww(list[i].score))
                $('.tchi').text(topChi+'🐔')
                $('.login-color-box').removeClass('hidden')
                $('.unlogin-color-box').addClass('hidden')

            }
            if (i < 3 ) {
                _html += `
                <div class="rank-body" id="${'line'+i}">
                <div class="he1"><img class="chapion" src="pngs/chapion${i+1}.png" alt=""></div>
                <div class="he2">${list[i].uname}</div>
                <div class="he3">${list[i].score}</div>
                <div class="he3">${list[i].topchi}</div>
                <div class="he4">${showDrww(list[i].score)}</div>

            </div>
                `
            }
            else if (list[i].score!=0) {
                _html += `
                <div class="rank-body" id="${'line'+i}">
             <div class="he1">${i+1}</div>
             <div class="he2">${list[i].uname}</div>
             <div class="he3">${list[i].score}</div>
             <div class="he3">${list[i].topchi}</div>
             <div class="he4">${showDrww(list[i].score)}</div>

           </div>
       `
            }
          
        }
        $('.rank').html(_html)
        $('#input').attr('disabled',false);

        if (nowIndex != -1) {

            $('#line'+nowIndex).addClass('colorHu')
        }
    })
})

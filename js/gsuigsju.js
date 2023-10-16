

var result = xmsj();


if (result === "yse")

 {


        function convertbd() {
            var input = document.getElementById("input").value;
            var output = input.replace(/([a-zA-Z]+),(\d+)=([a-zA-Z]?)/g, "$2,$1=$3");
            document.getElementById("output").value = output;
        }


        function convertqq() {
            // 获取输入框中的字符串
            var input = document.getElementById("input").value;

            // 将字符串中的 "字母类型,数字=" 或 "字母类型,数字=字母" 替换为 "字母类型=数字," 或 "字母类型=数字,字母"
            var output = input.replace(/([a-zA-Z]+),(\d+)=([a-zA-Z]?)/g, "$1=$2,$3");

            // 将转换后的字符串输出到输出框中
            document.getElementById("output").value = output;
        }

        function convertwubi() {
         return new Promise(function(resolve, reject) {
            var input = document.getElementById("input").value;
            var output = input.replace(/([a-zA-Z]+),(\d+)=(.*)/g, "$1	$3");
            document.getElementById("output").value = output;
          
    resolve();  // 表示排序三执行完毕
 
  });
}
        function convertdd() {
            var input = document.getElementById("input").value;
            var output = input.replace(/([a-zA-Z]+),(\d+)=(.*)/g, "$3	$1");
            document.getElementById("output").value = output;


        }

function 手心() {
    var input = document.getElementById("input").value;
    var output = input.replace(/([a-zA-Z]+),(\d+)=(.*)/g, "$3	$1	$2");
    document.getElementById("output").value = output;
}

function convertkj() {
  var input = document.getElementById("input").value;
  var output = "";
  var pattern = /([a-zA-Z]+),(\d+)=(.*)/g; // 定义正则表达式
  var match; // 声明变量用于保存匹配结果
  var map = {}; // 定义一个对象用于保存每个字母对应的字符串

  while ((match = pattern.exec(input)) !== null) {
    var letter = match[1]; // 取出匹配到的第一个分组
    var value = match[3]; // 取出匹配到的第三个分组

    if (map[letter]) {
      // 判断是否已存在相同字母的字符串，若不存在才追加
      if (map[letter].indexOf(value) === -1) {
        map[letter] += " " + value;
      }
    } else {
      map[letter] = value; // 如果不存在该字母对应的字符串，则直接赋值
    }
  }

  // 将 map 对象转换成字符串形式，并输出到输出框中
  for (var letter in map) {
    output += letter + " " + map[letter] + "\n";
  }

  document.getElementById("output").value = output;
}


        function convertwin() {
            var input = document.getElementById("input").value;
            var output = input.replace(/([a-zA-Z]+),(\d+)=(.*)/g, "$3$1");
            document.getElementById("output").value = output;
        }
        function convertkongge() {
            var input = document.getElementById("input").value;
            var output = input.replace(/([a-zA-Z]+),(\d+)=(.*)/g, "$3 $1");
            document.getElementById("output").value = output;
        }

        function convertqqsg() {
            var input = document.getElementById("input").value;
            var re = /([a-zA-Z]+)=(\d+),([a-zA-Z\u4e00-\u9fa5]+)/g;
            var output = input.replace(re, "$1,$2=$3");
            document.getElementById("input").value = output;
        }

        function convertbdsg() {
            var input = document.getElementById("input").value;
            var re = /(\d+),([a-zA-Z]+)=([a-zA-Z\u4e00-\u9fa5]+)/g;
            var output = input.replace(re, "$2,$1=$3");
            document.getElementById("input").value = output;
        }




        function convertjiajia() {
            var input = document.getElementById("input").value;
            var output = input.replace(/([a-zA-Z]+),(\d+)=([\u4e00-\u9fa5]+)/g, "$1=$3");
            document.getElementById("output").value = output;
        }






        function convertfzm() {

            var inputs = document.getElementById("input").value.split("\n"); // 将输入按照换行符分割成数组
            var output = "";
            var usedLetters = []; // 用于存储已经输出的字母

            for (var i = 0; i < inputs.length; i++) {
                var input = inputs[i];
                var parts = input.split(","); // 将字符串按照逗号和等号分割成数组

                if (parts.length > 1) { // 如果找到了逗号
                    var letter = parts[0]; // 取逗号之前的字母
                    var length = letter.length; // 获取字母的长度

                    if (length == 3 || length == 4) { // 如果字母的长度为3或4，则进行转换
                        var lastTwo = length == 3 ? letter.slice(-1) : letter.slice(-2); // 根据字母的长度来取后几位

                        var combination = parts[1].slice(2, 3) + "=" + lastTwo; // 组合出新的组合体

                        if (!usedLetters.includes(combination)) { // 如果新的组合体没有出现过，则将其添加到输出中，并将其添加到 usedLetters 中
                            output += combination + "\n";
                            usedLetters.push(combination);
                        }
                    }

                }
            }

            if (output === "") { // 如果输出为空，则说明没有符合条件的数据
                output = "没有符合条件的数据";
            }

            document.getElementById("output").value = output.trim(); // 去掉最后一个换行符，并将结果输出
        }


        function convertfzmquliangwei() {

            var inputs = document.getElementById("input").value.split("\n"); // 将输入按照换行符分割成数组
            var output = "";
            var usedLetters = []; // 用于存储已经输出的字母

            for (var i = 0; i < inputs.length; i++) {
                var input = inputs[i];
                var parts = input.split(","); // 将字符串按照逗号和等号分割成数组

                if (parts.length > 1) { // 如果找到了逗号
                    var letter = parts[0]; // 取逗号之前的字母
                    var length = letter.length; // 获取字母的长度

                    if (length == 4) { // 如果字母的长度为4，则进行转换
                        var lastTwo = letter.slice(-2); // 取后两位

                        var combination = parts[1].slice(2, 3) + "=" + lastTwo; // 组合出新的组合体

                        if (!usedLetters.includes(combination)) { // 如果新的组合体没有出现过，则将其添加到输出中，并将其添加到 usedLetters 中
                            output += combination + "\n";
                            usedLetters.push(combination);
                        }
                    }

                }
            }

            if (output === "") { // 如果输出为空，则说明没有符合条件的数据
                output = "没有符合条件的数据";
            }

            document.getElementById("output").value = output.trim(); // 去掉最后一个换行符，并将结果输出
        }



        function convertfzmquyiwei() {
            var inputs = document.getElementById("input").value.split("\n");
            var output = "";
            var usedLetters = [];

            for (var i = 0; i < inputs.length; i++) {
                var input = inputs[i];
                var parts = input.split(",");

                if (parts.length > 1) {
                    var letter = parts[0];
                    var length = letter.length;

                    if (length == 4) {
                        var secondLast = letter.charAt(2);
                        var combination = parts[1].slice(2, 3) + "=" + secondLast;

                        if (!usedLetters.includes(combination)) {
                            output += combination + "\n";
                            usedLetters.push(combination);
                        }
                    }
                }
            }

            if (output === "") {
                output = "没有符合条件的数据";
            }

            document.getElementById("output").value = output.trim();
        }



// 先var调用函数,然后if=yes..里面包含代码.是yes才执行
var result = xmsj();


if (result === "yse")

 {
 



   function exportOutput() {
  // 获取 <textarea> 元素
  const textarea = document.getElementById("output");

  // 获取文本内容
  const outputText = textarea.value.trim();

  // 创建一个隐藏的 <a> 元素
  const downloadLink = document.createElement("a");
  downloadLink.style.display = "none";

  // 设置下载链接的属性，包括文件名和编码格式
  downloadLink.href = "data:text/plain;charset=utf-8," + encodeURIComponent(outputText);
  downloadLink.download = "汉心工具导出的.txt";

  // 将下载链接添加到页面中，并触发点击事件开始下载
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // 清理下载链接对象
  document.body.removeChild(downloadLink);
}


        function importInput() {
            var input = document.getElementById("importFile");
            input.addEventListener("change", function () {
                var file = input.files[0];
                var reader = new FileReader();
                reader.readAsText(file);
                reader.onload = function () {
                    document.getElementById("input").value = reader.result;
                };
            });
            input.click();
        }
        
   }  }

function xmsj() {

  var pageText = document.body.innerText;


  var keywords = ["首页", "百度变搜狗", "汉心码转换格式工具", "WIN", "QQ变搜狗"];


  var allKeywordsFound = true;
  for (var i = 0; i < keywords.length; i++) {
    if (!pageText.includes(keywords[i])) {
      allKeywordsFound = false;
      break;
    }
  }


  const urls = [
    "https://hanxinma.gitee.io/hanxin/",
    "http://yaoxiazai.ysepan.com/",
    "http://yaoxiazai.ysepan.com/",
    "https://hanxinma.github.io/"
  ];

  let allUrlsFound = true;

  for (const url of urls) {
    if (!document.body.innerHTML.includes(`<a href="${url}"`)) {
      allUrlsFound = false;
      break;
    }
  }

  // 如果所有关键词和链接地址都被找到，则返回结果"yse"，否则返回null
  if (allKeywordsFound && allUrlsFound) {
    return "yse";
  } else {
    return null;
  }
}


function sortLines() {
  var inputText = document.getElementById('input').value;
  var lines = inputText.split('\n');

  var linesWithNumbers = [];
  var linesWithoutNumbers = [];

  // 将有数字和没有数字的行分别保存到不同的数组中
  lines.forEach(function(line) {
    if (/\d/.test(line)) {
      linesWithNumbers.push(line);
    } else {
      linesWithoutNumbers.push(line);
    }
  });

  // 只对有数字的行进行排序
  linesWithNumbers.sort(function(a, b) {
    var numA = parseInt(a.match(/\d+/));
    var numB = parseInt(b.match(/\d+/));
    return numA - numB;
  });

  var sortedLines = linesWithNumbers.concat(linesWithoutNumbers); // 合并有数字的行和没有数字的行

  var outputText = sortedLines.join('\n');
  document.getElementById('input').value = outputText;
}


function reverseSortLines() {
  var inputText = document.getElementById('input').value;
  var lines = inputText.split('\n');

  var linesWithNumbers = [];
  var linesWithoutNumbers = [];

  // 将有数字和没有数字的行分别保存到不同的数组中
  lines.forEach(function(line) {
    if (/\d/.test(line)) {
      linesWithNumbers.push(line);
    } else {
      linesWithoutNumbers.push(line);
    }
  });

  // 只对有数字的行进行排序
  linesWithNumbers.sort(function(a, b) {
    var numA = parseInt(a.match(/\d+/));
    var numB = parseInt(b.match(/\d+/));
    return numB - numA; // 倒序排序
  });

  var sortedLines = linesWithNumbers.concat(linesWithoutNumbers); // 合并有数字的行和没有数字的行

  var outputText = sortedLines.join('\n');
  document.getElementById('input').value = outputText;
}



function sortLines备份可以多次点击(reverse) {
			// 获取输入框内容
			var inputText = document.getElementById('input').value;
			// 将文本分割成行
			var lines = inputText.split('\n');
			// 对每一行进行排序
			lines.sort(function(a, b) {
				var numA = parseInt(a.split('=')[0].match(/\d+/));
				var numB = parseInt(b.split('=')[0].match(/\d+/));
				if (isNaN(numA)) {
					return -1; // 如果a没有数字，则排在前面
				} else if (isNaN(numB)) {
					return 1; // 如果b没有数字，则排在前面
				} else {
					return numA - numB; // 否则按数字大小排序
				}
			});
			if (reverse) {
				lines.reverse(); // 如果需要倒序排序，则调用reverse()方法
			}
			// 将排好序的文本重新组合成字符串
			var outputText = lines.join('\n');
			// 将结果写入输出框
			document.getElementById('input').value = outputText;
		}
		
		   function reverseText() {
      var inputText = document.getElementById('input').value;  // 获取a文本框的值  反序反排
      var lines = inputText.split('\n');  // 将文本按行分割成数组
      var reversedLines = lines.reverse();  // 倒序排列数组元素
      var reversedText = reversedLines.join('\n');  // 将倒序后的数组元素按行拼接为字符串
      document.getElementById('input').value = reversedText;  // 将倒序后的值设置给b文本框
    }
    
 
function 去重() {

  var inputText = document.getElementById('input').value;  // 获取input文本框的值
  var lines = inputText.split('\n');  // 将文本按行分割成数组
  var nonEmptyLines = lines.filter(line => line.trim() !== '');  // 过滤掉空白行
  var uniqueLines = [...new Set(nonEmptyLines)]; // 使用Set数据结构去除重复行，并转换为数组
  var resultText = uniqueLines.join('\n');  // 将去重后的数组元素按行拼接为字符串
  document.getElementById('input').value = resultText;  // 将去重后的值设置给input文本框
}


function oopp() {
  var inputText = document.getElementById('input').value;  // 获取input文本框的值
  var lines = inputText.split('\n');  // 将文本按行分割成数组

  // 遍历每一行进行处理
  for (var i = lines.length - 1; i >= 0; i--) {
    var words = lines[i].split('	');  // 将当前行按制表符分割成单词数组
    
    // 判断第一个单词是否满足条件（6个字母）
    if (words.length > 0 && words[0].length === 6) {
      words[0] = words[0].replace('oopp', 'oo');  // 替换第一个单词中的'oopp'
    } else if (words.length > 0 && words[0].length === 7 && words[0].includes('oopp')) {
      lines.splice(i, 1);  // 删除这一行
    }
    
    lines[i] = words.join('	');  // 将处理后的单词数组按制表符拼接为字符串
  }

  var resultText = lines.join('\n');  // 将处理后的数组元素按行拼接为字符串
  document.getElementById('input').value = resultText;  // 将处理后的值设置给input文本框
}





 function 首字母() {
            var inputText  = document.getElementById("input").value;
            var lines = inputText.split("\n"); // 以换行符分割成多行文本
            var convertedText = "";

            for (var i = 0; i < lines.length; i++) {
                var words = lines[i].split(/\s+/); // 在每行中以空格分割成单词
                for (var j = 0; j < words.length; j++) {
                    if (words[j].length > 0) {
                        convertedText += words[j][0]; // 取每个单词的第一个字母
                    }
                }
                convertedText += "\n"; // 每行结尾添加换行符
            }

            document.getElementById("output").textContent = convertedText;
        }
        
        
        
        
function 匹配空() {
  var sourceData = document.getElementById("input").value;
  var matchText = document.getElementById("output").value;

  var sourceLines = sourceData.split("\n");
  var matchLines = matchText.split("\n");

  var result = "";

  for (var i = 0; i < matchLines.length; i++) {
    var matchLine = matchLines[i].trim();
    var foundMatch = false;

    for (var j = 0; j < sourceLines.length; j++) {
      var sourceLineParts = sourceLines[j].split(" ");
      var sourceLine = sourceLineParts[0].replace(/\s+/g, "").trim();

      if (matchLine === sourceLine) {
        result += sourceLines[j].trim() + "\n";
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      result += matchLine + "\n";
    }
  }

  document.getElementById("output").value = result;
}


        
function 匹配引() {
  var sourceData = document.getElementById("input").value;
  var matchText = document.getElementById("output").value;

  var sourceLines = sourceData.split("\n");
  var matchLines = matchText.split("\n");

  var result = "";

  for (var i = 0; i < matchLines.length; i++) {
    var matchLine = matchLines[i].trim();
    var foundMatch = false;

    for (var j = 0; j < sourceLines.length; j++) {
      var sourceLineParts = sourceLines[j].split("'");
      var sourceLine = sourceLineParts[0].replace(/\s+/g, "").trim();

      if (matchLine === sourceLine) {
        result += sourceLines[j].trim() + "\n";
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      result += matchLine + "\n";
    }
  }

  document.getElementById("output").value = result;
}

        
function 匹配逗() {
  var sourceData = document.getElementById("input").value;
  var matchText = document.getElementById("output").value;

  var sourceLines = sourceData.split("\n");
  var matchLines = matchText.split("\n");

  var result = "";

  for (var i = 0; i < matchLines.length; i++) {
    var matchLine = matchLines[i].trim();
    var foundMatch = false;

    for (var j = 0; j < sourceLines.length; j++) {
      var sourceLineParts = sourceLines[j].split(",");
      var sourceLine = sourceLineParts[0].replace(/\s+/g, "").trim();

      if (matchLine === sourceLine) {
        result += sourceLines[j].trim() + "\n";
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      result += matchLine + "\n";
    }
  }

  document.getElementById("output").value = result;
}



function 长短排一() {
var inputText = document.getElementById("input").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  // 对每行文本按字符长度进行排序
  lines.sort(function(a, b) {
    return a.length - b.length;
  });

  var sortedText = lines.join("\n"); // 将排序后的每行文本重新连接起来

  document.getElementById("input").value = sortedText; // 使用value属性将排好序的文本放回输入文本框中
}
function 长短排二() {
  var outputText = document.getElementById("output").value;
  var lines = outputText.split("\n"); // 以换行符分割成多行文本

  // 对每行文本按字符长度进行排序
  lines.sort(function (a, b) {
    return a.length - b.length;
  });

  var sortedText = lines.join("\n"); // 将排序后的每行文本重新连接起来

  document.getElementById("output").value = sortedText; // 使用value属性将排好序的文本放回输出文本框中
}

function 去首尾空格() {
  var inputText = document.getElementById("input").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  // 遍历每行文本并去除首尾空格
  for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i].trim();
  }

  var modifiedText = lines.join("\n"); // 将修改后的每行文本重新连接起来

  document.getElementById("input").value = modifiedText; // 使用value属性将修改后的文本放回输入文本框中
}

function 去空行() {
  var inputText = document.getElementById("input").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  // 过滤掉空行
  lines = lines.filter(function(line) {
    return line.trim() !== "";
  });

  var modifiedText = lines.join("\n"); // 将修改后的每行文本重新连接起来

  document.getElementById("input").value = modifiedText; // 使用value属性将修改后的文本放回输入文本框中
}





function 搜狗格式() {
  return new Promise(function(resolve, reject) {
  var inputText = document.getElementById("input").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  var groups = {}; // 使用对象来存储每个字符组
  for (var i = 0; i < lines.length; i++) {
    // 使用正则表达式按照多个空格符进行分割键值对
    var pair = lines[i].split(/\s+/); 
    var key = pair[0].trim(); // 去除键的首尾空格
    var value = pair[1] ? pair[1].trim() : ""; // 如果第二列存在，则去除其首尾空格，否则设为空字符串

    var groupKey = key.split(" ")[0]; // 使用第一个字符组作为键
    var groupValue = key.split(" ")[1]; // 使用第二个字符作为值

    if (!groups.hasOwnProperty(groupKey)) {
      groups[groupKey] = [];
    }
    groups[groupKey].push({ value: value, groupValue: groupValue });
  }

  var sortedText = "";
  for (var groupKey in groups) {
    if (groups.hasOwnProperty(groupKey)) {
      var group = groups[groupKey];

      for (var j = 0; j < group.length; j++) {
        var item = group[j];
        var sortNumber = j + 1;

        if (groupKey === "冷僻字符") {
          sortNumber = 1; // 如果第一列是冷僻字符，直接将序号设为1
        }

        sortedText += groupKey + "," + sortNumber + "=" + item.value + "\n";
      }
    }
  }

  document.getElementById("output").value = sortedText; // 使用value属性将排好序的文本放入输出文本框中
   
   
    resolve();  // 表示排序三执行完毕
    window.alert('执行完毕');
  });
}




function 搜狗格式二() {
  return new Promise(function(resolve, reject) {
  var inputText = document.getElementById("output").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  var groups = {}; // 使用对象来存储每个字符组
  for (var i = 0; i < lines.length; i++) {
    // 使用正则表达式按照多个空格符进行分割键值对
    var pair = lines[i].split(/\s+/); 
    var key = pair[0].trim(); // 去除键的首尾空格
    var value = pair[1] ? pair[1].trim() : ""; // 如果第二列存在，则去除其首尾空格，否则设为空字符串

    var groupKey = key.split(" ")[0]; // 使用第一个字符组作为键
    var groupValue = key.split(" ")[1]; // 使用第二个字符作为值

    if (!groups.hasOwnProperty(groupKey)) {
      groups[groupKey] = [];
    }
    groups[groupKey].push({ value: value, groupValue: groupValue });
  }

  var sortedText = "";
  for (var groupKey in groups) {
    if (groups.hasOwnProperty(groupKey)) {
      var group = groups[groupKey];

      for (var j = 0; j < group.length; j++) {
        var item = group[j];
        var sortNumber = j + 1;

        if (groupKey === "冷僻字符") {
          sortNumber = 1; // 如果第一列是冷僻字符，直接将序号设为1
        }

        sortedText += groupKey + "," + sortNumber + "=" + item.value + "\n";
      }
    }
  }

  document.getElementById("output").value = sortedText; // 使用value属性将排好序的文本放入输出文本框中
   
  
    resolve();  // 表示排序三执行完毕
    window.alert('执行完毕');
  });
}



function 左右互换() {
  var inputText = document.getElementById("input").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  // 处理每一行的文本
  var modifiedLines = lines.map(function(line) {
    var columns = line.trim().split(/\s+/); // 以空格区分列，并去除首尾空白字符

    // 检查是否有足够的列进行交换
    if (columns.length >= 2) {
      // 交换第一列和第二列的位置
      var temp = columns[0];
      columns[0] = columns[1];
      columns[1] = temp;
    }

    return columns.join("	"); // 将修改后的列重新连接起来，用空格分隔
  });

  var modifiedText = modifiedLines.join("\n"); // 将修改后的每行文本重新连接起来

  document.getElementById("input").value = modifiedText; // 使用value属性将修改后的文本放回输入文本框中
}



function 替换原本() {

  var dialog = document.createElement('div');
  dialog.style.position = 'fixed';
  dialog.style.top = '70%';
  dialog.style.left = '50%';
  dialog.style.transform = 'translate(-50%, -50%)';
  dialog.style.background = '#fff';
  dialog.style.padding = '20px';
  dialog.style.border = '1px solid #ccc';
  
  
  var findInput = document.createElement('input');
  findInput.setAttribute('type', 'text');
  findInput.setAttribute('placeholder', '查找');
  findInput.style.marginBottom = '10px';
  
  var replaceInput = document.createElement('input');
  replaceInput.setAttribute('type', 'text');
  replaceInput.setAttribute('placeholder', '替换');
  replaceInput.style.marginBottom = '10px';

  var findButton = document.createElement('button');
   findButton.style.marginRight = '10px';
  findButton.innerHTML = '查找';
  findButton.style.marginRight = '10px';
  findButton.addEventListener('click', function() {
    var searchText = findInput.value;
    findText(searchText);
  });

  var replaceButton = document.createElement('button');
  replaceButton.innerHTML = '替换';
  replaceButton.style.marginRight = '10px';
  replaceButton.addEventListener('click', function() {
    var searchText = findInput.value;
    var replaceText = replaceInput.value;
    replaceTextFn(searchText, replaceText);
  });

  var closeButton = document.createElement('button');
  closeButton.innerHTML = '关闭';
  closeButton.style.float = 'right';
  closeButton.addEventListener('click', function() {
    document.body.removeChild(dialog);
  });

  dialog.appendChild(findInput);
  dialog.appendChild(replaceInput);
  dialog.appendChild(findButton);
  dialog.appendChild(replaceButton);
  dialog.appendChild(closeButton);

  document.body.appendChild(dialog);
}

function findText(searchText) {
  var text = document.getElementById('input').value;
  if (text.indexOf(searchText) !== -1) {
    alert('找到了匹配的文本：' + searchText);
  } else {
    alert('未找到匹配的文本：' + searchText);
  }
}

function replaceTextFn(searchText, replaceText) {
  var inputElement = document.getElementById('input');
  var text = inputElement.value;
  var newText = text.replace(new RegExp(searchText, 'g'), replaceText);
  inputElement.value = newText;
  alert('替换完成');
}


function 替换() {

  var dialog = document.createElement('div');
  dialog.style.position = 'fixed';
  dialog.style.top = '65%';
  dialog.style.left = '50%';
  dialog.style.transform = 'translate(-50%, -50%)';
  dialog.style.background = '#fff';
  dialog.style.padding = '23px';
  dialog.style.border = '1px solid #ccc';
  dialog.style.width = '700px';  // 设置宽度为 400px
  
  var findInput = document.createElement('input');
  findInput.setAttribute('type', 'text');
  findInput.setAttribute('placeholder', '查找');
  findInput.style.marginBottom = '10px';
  
  var replaceInput = document.createElement('input');
  replaceInput.setAttribute('type', 'text');
  replaceInput.setAttribute('placeholder', '替换');
  replaceInput.style.marginBottom = '10px';
  
  var regexCheckbox = document.createElement('input');
  regexCheckbox.setAttribute('type', 'checkbox');
  regexCheckbox.style.marginBottom = '10px';

  var regexLabel = document.createElement('label');
  regexLabel.innerHTML = '启用正则';
  regexLabel.appendChild(regexCheckbox);
  
  var findButton = document.createElement('button');
  findButton.style.marginRight = '10px';
  findButton.innerHTML = '查找';
  findButton.style.marginRight = '10px';
  findButton.addEventListener('click', function() {
    var searchText = findInput.value;
    var useRegex = regexCheckbox.checked;
    findText(searchText, useRegex);
  });
  
  var replaceButton = document.createElement('button');
  replaceButton.innerHTML = '替换';
  replaceButton.style.marginRight = '10px';
  replaceButton.addEventListener('click', function() {
    var searchText = findInput.value;
    var replaceText = replaceInput.value;
    var useRegex = regexCheckbox.checked;
    replaceTextFn(searchText, replaceText, useRegex);
  });
  
  var closeButton = document.createElement('button');
  closeButton.innerHTML = '关闭';
  closeButton.style.float = 'right';
  closeButton.addEventListener('click', function() {
    document.body.removeChild(dialog);
  });
  
  dialog.appendChild(findInput);
  dialog.appendChild(replaceInput);
  dialog.appendChild(regexLabel);
  dialog.appendChild(findButton);
  dialog.appendChild(replaceButton);
  dialog.appendChild(closeButton);
  
  document.body.appendChild(dialog);
}

function findText(searchText, useRegex) {
  var text = document.getElementById('input').value;
  var pattern = useRegex ? new RegExp(searchText, 'g') : searchText;
  
  if (useRegex && !isValidRegexPattern(searchText)) {
    alert('输入的正则表达式无效，请重新输入');
    return;
  }
  
  if (text.search(pattern) !== -1) {
    alert('有找到,相关内容,如果需要高亮显示,请点确定后,按ctrl+f查找：' + searchText);
  } else {
    alert('未找到匹配的文本：' + searchText);
  }
}

function replaceTextFn(searchText, replaceText, useRegex) {
  var inputElement = document.getElementById('input');
  var text = inputElement.value;
  var pattern = useRegex ? new RegExp(searchText, 'g') : searchText;

  if (useRegex && !isValidRegexPattern(searchText)) {
    alert('输入的正则表达式无效，请重新输入');
    return;
  }



  var newText = text;
  var match = newText.match(pattern);
  while (match !== null) {
    newText = newText.replace(pattern, replaceText);
    match = newText.match(pattern);
  }

  inputElement.value = newText;
  alert('替换完成,如数据很多,请等待一会');
}

function isValidRegexPattern(pattern) {
  try {
    new RegExp(pattern);
    return true;
  } catch (e) {
    return false;
  }
}


function 查找() {

    alert('请按下 Ctrl + F 组合键调出浏览器的查找功能');
}



function 转双拼() {
  window.open("https://hanxinma.gitee.io/hanxin/js/shuangpin.html", "_blank");
}

function 删多余() {
 var inputText = document.getElementById("input").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  // 过滤出有等号且不含有☆的行，并返回新的行数组
  var filteredLines = lines.filter(function(line) {
    return !(line.includes("=") && line.includes("☆")); // 只保留不同时包含 "=" 和 "☆" 的行
  });

  var modifiedText = filteredLines.join("\n"); // 将过滤后的每行文本重新连接起来

  document.getElementById("input").value = modifiedText; // 使用 value 属性将修改后的文本放回输入文本框中
}

function 删无等号的行() {
  var inputText = document.getElementById("input").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  // 过滤出有等号的行，并返回新的行数组
  var filteredLines = lines.filter(function(line) {
    return line.includes("="); // 只保留包含 "=" 的行
  });

  var modifiedText = filteredLines.join("\n"); // 将过滤后的每行文本重新连接起来

  document.getElementById("input").value = modifiedText; // 使用 value 属性将修改后的文本放回输入文本框中
}


function 音形() {
  var inputText = document.getElementById("input").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  var processedLines = lines.map(function(line) {
    var letters = line.split(""); // 将每行文本转换为字符数组
    if (letters.length < 4) {
      return line; // 如果小于4个字母，直接返回原始文本
    } else if (letters.length === 4) {
      return line; // 如果是4个字母，直接返回原始文本
    } else if (letters.length === 6) {
      return letters[0] + letters[2] + letters[4] + letters[5]; // 取第1, 3, 5和6个字母
    } else if (letters.length === 8) {
      return letters[0] + letters[2] + letters[4] + letters[6]; // 取第1, 3, 5, 7和倒数第2个字母
    } else if (letters.length > 8) {
      return letters[0] + letters[2] + letters[4] + letters[letters.length - 2]; // 取第1, 3, 5个字母和倒数第2个字母
    } else {
      return ""; // 其他情况返回空字符串
    }
  });

  var modifiedText = processedLines.join("\n"); // 将处理后的每行文本重新连接起来

  document.getElementById("output").value = modifiedText; // 使用 value 属性将修改后的文本放回输入文本框中
}

function 音形二() {
  var inputText = document.getElementById("input").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  var processedLines = lines.map(function(line) {
    var letters = line.split(""); // 将每行文本转换为字符数组
    if (letters.length < 4) {
      return line; // 如果小于4个字母，直接返回原始文本
    } else if (letters.length === 4) {
      return line; // 如果是4个字母，直接返回原始文本
    } else if (letters.length === 6) {
      return letters[0] + letters[1] + letters[2] + letters[4]; // 取第1, 3, 5和6个字母
    } else if (letters.length === 8) {
      return letters[0] + letters[2] + letters[4] + letters[6]; // 取第1, 3, 5, 7和倒数第2个字母
    } else if (letters.length > 8) {
      return letters[0] + letters[2] + letters[4] + letters[letters.length - 2]; // 取第1, 3, 5个字母和倒数第2个字母
    } else {
      return ""; // 其他情况返回空字符串
    }
  });

  var modifiedText = processedLines.join("\n"); // 将处理后的每行文本重新连接起来

  document.getElementById("output").value = modifiedText; // 使用 value 属性将修改后的文本放回输入文本框中
}

function 删无等号的行二() {
  var inputText = document.getElementById("input").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  // 过滤出有等号的行，并返回新的行数组
  var filteredLines = lines.filter(function(line) {
    return line.includes("="); // 只保留包含 "=" 的行
  });

  var modifiedText = filteredLines.join("\n"); // 将过滤后的每行文本重新连接起来

  document.getElementById("input").value = modifiedText; // 使用 value 属性将修改后的文本放回输入文本框中
}

      function 转js字典() {
        // 获取输入框的值
        const input = document.getElementById('output').value;

        // 将输入的文本转换为对象
        const obj = {};
        const lines = input.trim().split('\n');
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line) {
            const [key, ...values] = line.split(/\s+/);
            obj[key] = values.map(value => `'${value}'`);
          }
        }

        // 将对象转换为 JavaScript 的字面量表达式
        const jsCode = JSON.stringify(obj)
          .replace(/"([^"]+)":/g, '\'$1\':')
          .replace(/"},/g, '"},\n')
          .replace(/"/g, '');

        // 显示转换结果
        document.getElementById('output').value = jsCode;
      }


function 字典换行() {
  const inputData = document.getElementById("output").value.trim();
  if (!inputData) {
    alert("请先输入需要换行的数据！");
    return;
  }

  const data = JSON.parse(inputData.split("'").join('"')); // 将单引号替换为双引号，再解析为JS对象

  let outputStr = "";
  for (const key in data) {
    const values = data[key].map(item => `'${item}'`).join(", ");
    outputStr += `'${key}': [${values}],\n`;
  }
  outputStr = outputStr.slice(0, -2); // 去掉最后一个逗号和换行符

  // 输出数据到输出文本框
  document.getElementById("output").value = outputStr;
}
function 一个空格() {
const inputData = document.getElementById("input").value.trim();
  if (!inputData) {
    alert("请先输入需要替换的数据！");
    return;
  }

  const outputData = inputData.replace(/\t/g, " ");

  // 输出数据到输出文本框
  document.getElementById("output").value = outputData;
}

// 999


function 排序一() {
  return new Promise(function(resolve, reject) {
  var inputText = document.getElementById('input').value;
  var lines = inputText.split('\n');

  var groups = {};

  lines.forEach(function(line) {
    var index = line.indexOf(',');
    if (index >= 0) {
      var key = line.substring(0, index);
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(line);
    }
  });

  var sortedLines = [];
  for (var key in groups) {
    if (groups.hasOwnProperty(key)) {
      var groupLines = groups[key];
      
      // 对组内的数字进行排序  同字母组的,数字全部放一起
      groupLines.sort(function(a, b) {
        var numberA = parseInt(a.substring(a.indexOf(',') + 1));
        var numberB = parseInt(b.substring(b.indexOf(',') + 1));
        return numberA - numberB;
      });
      
      // 将排序后的行加入到 sortedLines 数组中
      sortedLines = sortedLines.concat(groupLines);
    }
  }

  var outputText = sortedLines.join('\n');
  document.getElementById('input').value = outputText;
 resolve();  // 表示排序一执行完毕
  window.alert('执行完毕排序一');
  });
}
function 排序二() {
  return new Promise(function(resolve, reject) {
  var inputText = document.getElementById('input').value;
  var lines = inputText.split('\n');

  var groups = {};
  var sortedLines = [];

  lines.forEach(function(line) {
    var index = line.indexOf('=');
    if (index >= 0) {
      var key = line.substring(0, index);
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(line);
    }
  });

  for (var key in groups) {
    if (groups.hasOwnProperty(key)) {
      var groupLines = groups[key];

      // 只保留第一个行  其他重码数字行.放下面
      sortedLines.push(groupLines[0]);
      
    }
  }

  for (var key in groups) {
    if (groups.hasOwnProperty(key)) {
      var groupLines = groups[key];

      // 将相同组的其他行放到最下方
      if (groupLines.length > 1) {
        sortedLines = sortedLines.concat(groupLines.slice(1));
      }
    }
  }

  var outputText = sortedLines.join('\n');
  document.getElementById('input').value = outputText;
    resolve();  // 表示排序二执行完毕
     window.alert('执行完毕排序二');
  });
}

function 排序三() {
  return new Promise(function(resolve, reject) {
    var inputText = document.getElementById('input').value;
    var lines = inputText.split('\n');

    var groups = {};
    var sortedLines = [];

    lines.forEach(function(line) {
      var index = line.indexOf(',');
      if (index >= 0) {
        var key = line.substring(0, index).trim();
        if (!groups[key]) {
          groups[key] = [];
        }
        groups[key].push(line);
      }
    });

    for (var key in groups) {
      if (groups.hasOwnProperty(key)) {
        var groupLines = groups[key];
        sortedLines = sortedLines.concat(groupLines);
      }
    }
    
    // 去除重复行  没有,号的会删了
    sortedLines = Array.from(new Set(sortedLines));

    var outputText = sortedLines.join('\n');
    document.getElementById('input').value = outputText;
    
    resolve();  // 表示排序三执行完毕
    window.alert('执行完毕排序三');
  });
}


async function 排序组合() {
  try {
    await 排序一();
    await 排序二();
    await 排序三();
   
    提示音();  // 提示音调用
    window.alert('所有排序函数执行完毕');
  } catch (error) {

    window.alert('错误');
  }
}


async function 排序新搜狗() {
  try {
    await 排序一();
    await 排序二();
    await 排序三();
     await convertwubi();
     await 搜狗格式二();
   
    提示音();  // 提示音调用
    window.alert('所有排序函数执行完毕');
  } catch (error) {

    window.alert('错误');
  }
}


async function 五笔变搜狗() {
  try {
  
     await convertwubi();
     await 搜狗格式二();
   
    提示音();  // 提示音调用
    window.alert('所有排序函数执行完毕');
  } catch (error) {

    window.alert('错误');
  }
}


async function 排序加五笔() {
  try {
    await 排序一();
    await 排序二();
    await 排序三();
     await convertwubi();
    
   
    提示音();  // 提示音调用
    window.alert('所有排序函数执行完毕');
  } catch (error) {

    window.alert('错误');
  }
}

async function 排序加多多() {
  try {
    await 排序一();
    await 排序二();
    await 排序三();
     await convertdd();
    
   
    提示音();  // 提示音调用
    window.alert('所有排序函数执行完毕');
  } catch (error) {

    window.alert('错误');
  }
}


function 同类后排() {
      const input = document.getElementById('input').value;
      const output = document.getElementById('output');

      let result = '';
      const map = new Map();

      // 利用正则表达式将输入的文本解析成键值对
      const matches = input.matchAll(/^(\w+)\s+(.*)$/gm);
      for (const match of matches) {
        const key = match[1];
        const value = match[2];

          // 检查当前键是否已存在，若存在，则将对应的值追加到已有的值后面，中间添加一个空格
    if (map.has(key)) {
      map.set(key, map.get(key) + '	' + value);
    } else {
      map.set(key, value);
    }
  }

      // 将合并后的结果拼接为字符串
      for (const [key, value] of map) {
        result += key + '\t' + value + '\n';
      }

      output.value = result;
    }
    
    
    
    
       function 还原() {
  const input = document.getElementById('output').value;
  const output = document.getElementById('output');

  let result = '';

  // 利用正则表达式解析输入的文本
  const lines = input.split('\n');
  for (const line of lines) {
    const items = line.split(/\s+/);
    const key = items[0];
    const values = items.slice(1);

    for (const value of values) {
      result += key + ' ' + value + '\n'; // 按照要求添加 键值对
    }
  }

  output.value = result;
}



    function 提示音() {
      const audio = new AudioContext();
      const oscillator = audio.createOscillator();
      oscillator.frequency.value = 500; // 提示音音色
      oscillator.connect(audio.destination);
      oscillator.start();
      oscillator.stop(audio.currentTime + 0.5); // 提示音时间
    }


function 五个字母过滤掉() {
            var input = document.getElementById("input").value;
            var lines = input.split("\n");
            var filteredLines = lines.filter(line => {
                var columns = line.trim().split(/\s+/); // 使用正则表达式分割多个空格
                var firstColumn = columns[0] || ""; // 获取第一列内容（如果没有，则为空字符串）
                return !(countLetters(firstColumn) > 4); // 判断第一列字母数是否大于4
            });

            var output = filteredLines.join("\n");
            document.getElementById("output").value = output;
        }

        function countLetters(word) {
            return word.replace(/[^a-zA-Z]/g, "").length; // 使用正则表达式替换非字母字符，并计算长度
        }



  function 过滤js() {
    // 获取输入框中的内容
    const input = document.getElementById('input').value;

    // 对于以 <img 开头的行，保留其中的图片链接
    const filteredInput = input.replace(/^(<img\s+src=[^>]+>|[^\n]*$)/gm, function(match, group) {
      if (match.startsWith('<img src=')) {
        return match; // 如果以 <img src= 开头，不做处理
      } else {
        return match.replace(/<!--[\s\S]*?-->|(?<!\S)\/\/[^\n]*|\/\*[\s\S]*?\*\//g, '');
      }
    });

    // 删除多余的空行
    const finalOutput = filteredInput.replace(/\n{2,}/g, '\n');

    // 将处理后的内容显示在输出框中
    document.getElementById('output').value = finalOutput;
    
  }
  
function 去除等号() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');

  // 进行数据处理
  const processedData = processInput(input);

  // 将处理后的结果显示在输出框中，使用innerHTML属性保留换行符
  output.innerHTML = processedData;
}

function processInput(input) {
  // 删除",数字="引号中的数据类型，并将其替换为制表符，并保留输入中的换行符
  const regex = /,(\w+)=/g;
  const replacedInput = input.replace(regex, '\t');

  // 将数据存储到临时列表
  const tempList = replacedInput.split('\n');

  // 对换位置并过滤掉值为0和undefined的数据
  const processedData = tempList.map(item => {
    const [key, value] = item.split('\t');
    return `${value}\t${key}`;
  }).filter(item => {
    const [value, key] = item.split('\t');
    return parseFloat(value) !== 0 && value !== "undefined";
  }).join('\n');

  return processedData;
}



  function 左右互换2() {
  var inputText = document.getElementById("output").value;
  var lines = inputText.split("\n"); // 以换行符分割成多行文本

  // 处理每一行的文本
  var modifiedLines = lines.map(function(line) {
    var columns = line.trim().split(/\s+/); // 以空格区分列，并去除首尾空白字符

    // 检查是否有足够的列进行交换
    if (columns.length >= 2) {
      // 交换第一列和第二列的位置
      var temp = columns[0];
      columns[0] = columns[1];
      columns[1] = temp;
    }

    return columns.join("	"); // 将修改后的列重新连接起来，用空格分隔
  });

  var modifiedText = modifiedLines.join("\n"); // 将修改后的每行文本重新连接起来

  document.getElementById("output").value = modifiedText; // 使用value属性将修改后的文本放回输入文本框中
}

  
  
  
if (window.location.href.indexOf("https://hanxinma.gitee.io") > -1 || window.location.href.indexOf("https://hanxinma.github.io") > -1) { 
// if (window.location.href.indexOf("https://hanxinma.gitee.io") > -1 || window.location.href.indexOf("https://hanxinma.github.io") > -1) {
// 打字触发功能

var questions = [
  {
    question: "\n【验证码】\n请问 学 这个字,汉心码两个形码是什么,填两个小写字母？",
    answer: "ez"
  },
    {
    question: "\n【验证码】\n请问 森 这个字,汉心码两个形码是什么,填两个小写字母？",
    answer: "ll"
  },
      {
    question: "\n【验证码】\n请问 鱼 这个字,汉心码两个形码是什么,填两个小写字母？",
    answer: "ea"
  },
        {
    question: "\n【验证码】\n请问 宝 这个字,汉心码两个形码是什么,填两个小写字母？",
    answer: "gy"
  },
          {
    question: "\n【【验证码】】\n请问 国 这个字,汉心码两个形码是什么,填两个小写字母？",
    answer: "wy"
  },
];

var answered = false;

document.getElementById("executeBtn").addEventListener("click", function() {
  if (answered) {
  
         var functionName = prompt("VIP功能, 请输入:  去重, oopp, 首字母, 去首尾空格, 去空行, 长短排一,二，手心，匹配空,引,逗，左右互换，查找, 搜狗格式, 替换, 转双拼, 删无等号的行, 二，字典换行，转js字典,排序组合,一,二三,过滤js,五个字母过滤掉,同类后排,还原,排序加多多,排序加五笔，音形，删多余");
         

    if (typeof window[functionName] === "function") {
      window[functionName]();
    } else {
      alert("输入错误！");
    }
  } else {
    var randomIndex = Math.floor(Math.random() * questions.length);
    var questionObj = questions[randomIndex];
    var answer = prompt(questionObj.question);

    if (answer === questionObj.answer) {
      answered = true;
      

         var functionName = prompt("VIP功能, 请输入:  去重, oopp, 首字母, 去首尾空格, 去空行, 长短排一,二，手心，匹配空,引,逗，左右互换，查找, 搜狗格式, 替换, 转双拼, 删无等号的行, 二，字典换行，转js字典,排序组合,一,二三,过滤js,五个字母过滤掉,同类后排,还原,排序加多多,排序加五笔，音形，删多余");

         
      

      if (typeof window[functionName] === "function") {
        window[functionName]();
      } else {
        alert("输入错误！");
      }
    } else {
      alert("回答错误！可以点首页,找汉心码表找答案");
    }
  }
});

var reference = 

"VIP功能, 有:  去重, oopp, 首字母, 去首尾空格, 去空行, 长短排，匹配空,引,逗，左右互换，查找, 转搜狗格式, 替换, 转双拼, 删无等号的行, 二，字典换行，转js字典,新排序,过滤js,五个字母过滤掉,同类后排,还原,,,还有更多,,,,"

;

questions.forEach(function(question) {
  question.question = reference + question.question;
});



}
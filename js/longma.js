

let 根队列0 =['ian\tm\t一安', 'ang\th\t昂', 'ia\tw\t一啊鸭', 'uan\tr\t无安', 'er\ter\t屙;', 'ai\tl\t哎', 'uang\td\t无昂汪', 'un\tp\t晕', 'iao\tc\t一凹', 'ui\tv\t薇', 'eng\teg\t哼', 'ie\tx\t噎', 'eng\tg\t哼', 'ch\ti\t吃', 'zh\tv\t只', 've\tt\t约', 'ue\tt\t约', 'ang\tah\t昂', 'iong\ts\t一翁', 'a\taa\t啊', 'ing\ty\t鹰', 'iu\tq\t优', 'ong\ts\t翁', 'e\tee\t屙', 'uai\ty\t屋挨', 'an\tj\t安', 'in\tn\t音', 'ao\tk\t凹', 'ua\tw\t无挖', 'uo\to\t无窝', 'ou\tb\t欧', 'iang\td\t一肮', 'o\too\t窝', 'ei\tz\t黑', 'sh\tu\t是', 'en\tf\t恩']
let 根队列2 = ['in\tb\t音', 'an\tj\t安', 'ue\tt\t约', 'iu\tq\t优', 'un\ty\t晕', 'o\too\t窝', 'uai\tk\t屋挨', 'ia\tx\t一啊鸭', 'eng\teg\t哼', 'iang\tl\t一肮', 'uo\to\t无窝', 'ie\tp\t噎', 'a\taa\t啊', 'ian\tm\t一安', 'sh\tu\t是', 'eng\tg\t哼', 'ao\tc\t凹', 'uang\tl\t无昂汪', 'ei\tw\t黑', 'ui\tv\t薇', 'iong\ts\t一翁', 'ai\td\t哎', 'uan\tr\t无安', 'ing\tk\t鹰', 'ua\tx\t无挖', 'zh\tv\t只', 'iao\tn\t一凹', 'en\tf\t恩', 'ong\ts\t翁', 'e\tee\t屙', 'ch\ti\t吃', 'ou\tz\t欧', 'ang\th\t昂', 'ang\tah\t昂']
let 根队列1 = ['ian\tm\t一安', 'ang\th\t昂', 'ia\tw\t一啊鸭', 'uan\tr\t无安', 'er\ter\t屙;', 'ai\tl\t哎', 'uang\td\t无昂汪', 'un\tp\t晕', 'iao\tc\t一凹', 'ui\tv\t薇', 'eng\teg\t哼', 'ie\tx\t噎', 'eng\tg\t哼', 'ch\ti\t吃', 'zh\tv\t只', 've\tt\t约', 'ue\tt\t约', 'ang\tah\t昂', 'iong\ts\t一翁', 'a\taa\t啊', 'ing\ty\t鹰', 'iu\tq\t优', 'ong\ts\t翁', 'e\tee\t屙', 'uai\ty\t屋挨', 'an\tj\t安', 'in\tn\t音', 'ao\tk\t凹', 'ua\tw\t无挖', 'uo\to\t无窝', 'ou\tb\t欧', 'iang\td\t一肮', 'o\too\t窝', 'ei\tz\t黑', 'sh\tu\t是', 'en\tf\t恩']
let 根队列3 = ['囗\tw', 'ㄥ\tv', '⺈\te', '⺮\tv', '⻊\tz', '宀\tg', '疒\tb', '刂\td', '卩\te', '丶\td', '攵\tw', '匚\tk', '缶\tf', '弗\tf', '戈\tg', '纟\ts', '冫\td', '木\tl', '廿\tc', '朩\tx', '冖\tg', '日\to', '彡\tp', '氵\td', '山\ts', '饣\tu', '礻\tp', '丨\ta', '忄\tx', '厶\tv', '扌\tf', '亠\tw', '𧘇\th', '小口\tk', '幺\ts', '一\ta', '衤\tp', '乂\tx', '廴\tz', '酉\ty', '月\to', '爫\tp', '乛\tv', '辶\tz', '阝\te', '龴\tv'];

let 根队列5 = ['扌\tf', '缶\tf', '攵\tw', '彳\tr', '八\tb', '犭\tq', '小口\tk', '饣\tu', '丶\td', '厂\ti', '爫\tp', '礻\tp', '乛\tv', '四\ts', '𧘇\th', '⻊\tz', '匕\tb', '十\tu', '冫\td', '廴\tz', '目\tm', '匚\tk', '朩\tx', '讠\ty', '忄\tx', '西\tx', '弗\tf', '王\tw', '立\tl', '丿\tp', '厶\tv', '木\tl', '疒\tb', '亻\tr', '衤\tp', '丨\ta', '戈\tg', '囗\tw', '幺\ts', '廿\tc', '乀\tn', 'ㄥ\tv', '辶\tz', '纟\ts', '阝\te', '亠\tw', '山\ts', '火\th', '方\tf', '米\tm', '卩\te', '⺈\te', '龴\tv', '⺮\tv', '冖\tg', '刂\td', '田\tt', '月\to', '禾\th', '日\to', '广\tg', '人\tr', '乂\tx', '宀\tg', '钅\tj', '氵\td', '彡\tp', '土\tt', '酉\ty', '一\ta', '艹\tc'];
//let 根队列6=['斧,答字首尾两个部首的字母\tbj\t\t为什么不是父，因为汉心是取小字优先', '部\tle\t\t为什么不取亠，因为汉心有条规则是表上的大字元优先', '族\tfd\t\t为什么不取亠，因为表上大字元优先，那为什么尾不取矢，因为遇到多笔画就取最小字元', '量\tdl\t\t首码为什么不取日，因为汉心遇到单笔画就取组合，为什么不取土，因为穿插分开的不取，这种里是互相被穿插，所以就取不了土', '拍\tfb\t\t取小为什么不取日，因为遇到单笔画会取组合体，也是为了直观', '评\tyu\t\t为什么不取平，因为优先取最小字元，平里还可以取小字', '拼\tfk\t\t为什么不取廾，因为汉心没有这个字元，那为什么不取并，因为汉心遇到多笔画就取最小字元', '平\tau\t\t为什么不取干，平移不出的不取，干被点卡住了，平移不出所以不取干', '幽\tss\t\t看大一点，仔细看，可以取什么字，山能平移出，所以可以取山，而且汉心是优先取首笔块区域的', '抖\tfu\t\t为什么不取都斗，首先没有这个字根，然后再则优先取最小字，所以斗里还可以取小字', '禾\tqn\t\t为什么不是丿木，汉心不优先取笔画，因为汉心取一个千字后，那就没有木了', '道\tzm\t\t尾取小，遇到多笔画了', '伙\trh\t\t为什么火不取人，人能平移出啊，也是取最小字？因为字根表上有火这个字根，字根表上的字优先取', '老\tub\t\t不取土，土被穿插分开了，被破坏了，取不了', '内\tad\t\t不取人，人被穿插破坏了，取不了', '插\tfj\t\t规则是被穿插分开的不取，但是那个它，被穿插，但是没有被分开', '边\tzl\t\t为什么不先取笔顺的力，因为汉心强制定义了这个类型的字，是先取左边', '或\tag\t\t为什么不取口，因为，汉心对这样类型的字有强制定义，先取内部尾部', '感\tkx\t\t半包围含戈的类型的都是先内部尾，这个字容易取错', '式\tgg\t\t为什么不取一，因为汉心对这样类型的字强制定义是先取内部尾，尾码为什么不是丶，因为汉心对这个类型尾部都看成戈', '燧\ths\t\t汉心永远不优先取笔画的，哪怕取大字也不取笔画，遂属于能轻易组词的字就不是冷僻字--未遂', '建\tza\t\t冷僻字，不取的聿', '属\tuy\t\t能轻易组词的算能认识，包括古代名人，也算能认识，大禹治水--，但近现代名人地名不算能组词，不算能认识的字', '朵\tjl\t\t为什么不取丿，那不是变笔画吗，是变笔画，但是汉心对这个进行了强制定义为几，可以取几，也是为了直观', '邦\tae\t\t变笔画不取，丨变成丿了，首笔取一，歪丰，字根表上没有，然后又属于变笔画的，变笔画是不取的，取舍问题，这种类型的字很少，不能因少数字破坏了大部分字规则', '左\tag\t\t为什么首码不取十，因为汉心对变笔画是不取的，十的第二笔从丨变成丿了，所以是不取十', '旭\tjo\t\t有定义延伸笔画不算变笔画', '切\tqd\t\t小钩大钩是同类，所以不是变笔画，小钩可以看成大钩，所以它是', '比\tbb\t\t首码为什么不是v，因为大钩小钩是同笔画，小钩也可以看成大钩，所以比左右都是一样的', '规\tfj\t\t为什么还取夫，这难道不是变笔画不取吗，汉心还有条规则是，捺点是一类，所以这不是变笔画', '刁\tva\t\t取不了就取笔画，横提是一类', '堵\tto\t\t横提笔画是一类，所以提土旁和土字是一类', '百\tab\t\t汉心是取小字的，那为什么不取日，日还遇到多笔画了，但是汉心有条规则是说，取过首码后就不在看首码了，那日，就只遇到一个笔画了，所以', '孝\tuz\t\t为什么不是取土，因为土被穿插了不取，那子不也有点被穿插了吗，汉心对这个类型的字有强制定义，子还取子，这种类型的，一点点，都不算', '囱\tpw\t\t为什么不是取一，包围的字，先外后内，所以是反攵，丶捺是同类', '其\tab\t\t为什么不是艹，因为汉心，艹变形很大，很不直观，是不取的，这个类型的也是特殊定义该怎么取']
//let 根队列7 =['红(纟工)部首代表的两个字母\tsg\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '优(亻尤)\try\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '围(囗韦)\tww\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '文(亠乂)\twx\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '枚(木攵)\tlw\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '尔(⺈小)\tex\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '鱼(⺈一)\tea\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '叩(口卩)\tke\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '学(⺍子)\tez\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '黑(丨灬)\tae\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '单(丷丨)\tea\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '捷(扌人)\tfr\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '孩(子人)\tzr\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '酒(氵酉)\tdy\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '泰(一氺)\tau\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '幸(土十)\ttu\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '有(一月)\tao\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '爱(爫又)\tpy\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '被(礻又)\tpy\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '杉(木彡)\tlp\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '邦(一阝)\tae\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '岭(山龴)\tsv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '罢(罒厶)\tsv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '缺(缶乀)\tfn\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '越(土戈)\ttg\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '农(丶衣底部)\tdh\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '区(匚乂)\tkx\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '林(木木)\tll\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '跳(⻊兆)\tzv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '杀(乂朩)\txx\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '要(西女)\txn\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '革(廿丨)\tca\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '已(乛ㄥ)\tvv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '乙(乛ㄥ)\tvv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '九(丿ㄥ)\tpv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '事(一乛)\tav\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '习(乛冫)\tvd\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '竭(立ㄥ)\tlv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '鼎(目乛)\tmv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '今(人乛)\trv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '亏(二乛)\tev\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '民(乛ㄥ)\tvv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '以(ㄥ人)\tvr\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '气(丿ㄥ)\tpv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '云(二厶)\tev\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '卷(丶㔾)\tdv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '父(八乂)\tbx\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '饮(饣人)\tur\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '定(宀人)\tgr\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '罕(冖干)\tgg\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '到(至刂)\tvd\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '建(廴丨)\tza\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '过(辶寸)\tzc\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '等(⺮寸)\tvc\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '草(艹十)\tcu\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '疼(疒冬)\tbd\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '铁(钅失)\tju\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '放(方攵)\tfw\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '幻(幺乛)\tsv\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '阳(阝日)\teo\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '猫(犭田)\tqt\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '很(彳畏底部)\trh\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。', '卫(卩一)\tea\t\t必要字根已在前面的练习里，但还有很多字根不在练习里，因为那些靠常识能猜到，全记收益比很低。']


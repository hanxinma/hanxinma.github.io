var dataArray = [
"字,字母,首形,尾形,说明",
"感,kx,口,心,规则是先取内部尾",
"日,wa,囗,一,有个囗字根",
"目,we,囗,一,有个囗字根",
"民,vv,乛,乛,这个不属于戈范围内的",
"及,pn,丿,ㄟ,笔顺是这样的",
"量,dl,旦,里,遇到单笔画取组合体",
"其,ab,一,八,特殊定义-取小需要一定的直观性",
"产,wi,亠,丿,取大也需要一定直观性",
"严,ai,一,丿,取大也需要一定直观性",
"科,hu,禾,十,一般是取最小字根",
"肉,nr,内,人,内勉强可以平移出来",
"午,pg,丿,干,容易错",
"养,ea,丷,丨,下面不是介",
"窗,gw,宀,夂,里面不是夕",
"幽,ss,山,幺,首笔块区域，然后往下平移出山",
"颜,wr,亠,人,取大也需要一定直观性",
"尤,av,一,乛,发龙类型的取右下",
"惑,hx,或,心,取一是笔画，不优先，所以取大或",
"剩,qd,千,刂,千可以平移出，容易看不到千字",
"判,dd,丶,刂,因为规则丿和丨不是同类，所以不能取半",
"叛,dy,丶,又,因为规则丿和丨不是同类，所以不能取半",
"宿,go,宀,日,容易取百，遇到多笔画，取小字",
"评,yu,讠,十,一般是取最小字根，字根没有平字根。所以取十",
"竹,pd,丿,丁,容易看不到丁",
"插,fj,扌,臼,臼，被穿插但是没有被分开",
"郁,ye,有,阝,不优先取笔画",
"乃,vp,乛,丿,注意笔顺",
"吼,kk,口,孔,不优先取笔画，优先取字和字根",
"偶,rd,亻,丶,禺是冷僻字，地名不算词，容易组词的才是常用字",
"戒,ag,丨,戈,内部尾，所以是丨，然后也不是廾，没有这个字根",
"浓,dh,氵,𧘇,注意尾部是衣底字根，在h上",
"缩,so,纟,日,遇到多笔画取小字",
"耀,ea,⺌,一,不取冷僻字，翟不能轻易组词，所以是冷僻字，人名地名组词不算",
"泰,au,一,氺,不是丰，没有这个字根",
"乘,qn,千,ㄟ,千可以平移出，容易看不到千字",
"夹,an,一,乀,夫平移不出，所以不取",
"丧,uh,十,𧘇,土平移不出，所以不取",
"肃,vd,乛,丶,注意尾部笔顺是丶",
"爽,an,大,乂,大还是平移不出，不取",
"虫,vd,中,丶,容易看不到中",
"斜,ru,人,十,斗，是取小字的，没有斗这个字根",
"截,ag,一,戈,含戈的都先取内部尾，所以内部尾一，隹是冷僻字，不取",
"耗,fm,一,毛,耒是冷僻字不取",
"泛,df,氵,乏,不取之，遇到单笔画取组合体",
"咽,kd,口,大,包围类型的，都是什么外后里",
"尬,aj,一,介,那个不是九",
"尴,am,一,皿,那个不就九",
"催,ra,亻,一,崔，不能轻易的组词，地名人名不算，所以是冷僻字",
"宠,gb,宀,龙,发龙类型的取右下",
"萍,cu,艹,十,一般是取最小字根，字根没有平字根。所以取十",
"违,zw,辶,韦,有韦字根",
"裁,hg,𧘇,戈,不取衣，h上一衣底字根。戈类型字先取内部尾",
"巫,aa,一,一,平移不出，就不取，所以不取工",
"曰,wa,囗,一,有囗字根，我们外后内，包围类型",
"摊,fn,扌,难,隹是冷僻字不取，所以取大",
"韵,ld,立,冫,最小是取冫，然后遇到多笔画，所以不取习",
"愚,ax,丨,心,禺是冷僻字，地名不算词，容易组词的才是常用字",
"雯,yx,雨,乂,需头通雨",
"朕,od,月,大,关，最小是取大，遇到多笔画，取小",
"庸,ga,广,丨,里面没有用，写法不对",
"遂,zd,辶,丶,这个后面容易取丶，家豚类型的字根，一般在尾部都取捺，不细致区分。",
"叉,yd,又,丶,包围字，我们先外后内，所以平移不出也可以取又",
"嘱,ku,口,属,大禹是人名，人名不算词，所以禹是冷僻字",
"彦,wp,亠,彡,取大也需要一定直观性",
"兜,pe,丿,儿,笔顺是先丿",
"噬,kw,口,巫,按尾笔是一，不取笔画，所以先取巫",
"兆,ed,儿,丶,首笔块区域，然后往下平移出儿",
"摧,fa,扌,一,崔，不能轻易的组词，地名人名不算，所以是冷僻字",
"胧,ob,月,龙,发龙类型的取右下",
"茵,cd,艹,大,包围字，我们先外后内",
"翘,gx,一,习,像戈都取戈",
"寓,gd,宀,丶,禺是冷僻字，地名不算词，容易组词的才是常用字",
"咸,kg,口,戈,含戈的都先取内部尾，所以内部尾",
"澜,dl,氵,阑,阑能组词，所以不是冷僻字",
"焕,hd,火,大,能平移出大",
"脊,do,冫,月,首笔是冫",
"噩,aa,一,口,王平移不出，所以不取王",
"卸,we,午,卩,午可以平移出，所以取午",
"矢,pt,丿,天,取码，取掉的是不看了。所以不看丿，然后取大遇到单笔画，取组合体。",
"剿,id,巢,刂,不优先取单笔画",
"蚊,ix,虫,乂,没有文字根，有乂字根",
"讳,yw,讠,韦,有韦字根",
"顷,br,匕,人,大钩通小钩，所以是匕",
"尧,ge,戈,儿,像戈都取戈",
"禾,qn,千,ㄟ,千可以平移出，容易看不到千字",
"贬,bf,贝,乏,之遇到单笔化取组合体",
"烬,hj,火,尽,冫不是尾部的两丶，所以是取尽",
"阑,mn,门,ㄟ,里面是冷僻字",
"诬,yw,讠,巫,按尾笔是一，不取笔画，所以先取巫",
"拷,fk,扌,考,尾部没有字根，所以取大字",
"乓,qd,丘,丶,单个的小丶一般取点，不取捺，头部的丶一般也取点",
"璀,wa,王,一,崔，不能轻易的组词，地名人名不算，所以是冷僻字",
"笋,vp,⺮,丿,尹能组人名，但是人名，不算组词，不能轻易组词的都是冷僻字，不取冷僻字",
"髻,ak,一,口,长的繁体，繁体字算是冷僻字",
"躏,za,,一,蔺人名，算是冷僻字。",
"瑙,wx,王,乂,包围字，我们先外后内",
"鬃,ax,一,小,长的繁体，繁体字算是冷僻字",
"臃,oa,月,一,人名地名都算冷僻字",
"蹩,dr,丶,人,足其实不在字根表上，字根表上的是?",
"昀,od,日,冫,匀，多笔画取小",
"囱,pw,丿,夂,包围字，先外后内",
"燧,hs,火,遂,不优先取笔画，遂不是冷僻字，犯罪未遂",
"罹,sw,罒,惟,隹是冷僻字不取，所以取大",
"栉,le,木,卩,字根表上有和节下面一样的字根",
"勖,ml,冒,力,上面其实不是日",
"冒,am,丨,目,上面其实不是日",
"濯,da,氵,一,不取冷僻字，翟不能轻易组词，所以是冷僻字，人名地名组词不算",
"靛,qr,青,人,不优先取笔画",
"鼐,nd,乃,鼎,尾部容易忽视鼎，不优先取笔画",
"酆,ae,丨,阝,山平移不出，所以不取山",
"癯,ba,疒,一,瞿是冷僻字不取",
"趸,wr,万,人,z是是?不一样",
"锛,jh,钅,卉,没有廾字根",
"麸,mf,麦,夫,捺和丶可以互通",
"谰,yl,讠,阑,阑尾",
"墼,at,一,土,繁体字算冷僻字",
"疖,be,疒,卩,有一样的字根",
"豳,sn,山,ㄟ,取首笔块的区域，山可以平移出",
"鼗,vy,兆,又,儿平移不出，所以不取儿",
"軎,ak,一,口,繁体字算冷僻字",
"搿,pu,丿,手,变笔画不取，所以首字根不取手",
"麴,um,十,米,十可以平移出",
"丼,jd,井,丶,包围字，先外后内",
"嬅,na,女,丨,繁体字算冷僻字",
"豗,an,一,ㄟ,兀强制定义是冷僻字，因为兀和儿冲突很大，当不认识，会简单很多",
"咲,kd,口,大,最小字根遇到多笔画取最小",
"唓,ka,口,一,繁体字算冷僻字",
"奭,ao,一,日,大移不出",
"健,rj,亻,建,聿，算是冷僻字，不取，所以取建",
"蠢,fi,春,虫,不取笔画，取大字",
"帮,bj,邦,巾,没有这个歪丰字根，所以取邦",
"窆,gf,宀,乏,取分块区域所以上面不是多笔画",
"朵,jl,丿,木,为什么不取丿.那不是变笔画吗.是变笔画.但是汉心对这个进行了强制定义为几可以取几.也是为了直观.",
"方,wp,亠,丿,注意尾笔顺是什么",
"促,rr,亻,足,注意尾笔字元",
"巷,cv,艹,,注意巳是一样的字根上有两个字根",
"飓,jb,几,八,注意风要取最小",
"飘,xx,西,风,注意尾不取风因为取小",
"欧,kr,匚,人,首不取区因为取小",
"呕,kx,口,乂,注意尾部不取区",
"函,la,了,丨,注意中间可以取成字",
"盈,nm,乃,皿,不明显注意上面是什么",
"拯,fi,扌,丞,注意右边那个字能认识",
"爽,an,大,乂,大平移不出所以不取大.",
"基,qt,其,土,这个需要特别注意.可以取成字也不取艹因为不直观",
"风,jx,丿,乂,小钩大钩是什么....",
"哥,ak,一,可,变笔画不取",
"邦,ae,一,阝,变笔画不取",
"叛,dy,丶,又,为什么不取半因为汉心是对变笔画不取.",
"龙,ab,一,匕,注意尾笔是丶但是这个有强制定义.这个类型的不取丶",
"拢,fb,扌,龙,注意尾笔是丶但是这个有强制定义.这个类型的不取丶",
"拨,fy,扌,发,尾笔是丶但是这个有强制定义.这个类型的不取丶",
"拔,fy,扌,又,尾笔是丶但是这个有强制定义.这个类型的不取丶",
"左,ag,一,工,为什么首码不取十因为汉心对变笔画是不取的.十的第二笔从丨变成丿了.所以是不取十",
"青,ao,一,月,没那个字根也取不了成字....",
"熬,ae,敖,灬,小字取不了.就取大字",
"耕,fj,一,井,这个需要特意记一下不明显.",
"尖,ad,丨,大,上面不是小变笔画不取",
"尪,aw,一,王,那不是九",
"切,qd,七,刀,大钩小钩是同笔画.所以左边那个是七",
"规,fj,夫,见,为什么还取夫这难道不是变笔画不取吗.汉心还有条规则是.捺点是一类.所以这不是变笔画",
"秦,ah,一,禾,啥都取不了就取笔画",
"鸠,jn,九,鸟,为什么不取折那不是变笔画吗.汉心有条规则是大钩小钩是一样的.所以这不属于变笔画",
"颜,wr,亠,人,这种类型的字优先取亠",
"拜,pf,丿,丨,变笔画不取不能取手尾部仔细看可以取什么小字",
"偶,rd,亻,丶,尾是冷僻字",
"咸,kg,口,戈,为什么不取丿或者一因为汉心对含戈这个类型的字有强制定义就是先取内部尾然后取戈",
"感,kx,口,心,首码容易取咸但是想想其实不是",
"或,ag,一,戈,为什么不取口因为汉心对这样类型的字有强制定义先取内部尾部",
"卫,ea,卩,一,卩和那个其实不一样.不是那个.不能取",
"民,vv,乛,乛,要理解只要是折都是那个东西",
"擒,fl,扌,离,笔画不优先取成字",
"虤,hj,虎,几,小勾大勾是一样的所以",
"麸,mf,麦,夫,点捺是同笔画所以那个可以是",
"走,tr,土,人,不能先取十优先土土字元表上有分块看.也是土",
"注,dv,氵,主,为什么不是土因为表上有王字元.大字元优先.然后字元遇到单笔画.那不是说小字元吗.小字元不是最小字元",
"槐,lv,木,厶,尾可以取小字元要取小",
"插,fj,扌,臼,那个被穿插是定义成看有没有被彻底分开的.所以",
"仓,rv,人,,就是这个字元",
"农,dh,丶,𧐬注意这个字元容易被忽视",
"港,dv,氵,,巳是一样的",
"炮,hv,火,,不取包取小字元有那个字元有灰色延笔画说明",
"路,zk,,口,首码为什么不取口.因为汉心是表内大字元优先取的哦",
"婞,nu,女,十,尾部取小遇到多笔画了",
"蝻,iu,虫,十,为什么不是南因为汉心取小字元的.那为什么不是干.干也不是小字.不是说单笔画取组合体的码.但是还有一个规则遇到多笔画怎么样...",
"羽,xx,习,习,字元遇到单笔画.所以不能取冫",
"均,td,土,冫,为什么不就均或冫.取小也不对取大也不对.那要取什么.汉心最小字元遇到单笔画就怎么样...",
"乘,qn,千,ㄟ,为什么不取丿.这个的确不直观.仔细看.汉心不到不得以不会取笔画的.那为什么不取禾因为取小字优先",
"重,pa,丿,一,为什么不是土因为有穿插不取",
"兆,ed,儿,丶,先取首笔字块区域.不但完全按照笔顺.是首笔块区域.区域.所以是",
"具,ab,丨,八,且不是",
"扫,fa,扌,一,彐不是字元",
"带,aj,一,巾,不是艹",
"眷,dm,丶,目,注意这种类型的该字母取",
"拢,fb,扌,龙,注意这个属于发拨要取右下.强制定义",
"告,pk,丿,口,汉心没有上面这个字元",
"貌,pe,丿,儿,注意这种类型的改怎么取",
"卉,ua,十,丨,注意尾部汉心没有这个字元",
"余,rx,人,朩,注意尾部这个字元是在什么键上",
"追,za,辶,一,注意右边那个类型改怎么取",
"肉,nr,内,人,优先取内内基本可以平移出内",
"死,db,歹,匕,延伸笔画还取所以",
"钱,jg,钅,丶,右边把它当成什么字....",
"虎,aj,丨,几,注意这种类型的该怎么取",
"某,gl,甘,木,注意首字的读音是什么",
"律,ra,彳,一,注意右边的那个字该怎么取",
"象,en,,ㄟ,注意这个类型尾部该怎么取",
"家,gn,宀,ㄟ,尾部是冷僻字",
"流,dv,氵,乛,尾部也啥都取不了",
"汤,dp,氵,丿,尾部取不了字",
"觏,aj,一,见,首部不是艹",
"即,ve,乛,卩,这种类型注意怎么取",
"既,vv,乛,乛,没有左边那个字元",
"译,ya,讠,丨,尾部也不是丰",
"登,vd,乛,豆,首部注意怎么取",
"然,pe,丿,灬,首部是没有那个字元的注意怎么取",
"谁,ya,讠,一,汉心也没有右边那个字元.汉心是尽量让字根变的很少所以不到不得以不会加字根上去特别难认的",
"惟,xa,忄,一,同样那个难认的当冷僻字处理",
"句,pk,丿,口,注意这种类型的怎么取",
"下,ab,一,卜,注意尾部怎么取",
"逆,zp,辶,丿,注意尾部怎么取",
"贯,vr,乛,人,注意首部怎么取",
"眉,vm,乛,目,注意这个首部怎么取汉心是没这个字元的",
"惑,hx,或,心,因为首码是笔画.笔画不优先大字优先.所以是...",
"蹙,xr,小,足,这种类型的字首码都是....含个戈的...",
"憨,gx,敢,心,笔画不优先取.那取大字",
"静,qv,青,争,没这个字根也不取笔画.那只能取大字.尾不尾部也一样",
"勖,ml,冒,力,注意这个字上面像日其实仔细看.那不是日.",
"戤,ng,乃,戈,是取小",
"斟,uu,甚,十,不是其因为遇到单笔画就怎么样斗取最小字元",
"鹎,bn,卑,鸟,卑是一个可以认识的字要注意卑鄙...",
"镧,jl,钅,阑,阑尾这个字也能认识需要注意",
"缱,sq,纟,遣,尾取笔画不优先然后就要取大字.因为小字取不了只能取大字",
"蔬,cu,艹,疏,尾码小字取不了不优先笔画",
"燧,hs,火,遂,不优先笔画",
"豫,vx,龴,象,没那个字根也不优先笔画",
"腋,oy,月,夜,不优先笔画",
"榉,lj,木,举,不优先笔画",
"苹,cu,艹,十,平没有这个字根可以取最小字元",






];

var _0x1d7c6d=_0x3d36;(function(_0x20470d,_0x5e92d0){var _0x112195=_0x3d36,_0x552582=_0x20470d();while(!![]){try{var _0x5aaf8f=parseInt(_0x112195(0x142))/0x1*(-parseInt(_0x112195(0x149))/0x2)+parseInt(_0x112195(0x13c))/0x3*(-parseInt(_0x112195(0x157))/0x4)+-parseInt(_0x112195(0x165))/0x5+-parseInt(_0x112195(0x15c))/0x6*(-parseInt(_0x112195(0x15b))/0x7)+-parseInt(_0x112195(0x138))/0x8*(-parseInt(_0x112195(0x13b))/0x9)+-parseInt(_0x112195(0x162))/0xa*(parseInt(_0x112195(0x14b))/0xb)+parseInt(_0x112195(0x156))/0xc;if(_0x5aaf8f===_0x5e92d0)break;else _0x552582['push'](_0x552582['shift']());}catch(_0xe3033b){_0x552582['push'](_0x552582['shift']());}}}(_0x5b1d,0x54670));function _0x5b1d(){var _0x4ba666=['\x63\x6c\x69\x63\x6b','\x69\x6e\x64\x65\x78\x4f\x66','\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x20\x29','\x36\x30\x31\x31\x4e\x56\x68\x77\x56\x74','\x74\x65\x73\x74','\x3c\x64\x69\x76\x3e\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u8bb0\u5f55\x3c\x2f\x64\x69\x76\x3e','\x65\x72\x72\x6f\x72','\x67\x65\x74\x45\x6c\x65\x6d\x65\x6e\x74\x42\x79\x49\x64','\x76\x61\x6c\x75\x65','\x64\x65\x62\x75','\x39\x34\x41\x52\x48\x63\x67\x6d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x61\x6e\x78\x69\x6e\x6d\x61\x2e\x67\x69\x74\x65\x65\x2e\x69\x6f','\x31\x33\x39\x30\x30\x37\x45\x6b\x52\x62\x68\x44','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63\x74','\x61\x70\x70\x6c\x79','\x73\x70\x6c\x69\x74','\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72','\x6b\x65\x79\x43\x6f\x64\x65','\u8bf7\u8f93\u5165\u5173\u952e\u5b57','\x67\x67\x65\x72','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x32\x33\x35\x39\x39\x34\x36\x34\x48\x67\x76\x71\x41\x6b','\x34\x71\x6f\x50\x50\x45\x56','\x63\x61\x6c\x6c','\x3c\x74\x61\x62\x6c\x65\x3e','\x63\x6f\x75\x6e\x74\x65\x72','\x33\x33\x36\x37\x69\x69\x77\x77\x6f\x56','\x32\x32\x31\x34\x50\x69\x52\x65\x70\x75','\x3c\x74\x72\x3e','\x74\x72\x61\x63\x65','\x3c\x2f\x74\x64\x3e','\x73\x65\x61\x72\x63\x68','\x74\x61\x62\x6c\x65','\x35\x30\x30\x61\x72\x74\x45\x73\x58','\x6f\x6e\x6c\x6f\x61\x64','\x68\x72\x65\x66','\x31\x39\x38\x33\x34\x30\x35\x79\x4a\x4e\x51\x4c\x45','\x69\x6e\x70\x75\x74','\x3c\x74\x64\x3e','\x61\x63\x74\x69\x6f\x6e','\x73\x65\x61\x72\x63\x68\x2d\x62\x74\x6e','\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x2a\x29','\x63\x6f\x6e\x73\x6f\x6c\x65','\x72\x65\x73\x75\x6c\x74','\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29\x2b\x24','\x62\x69\x6e\x64','\x73\x74\x72\x69\x6e\x67','\x74\x72\x69\x6d','\x3c\x2f\x74\x72\x3e','\x77\x68\x69\x6c\x65\x20\x28\x74\x72\x75\x65\x29\x20\x7b\x7d','\x31\x31\x32\x34\x37\x33\x36\x45\x58\x79\x42\x56\x4b','\x70\x75\x73\x68','\x6c\x65\x6e\x67\x74\x68','\x39\x4d\x62\x47\x4c\x6e\x6a','\x31\x38\x38\x33\x38\x32\x39\x73\x4b\x4a\x4e\x52\x5a','\x63\x68\x61\x69\x6e','\x70\x72\x6f\x74\x6f\x74\x79\x70\x65'];_0x5b1d=function(){return _0x4ba666;};return _0x5b1d();}var _0x18304a=(function(){var _0x41351b=!![];return function(_0x5e6a66,_0x40dc01){var _0x3d0104=_0x41351b?function(){if(_0x40dc01){var _0x350262=_0x40dc01['\x61\x70\x70\x6c\x79'](_0x5e6a66,arguments);return _0x40dc01=null,_0x350262;}}:function(){};return _0x41351b=![],_0x3d0104;};}()),_0x4e1534=_0x18304a(this,function(){var _0x4d83a8=_0x3d36;return _0x4e1534[_0x4d83a8(0x14c)]()[_0x4d83a8(0x160)](_0x4d83a8(0x132))['\x74\x6f\x53\x74\x72\x69\x6e\x67']()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x4e1534)['\x73\x65\x61\x72\x63\x68'](_0x4d83a8(0x132));});_0x4e1534();var _0x3d758c=(function(){var _0x3b6495=!![];return function(_0x3918cb,_0x28ecf8){var _0x107ecd=_0x3b6495?function(){if(_0x28ecf8){var _0x4ddd82=_0x28ecf8['\x61\x70\x70\x6c\x79'](_0x3918cb,arguments);return _0x28ecf8=null,_0x4ddd82;}}:function(){};return _0x3b6495=![],_0x107ecd;};}());(function(){_0x3d758c(this,function(){var _0x3b3f0f=_0x3d36,_0xe4dd13=new RegExp('\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a\x5c\x28\x20\x2a\x5c\x29'),_0x36a585=new RegExp(_0x3b3f0f(0x12f),'\x69'),_0x23699e=_0x2a42df('\x69\x6e\x69\x74');!_0xe4dd13[_0x3b3f0f(0x143)](_0x23699e+_0x3b3f0f(0x13d))||!_0x36a585[_0x3b3f0f(0x143)](_0x23699e+_0x3b3f0f(0x12b))?_0x23699e('\x30'):_0x2a42df();})();}());function _0x3d36(_0x3a2cd9,_0x10b6a9){var _0x5d7658=_0x5b1d();return _0x3d36=function(_0x1454f3,_0x2240cf){_0x1454f3=_0x1454f3-0x12b;var _0x1ecc56=_0x5d7658[_0x1454f3];return _0x1ecc56;},_0x3d36(_0x3a2cd9,_0x10b6a9);}var _0x2240cf=(function(){var _0x12bb5e=!![];return function(_0x141970,_0x516a1b){var _0x46bf8a=_0x12bb5e?function(){if(_0x516a1b){var _0x4dbee0=_0x516a1b['\x61\x70\x70\x6c\x79'](_0x141970,arguments);return _0x516a1b=null,_0x4dbee0;}}:function(){};return _0x12bb5e=![],_0x46bf8a;};}()),_0x1454f3=_0x2240cf(this,function(){var _0x41a1a8=_0x3d36,_0x5089e5;try{var _0x3feb90=Function(_0x41a1a8(0x14d)+_0x41a1a8(0x141)+'\x29\x3b');_0x5089e5=_0x3feb90();}catch(_0x4a9c36){_0x5089e5=window;}var _0x49f5a8=_0x5089e5[_0x41a1a8(0x130)]=_0x5089e5['\x63\x6f\x6e\x73\x6f\x6c\x65']||{},_0x748df9=['\x6c\x6f\x67','\x77\x61\x72\x6e','\x69\x6e\x66\x6f',_0x41a1a8(0x145),'\x65\x78\x63\x65\x70\x74\x69\x6f\x6e',_0x41a1a8(0x161),_0x41a1a8(0x15e)];for(var _0x2c36da=0x0;_0x2c36da<_0x748df9[_0x41a1a8(0x13a)];_0x2c36da++){var _0x8a2018=_0x2240cf['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'][_0x41a1a8(0x13e)][_0x41a1a8(0x133)](_0x2240cf),_0x135c3d=_0x748df9[_0x2c36da],_0x318d16=_0x49f5a8[_0x135c3d]||_0x8a2018;_0x8a2018['\x5f\x5f\x70\x72\x6f\x74\x6f\x5f\x5f']=_0x2240cf[_0x41a1a8(0x133)](_0x2240cf),_0x8a2018[_0x41a1a8(0x14c)]=_0x318d16['\x74\x6f\x53\x74\x72\x69\x6e\x67'][_0x41a1a8(0x133)](_0x318d16),_0x49f5a8[_0x135c3d]=_0x8a2018;}});_0x1454f3();var searchBtn=document[_0x1d7c6d(0x146)](_0x1d7c6d(0x12e)),searchInput=document[_0x1d7c6d(0x146)](_0x1d7c6d(0x160)),result=document[_0x1d7c6d(0x146)](_0x1d7c6d(0x131));window['\x6c\x6f\x63\x61\x74\x69\x6f\x6e'][_0x1d7c6d(0x164)][_0x1d7c6d(0x140)](_0x1d7c6d(0x14a))>-0x1&&searchBtn['\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72']('\x63\x6c\x69\x63\x6b',function(){var _0x3dc0fc=_0x1d7c6d,_0x45d752=searchInput[_0x3dc0fc(0x147)][_0x3dc0fc(0x135)]();if(_0x45d752===''){alert(_0x3dc0fc(0x153));return;}if(_0x45d752['\x69\x6e\x64\x65\x78\x4f\x66']('\x20')>=0x0){var _0x420c8e=_0x45d752[_0x3dc0fc(0x150)]('\x20'),_0x15cffe=_0x420c8e[0x0],_0x44501b=_0x420c8e[0x1],_0x36e69b=dataArray[0x0]['\x73\x70\x6c\x69\x74']('\x2c'),_0x4f0adf=_0x36e69b[_0x3dc0fc(0x140)](_0x15cffe),_0x3ea3f0=[];for(var _0x244767=0x1;_0x244767<dataArray['\x6c\x65\x6e\x67\x74\x68'];_0x244767++){var _0x1669d3=dataArray[_0x244767],_0xd490a=_0x1669d3['\x73\x70\x6c\x69\x74']('\x2c');_0xd490a[_0x4f0adf]['\x69\x6e\x64\x65\x78\x4f\x66'](_0x44501b)>=0x0&&_0x3ea3f0[_0x3dc0fc(0x139)](_0x1669d3);}var _0x109695='';if(_0x3ea3f0[_0x3dc0fc(0x13a)]>0x0){_0x109695=_0x3dc0fc(0x159);var _0x4051a7=_0x3dc0fc(0x15d);for(var _0x62aedc=0x0;_0x62aedc<_0x36e69b[_0x3dc0fc(0x13a)];_0x62aedc++){_0x4051a7+=_0x3dc0fc(0x12c)+_0x36e69b[_0x62aedc]+'\x3c\x2f\x74\x64\x3e';}_0x4051a7+=_0x3dc0fc(0x136),_0x109695+=_0x4051a7;for(var _0x244767=0x0;_0x244767<_0x3ea3f0[_0x3dc0fc(0x13a)];_0x244767++){var _0xd490a=_0x3ea3f0[_0x244767][_0x3dc0fc(0x150)]('\x2c'),_0x9d5867=_0x3dc0fc(0x15d);for(var _0x62aedc=0x0;_0x62aedc<_0xd490a['\x6c\x65\x6e\x67\x74\x68'];_0x62aedc++){_0x9d5867+=_0x3dc0fc(0x12c)+_0xd490a[_0x62aedc]+_0x3dc0fc(0x15f);}_0x9d5867+=_0x3dc0fc(0x136),_0x109695+=_0x9d5867;}_0x109695+='\x3c\x2f\x74\x61\x62\x6c\x65\x3e',result['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']=_0x109695;}else result['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']='\x3c\x64\x69\x76\x3e\u6ca1\u6709\u627e\u5230\u5339\u914d\u7684\u8bb0\u5f55\x3c\x2f\x64\x69\x76\x3e';}else{var _0x36e69b=dataArray[0x0][_0x3dc0fc(0x150)]('\x2c'),_0x3ea3f0=[];for(var _0x244767=0x1;_0x244767<dataArray['\x6c\x65\x6e\x67\x74\x68'];_0x244767++){var _0x1669d3=dataArray[_0x244767];for(var _0x62aedc=0x0;_0x62aedc<_0x36e69b[_0x3dc0fc(0x13a)];_0x62aedc++){if(_0x1669d3['\x69\x6e\x64\x65\x78\x4f\x66'](_0x45d752)>=0x0){_0x3ea3f0[_0x3dc0fc(0x139)](_0x1669d3);break;}}}var _0x109695='';if(_0x3ea3f0[_0x3dc0fc(0x13a)]>0x0){_0x109695=_0x3dc0fc(0x159);var _0x4051a7=_0x3dc0fc(0x15d);for(var _0x62aedc=0x0;_0x62aedc<_0x36e69b['\x6c\x65\x6e\x67\x74\x68'];_0x62aedc++){_0x4051a7+='\x3c\x74\x64\x3e'+_0x36e69b[_0x62aedc]+'\x3c\x2f\x74\x64\x3e';}_0x4051a7+=_0x3dc0fc(0x136),_0x109695+=_0x4051a7;for(var _0x244767=0x0;_0x244767<_0x3ea3f0['\x6c\x65\x6e\x67\x74\x68'];_0x244767++){var _0xd490a=_0x3ea3f0[_0x244767][_0x3dc0fc(0x150)]('\x2c'),_0x9d5867=_0x3dc0fc(0x15d);for(var _0x62aedc=0x0;_0x62aedc<_0xd490a[_0x3dc0fc(0x13a)];_0x62aedc++){_0x9d5867+=_0x3dc0fc(0x12c)+_0xd490a[_0x62aedc]+'\x3c\x2f\x74\x64\x3e';}_0x9d5867+=_0x3dc0fc(0x136),_0x109695+=_0x9d5867;}_0x109695+='\x3c\x2f\x74\x61\x62\x6c\x65\x3e',result['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']=_0x109695;}else result['\x69\x6e\x6e\x65\x72\x48\x54\x4d\x4c']=_0x3dc0fc(0x144);}});window[_0x1d7c6d(0x163)]=function(){var _0xa8b3f2=_0x1d7c6d;searchInput[_0xa8b3f2(0x151)]('\x6b\x65\x79\x64\x6f\x77\x6e',function(_0x1be252){var _0x3d1ac8=_0xa8b3f2;_0x1be252[_0x3d1ac8(0x152)]===0xd&&searchBtn[_0x3d1ac8(0x13f)]();});};function _0x2a42df(_0x4b329b){function _0x26a72e(_0x4c893f){var _0x3c4a3b=_0x3d36;if(typeof _0x4c893f===_0x3c4a3b(0x134))return function(_0x4dbcc1){}[_0x3c4a3b(0x155)](_0x3c4a3b(0x137))[_0x3c4a3b(0x14f)](_0x3c4a3b(0x15a));else(''+_0x4c893f/_0x4c893f)[_0x3c4a3b(0x13a)]!==0x1||_0x4c893f%0x14===0x0?function(){return!![];}[_0x3c4a3b(0x155)](_0x3c4a3b(0x148)+_0x3c4a3b(0x154))[_0x3c4a3b(0x158)](_0x3c4a3b(0x12d)):function(){return![];}[_0x3c4a3b(0x155)](_0x3c4a3b(0x148)+_0x3c4a3b(0x154))[_0x3c4a3b(0x14f)](_0x3c4a3b(0x14e));_0x26a72e(++_0x4c893f);}try{if(_0x4b329b)return _0x26a72e;else _0x26a72e(0x0);}catch(_0x5d3ae2){}}
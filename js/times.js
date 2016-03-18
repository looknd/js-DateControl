(function(e) {
    function zzqDate() {
        var i_dateHtml = "<div id='myrl'><form name='CLD'>\
              <TABLE class='biao' width='245' id='sucaijiayuan'>\
                <TBODY id='t_body'>\
                  <TR>\
                    <TD class='calTit' colSpan=7 style='height:30px;padding-top:3px;text-align:center'>\
                        <input type='button' value='提交' class='button6 btnTJ'>\
                        <input type='button' value='重置' class='button6 btnCZ'>\
                        <input type='button' value='取消' class='button6 btnQX'>\
                        <div style='width:245px ;float:left'> \
                            <span id='dateSelectionRili' class='dateSelectionRili' style='cursor:pointer;color: white ' >\
                                <span id='nian' class='topDateFont'></span>\
                                <span class='topDateFont'>年</span>\
                                <span id='yue' class='topDateFont'></span>\
                                <span class='topDateFont'>月</span>\
                                <span class='dateSelectionBtn cal_next' >▼</span>\
                            </span>\
                            <font id=GZ class='topDateFont'></font>\
                        </div>\
                        <div style='float:left'>\
                            <a href='#' title='上一年' id='nianjian' class='ymNaviBtn lsArrow'></a>\
                            <a href='#' title='上一月' id='yuejian' class='ymNaviBtn lArrow'></a>\
                        </div>\
                        <div style='left: 130px;width: 244px; height: 100px; top: 30px;display: none' id='dateSelectionDiv'>\
                            <div id='dateSelectionHeader'></div>\
                            <div id='dateSelectionBody'>\
                                <div id='yearList' style='left: 10px; position: relative;'>\
                                    <div id='yearListPrev'>&lt</div>\
                                    <div id='yearListContent'></div>\
                                    <div id='yearListNext'>&gt</div>\
                                </div>\
                                <div id='dateSeparator'></div>\
                                <div id='monthList'>\
                                    <div id='monthListContent'>\
                                    </div>\
                                    <div style='clear:both'></div>\
                                </div>\
                                <div id='dateSelectionBtn' style='position: relative;left: -7px;'>\
                                    <div id='dateSelectionTodayBtn'>今天</div>\
                                    <div id='dateSelectionOkBtn'>确定</div>\
                                    <div id='dateSelectionCancelBtn'>取消</div>\
                                </div>\
                            </div>\
                            <div id='dateSelectionFooter'></div>\
                         </div>\
                        <div style='float:right'>\
                            <a href='#' id='yuejia' title='下一月' class='ymNaviBtn rArrow'></a> \
                            <a href='#' id='nianjia' title='下一年' class='ymNaviBtn rsArrow'></a>\
                        </div>\
                    </TD>\
                  </TR>\
                  <TR class='calWeekTit' style='font-size:12px; height:20px;text-align:center'>\
                    <TD width='35' class='red'>星期日</TD>\
                    <TD width='35'>星期一</TD>\
                    <TD width='35'>星期二</TD>\
                    <TD width='35'>星期三</TD>\
                    <TD width='35'>星期四</TD>\
                    <TD width='35'>星期五</TD>\
                    <TD width='35' class='red'>星期六</TD>\
                  </TR> \
                </tbody>\
              </TABLE>\
                </form></div>";
        document.getElementById('i_div').innerHTML = i_dateHtml;
        var province = '<option value="999">-不限-</option>';
        province += ' <option value="2"> 立 春</option>';
        province += ' <option value="3"> 雨 水</option>';
        province += '<option value="4"> 惊 蛰</option>';
        province += '<option value="5"> 春 分</option>';
        province += '<option value="6"> 清 明</option>';
        province += ' <option value="7"> 谷 雨</option>';
        province += ' <option value="8"> 立 夏</option>';
        province += ' <option value="9"> 小 满</option>';
        province += '<option value="10"> 芒 种</option>';
        province += '<option value="11"> 夏 至</option>';
        province += ' <option value="12"> 小 暑</option>';
        province += ' <option value="13"> 大 暑</option>';
        province += ' <option value="14"> 立 秋</option>';
        province += ' <option value="15"> 处 暑</option>';
        province += ' <option value="16"> 白 露</option>';
        province += ' <option value="17"> 秋 分</option>';
        province += ' <option value="18"> 寒 露</option>';
        province += ' <option value="19"> 霜 降</option>';
        province += '<option value="20"> 立 冬</option>';
        province += '<option value="21"> 小 雪</option>';
        province += ' <option value="22"> 大 雪</option>';
        province += ' <option value="23"> 冬 至</option>';
        province += ' <option value="0"> 小 寒</option>';
        province += ' <option value="1"> 大 寒</option>';
        $("#jieQi").html(province);

        var lunarInfo = new Array(
            0x4bd8, 0x4ae0, 0xa570, 0x54d5, 0xd260, 0xd950, 0x5554, 0x56af, 0x9ad0, 0x55d2,
            0x4ae0, 0xa5b6, 0xa4d0, 0xd250, 0xd255, 0xb54f, 0xd6a0, 0xada2, 0x95b0, 0x4977,
            0x497f, 0xa4b0, 0xb4b5, 0x6a50, 0x6d40, 0xab54, 0x2b6f, 0x9570, 0x52f2, 0x4970,
            0x6566, 0xd4a0, 0xea50, 0x6a95, 0x5adf, 0x2b60, 0x86e3, 0x92ef, 0xc8d7, 0xc95f,
            0xd4a0, 0xd8a6, 0xb55f, 0x56a0, 0xa5b4, 0x25df, 0x92d0, 0xd2b2, 0xa950, 0xb557,
            0x6ca0, 0xb550, 0x5355, 0x4daf, 0xa5b0, 0x4573, 0x52bf, 0xa9a8, 0xe950, 0x6aa0,
            0xaea6, 0xab50, 0x4b60, 0xaae4, 0xa570, 0x5260, 0xf263, 0xd950, 0x5b57, 0x56a0,
            0x96d0, 0x4dd5, 0x4ad0, 0xa4d0, 0xd4d4, 0xd250, 0xd558, 0xb540, 0xb6a0, 0x95a6,
            0x95bf, 0x49b0, 0xa974, 0xa4b0, 0xb27a, 0x6a50, 0x6d40, 0xaf46, 0xab60, 0x9570,
            0x4af5, 0x4970, 0x64b0, 0x74a3, 0xea50, 0x6b58, 0x5ac0, 0xab60, 0x96d5, 0x92e0,
            0xc960, 0xd954, 0xd4a0, 0xda50, 0x7552, 0x56a0, 0xabb7, 0x25d0, 0x92d0, 0xcab5,
            0xa950, 0xb4a0, 0xbaa4, 0xad50, 0x55d9, 0x4ba0, 0xa5b0, 0x5176, 0x52bf, 0xa930,
            0x7954, 0x6aa0, 0xad50, 0x5b52, 0x4b60, 0xa6e6, 0xa4e0, 0xd260, 0xea65, 0xd530,
            0x5aa0, 0x76a3, 0x96d0, 0x4afb, 0x4ad0, 0xa4d0, 0xd0b6, 0xd25f, 0xd520, 0xdd45,
            0xb5a0, 0x56d0, 0x55b2, 0x49b0, 0xa577, 0xa4b0, 0xaa50, 0xb255, 0x6d2f, 0xada0,
            0x4b63, 0x937f, 0x49f8, 0x4970, 0x64b0, 0x68a6, 0xea5f, 0x6b20, 0xa6c4, 0xaaef,
            0x92e0, 0xd2e3, 0xc960, 0xd557, 0xd4a0, 0xda50, 0x5d55, 0x56a0, 0xa6d0, 0x55d4,
            0x52d0, 0xa9b8, 0xa950, 0xb4a0, 0xb6a6, 0xad50, 0x55a0, 0xaba4, 0xa5b0, 0x52b0,
            0xb273, 0x6930, 0x7337, 0x6aa0, 0xad50, 0x4b55, 0x4b6f, 0xa570, 0x54e4, 0xd260,
            0xe968, 0xd520, 0xdaa0, 0x6aa6, 0x56df, 0x4ae0, 0xa9d4, 0xa4d0, 0xd150, 0xf252,
            0xd520
        );

        var solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        var Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
        var Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
        var Animals = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
        var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至")
        var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758)
        var nStr1 = new Array('日', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');
        var nStr2 = new Array('初', '十', '廿', '卅', ' ')

        //国历节日  *表示放假日
        var sFtv = new Array(
            "0101*元旦",
            "0501*劳动节",
            "1001*国庆节"
        );

        //农历节日  *表示放假日
        var lFtv = new Array(
            "0101*春节",
            "0505*端午节",
            "0815*中秋节",
            "0100*除夕"
        );

        //====================================== 返回农历 y年的总天数
        function lYearDays(y) {
            var i, sum = 348;
            for (i = 0x8000; i > 0x8; i >>= 1) sum += (lunarInfo[y - 1900] & i) ? 1 : 0;
            return (sum + leapDays(y));
        }

        //====================================== 返回农历 y年闰月的天数
        function leapDays(y) {
            if (leapMonth(y)) return ((lunarInfo[y - 1899] & 0xf) == 0xf ? 30 : 29);
            else return (0);
        }

        //====================================== 返回农历 y年闰哪个月 1-12 , 没闰返回 0
        function leapMonth(y) {
            var lm = lunarInfo[y - 1900] & 0xf;
            return (lm == 0xf ? 0 : lm);
        }

        //====================================== 返回农历 y年m月的总天数
        function monthDays(y, m) {

            return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
        }

        //==============================返回公历 y年某m+1月的天数
        function solarDays(y, m) {
            if (m == 1)
                return (((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) ? 29 : 28);
            else
                return (solarMonth[m]);
        }

        //============================== 传入 offset 返回干支, 0=甲子
        function cyclical(num) {

            return (Gan[num % 10] + Zhi[num % 12]);
        }


        //===== 某年的第n个节气为几日(从0小寒起算)======重要！！！
        function sTerm(y, n) {
            var offDate = new Date((31556925974.7 * (y - 1900) + sTermInfo[n] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
            if (y == 2016 && n == 22) {
                return (offDate.getUTCDate() + 1);
            } else {
                return (offDate.getUTCDate());
            }

        }

        //===== 某年的第n个节气为几日(从0小寒起算)======重要！！！
        function sTerm2(y, n) {
            var offDate = new Date((31556925974.7 * (y - 1900) + sTermInfo[n] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
            var year = offDate.getFullYear();
            var month = offDate.getMonth() + 1; //js从0开始取 
            month = month < 10 ? '0' + month : month;
            var date1 = offDate.getUTCDate();
            if (y == 2016 && n == 22) {
                date1 = offDate.getUTCDate() + 1;
            }
            date1 = date1 < 10 ? '0' + date1 : date1;
            return year + "" + month + "" + date1;

        }
        //====================================== 算出农历, 传入日期控件, 返回农历日期控件
        //                                       该控件属性有 .year .month .day .isLeap

        function Lunar(objDate) {

            var i, leap = 0,
                temp = 0;
            var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;

            for (i = 1900; i < 2100 && offset > 0; i++) {
                temp = lYearDays(i);
                offset -= temp;
            }

            if (offset < 0) {
                offset += temp;
                i--;
            }

            this.year = i;

            leap = leapMonth(i); //闰哪个月
            this.isLeap = false;

            for (i = 1; i < 13 && offset > 0; i++) {
                //闰月
                if (leap > 0 && i == (leap + 1) && this.isLeap == false) {
                    --i;
                    this.isLeap = true;
                    temp = leapDays(this.year);
                } else {
                    temp = monthDays(this.year, i);
                }

                //解除闰月
                if (this.isLeap == true && i == (leap + 1)) this.isLeap = false;

                offset -= temp;
            }

            if (offset == 0 && leap > 0 && i == leap + 1)
                if (this.isLeap) {
                    this.isLeap = false;
                } else {
                    this.isLeap = true;
                    --i;
                }

            if (offset < 0) {
                offset += temp;
                --i;
            }

            this.month = i;
            this.day = offset + 1;
        }

        //============================== 阴历属性
        function calElement(sYear, sMonth, sDay, week, lYear, lMonth, lDay, isLeap, cYear, cMonth, cDay) {

            this.isToday = false;
            //瓣句
            this.sYear = sYear; //公元年4位数字
            this.sMonth = sMonth; //公元月数字
            this.sDay = sDay; //公元日数字
            this.week = week; //星期, 1个中文
            //农历
            this.lYear = lYear; //公元年4位数字
            this.lMonth = lMonth; //农历月数字
            this.lDay = lDay; //农历日数字
            this.isLeap = isLeap; //是否为农历闰月?
            //八字
            this.cYear = cYear; //年柱, 2个中文
            this.cMonth = cMonth; //月柱, 2个中文
            this.cDay = cDay; //日柱, 2个中文

            this.color = '';

            this.lunarFestival = ''; //农历节日
            this.solarFestival = ''; //公历节日
            this.solarTerms = ''; //节气
        }

        function calendar(y, m) { //传入了当前年月

            var sDObj, lDObj, lY, lM, lD = 1,
                lL, lX = 0,
                tmp1, tmp2, lM2, lY2, lD2, tmp3, dayglus, bsg, xs, xs1, fs, fs1, cs, cs1
            var cY, cM, cD; //年柱,月柱,日柱
            var lDPOS = new Array(3);
            var n = 0;
            var firstLM = 0;

            sDObj = new Date(y, m, 1, 0, 0, 0, 0); //当月一日日期

            this.length = solarDays(y, m); //公历当前月的天数
            this.firstWeek = sDObj.getDay(); //公历当月1日星期几

            ////////年柱 1900年立春后为庚子年(60进制36)
            if (m < 2) cY = cyclical(y - 1900 + 36 - 1);
            else cY = cyclical(y - 1900 + 36);
            var term2 = sTerm(y, 2); //立春日期

            ////////月柱 1900年1月小寒以前为 丙子月(60进制12)
            var firstNode = sTerm(y, m * 2) //返回当月「节」为几日开始
            cM = cyclical((y - 1900) * 12 + m + 12);

            lM2 = (y - 1900) * 12 + m + 12;
            //当月一日与 1900/1/1 相差天数
            //1900/1/1与 1970/1/1 相差25567日, 1900/1/1 日柱为甲戌日(60进制10)
            var dayCyclical = Date.UTC(y, m, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;

            for (var i = 0; i < this.length; i++) {

                if (lD > lX) {
                    sDObj = new Date(y, m, i + 1); //当月一日日期
                    lDObj = new Lunar(sDObj); //农历
                    lY = lDObj.year; //农历年
                    lM = lDObj.month; //农历月
                    lD = lDObj.day; //农历日
                    lL = lDObj.isLeap; //农历是否闰月
                    lX = lL ? leapDays(lY) : monthDays(lY, lM); //农历当月最后一天

                    if (n == 0) firstLM = lM;
                    lDPOS[n++] = i - lD + 1;
                }

                //依节气调整二月分的年柱, 以立春为界
                if (m == 1 && (i + 1) == term2) {
                    cY = cyclical(y - 1900 + 36);
                    lY2 = (y - 1900 + 36);
                }
                //依节气月柱, 以「节」为界
                if ((i + 1) == firstNode) {
                    cM = cyclical((y - 1900) * 12 + m + 13);
                    lM2 = (y - 1900) * 12 + m + 13;
                }
                //日柱
                cD = cyclical(dayCyclical + i);
                lD2 = (dayCyclical + i);

                this[i] = new calElement(y, m + 1, i + 1, nStr1[(i + this.firstWeek) % 7],
                    lY, lM, lD++, lL,
                    cY, cM, cD);

            }

            //节气
            tmp1 = sTerm(y, m * 2) - 1;
            tmp2 = sTerm(y, m * 2 + 1) - 1;
            this[tmp1].solarTerms = solarTerm[m * 2];
            this[tmp2].solarTerms = solarTerm[m * 2 + 1];
            if (m == 3) this[tmp1].color = 'red'; //清明颜色

            //国历节日
            for (i in sFtv)
                if (sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
                    if (Number(RegExp.$1) == (m + 1)) {
                        this[Number(RegExp.$2) - 1].solarFestival += RegExp.$4 + '  '
                        if (RegExp.$3 == '*') this[Number(RegExp.$2) - 1].color = 'red'
                    }

                    //农历节日
            for (i in lFtv)
                if (lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
                    tmp1 = Number(RegExp.$1) - firstLM
                    if (tmp1 == -11) tmp1 = 1
                    if (tmp1 >= 0 && tmp1 < n) {
                        tmp2 = lDPOS[tmp1] + Number(RegExp.$2) - 1
                        if (tmp2 >= 0 && tmp2 < this.length) {
                            this[tmp2].lunarFestival += RegExp.$4 + '  '
                            if (RegExp.$3 == '*') this[tmp2].color = 'red'
                        }
                    }
                }

                //今日
            if (y == tY && m == tM) this[tD - 1].isToday = true;
        }

        //======================中文日期
        function cDay(d) {
            var s;

            switch (d) {
                case 10:
                    s = '初十';
                    break;
                case 20:
                    s = '二十';
                    break;
                    break;
                case 30:
                    s = '三十';
                    break;
                    break;
                default:
                    s = nStr2[Math.floor(d / 10)];
                    s += nStr1[d % 10];
            }
            return (s);
        }

        var cld;
        //存放节假日
        var hDays = [];

        function drawCld(SY, SM) { //传入了当前年月

            var i, sD, s, size;
            cld = new calendar(SY, SM);

            $("#GZ")[0].innerHTML = '  农历' + cyclical(SY - 1900 + 36) + '年&nbsp;【' + Animals[(SY - 4) % 12] + '年】';
            for (i = 0; i < 42; i++) {
                sObj = $("#SD" + i)[0];
                lObj = $("#LD" + i)[0];
                sObj.className = '';
                sD = i - cld.firstWeek;
                if (sD > -1 && sD < cld.length) { //日期内
                    sObj.innerHTML = sD + 1;
                    //wly 注册点击事件
                    $("#GD" + i).unbind('click').click(function() {
                        mOck(this, sD + 1);
                    });
                    $("#GD" + i).attr("on", "0");
                    var nowDays = SY + '' + addZ((SM + 1)) + addZ((sD + 1));
                    var hstr = hDays.join();
                    if (hstr.indexOf(nowDays) > -1) {
                        $("#GD" + i).addClass("selday");
                    }
                    if (cld[sD].isToday) $("#GD" + i).addClass("jinri"); //今日颜色

                    sObj.style.color = cld[sD].color; //国定假日颜色

                    if (cld[sD].lDay == 1) //显示农历月
                        lObj.innerHTML = '<b style="font-weight:normal;font-size:10px;">' + (cld[sD].isLeap ? '闰' : '') + cld[sD].lMonth + '月' + (monthDays(cld[sD].lYear, cld[sD].lMonth) == 29 ? '小' : '大') + '</b>';
                    else //显示农历日
                        lObj.innerHTML = cDay(cld[sD].lDay);

                    s = cld[sD].lunarFestival;
                    if (s.length > 0) { //农历节日
                        if (s.length > 8) s = s.substr(0, 5) + '...';
                        s = s.fontcolor('red');
                    } else { //国历节日
                        s = cld[sD].solarFestival;
                        if (s.length > 0) {
                            if (s.length > 8) s = s.substr(0, 5) + '...';
                            s = (s == '黑色星期五') ? s.fontcolor('black') : s.fontcolor('#0066FF');
                        } else { //廿四节气
                            s = cld[sD].solarTerms;
                            if (s.length > 0) s = s.fontcolor('limegreen');
                        }
                    }
                    if (cld[sD].solarTerms == '清明') s = '清明节'.fontcolor('red');
                    if (cld[sD].solarTerms == '芒种') s = '芒种'.fontcolor('red');
                    if (cld[sD].solarTerms == '夏至') s = '夏至'.fontcolor('red');
                    if (cld[sD].solarTerms == '冬至') s = '冬至'.fontcolor('red');

                    if (s.length > 0) lObj.innerHTML = s;

                } else { //非日期
                    $("#GD" + i).addClass("unover");
                    $("#GD" + i).unbind('click')
                }
            }
        }

        /*清除数据*/
        function clear() {
            for (i = 0; i < 42; i++) {
                sObj = $("#SD" + i)[0];
                sObj.innerHTML = '';
                lObj = $("#LD" + i)[0];
                lObj.innerHTML = '';
                $("#GD" + i).removeClass("unover");
                $("#GD" + i).removeClass("jinri");
                $("#GD" + i).removeClass("selday");
            }
        }

        var Today = new Date();
        var tY = Today.getFullYear();
        var tM = Today.getMonth();

        var tD = Today.getDate();

        var width = "130";
        var offsetX = 2;
        var offsetY = 18;

        var x = 0;
        var y = 0;
        var snow = 0;
        var sw = 0;
        var cnt = 0;
        var dStyle;

        // 将农历iLunarMonth月格式化成农历表示的字符串
        function FormatLunarMonth(iLunarMonth) {
            var szText = new String("正二三四五六七八九十");
            var strMonth;
            if (iLunarMonth <= 10) {
                strMonth = szText.substr(iLunarMonth - 1, 1);
            } else if (iLunarMonth == 11) strMonth = "十一";
            else strMonth = "十二";
            return strMonth + "月";
        }

        // 将农历iLunarDay日格式化成农历表示的字符串
        function FormatLunarDay(iLunarDay) {
            var szText1 = new String("初十廿三");
            var szText2 = new String("一二三四五六七八九十");
            var strDay;
            if ((iLunarDay != 20) && (iLunarDay != 30)) {
                strDay = szText1.substr((iLunarDay - 1) / 10, 1) + szText2.substr((iLunarDay - 1) % 10, 1);
            } else if (iLunarDay != 20) {
                strDay = szText1.substr(iLunarDay / 10, 1) + "十";
            } else {
                strDay = "二十";
            }
            return strDay;
        }

        //------------start------
        var i_size = 0;
        //日期点击函数
        function mOck(thisObj, v) {
            var dayJson = "";
            function mOclApi() {
                var dayContainer = thisObj.getElementsByTagName("font")[0]; //获取tr里面公历的日期 
                //记录是否为周末
                var lx = '0';
                var nian = $('#nian').text(); //当前年
                var yue = $('#yue').text(); //当前月

                var day = dayContainer.innerHTML; //当前日
                var dayColor = dayContainer.attributes["color"]; //如果是红色代表就是周末，没有就是工作日
                var dayF = nian + '/' + addZ(yue) + '/' + addZ(day);

                if (dayColor && dayColor.value == 'red' && getH(dayF)) { //首先得有颜色，必须是红色，必须是周末
                    lx = '1';
                }
                dayJson = nian + addZ(yue) + addZ(day);
            }

            if (i_startEnd == "TP") { //时间点
                mOclApi();
                var onoff = thisObj.attributes["on"].value; //获取所以属性，判断是否on的属性
                if (onoff == '0') {
                    //没有选中
                    thisObj.setAttribute("class", "selday");
                    thisObj.attributes["on"].value = '1';
                    hDays.push(dayJson);
                } else {
                    //选中的取消选中状态
                    thisObj.setAttribute("class", "");
                    thisObj.attributes["on"].value = '0';
                    delArry(hDays, dayJson);
                }
            }
            if (i_startEnd == "TR") { //时间段
                mOclApi();
                var onoff = thisObj.attributes["on"].value; //获取所以属性，判断是否on的属性
                if (onoff == '0') {
                    if (i_size == 2) {
                        return
                    }
                    //没有选中
                    thisObj.setAttribute("class", "selday");
                    thisObj.attributes["on"].value = '1';
                    hDays.push(dayJson);
                    ++i_size;
                } else {
                    //选中的取消选中状态
                    thisObj.setAttribute("class", "");
                    thisObj.attributes["on"].value = '0';
                    delArry(hDays, dayJson);
                    --i_size;
                }
            }
        }

        //删除数组指定元素
        function delArry(arr, obj) {
            for (var i = arr.length - 1; i > -1; i--) {
                if (arr[i] == obj) {
                    arr.splice(i, 1); //参数（删除的元素下标，从该下标起删除几个元素）
                }
            }
        }

        function addZ(obj) { //如果小于10，补位

            return obj < 10 ? '0' + obj : obj;
        }

        function getH(obj) {
            var d = new Date(Date.parse(obj));
            var c = d.getDay();
            if (c == 0 || c == 6) { //如果是周末才执行，不是周末不执行
                return true;
            } else {
                return false;
            }
            //switch(c){    case 0:        a='星期日';        break;    case 1:        a='星期一';        break;    case 2:        a='星期二';        break;    case 3:        a='星期三';    case 4:        a='星期四';    case 5:        a='星期五';    case 6:        a='星期六';}
        }

        //清除详细日期资料
        function mOut(thisObj) {
            //   thisObj.style.backgroundColor = '';
            if (cnt >= 1) {
                sw = 0
            }
            if (sw == 0) {
                snow = 0;
                document.getElementById("details").style.display = 'none';
            } else cnt++;
        }

        var global = {
            currYear: -1, // 当前年
            currMonth: -1, // 当前月，0-11
            currDate: null, // 当前点选的日期
            uid: null,
            username: null,
            email: null,
            single: false
                // 是否为独立页调用，如果是值为日历id，使用时请注意对0的判断，使用 single !== false 或者 single === false
        };

        var dateSelection = {
            currYear: -1,
            currMonth: -1,

            minYear: 1901,
            maxYear: 2100,

            beginYear: 0,
            endYear: 0,

            tmpYear: -1,
            tmpMonth: -1,

            init: function(year, month) {
                if (typeof year == 'undefined' || typeof month == 'undefined') {
                    year = global.currYear;
                    month = global.currMonth;
                }
                this.setYear(year);
                this.setMonth(month);
                this.showYearContent();
                this.showMonthContent();

            },
            show: function() {
                document.getElementById('dateSelectionDiv').style.display = 'block';
            },
            hide: function() {
                this.rollback();
                document.getElementById('dateSelectionDiv').style.display = 'none';
            },
            today: function() {
                var today = new Date();
                var year = today.getFullYear();
                var month = today.getMonth();

                if (this.currYear != year || this.currMonth != month) {
                    if (this.tmpYear == year && this.tmpMonth == month) {
                        this.rollback();
                    } else {
                        this.init(year, month);
                        this.commit();
                    }
                }
            },
            go: function() {
                if (this.currYear == this.tmpYear && this.currMonth == this.tmpMonth) {
                    this.rollback();
                } else {
                    this.commit();
                }
                this.hide();
            },
            goToday: function() {
                this.today();
                this.hide();
            },
            goPrevMonth: function() {
                this.prevMonth();
                this.commit();
            },
            goNextMonth: function() {
                this.nextMonth();
                this.commit();
            },
            goPrevYear: function() {
                this.prevYear();
                this.commit();
            },
            goNextYear: function() {
                this.nextYear();
                this.commit();
            },
            changeView: function() {
                global.currYear = this.currYear;
                global.currMonth = this.currMonth;
                clear();
                $("#nian").html(global.currYear);
                $("#yue").html(parseInt(global.currMonth) + 1);
                drawCld(global.currYear, global.currMonth);
            },
            commit: function() {
                if (this.tmpYear != -1 || this.tmpMonth != -1) {
                    // 如果发生了变化
                    if (this.currYear != this.tmpYear || this.currMonth != this.tmpMonth) {
                        // 执行某操作
                        this.showYearContent();
                        this.showMonthContent();
                        this.changeView();
                    }
                    this.tmpYear = -1;
                    this.tmpMonth = -1;
                }
            },
            rollback: function() {
                if (this.tmpYear != -1) {
                    this.setYear(this.tmpYear);
                }
                if (this.tmpMonth != -1) {
                    this.setMonth(this.tmpMonth);
                }
                this.tmpYear = -1;
                this.tmpMonth = -1;
                this.showYearContent();
                this.showMonthContent();
            },
            prevMonth: function() {
                var month = this.currMonth - 1;
                if (month == -1) {
                    var year = this.currYear - 1;
                    if (year >= this.minYear) {
                        month = 11;
                        this.setYear(year);
                    } else {
                        month = 0;
                    }
                }
                this.setMonth(month);
            },
            nextMonth: function() {
                var month = parseInt(this.currMonth) + 1;
                if (month == 12) {
                    var year = parseInt(this.currYear) + 1;
                    if (year <= this.maxYear) {
                        month = 0;
                        this.setYear(year);
                    } else {
                        month = 11;
                    }
                }
                this.setMonth(month);
            },
            prevYear: function() {
                var year = this.currYear - 1;
                if (year >= this.minYear) {
                    this.setYear(year);
                }
            },
            nextYear: function() {
                var year = parseInt(this.currYear) + 1;
                if (year <= this.maxYear) {
                    this.setYear(year);
                }
            },
            prevYearPage: function() {
                this.endYear = this.beginYear - 1;
                this.showYearContent(null, this.endYear);
            },
            nextYearPage: function() {
                this.beginYear = this.endYear + 1;
                this.showYearContent(this.beginYear, null);
            },
            selectYear: function() {
                var selectY = $('select[@name="SY"] option[@selected]').text();
                this.setYear(selectY);
                this.commit();
            },
            selectMonth: function() {
                var selectM = $('select[@name="SM"] option[@selected]').text();
                this.setMonth(selectM - 1);
                this.commit();
            },
            setYear: function(value) {
                if (this.tmpYear == -1 && this.currYear != -1) {
                    this.tmpYear = this.currYear;
                }
                $('#SY' + this.currYear).removeClass('curr');
                this.currYear = value;
                $('#SY' + this.currYear).addClass('curr');
            },
            setMonth: function(value) {
                if (this.tmpMonth == -1 && this.currMonth != -1) {
                    this.tmpMonth = this.currMonth;
                }
                $('#SM' + this.currMonth).removeClass('curr');
                this.currMonth = value;
                $('#SM' + this.currMonth).addClass('curr');

            },
            showYearContent: function(beginYear, endYear) {
                if (!beginYear) {
                    if (!endYear) {
                        endYear = parseInt(this.currYear) + 1;
                    }
                    this.endYear = endYear;
                    if (this.endYear > this.maxYear) {
                        this.endYear = this.maxYear;
                    }
                    this.beginYear = this.endYear - 3;
                    if (this.beginYear < this.minYear) {
                        this.beginYear = this.minYear;
                        this.endYear = this.beginYear + 3;
                    }
                }
                if (!endYear) {
                    if (!beginYear) {
                        beginYear = this.currYear - 2;
                    }
                    this.beginYear = beginYear;
                    if (this.beginYear < this.minYear) {
                        this.beginYear = this.minYear;
                    }
                    this.endYear = this.beginYear + 3;
                    if (this.endYear > this.maxYear) {
                        this.endYear = this.maxYear;
                        this.beginYear = this.endYear - 3;
                    }
                }

                var s = '';
                for (var i = this.beginYear; i <= this.endYear; i++) {
                    s += '<span id="SY' + i + '" class="year" >' + i + '</span>';
                }
                document.getElementById('yearListContent').innerHTML = s;

                $('#SY' + this.currYear).addClass('curr');
                $(".year").click(function() {
                    console.info((this.id.replace('SY', '')))
                    dateSelection.setYear(this.id.replace('SY', ''));
                });
            },
            showMonthContent: function() {
                var s = '';
                for (var i = 0; i < 12; i++) {
                    s += '<span id="SM' + i + '" class="month">' + (i + 1).toString() + '</span>';
                }
                document.getElementById('monthListContent').innerHTML = s;
                $(".month").click(function() {
                    var CilckMonths = 0;
                    CilckMonths = this.id.replace('SM', '');
                    dateSelection.setMonth(CilckMonths);
                });
                $('#SM' + this.currMonth).addClass('curr');

            },
            //根据节假日去相关的月份
            goHoliday: function(N) {
                this.setMonth(N);
                this.commit();
            }
        };

        function initRiliIndex() {
            var dateObj = new Date();
            global.currYear = dateObj.getFullYear();
            global.currMonth = dateObj.getMonth();
            dateSelection.init();

        }

        function int() {
            initRiliIndex();
            clear();
            $("#nian").html(tY);
            $("#yue").html(tM + 1);
            drawCld(tY, tM);
        }

        /*初始化日期*/
        function initialization() {

            int();

            /*年份递减*/
            $("#nianjian").click(function() {
                dateSelection.goPrevYear();

            });
            /*年份递加*/
            $("#nianjia").click(function() {
                dateSelection.goNextYear();

            });

            /*月份递减*/
            $("#yuejian").click(function() {

                dateSelection.goPrevMonth();
            });

            /*月份递加*/
            $("#yuejia").click(function() {
                dateSelection.goNextMonth();

            });
            $("#sucaijiayuan").hide();
            $("#i_div").css("z-index", "0");
        }

        //提交
        function h_submit() {
            if (i_startEnd == "TR") {
                if (hDays == "") {
                    alert("请选择起始时间！");
                    return;
                }
                if (i_size == 2) {
                    $("#sucaijiayuan").hide();
                    $("#i_div").css("z-index", "0");
                    $("#i_id").val(hDays);
                } else {
                    alert("请选择终止日期!");
                    return;
                }
            } else {
                if (hDays == "") {
                    alert("请至少选择一个日期！");
                    return;
                } else {
                    $("#sucaijiayuan").hide();
                    $("#i_div").css("z-index", "0");
                    $("#i_id").val(hDays);
                    $(".btnQX").trigger("click");

                }
            }
        }

        //重置
        function rebuild() {
            $("#sucaijiayuan td").removeClass("selday").attr("on", 0);
            hDays = [];
            int();
            i_size = 0;
        }

        function btn_remove() {
            $("#sucaijiayuan").hide();
            $("#i_div").css("z-index", "0");
        }

        //画数据
        var i_tr = "";
        painting();

        function painting() {
            var gNum;
            for (var i = 0; i < 6; i++) {
                i_tr += '<tr align=center height="10px" id="tt">';
                for (var j = 0; j < 7; j++) {
                    gNum = i * 7 + j;
                    i_tr += '<td  id="GD' + gNum + '" on="0" ><font  id="SD' + gNum + '" style="font-size:14px;"  face="Arial"';
                    if (j == 0) i_tr += 'color=red';
                    if (j == 6)
                        if (i % 2 == 1) i_tr += 'color=red';
                        else i_tr += 'color=red';
                    i_tr += '  TITLE="">  </font><br><font  id="LD' + gNum + '"  size=2  style="white-space:nowrap;overflow:hidden;cursor:default;">  </font></td>';
                }
                i_tr += '</tr>';
            }
        }

        $('#jieQi').change(function() {
            i_startEnd = $("input[name=inlineRadioOptions]:checked").attr("value");
            var myDate = new Date();
            var jieQiVal = $(this).children('option:selected').val();
            var getJieQi = sTerm2(myDate.getFullYear(), jieQiVal);
            if (jieQiVal == 999) {
                $("#i_id").val("");
            } else {
                if (i_startEnd == "TR") {
                    $("#i_id").val(getJieQi + "," + getJieQi);
                } else {
                    $("#i_id").val(getJieQi);
                }

            }

        });

        $(".btnTJ").click(function() {
            h_submit();
        });

        $(".btnQX").click(function() {
            btn_remove();
        });

        $(".btnCZ").click(function() {
            rebuild();
        });

        $(".cal_next").click(function() {
            dateSelection.show();
        });

        $(".dateSelectionRili").click(function() {
            dateSelection.show();
        });

        $("#dateSelectionTodayBtn").click(function() {
            dateSelection.goToday();
        });

        $("#dateSelectionOkBtn").click(function() {
            dateSelection.go();
        });
        $("#dateSelectionCancelBtn").click(function() {
            dateSelection.hide();
        });

        $("#yearListPrev").click(function() {
            dateSelection.prevYearPage();
        });
        $("#yearListNext").click(function() {
            dateSelection.nextYearPage();
        });

        var i_startEnd = "";
        $("#i_id").mouseover(function() { this.focus(); });
        $("#i_id").mouseout(function() { this.blur(); });
        //点击事件
        $("#i_id").click(function() {
            i_startEnd = $("input[name=inlineRadioOptions]:checked").attr("value")
            $("#sucaijiayuan").show();
            $("#i_div").css("z-index", "3");
            rebuild();
        });
        $("#t_body").append(i_tr);
        //选择时间类型，如果已选中，则关闭
        $("input[name=inlineRadioOptions]").click(function() {
            if (!$("#sucaijiayuan").is(":hidden")) {
                $("#sucaijiayuan").hide();
                $("#i_div").css("z-index", "0");
            }
        });

        var exportObj = {};
        exportObj["initialization"] = initialization;

        return exportObj;
    }
    /*初始化函数*/
    e.fn.LunarInitDate = function() {
        var exportobj = zzqDate();
        exportobj.initialization();
    }
})(jQuery);
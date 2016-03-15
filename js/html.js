var i_dateHtml = "<div id='myrl'><form name='CLD'>\
      <TABLE class='biao' width='245' id='sucaijiayuan'>\
        <TBODY id='t_body'>\
          <TR>\
            <TD class='calTit' colSpan=7 style='height:30px;padding-top:3px;text-align:center'>\
				<input type='button' value='提交' class='button6 btnTJ' onclick='h_submit()'>\
				<input type='button' value='重置' class='button6 btnCZ' onclick='rebuild()'>\
				<input type='button' value='取消' class='button6 btnQX' onclick='btn_remove()'>\
				<div style='width:245px ;float:left'> \
					<span id='dateSelectionRili' class='dateSelectionRili' style='cursor:pointer;color: white ' onclick='dateSelection.show()'>\
						<span id='nian' class='topDateFont'></span>\
						<span class='topDateFont'>年</span>\
						<span id='yue' class='topDateFont'></span>\
						<span class='topDateFont'>月</span>\
						<span class='dateSelectionBtn cal_next' onclick='dateSelection.show()'>▼</span>\
					</span>\
					<font id=GZ class='topDateFont'></font>\
				</div>\
				<div style='float:left'>\
					<a href='#' title='上一年' id='nianjian' class='ymNaviBtn lsArrow'></a>\
					<a href='#' title='上一月' id='yuejian' class='ymNaviBtn lArrow'></a>\
				</div>\
				<div style='left: 130px;width:230px;height:100px; display: none' id='dateSelectionDiv'>\
					<div id='dateSelectionHeader'></div>\
					<div id='dateSelectionBody'>\
						<div id='yearList'>\
							<div id='yearListPrev' onclick='dateSelection.prevYearPage()'>&lt</div>\
							<div id='yearListContent'></div>\
							<div id='yearListNext' onclick='dateSelection.nextYearPage()'>&gt</div>\
						</div>\
						<div id='dateSeparator'></div>\
						<div id='monthList'>\
							<div id='monthListContent'>\
								<span id='SM0' class='month' onclick='dateSelection.setMonth(0)'>1</span>\
								<span id='SM1' class='month' onclick='dateSelection.setMonth(1)'>2</span>\
								<span id='SM2' class='month' onclick='dateSelection.setMonth(2)'>3</span>\
								<span id='SM3' class='month' onclick='dateSelection.setMonth(3)'>4</span>\
								<span id='SM4' class='month' onclick='dateSelection.setMonth(4)'>5</span>\
								<span id='SM5' class='month' onclick='dateSelection.setMonth(5)'>6</span>\
								<span id='SM6' class='month' onclick='dateSelection.setMonth(6)'>7</span>\
								<span id='SM7' class='month' onclick='dateSelection.setMonth(7)'>8</span>\
								<span id='SM8' class='month' onclick='dateSelection.setMonth(8)'>9</span>\
								<span id='SM9' class='month' onclick='dateSelection.setMonth(9)'>10</span>\
								<span id='SM10' class='month' onclick='dateSelection.setMonth(10)'>11</span>\
								<span id='SM11' class='month curr' onclick='dateSelection.setMonth(11)'>12</span>\
							</div>\
							<div style='clear:both'></div>\
						</div>\
						<div id='dateSelectionBtn'>\
							<div id='dateSelectionTodayBtn' onclick='dateSelection.goToday()'>今天</div>\
							<div id='dateSelectionOkBtn' onclick='dateSelection.go()'>确定</div>\
							<div id='dateSelectionCancelBtn' onclick='dateSelection.hide()'>取消</div>\
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
          </TR>	\
        </tbody>\
      </TABLE>\
    </form></div>";
document.getElementById('i_div').innerHTML = i_dateHtml;
   

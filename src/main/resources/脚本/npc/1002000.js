
var status = 0;
var maps = Array(102000000, 101000000, 100000000, 103000000);
var cost = Array(1200, 1200, 800, 1000);
var costBeginner = Array(120, 120, 80, 100);
var selectedMap = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 24 && mode == 0) {
		cm.sendNext("����������ﻹ�кܶ���Ȥ�����鰡��������뵽��Ĵ���ȥ���κ�ʱ�򶼿��Ը���˵�������˰ɣ�");
		cm.dispose();
		return;
	} else if ((status <= 3 && mode == 0) || (status == 23 && mode == 0) || (status == 6 && mode == 1) || (status == 9 && mode == 1) || (status == 12 && mode == 1) || (status == 15 && mode == 1) || (status == 18 && mode == 1)) {
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendNext("����ȥ��Ĵ�����Ҫ���㸶һ��Ǯ���ҾͿ������㵽��ĵط���������~��Ҳ���������е�󡣲��������ֻ��һ�۵ġ�");
	} else if (status == 1) {
		cm.sendSimple("���ǵ�һ�ε�������������ܲ�̫��Ϥ�������������й��������Ϣ��\r\n#L0##b�ڽ�������ʲô���Ĵ��䣿#l\r\n#L1#��������͵���ĵط���#k#l");
	} else if (status == 2) {
		if (selection == 0) {
			cm.sendSimple("�ڽ�������7�����ׯ��\r\n#L0##b�����#l\r\n#L1#��ʿ����#l\r\n#L2#ħ������#l\r\n#L3#���ִ�#l\r\n#L4#��������#l");
		} else if (selection == 1) {
			status = 23;
			if (cm.isBeginner()) {
				var selStr = "�������֣������ܵ�һ�۵��Żݣ���ȥ�ĸ������أ�#b";
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " ���)#l";
				}
			} else {
				var selStr = "�㲻�����ְɣ��ǾͲ��ܸ�����ۡ�������ȥ�ĸ������أ�#b";
				for (var i = 0; i < maps.length; i++) {
				selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " ���)#l";
				}
			}
		cm.sendSimple(selStr);
		}
	} else if (status == 3) {
		if (selection == 0) {
			status = 4;
			cm.sendNext("�ҽ��ܽ���#b�����#k�ɡ��Ӳʺ絺����ά�����Ǻŵ���ľ������Ҳ����˵��������Ǵ�������ۣ����Բʺ絺�ĺܶ����־ʹ����￪ʼ���ǵ�ð�����ĵġ�");
		} else if (selection == 1) {
			status = 7;
			cm.sendNext("�����ܱ߶��������Ĳ�ԭ������Ĺ������ǱȽ���С�ģ�����˵����ط���������ϰ�ĺõط�������㻹תְ��սʿ����ʦ�������֣�������������ְҵ֮һ�������������������ĵȼ���");
		} else if (selection == 2) {
			status = 10;
			cm.sendNext("������ܽ���#bħ������#k�ɡ�����λ�ڽ��������ɭ�����ħ��ʦ���䡣�������ܶ������ض������де�ɭ�֡����Ǹ������в�ϲ���˵����������Ե����Ƕ���Ҫ�ر�С�ģ�ǧ��Ҫ�������ǰ���");
		} else if (selection == 3) {
			status = 13;
			cm.sendNext("������ܽ���#b���ִ�#k�ɡ�����λ�ڽ������ϲ���ԭ�Ĺ����ִ��䡣�������Χ�������Ĳ�ԭ�������де����֡�����Ҳ�����ǳ����ġ�����㻹ûȥ����һ��Ҫȥ��������");
		} else if (selection == 4) {
			status = 16;
			cm.sendNext("�Ҹ�����ܽ���#b��������#k�ɡ�����λ�ڽ���������������֮�ǣ�������Щ��¥���˸о��е���֣����ҳ����Ͽճ��������������ţ�������˵������ʱ�ڸߴ����Կ�������ƻ裬��˵�ǳ�Ư����");
		}
	} else if (status == 4) {
		cm.dispose();
	} else if (status == 5) {
		cm.sendNextPrev("�Ҹ������#b��ʿ����#k������λ�ڽ���������ĸ�ԭսʿ���䡣��������ܶ��ǻ�������ʯɽ����������Ҳ��̫�ã�����������ǿ��սʿ��û���������������档");
	} else if (status == 6) {
		cm.sendNextPrev("�����ܱ߶��������Ĳ�ԭ������Ĺ������ǱȽ���С�ģ�����˵����ط���������ϰ�ĺõط�������㻹תְ��սʿ����ʦ�������֣�������������ְҵ֮һ�������������������ĵȼ���");
	} else if (status == 7) {
		cm.dispose();
	} else if (status == 8) {
		cm.sendNextPrev("��˵�ڸ�ԭ����Χ��ľ����Ұ�����ӵȹ�������������ɽ���ﻹ�п��µ�������Σ�յģ�Ȱ�㻹�ǲ�Ҫ��æ�ж���");
	} else if (status == 9) {
		cm.sendNextPrev("������뵱#bսʿ#k����ȥ����ʿ�����ĳ���#r��������#k�ɡ������ĵǼ���10�����ϣ����߱��˽ϸߵ������Ļ�����˵���������㵱սʿ������������������Ļ���ֻҪ����Ŭ��������");
	} else if (status == 10) {
		cm.dispose();
	} else if (status == 11) {
		cm.sendNextPrev("ɭ�ֵ���Χ����ˮ�飬���ߵ�Ģ�������Ӻͽ�ʬ��ȹ����ɭ�ֵ�����������з���ħŮ������㻹���Ǻ�ǿ����ò�Ҫ�ӽ�ħŮ��");
	} else if (status == 12) {
		cm.sendNextPrev("������뵱#bħ��ʦ#k����ȥħ�������Ҵ�ħ��ʦ#r��˹#k�����������ĵȼ���8�����ϣ����߱�һ����������˵�����������㵱ħ��ʦ������������������Ļ���ֻ���Լ�����Ŭ���ˡ�");
	} else if (status == 13) {
		cm.dispose();
	} else if (status == 14) {
		cm.sendNextPrev("�ڲ�ԭ���ܱ�����ţ��Ģ������ȱȽ����Ĺ��������˵������Χ�и�����֮��԰�ĵط�����������ʱ����ַǳ�ǿ���Ľ�Ģ�����Ĺ��");
	} else if (status == 15) {
		cm.sendNextPrev("������뵱#b������#k����ȥ���ִ���һ�����ػ���һ����#r������#k��Ҫ����ĵȼ���10�����ϻ���һ�������ݶȣ������ܻ����㵱�����֡��������������������Ļ���ֻ���Լ�����Ŭ���ˡ�");
	} else if (status == 16) {
		cm.dispose();
	} else if (status == 17) {
		cm.sendNextPrev("�ڷ����������и�ͨ������Թ���ͨ��������ȥ������߳�û������ء���˵��������������û�ĵ������ڵ��������׵ĵط����ֵ����飬�ǺͿ���һ��ǿ����Σ�յĹ��");
	} else if (status == 18) {
		cm.sendNextPrev("����뵱#b����#k����ȥ������������ν�İ��ھ���#r���³#k�ɡ�Ҫ����ĵȼ���10�����ϻ���һ�������ݶȣ���˵���������㵱����������������������Ļ���ֻ���Լ�����Ŭ���ˡ�");
	} else if (status == 19) {
		cm.dispose();
	} else if (status == 20) {
		cm.sendNextPrev("��Ϊŵ����˹���������ִ�������֮��Ĺ�ϵ��ֻҪ��ȥһ��Ϳ��Կ����ܱ�������ׯ����������˵����ĺ����������κ�ʱ�򶼺ܿ����С�");
	} else if (status == 21) {
		cm.sendNextPrev("������Ϊ�����Ļ�����ȥ��ŵ����˹�ŵĴ����ѡ�����10�����ϵ������ﵽĳ�̶ֳȵĻ��Ϳ��ܳ�Ϊ��������Ŭ���Ļ���ֻ��ͨ��Ŭ�������������ˡ�");
	} else if (status == 22) {
		cm.dispose();
	} else if (status == 23) {
		cm.dispose();
	} else if (status == 24) {
		if (cm.isBeginner()) {
			cm.sendYesNo("������������ð���°������ȷ��Ҫȥ #b#m" + maps[selection] + "##k������㸶 #b" + costBeginner[selection] + " ���#k���Ҿ����㵽�����ô����");
			selectedMap = selection;
		} else {
			cm.sendYesNo("������������ð���°������ȷ��Ҫȥ #b#m" + maps[selection] + "##k������㸶 #b" + cost[selection] + " ���#k�� �Ҿ����㵽�����ô����");
			selectedMap = selection;
		}
	} else if (status == 25) {
		if (cm.isBeginner()) {
			if (cm.getMeso() < costBeginner[selectedMap]) {
				cm.sendNext("��û���㹻�Ľ�ҡ�");
				cm.dispose();
			} else {
				cm.gainMeso(-costBeginner[selectedMap]);
				cm.warp(maps[selectedMap], 0);
				cm.dispose();
			}
		} else {
			if (cm.getMeso() < cost[selectedMap]) {
				cm.sendNext("��û���㹻�Ľ�ҡ�");
				cm.dispose();
			} else {
				cm.gainMeso(-cost[selectedMap]);
				cm.warp(maps[selectedMap], 0);
				cm.dispose();
				}
			}
		}
	}
}

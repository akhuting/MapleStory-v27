//�ٷ�����⳵
//���ִ��а�

var status = 0;
var maps = Array(104000000, 100000000, 102000000, 101000000);
var cost = Array(800, 1000, 1000, 1200);
var costBeginner = Array(80, 100, 100, 120);
var selectedMap = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("������仹�кܶ�Ư���ľ��㣬�������ȥ�����ط�����ӭ��ʱʹ�����ǵĳ��⳵����");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("����~�����Ƿ϶��а͡����벻���ֿ���ְ�ȫ�������ط�ȥ����ô��ʹ�����ǵĳ��⳵�ɡ��������Ͻ�����ȥ����ȥ�ĵط����۸�ܱ���Ŷ!");
		} else if (status == 1) {
			cm.sendNextPrev("Ϊ���չ����֣��ҿ��Ը�����90%���Ż�Ŷ��")
		} else if (status == 2) {
			var selStr = "����ѡ��Ŀ�ĵذɡ�����Ŀ�ĵصĲ�ͬ������Ҳ������ͬ��#b";
			if (cm.isBeginner()) {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + costBeginner[i] + " ���)#l";
				}
			} else {
				for (var i = 0; i < maps.length; i++) {
					selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + cost[i] + " ���)#l";
				}
			}
			cm.sendSimple(selStr);
		} else if (status == 3) {
			if (cm.isBeginner()) {
				if (cm.getMeso() < costBeginner[selection]) {
					cm.sendOk("�������Ľ���Ƿ��㹻���η��á�");
					cm.dispose();
				} else {
					cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #m" + maps[selection] + "#��");
					selectedMap = selection;
				}
			}
			else {
				if (cm.getMeso() < cost[selection]) {
					cm.sendOk("�������Ľ���Ƿ��㹻���η��á�");
					cm.dispose();
				} else {
					cm.sendYesNo("����������������Ѿ����������ȷ��Ҫȥ #m" + maps[selection] + "#��?");
					selectedMap = selection;
				}
			}		
		} else if (status == 4) {
			if (cm.isBeginner()) {
				cm.gainMeso(-costBeginner[selectedMap]);
			}
			else {
				cm.gainMeso(-cost[selectedMap]);
			}
			cm.warp(maps[selectedMap], 0);
			cm.dispose();
		}
	}
}	

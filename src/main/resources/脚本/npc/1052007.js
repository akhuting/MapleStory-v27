var itemid = [4031036,4031037,4031038];
var mapid = [103000900,103000903,103000906];
var menu;
var status=0;
var sw;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
		cm.dispose();
    } else {
		if (mode == 0 && status == 1) {
			cm.sendNext("�������ﻹ���µ�ô��");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else 
			status--;
		if (status == 1) {
			menu = "�����Ǽ�Ʊ�ڣ�����Ҫ���͵����\r\n";
			for (i=0; i < itemid.length; i++) {
				menu += "#L"+i+"##b#m"+mapid[i]+"##k#l\r\n";
			}
			
			cm.sendSimple(menu);
		} if (status == 2) {
			if(cm.haveItem(itemid[selection],1)) {
				cm.gainItem(itemid[selection],-1);
				cm.warp(mapid[selection]);
			} else {
				cm.sendOk("��û�й���Ʊ��");
			}
			cm.dispose();	
		}
	}
}
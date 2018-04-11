/**
	Arwen the Fairy - Victoria Road : Ellinia (101000000)
**/

var status = 0;
var item;
var selected;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    } else if (status == 2 && mode == 0) {
        cm.sendNext(item + "�Ǻ������ģ�����ȥ׼�����ϰɡ�");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("�ԣ������������е�������ר��... �����������Թ������ͱ���ֹ������Ӵ�������������ôǿ׳����û��ϵ������Ҳ��ϣ��Ұ������ر�Ķ�����");
    } else if (status == 1) {
        cm.sendSimple("������ʲô���Ķ����أ�\r\n#b#L0##t4011007##l\r\n#L1##t4021009##l\r\n#L2##t4031042##l");
    } else if (status == 2) {
        selected = selection;
        if (selection == 0) {
            item = "#t4011007#";
            cm.sendYesNo("������#t4011007#�����Ǹ�������Ҫұ����#b#t4011000#, #t4011001#, #t4011002#, #t4011003#, #t4011004#, #t4011005#, #t4011006##k��һ��������Ҫ10000��ҡ�");
        } else if (selection == 1) {
            item = "#t4021009#";
            cm.sendYesNo("������#t4021009#�����Ǹ���������Ҫ��1��#b#t4021000#, #t4021001#, #t4021002#, #t4021003#, #t4021004#, #t4021005#, #t4021006#, #t4021007#, #t4021008##k������Ҫ15000��ҡ�");
        } else if (selection == 2) {
            item = "#t4031042#";
            cm.sendYesNo("������#t4031042#�����Ǹ���������Ҫ1��#b#t4001006#��1��#t4011007#��1��#t4021008##k������Ҫ30000��ҡ����������ë�Ƿǳ��ر�ģ���������ڵ��ϣ����ͻ���ʧ���Ͳ��ܸ����ˡ�");
        }
    } else if (status == 3) {
        if (selected == 0) {
            if (cm.haveItem(4011000) && cm.haveItem(4011001) && cm.haveItem(4011002) && cm.haveItem(4011003) && cm.haveItem(4011004) && cm.haveItem(4011005) && cm.haveItem(4011006) && cm.getMeso() > 10000) {
                cm.gainMeso( - 10000);
                cm.gainItem(4011000, -1);
                cm.gainItem(4011001, -1);
                cm.gainItem(4011002, -1);
                cm.gainItem(4011003, -1);
                cm.gainItem(4011004, -1);
                cm.gainItem(4011005, -1);
                cm.gainItem(4011006, -1);
                cm.gainItem(4011007, 1);
                cm.sendNext("����" + item + "�� ����ȥ�ǳ��İ���������Ĳ��ϻ���ͦ����ġ���ӭ�´ι��١�");
            } else {
                cm.sendNext("���ǲ���Ǯ������������û��ұ����#b#t4011000#, #t4011001#, #t4011002#, #t4011003#, #t4011004#, #t4011005#, #t4011006##k��һ����");
            }
        } else if (selected == 1) {
            if (cm.haveItem(4021000) && cm.haveItem(4021001) && cm.haveItem(4021002) && cm.haveItem(4021003) && cm.haveItem(4021004) && cm.haveItem(4021005) && cm.haveItem(4021006) && cm.haveItem(4021007) && cm.haveItem(4021008) && cm.getMeso() > 15000) {
                cm.gainMeso( - 15000);
                cm.gainItem(4021000, -1);
                cm.gainItem(4021001, -1);
                cm.gainItem(4021002, -1);
                cm.gainItem(4021003, -1);
                cm.gainItem(4021004, -1);
                cm.gainItem(4021005, -1);
                cm.gainItem(4021006, -1);
                cm.gainItem(4021007, -1);
                cm.gainItem(4021008, -1);
                cm.gainItem(4021009, 1);
                cm.sendNext("����" + item + "�� ����ȥ�ǳ��İ���������Ĳ��ϻ���ͦ����ġ���ӭ�´ι��١�");
            } else {
                cm.sendNext("���ǲ���Ǯ������������û��ұ���ĸ�1��#b#t4021000#, #t4021001#, #t4021002#, #t4021003#, #t4021004#, #t4021005#, #t4021006#, #t4021007#, #t4021008##k��");
            }
        } else if (selected == 2) {
            if (cm.haveItem(4001006) && cm.haveItem(4011007) && cm.haveItem(4021008) && cm.getMeso() > 30000) {
                cm.gainMeso( - 30000);
                cm.gainItem(4001006, -1);
                cm.gainItem(4011007, -1);
                cm.gainItem(4021008, -1);
                cm.gainItem(4031042, 1);
                cm.sendNext("����" + item + "�� ����ȥ�ǳ��İ���������Ĳ��ϻ���ͦ����ġ���ӭ�´ι��١�");
            } else {
                cm.sendNext("���ǲ���Ǯ������������û��1��#b#t4001006#��1��#t4021007##k��1��#t4021008##k��");
            }
        }
        cm.dispose();
    }
}
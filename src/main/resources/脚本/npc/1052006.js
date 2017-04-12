/**
	Jake - Victoria Road : Subway Ticketing Booth (103000100)
**/

var meso = [500, 1200, 2000];
var item = [4031036, 4031037, 4031038];
var selector;
var menu = "";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    } else if (status == 1 && mode == 0) {
        cm.sendNext("ֻҪ��Ʊ������ʱ���ܽ�ȥ����Ȼ������Σ�յ�װ�ã���Ҳ��������Ʒ���Ժ������ȥ��ʱ�������ɡ�");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getPlayerStat("LVL") <= 19) {
            cm.sendNext("������Ʊ���ܽ�ȥ������ʱ����ƱҲ���ܽ�ȥ���㻹̫С�ˣ����������Σ�յģ��Ͻ�ȥ������19���ٹ����ɣ�");
            cm.dispose();
        } else {
            for (var x = 1; x <= 3; x++) {
                if (cm.getPlayerStat("LVL") >= 20 && cm.getPlayerStat("LVL") <= 29) {
                    menu += "\r\n#L" + x + "##b����B" + x + "#k#l";
                    break;
                } else if (cm.getPlayerStat("LVL") >= 30 && cm.getPlayerStat("LVL") <= 39 && x < 2) {
                    menu += "\r\n#L" + x + "##b����B" + x + "#k#l";
                } else {
                    menu += "\r\n#L" + x + "##b����B" + x + "#k#l";
                }
            }
            cm.sendSimple("�����ȥ��Ҫ��Ʊ����Ʊ����ͨ���ұߵ�#p1052007#���Խ�ȥ����ʲôƱ��" + menu);
        }
    } else if (status == 1) {
        selector = selection;
		selector -= 1;
        cm.sendYesNo("��Ҫ��#b����B" + selection + "��Ʊ#k��? Ʊ����" + meso[selector] + "��ҡ�����ǰ����ȷ�ϱ�������������û�пռ䡣");
    } else if (status == 2) {
        if (cm.getMeso() < meso[selector]) {
            cm.sendNext("Ǯ���������߱����ռ䲻�����Ͻ�����£��г����������ˣ�");
            cm.dispose();
        } else {
            if (selector == 0) {
                cm.sendNext("��ƱͶ���Ǳ߶���#p1052007#���С�����˵�ڵ�һ��������Եõ�������Ʒ��������������̫�࣬������˶������ˡ���ǧ��С�ġ�");
            } else if (selector == 1) {
                cm.sendNext("��ƱͶ���Ǳ߶���#p1052007#���С�����˵�ڵڶ���������Եõ�������Ʒ��������������̫�࣬������˶������ˡ���ǧ��С�ġ�");
            } else {
                cm.sendNext("��ƱͶ���Ǳ߶���#p1052007#���С�����˵�ڵ�����������Եõ�������Ʒ��������������̫�࣬������˶������ˡ���ǧ��С�ġ�");
            }
            cm.gainMeso( - meso[selector]);
            cm.gainItem(item[selector], 1);
            cm.dispose();
        }
    }
}
var status = 0;
var pet = null;
var theitems = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("�õģ��´��ټ���");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendSimple("���μ��桫������#m101000000#�о�����ħ����#p1032102#�����ر����Ȥ�����й�������ħ����������ô����ѽ...�������о���ô��������������#b\r\n#L0#��Ҫ���ҵĳ��︴��#l#k");
        } else if (status == 1) {
            if (selection == 0) { //�������	
                var inv = cm.getInventory(5);
                var pets = cm.getPlayer().getPets(); //includes non-summon
                for (var i = 0; i <= inv.getSlotLimit(); i++) {
                    var it = inv.getItem(i);
                    if (it != null && it.getItemId() >= 5000000 && it.getItemId() < 5010000 && it.getExpiration() > 0 && it.getExpiration() < cm.getCurrentTime()) {
                        theitems.push(it);
                    }
                }
                if (theitems.length <= 0) {
                    cm.sendOk("û�п���Ҫ����ĳ���.");
                    cm.dispose();
                } else {
                    var selStr = "��ѡ����Ҫ����ĳ��ע�⣺����Ҫ��#b#i4070000# #t4070000##k�Ҳ��ܰ���������#b\r\n";
                    for (var i = 0; i < theitems.length; i++) {
                        selStr += "\r\n#L" + i + "##i" + theitems[i].getItemId() + "##t" + theitems[i].getItemId() + "##l";
                    }
                    cm.sendSimple(selStr);
                }
            }
        } else if (status == 2) {
            if (theitems.length <= 0) {
                cm.sendOk("û�п���Ҫ����ĳ���.");
            } else if (!cm.haveItem(4070000, 1)) {
                cm.sendOk("������û�� #b#i4070000# #t4070000##k ��.");
            } else {
				// 1463241600907
				cm.gainItem(4070000, -1);
                theitems[selection].setExpiration(cm.getCurrentTime() + (45 * 24 * 60 * 60 * 1000));
                cm.getPlayer().refreshItem(theitems[selection]);
                cm.sendOk("��ϲ���������ɹ�������ʹ��ʱ���ӳ�45�졣");
            }
            cm.dispose();
        }
    }
}
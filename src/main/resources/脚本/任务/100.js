/* 
	����: �ȸ�˹����Ʒ�ռ�
	author��icelemon1314
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendNext("������ܸ���ĳЩ�������ҿ��Ը���һ������������Ҫô��");
        } else if (status == 1) {
            qm.sendNext("������ռ�10����Ģ���ĸǺ�30������ţ�Ŀǣ��Ͻ�ȥ�ɣ�ɧ�꣡");
        } else if (status == 2) {
			if (qm.canCompleteQuest()) {
				qm.forceCompleteQuest();
				qm.sendOk("����Ķ����պ���ô��");
            } else {
				//qm.gainItem(4000001,10);
				//qm.gainItem(4000000,30);
				qm.sendOk("�㻹û�л������Ҫ�ĵ��ߣ�");
			}
			
			qm.dispose();
        }
    }
}
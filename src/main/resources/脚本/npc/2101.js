
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
		status++;
    else
		status--;
    if (status == 0) {
		cm.sendNext("��ӭ����ð�յ������磬ʱ�⵹����������һ�����������յ�ð�յ���");
    } else if (status == 1) {
		//cm.startQuest(1000);
		cm.sendNext("�ðɣ�������˵���㶮�ģ��Ͻ�ȥǰ�濴���ɣ�");
    } else if (status == 2) {
		cm.dispose();
    }
}
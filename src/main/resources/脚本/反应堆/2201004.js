/*
	Papulatus Reactor: Performs the Papulatus commands
*/

function act() {
    try {
        rm.mapMessage(5, "ʱ���ѷ��Ѿ���<�ѷ����>�����");
        rm.changeMusic("Bgm09/TimeAttack");
        rm.spawnMonster(8500000, -410, -400);
        rm.getMap(220080000).setReactorState();
    } catch(e) {
        rm.mapMessage(5, "����: " + e);
    }
}
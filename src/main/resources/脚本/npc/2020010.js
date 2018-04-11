/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* 
	��������ת
	Bowman 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.sendOk("����������������Ұɣ�");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
		
        if (status == 0) {
            if (!(cm.getJobId()==310 ||cm.getJobId()==320)) { 
                cm.sendOk("��û��ʲô���Խ���ģ�");
                cm.dispose();
                return;
            }
            if (cm.isQuestCompleted(100102)){ // ��ת�ʴ����
				cm.gainItem(4031058, -1);
                cm.sendNext("��Ŷ��������Ҳͦ�������");
            } else if (cm.isQuestStarted(100102)) { // ��ת�ʴ�û���
                cm.sendOk("ȥ�ҵ������ڱ���ѩ��ĳ��ʥ���е�#r��ʥʯ#k�ɣ�");
                cm.dispose();
            } else if (cm.isQuestCompleted(100101)){ // ����˵�һ�׶���ս
                cm.sendNext("�ҵ�Ԥ���ǶԵģ���֤�������������");
            } else if (cm.isQuestStarted(100100)) { // û��ɾ�����ս
                cm.sendOk("�Ͻ�ȥ��һת�ٰ̹ɣ����������ô���ģ�");
                cm.dispose();
            } else if ((cm.getJobId()==310 ||cm.getJobId()==320) &&cm.getLevel() >= 70){ // ׼����ת
                cm.sendNext("#b��ϲ��ﵽ��70�����ϣ�\r\n#k#r�������Ѿ����Խ��е�����תְ�ˣ�\r\n#k������Ѿ�׼����������һ����");
            }else {
                cm.sendOk("�㻹����ǿ���Ŷ��");
                cm.dispose();
            }
        } else if (status == 1) {
            if (cm.isQuestCompleted(100102)) { // תְ���������
                if (cm.getJobId()==310) {
                    cm.changeJobById(311);
                    cm.getPlayer().gainAp(5);
                    cm.sendOk("��ϲ�㣬�ɹ�תְΪ��#r����#k��");
                    cm.dispose();
                } else if (cm.getJobId()==320) {
                    cm.changeJobById(321);
                    cm.getPlayer().gainAp(5);
                    cm.sendOk("��ϲ�㣬�ɹ�תְΪ��#r����#k��");
                    cm.dispose();
                }
            } else if (cm.isQuestCompleted(100101)) // ��ɵ�һ�׶�
                cm.sendYesNo("��׼���ý���������ս��ô��");
            else {
				// ׼����ʼתְ
                cm.sendYesNo("�ҿ��������ø��ӵ�ǿ���ڴ�֮ǰ����Ҫ֤����ӵ��ǿ�����������ǵ�ͷ�ԣ�׼���ý�����ս��ô��");
			}
        } else if (status == 2) {
            if (cm.isQuestCompleted(100101)) { // ��ʼ�ڶ��׶���ս
                cm.startQuest(100102);
				cm.gainItem(4031057,-1);
                cm.sendOk("ȥ�ҵ������ڱ���ѩ��ĳ��ʥ���е�#r��ʥʯ#k�ɣ������Ǵ�һ���ڰ�ˮ����Ʒ��ȥ������");
                cm.dispose();
            } else { // ��ʼ��һ�׶�����
                cm.startQuest(100100);
                cm.sendOk("�Ͻ�ȥ��һת�ٰ̹ɣ����������ô���ģ�");
                cm.dispose();
            }
        }
    }
}

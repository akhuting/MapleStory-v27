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
/* Dances with Balrog
	Warrior Job Advancement
	Victoria Road : Warriors' Sanctuary (102000003)
*/

var status = 0;
var jobName;
var jobId;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 2) {
            cm.sendNext("�㻹��Ҫʱ���ٿ�����ô���ðɣ�������ȥ��ɡ� ����������������ɣ�����������������Ұɣ� ");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
			
		if (cm.getJobId()==0) { // ����
			if (status == 0) {
				cm.sendNext("�����Ϊһ��ħ��ʦô������֮ǰ����Ҫ�ﵽһ������������������Ҫ�ﵽ#b�ȼ�8������������20��#k����ȷ��Ҫ��Ϊһ��#rħ��ʦ#k��");                
			} else if (status == 1) {
				if (cm.getPlayerStat("LVL") >= 8 && cm.getPlayerStat("INT") >= 20) {
					cm.changeJob(200);
					cm.sendOk("��ϲ�㣡�������Ѿ���һ��#rħ��ʦ#k�ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n�ڶ���תְ���� #r30�� #k��\r\n#r��ʱ���������Ұɣ�");
					cm.dispose();
				} else {
					cm.sendOk("�����㻹û�дﵽ������");	
					cm.dispose();
				}
			}
		} else if (cm.getJobId()==200) { // ��ת
			if (cm.getPlayer().getLevel() >= 30) {
				if (cm.haveItem(4031012)) { // �������������
					if (status == 0) 
						cm.sendNext("�ޣ��ܸ����ܿ����㰲ȫ��������֪����϶���ͨ�����ԡ��Ǿ������������ø���ǿ��ɣ�����֮ǰ����Ҫѡ��һ��ְҵ������������⣬����������ɣ�");
					else if (status == 1) 
						cm.sendSimple("�ðɣ���������ˣ��͵��[���Ѿ������]\r\n#b#L0#������һ𶾷�ʦ�Ľ���#l\r\n#L1#������ұ��׷�ʦ�Ľ���#l\r\n#L2#���������ʦ�Ľ���#l\r\n#L3#���Ѿ�����ˣ�����#l");
					else if (status == 2) {
						if (selection == 0) 
							cm.sendNext("�𶾷�ʦ���ܲ���");
						else if (selection == 1) 
							cm.sendNext("���׷�ʦ���ܲ���");
						else if (selection == 2) 
							cm.sendNext("��ʦ���ܲ���");
						else if (selection == 3) 
							cm.sendSimple("���Ѿ������ô���ǸϽ���ѡ�����2תְҵ�ɣ�\r\r#b#L0#�𶾷�ʦ#l\r\n#L1#���׷�ʦ#l\r\r#L2#��ʦ#l");				
					} else if (status == 3) {
						if (selection == 0) {
							jobName = "�𶾷�ʦ";
							jobId = 210;
						} else if (selection == 1) {
							jobName = "���׷�ʦ";
							jobId = 220;					
						} else if (selection == 2) {
							jobName = "��ʦ";
							jobId = 230;
						}	
						cm.sendYesNo("��ȷ��2תְҵΪ��#b" + jobName + "#k��תְ���ܷ��ڵ�Ŷ...�������ô��");
					} else if (status == 4) {
						cm.gainItem(4031012, -1);
						cm.changeJobById(jobId);
						cm.sendNext("��ϲ��תְ�ɹ����´�תְ��70�����Ͻ�ȥ�����ɣ�");
						cm.dispose();
					}		
				} else if (!cm.haveItem(4031009)) { // ���Կ�ʼ2ת		
					if (status == 0) {
						cm.sendNext("�������ǿ���ˣ�����")
					} else if (status == 1) {
						cm.sendNext("��������Ҫ�Ȳ�������������������Ƿ�����ʵ����Ȼ������Բ�����ѣ��Ͻ���������ż�ȥ��#r#p1072001##k����������ṩ������");
					} else if (status == 2) {
						cm.gainItem(4031009,1);
						cm.sendOk("#r#p1072001##k���п�����#bħ�����ֱ���#k��ĳ���ط�!");
						cm.dispose();
					}	
				} else { // 2ת������
					cm.sendOk("�Ͻ�ȥ��#b#p1072001##k �������������ô����");
					cm.dispose();
				}
			}
		} else if (cm.isQuestStarted(100100)){
			cm.sendOk("Hey, ����Ҫһ��#r#t4031059##k���Ͻ�ȥѰ�����֮�Űɣ�");
			cm.startQuest(100101);
			cm.completeQuest(100100);
			cm.dispose();
		} else if (cm.isQuestStarted(100101)) {
			if (cm.haveItem(4031059)) {
				cm.gainItem(4031059,-1);
				cm.gainItem(4031057,1);
				cm.completeQuest(100101);
				cm.sendOk("�ðɣ��Ͻ��������ȥ��#b³��#k��");
			} else {
				cm.sendOk("�㻹û���ҵ�����Ҫ�� #r#t4031059##k���Ͻ�ȥѰ�����֮�Űɣ�");
			}
			cm.dispose();
		}else {
			cm.sendOk("ħ���Ǻ������һ�����");
			cm.dispose();
		}
		
	}
}


/*
var status = 0;
var job1 = 200;
var job2 = 0;
var job3 = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 2) {
			cm.sendOk("�¶�����,��������!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.isBeginner()) { // һת����
				if (cm.getPlayerStat("LVL") >= 8 && cm.getPlayerStat("INT") >= 20)
					cm.sendNext("��ϣ����Ϊһ��#rħ��ʦ#k��");
				else {
					cm.sendOk("��Ϊ#rħ��ʦ#k��Ҫ����ȼ�����8������������20�㣬�����㻹��Ҫ��ȥ������")
					cm.dispose();
				}
			} else {
				if (cm.getPlayerStat("LVL") >= 30 && cm.getJobId() == job1) { // ��ת
					if (cm.getQuestStatus(100008) >= 1) { // ����˿���
						status = 20;
						cm.sendNext("���������Ѿ�ͨ��������ô��");
					} else if (cm.getQuestStatus(100006) >= 1) { // ����������
						cm.sendOk("�Ͻ�ȥ�� #r#p1072001##k������������ṩ������")
						cm.dispose();
					} else {
						status = 10;
						cm.sendNext("����ȥ���Ѿ��㹻ǿ����Ŷ��");
					}
				} else if (cm.getQuestStatus(100100) == 1) {// ��ת
					cm.completeQuest(100101);
					if (cm.getQuestStatus(100101)==2) {
						cm.sendOk("Alright, now take this to #bRobeira#k.");
					} else {
						cm.sendOk("Hey, " + cm.getChar().getName() + "! ����Ҫһ��#t4031059##k���Ͻ�ȥѰ�����֮�Űɣ�");
						cm.startQuest(100101);
					}
					cm.dispose();
				} else {
					cm.sendOk("���ѡ�������ǵ�");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("����Ҫ���ؿ��ǣ�һ�����������ܸ��ģ��������ˣ�");
		} else if (status == 2) {
			cm.sendYesNo("��ȷ��Ҫ��Ϊһ��#rħ��ʦ#k��");
		} else if (status == 3) {
			if (cm.getJobId() == 0)
				cm.changeJob(job1);
			cm.sendOk("��ϲ�㣡�������Ѿ���һ��#rħ��ʦ#k�ˣ�Ŭ�������ɣ�����һ������ǿ��\r\n�ڶ���תְ���� #r30�� #k��\r\n#r��ʱ���������Ұɣ�");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev("�����Ϊһ��#r�𶾷�ʦ#k, #r���׷�ʦ#k ���� #r��ʦ#k��");
		} else if (status == 12) {
			cm.sendYesNo("���Ǳ����Ⱦ����ҵĿ��飬��׼������ô��");
		} else if (status == 13) { // ��ת����
			cm.startQuest(100006);
			cm.gainItem(4031009,1)
			cm.sendOk("��������ż�ȥ��#b#p1072001##k �������������ô����");
			cm.dispose();
		} else if (status == 21) { // ��ת����
			cm.sendSimple("�����Ϊ�ĸ�ְҵ�أ�#b\r\n#L0#�𶾷�ʦ#l\r\n#L1#���׷�ʦ#l\r\n#L2#��ʦ#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "�𶾷�ʦ";
				job = 210;
			} else if (selection == 1) {
				jobName = "���׷�ʦ";
				job = 220;
			} else {
				jobName = "��ʦ";
				job = 230;
			}
			cm.sendYesNo("��������Ϊ#r" + jobName + "#k��");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("��ϲ��תְ�ɹ����´�תְ��70����");
			cm.dispose();
		}
	}
}	*/

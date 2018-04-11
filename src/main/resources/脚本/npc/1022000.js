

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
        ��������
        NPCId:1022000
	MapId:102000003
*/

var status = 0;
var jobName;
var jobId;
var mode0_pattern=0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
         if(mode == 1){           
                 status++;   
                 if(mode0_pattern !=0)
                     mode0_pattern=0;
            }else if(mode==0){                                        
                if(mode0_pattern==1){//��������ǡ���ť��sendSimple�Ի���Ľ����Ի���Ĵ���
                       mode0_pattern=0;
                       cm.sendOk("�ðɣ����������ѡ��");
                       cm.dispose();   
                       return;
                }else if(mode0_pattern==2){//��������ǡ���ť��sendSimple�Ի���Ľ����Ի������һ�ִ���   
                       mode0_pattern=0;
                       cm.dispose();   
                       return;
                }else{//����Ի�����һ��ʱ������һ״̬
                       status--;
                }                 
            }else{//����modeȡֵʱ
                status--;
            }	
        
        if (cm.getJobId()==0) { // ����
                if (status == 0) {       
                        cm.sendNext("��������ƺ���һ��Ǳ�ʣ����ҿ���...");                             
                } else if (status == 1) {
                        if (cm.getPlayerStat("LVL") >= 10 && cm.getPlayerStat("STR") >= 35) {
                                cm.sendYesNo("�ţ�����ȥ���Ѿ�ӵ��һ���������ˣ���Ȼ������ǿ�󣬲����ҿ��԰������ø�ǿ�����Ƿ����Ϊһ��սʿ��");
                                mode0_pattern=1;
                        } else {
                                cm.sendOk("��Ŀǰ������������������������#b�ȼ�10�����ϣ�����35������#k�������ɡ�");	
                                cm.dispose();
                        }
                }else if(status == 2){
                    cm.changeJob(100);
                    cm.getPlayer().gainSP(1);
                    cm.sendOk("��...�������������һ��#rսʿ#k�ˣ���ôȥð����Ŭ��ĥ���Լ��ɣ�ֻ�п̿���������ܹ�ӵ��ǿ������������˵���������������һ�������ʮ��ǿ��");
                    cm.dispose();
                }
        } else if (cm.getJobId()==100) { // ��ת
                if (cm.getPlayerStat("LVL") >= 30) {
                        if (cm.haveItem(4031012)) { // �������������
                                if (status == 0) 
                                        cm.sendNext("��..���Ȼû����ʧ����");
                                else if(status==1)
                                        cm.sendNext("��Ȼ��ͨ���˲��ԣ���ô�������������ø��������ɡ�����������Ҫ��#b����#k��#b׼��ʿ#k��#bǹսʿ#k������ְҵ��ѡ��һ����Ϊ����һ�׶ε�ְҵ��������ÿ��ְҵ���и����ó������������⼼�ܣ����������Щְҵ����ʲô��֪���������վ���ǰ���������ҡ�");
                                else if (status == 2){
                                    cm.sendSimple("������һ�׶ε�ְҵ�㻹���˽�ʲô\r\n#b#L0#����֪���йؽ��͵Ľ���#l\r\n#L1#����֪���й�׼��ʿ�Ľ���#l\r\n#L2#����֪���й�ǹսʿ�Ľ���#l\r\n#L3#���Ѿ���������#l");
                                    mode0_pattern=2;
                                }                                        
                                else if (status == 3) {
                                        if (selection == 0) 
                                                cm.sendPrev("���ͽ���");                                          						
                                        else if (selection == 1) 
                                                cm.sendPrev("׼��ʿ����");
                                        else if (selection == 2) 
                                                cm.sendPrev("ǹսʿ����");
                                        else if (selection == 3){
                                               status++;
                                               mode0_pattern=2;
                                               cm.sendSimple("��ô����ѡ���2תְҵ�ǣ�\r\r#b#L0#����#l\r\n#L1#׼��ʿ#l\r\r#L2#ǹսʿ#l");
                                        } 
                                } else if (status == 4){            
                                        cm.sendSimple("��ô����ѡ���2תְҵ�ǣ�\r\r#b#L0#����#l\r\n#L1#׼��ʿ#l\r\r#L2#ǹսʿ#l");
                                        mode0_pattern=2;
                                } else if (status == 5) {
                                        if (selection == 0) {
                                                jobName = "����";
                                                jobId = 110;
                                        } else if (selection == 1) {
                                                jobName = "׼��ʿ";
                                                jobId = 120;					
                                        } else if (selection == 2) {
                                                jobName = "ǹսʿ";
                                                jobId = 130;
                                        }	
                                        cm.sendYesNo("�����Ϊһ��#b"+jobName+"#k��תְ��ɺ�ְҵ���޷����ĵ�...���Ƿ��������ˣ�");
                                } else if (status == 6) {
                                        cm.gainItem(4031012, -1);
                                        cm.changeJobById(jobId);
                                        cm.getPlayer().gainSP(1);
                                        cm.sendNext("�ã����Ѿ���һ��#b"+jobName+"#k�ˣ��������ҽ�����������������������ð��֮·�Ͽ̿����аɣ��һ�����ﵽ#r70������#k��ʱ����������㿭����");
                                        cm.dispose();
                                }		
                        } else if (!cm.haveItem(4031008)) { // ���Կ�ʼ2ת		
                                if (status == 0) {
                                        cm.sendNext("�㿴��ȥ����ǰǿ���˲��١�")
                                } else if (status == 1) {
                                        cm.sendNext("�������Կ��Ǹ��������������ˣ������ڴ�֮ǰ����Ҫ����һ�����ʵ�����ж����Ƿ�������ʸ�");
                                } else if (status == 2) {                                   
                                        cm.sendOk("ȥ���������Ž���#b�������渽��#k��#r#p1072000##k�ɣ�����ָ���������һ�׶εĲ��ԡ�");
                                        cm.gainItem(4031008,1);
                                        cm.dispose();
                                }	
                        } else { // 2ת������
                                cm.sendOk("��û����#r#p1072000##k����ƽʱ������#b��ʿ��������#k��ĳ���ط���");
                                cm.dispose();
                        }
                }else{
                     cm.sendOk("�ڶ��׶�תְ��Ҫ#r�ȼ�30������#k��Ŀǰ������л�������");
                     cm.dispose();
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
				cm.sendOk("�ðɣ��Ͻ��������ȥ��#b̩��˹#k��");
			} else {
				cm.sendOk("�㻹û���ҵ�����Ҫ�� #r#t4031059##k���Ͻ�ȥѰ�����֮�Űɣ�");
			}
			cm.dispose();
		}else {
            cm.sendOk("���Ϊսʿ�Ķ�����������");
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



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
        ���³
        NPCId:1052001
	MapId:103000003
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
                       cm.sendOk("��Ӧ��֪�����������Ѿ�û�б��ѡ��!");
                       cm.dispose();   
                       return;
                }else if(mode0_pattern==2){//��������ǡ���ť��sendSimple�Ի���Ľ����Ի������һ�ִ���   
                       mode0_pattern=0;       
                       cm.sendOk("���㻹�������¶����ĺ��������Ұ�");
                       cm.dispose();   
                       return;
                }else if(mode0_pattern==3){//��������ǡ���ť��sendSimple�Ի���Ľ����Ի������һ�ִ���   
                       mode0_pattern=0;       
                       //cm.sendOk("�ð��ǻ��ǵ���׼�����������ɡ�");
                       cm.dispose();   
                       return;
                }else{//����Ի�����һ��ʱ������һ״̬
                       status--;
                }                 
            }else{//����modeȡֵʱ
                status--;
            }	
        
        if (cm.getJobId()==0) { // ����ǰ���ְҵ������
                if (status == 0) {       
                        cm.sendYesNo("��ô���Ѿ�������Ϊһ��#r����#k��ô?"); 
                        mode0_pattern=1;
                } else if (status == 1) {
                        if (cm.getPlayerStat("LVL") >= 10 && cm.getPlayerStat("LUK") >= 25) {
                                cm.sendNext("�⽫��������������һ���ǳ���Ҫ��ѡ��һ����ѡ�������ְҵ���㽫��Զ���ܸı䡣"); 
                               
                        } else {
                                cm.sendOk("�㻹��Ҫ��ǿ�����Ҳ��ܸ���ָ��������Ϊһ����ɫ��#r����#k,Ҫ��Ϊ���������ﵽ#b�ȼ�10�����ϣ�����25������#k��");	
                                cm.dispose();
                        }
                }else if(status == 2){
                    cm.sendYesNo("��������������Ƿ����Ҫ��Ϊһ��#r����#k��");
                    mode0_pattern=2;
                }else if(status == 3){    
                    cm.changeJob(400);
                    cm.getPlayer().gainSP(1);
                    cm.sendOk("��...�����������Ѿ���һ��#r����#k�ˣ�Ϊ�˱�ø�ǿ�������Ҫ������ð���в��ϵ������Լ�����ô���ڿ�ʼȥΪ�˸��ߵľ�����ܶ��ɡ�");
                    cm.dispose();
                }
        } else if (cm.getJobId()==400) { // ����ǰ���ְҵ�Ƿ���
                if (cm.getPlayerStat("LVL") >= 30) {//�ﵽ��ת�ȼ�����
                        if (cm.haveItem(4031012)) { // �������תְ��������
                                if (status == 0){ 
                                        cm.sendNext("����˳��ͨ���˲��ԣ��ܺã�������ȷӦ�ø�����������һְҵ�׶ε��ʸ�");
                                }else if (status == 1){
                                        cm.sendNext("�ڷ����ĵڶ����׶Σ��㽫��#b�̿�#k��#b����#k����ְҵ�������ѡ�����д̿��ó�ʹ��#bȭ��#k��#b����#k�����͸��ó�ʹ��#b�̵�#k����������������ְҵ�ļ���������Ҳ������ͬ����������ְҵѡ��ǰ����Ӧ�ý��г�ֵĿ��ǣ�������һ�׶�ְҵ��ʲô����Ļ��������ҡ�");
                                }else if (status == 2){
                                        cm.sendSimple("�й���һ�׶ε�ְҵ�㻹���˽�Щʲô\r\n#b#L0#����֪���йش̿͵Ľ���#l\r\n#L1#����֪���й����͵Ľ���#l\r\n#L2#�������Ѿ���������#l");   
                                        mode0_pattern=3;
                                }                                        
                                else if (status == 3) {
                                        if (selection == 0) 
                                                cm.sendPrev("�̿ͽ���");                                          						
                                        else if (selection == 1) 
                                                cm.sendPrev("���ͽ���");     
                                        else if (selection == 2){
                                               status++;
                                               cm.sendSimple("��ô�ڶ��׶�����ѡ���ְҵ�ǣ�\r\r#b#L0#�̿�#l\r\n#L1#����#l");
                                               mode0_pattern=3;
                                        } 
                                } else if (status == 4){            
                                        cm.sendSimple("��ô�ڶ��׶�����ѡ���ְҵ�ǣ�\r\r#b#L0#�̿�#l\r\n#L1#����#l");
                                        mode0_pattern=3;
                                } else if (status == 5) {
                                        if (selection == 0) {
                                                jobName = "�̿�";
                                                jobId = 410;
                                        } else if (selection == 1) {
                                                jobName = "����";
                                                jobId = 420;					
                                        } 
                                        cm.sendYesNo("��ȷ��Ҫ��Ϊ#b"+jobName+"#k�����ѡ��Ӱ�쵽��δ����ְҵ��չ������תְ���޷����ģ����Ƿ���ľ������ˣ�");
                                } else if (status == 6) {
                                        cm.gainItem(4031012, -1);
                                        cm.changeJobById(jobId);
                                        cm.getPlayer().gainSP(1);
                                        cm.sendOk("�ţ����Ѿ���һ��#b"+jobName+"#k�ˣ�ϣ���㽫���������ѡ�񡣼���ȥð�������ɣ�ʱ�������µĳɳ������򣬵���ﵽ#r70������#k���������ҡ�");
                                        cm.dispose();
                                }		
                        } else if (!cm.haveItem(4031011)) { // ���Կ�ʼ2ת		
                                if (status == 0) {
                                        cm.sendNext("��ȡ�õĽ������������⡣")
                                } else if (status == 1) {
                                        cm.sendNext("������ʱ���������ְҵ����һ�׶��ˣ���������֮ǰ������Ҫ�ȿ���һ�����������");
                                        mode0_pattern=3;
                                } else if (status == 2) {                                      
                                        cm.sendOk("�������������ȥ��#r#p1072003##k,��Ӧ�þʹ���#b�϶��ܱ߹���#k��ĳ����ͨ��תְ�ٵĿ���Ȼ���#t4031012#���������ң���Ϳ��Խ����������һ���׶Ρ�");
                                        cm.gainItem(4031011,1);
                                        cm.dispose();
                                }	
                        } else { // 2ת������
                                cm.sendOk("��ȥ��#r#p1072003##k����ƽʱһ�㶼�ڹ������򸽽������������ҵ����ġ�");
                                cm.dispose();
                        }
                }else{
                     cm.sendOk("����еڶ��׶�תְ����ﵽ#r�ȼ�30������#k��#r30��#k�������ɡ�");
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
				cm.sendOk("�ðɣ��Ͻ��������ȥ��#b�����#k��");
			} else {
				cm.sendOk("�㻹û���ҵ�����Ҫ�� #r#t4031059##k���Ͻ�ȥѰ�����֮�Űɣ�");
			}
			cm.dispose();
		}else {
            cm.sendOk("���Ϊ�����ĵ�������������");
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

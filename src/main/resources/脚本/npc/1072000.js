/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* 
    սʿתְ�̹�
    NpcId:1072000
    MapId:102020300
*/

var status;
var mode0_pattern=0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 1){
           status++;
           if(mode0_pattern !=0)
              mode0_pattern=0;
        }else if(mode==0){
           if(mode0_pattern == 1){
             mode0_pattern=0;  
             cm.sendOk("��..�Ǿ͵���׼���ú��������Ұɡ�");  
             cm.dispose();
             return;
           }else{
              status--;
           }
        }else{
           status--; 
        }
        
        if(cm.getJobId()==100){
            if(cm.haveItem(4031012)){//��ͨ��תְ�ٲ��Ե�սʿ
                cm.sendOk("��ϲ��ͨ�����ҵĿ��飬�������������#t4031012#�ز�����#p1022000#���תְ�ˡ�");  
                cm.dispose();                 
            }else if (cm.haveItem(4031008)) {//ӵ�������������ż���û��ͨ��תְ�ٲ��Ե�սʿ
                if (status == 0)
                        cm.sendNext("��...��ô˵��#b#p1022000##k�������ģ��ðɣ��������ͨ���ҵĿ��飬�Ҿ͸��������һְҵ�׶ε��ʸ�֤����");
                else if (status == 1)
                        cm.sendNext("�������������ô����һ�������ʱ��ᱻ���͵�һ�����صĿ��鳡���������㽫�����������������ƽ�������ʵ��ȴ������ͬ��������");
                else if (status == 2)
                        cm.sendNext("��Ҫͨ����������Ҫ������鳡�е�������������Щ���������ռ�#b30��#k��#b#t4031013##k���ռ���󽻸��ң��ҾͿ��Ը������ͨ����֤�������������ʵ������Ӧ�ò���̫�Ѱɣ�");
                else if (status == 3){
                        cm.sendYesNo("Ҫ��������ǣ�һ�����뿼�鳡�㽫�޷���;�뿪��������;��������ߡ�������ڲ�����;����������ֵͬ������٣�������Ӧ���ڽ����鳡ǰ����׼������ô�������Ƿ���׼���ý����鳡�����ˣ�");   
                        mode0_pattern=1;
                }else if (status == 4)
                        cm.sendNext("�ã��������Ϊ�Ѿ�׼�����ˣ������Ǿͽ��뿼�鳡��ʼ���԰ɣ���������ɲ�����Ҫ�ռ��Ķ�����");
                else if (status == 5) {
                        cm.warp(108000300, 0);
                        cm.dispose();
                }
            }else{//û�������������ż�Ҳû��ͨ��תְ�ٲ��Ե�սʿ
                    cm.sendOk("��ת��սʿ�ڶ��׶�ְҵ��? ����ȥ�ݷ���ʿ���������������");
                    cm.dispose();
            }
        }
		else{
                    cm.sendOk("ֻ��ͨ���ҵĿ��Ե��˲���תְ���ڶ��׶Ρ�");
		    cm.dispose();
                }
    }
}	
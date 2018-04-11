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
    ������תְ�̹�
    NpcId: 1072002
    MapId: 106010000
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
               cm.sendOk("�ðɣ���������׼�����������ҡ�");  
               cm.dispose();
               return;
           }else{
               status--;
           }
        }else{
           status--; 
        }
        
        if(cm.getJobId()==300){
            if (cm.haveItem(4031012)){//�Ѿ�ͨ�������õ�Ӣ��֤��Ĺ�����
                //if(status==0){
                   cm.sendOk("���Ѿ�˳��ͨ�����ҵĿ��飬�����ŵõ���#t4031012#ȥ��#p1012100#���תְ�ɡ�");  
                   cm.dispose();
                //}              
            }else if (cm.haveItem(4031010)) {//ӵ�к����ȵ��ŵ���δͨ�����ԵĹ�����
			if (status == 0)
				cm.sendNext("�ޣ��ⲻ��#p1012100#д�Ľ�����������ָʾ�������������ҵģ�");
			else if (status == 1)
				cm.sendNext("�š���������˵������ͨ���ҵĲ�������ý�����һ��ְҵ�׶ε��ʸ񣬴Ӷ���һ������Լ����������ܺá�");
            //cm.sendNextPrev("һ�����ʼ���Ժ��һ��Ƚ��㴫�͵�һ�����صĵ�ͼ���㽫���������������������޷������Ĺ���������������Щ������ܻ����������������Ĺ���ʮ�����ƣ��������ǵ�ʵ������������������Ĺ���������ͬ��");
			else if (status == 2)
				cm.sendNext("�ð���������׼�����ˣ��ҿ��Ը�������һ�����ᡣ���ã��Ȼ���в���ʱ�һὫ�㴫�͵�һ�����صĵ�ͼ���������������������е�������ʶ�Ĺ��Ȼ����ʵ����Щ�����ʵ������ƽʱ�����Ĺ�����������ͬ�ġ�");
			else if (status == 3)
                                cm.sendNext("������ͨ����������Ҫ������Ե�ͼ�еĹ��ﲢ�ռ�#b30��#k�ӹ������ϵ����#b#t4031013##k�������ռ��������ǽ����ҡ������������Ѿ��߱��˽�����һ�׶�ְҵ��ʵ����������Ӧ�ò��������ɡ�");
			else if (status == 4){
                                cm.sendYesNo("���⻹Ҫ��������ǣ�һ��������Գ��غ󣬳�����;���������ߣ�����ֱ���������ǰ�㶼�޷���;�뿪���Գ��ء�����ھ���������Գ���ǰ��ȷ���������ó����׼������ô���������Ƿ��Ѿ�׼���ÿ�ʼ�������أ�");
                                mode0_pattern=1;
                        }else if (status == 5)
				cm.sendNext("�ðɣ���Ȼ���Ѿ�׼�����ˣ�����Ͱ��㴫�͵����Գ��أ���������ɲ�����Ҫ�ռ��Ķ�����");
			else if (status == 6) {
				cm.warp(108000100, 0);
				cm.dispose();
			}
		}else{//û�к����ȵ��ż��Ĺ�����
			cm.sendOk("��ת�������ֵڶ��׶�ְҵ��? ��ȥ�ݷ����ִ��#p1012100#�ɡ�");
			cm.dispose();
                }
        }else{//�ǹ�����ְҵ
            cm.sendOk("ֻ��ͨ���ҵ�������˲��ܹ�תְ���ڶ��׶Ρ�");
            cm.dispose();
        }
    }
}	
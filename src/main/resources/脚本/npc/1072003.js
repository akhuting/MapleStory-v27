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
    ����תְ�̹�
    NpcId: 1072003
    MapId: 102040000
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
               cm.sendOk("��������׼�����������ҡ�");  
               cm.dispose();
               return;
           }else if(mode0_pattern == 2){
               mode0_pattern=0;
               cm.sendOk("����ʲô������");  
               cm.dispose();
               return;
           }else{
               status--;
           }
        }else{
           status--; 
        }
        
        if(cm.getJobId()==400){//�����ҵ�ǰְҵΪ����
            if (cm.haveItem(4031012)){//�Ѿ�ͨ�������õ�Ӣ��֤��ķ���
                //if(status==0){
                   cm.sendOk("���Ѿ�ͨ�����ҵĿ��ˣ��������Ҹ����#t4031012#��#p1052001#���תְ�ɡ�");  
                   cm.dispose();
                //}              
            }else if (cm.haveItem(4031011)) {//���д�³�˵��ŵ���δͨ�����Եķ���
                    if (status == 0)
                            cm.sendNext("�ţ���#p1052001#���������ҵģ�");
                    else if (status == 1){
                            cm.sendYesNo("��Ҫ����ҵ��Ͽɵ���ͨ���ҵĲ��Բ��У���׼��������");
                            mode0_pattern=1;
                    }else if (status == 2)
                            cm.sendNext("�ã����ţ��Ȼ���в���ʱ�һ���㴫�͵�һ�����صĲ��Գ��أ��������㽫����������������ƽʱ�����������ƣ���ʵ����ͬ��һ�����Ĺ������Ҫ�����������Щ���ﲢ�ռ����������ϵ����#b#t4031013##k���ռ���#b30��#k�����Ҿ�����ͨ�����ˣ���ô�����ܼ򵥰ɣ�");
                    else if (status == 3){
                            //cm.sendNext("������ͨ����������Ҫ������Գ����еĹ��ﲢ�ռ�#b30��#k�ӹ������ϵ����#b#t4031013##k�������ռ��������ǽ����ҡ������������Ѿ��߱��˽�����һ�׶�ְҵ��ʵ����������Ӧ�ò��������ɡ�");
                            cm.sendNext("����Ҫ��������ǣ�һ����ʼ���ԣ�������;��������ߣ��㽫������;�뿪���Գ��أ������ڲ���������������ֵ���ɻ���ٲ�����������Ҫ���½��ܲ��ԡ������Ӧ���ڲ���ǰ�����ó�ֵ�׼����");
                    }else if (status == 4){
                            cm.sendYesNo("���ڲ���Ҫ˵�ľ���ô�࣬��ô�����Ƿ������ھͿ�ʼ���ԣ�");
                            mode0_pattern=2;
                    }else if (status == 5)
                            cm.sendNext("�ã����û�б�������ˣ��������ҾͰ����͵����Գ��ؿ�ʼ���ԣ���ס��ɲ�����Ҫ�ռ��Ķ�����");
                    else if (status == 6) {
                            cm.warp(108000400, 0);
                            cm.dispose();
                    }
		}else{//û�д�³�˵��ż��ķ���
			cm.sendOk("��ת�������ڶ��׶�ְҵ��? ��ȥ�ݷ÷���֮���ġ����³�������ɡ�");
			cm.dispose();
                }
        }else{//�Ƿ���ְҵ
            cm.sendOk("ֻ��ͨ���ҵ�������˲��ܹ�תְ���ڶ��׶Ρ�");
            cm.dispose();
        }
    }
}	
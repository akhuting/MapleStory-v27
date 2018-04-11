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
    NpcId:1072004
    MapId:108000300
*/

var status;

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
        }else{
            status--;
        }
        
        if(status==0){
            if(cm.haveItem(4031013,30)){
                cm.sendNext("�������Ѿ��ռ���30�������ˣ���..������Ϊ����ʵ�����Ͽ��ҽ�������#b#t4031012##k������������ʿ����ȥ�ɣ�#p1022000#����˸��������һ��ְҵ�׶ε��ʸ�");
            }else{
                cm.sendOk("��Ҫ�ռ�#b30��#k��������#b#t4031013##k����ͨ�����ԣ�����ȥ�㻹û���ռ����ɡ�ף����ˡ�");
                cm.dispose();   
           }    
        }else if(status==1){
                cm.removeAll(4031013);
                cm.gainItem(4031008, -1);
                cm.gainItem(4031012,1);  
                cm.warp(102020300, 0);
                cm.dispose();
        }          
    }
          
}


/*
function start() {
    if (cm.haveItem(4031013,30)) {
        cm.sendNext("���Ѿ��ռ���30�������ˣ��Ǻðɣ�����ͨ�����ҵĲ��ԣ��ҽ�����#t4031012#��������ȥ�Һ�˹�ɡ�");
    } else {
	cm.gainItem(4031013,30);
        cm.sendOk("Ϊ��ɲ�������Ҫ�����ͼ�еĹ��ﲢ�ռ�#b30��#t4031013##k��ף����ˣ�")
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
                cm.warp(101020000, 0);
                //cm.sendOk("��Ȼ������ɲ��ԣ��ҽ��������������е�#t4031013#�Լ���˹������ż���")
		cm.removeAll(4031013);
		cm.gainItem(4031009, -1);
		cm.gainItem(4031012,1);
	}
	cm.dispose();
}*/
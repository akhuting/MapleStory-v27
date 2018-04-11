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

/* Romi
	Orbis Skin Change.
*/
var status = 0;
var skin = Array(0, 1, 2, 3, 4);

function start() {
    cm.sendSimple("���! ��ӭ�������֮�ǻ������ģ���������һ��ӵ�й⻬��ϸ�۵ļ���ô��������� #b#i4053001##k, �ҾͿ��԰���ʵ�����Ը����#l\r\n\#L1#���Ѿ��л�Ա��#l");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            if (selection == 1)
                cm.sendStyle("ͨ�����ǵ����������������ȿ������ǻ�����Ч������ϲ������Ч���أ��Ͻ���ѡһ���ɣ�", skin);
        }
        else if (status == 2){
            if (cm.haveItem(4053001)){
                cm.gainItem(4053001, -1);
                cm.setSkin(selection + 1);
                cm.sendOk("���Լ���Ƥ��������ô��");
            } else {
                cm.sendOk("�ź�...��û���������ĵĻ�Ա�����Ҳ��ܸ����ṩ���񣬸Ͻ�ȥ�̳ǹ���ɣ�");
			}
			cm.dispose();
        }
    }
}

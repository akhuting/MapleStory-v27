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
/* Spiruna
Orbis : Old Man's House (200050001)

Refining NPC:
 * Dark Crystal - Half Price compared to Vogen, but must complete quest
 */

var status = 0;

function start() {
    //if (cm.isQuestCompleted(3034))
        cm.sendYesNo("����ǰ�������Һܶ�... ��������㹻��#r�ڰ�ˮ��ĸ��#k���ҿ��԰�������ĸ��������5���Żݣ�ֻҪ500000���/����");
    //else {
    //    cm.sendOk("�߿�����Ҫ�����ҳ�˼��");
    //   cm.dispose();
    //}
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
        return;
    }
    status++;
    if (status == 1)
        cm.sendGetNumber("�ð�, ����Ҫ�������أ�", 1, 1, 100);
    else if (status == 2) {
        var complete = true;
        if (cm.getMeso() < 500000 * selection){
            cm.sendOk("ò����Ľ�Ҳ�������Ȼ����ҹ�ϵ�ã���Ҳ������ѵĹ���");
            cm.dispose();
            return;
        } else if (!cm.haveItem(4004004, 10 * selection))
            complete = false;
        if (!complete)
            cm.sendOk("����ȥ��û���㹻��ĸ��10��ĸ���������һ����Ʒ��");
        else {
            cm.gainItem(4004004, -10 * selection);
            cm.gainMeso(-500000 * selection);
            cm.gainItem(4005004, selection);
            cm.sendOk("�����ҵ����ջ���ͦ����ģ�");
        }
        cm.dispose();
    }
}
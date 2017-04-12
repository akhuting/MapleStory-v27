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

/* Magician Job Instructor
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
        if (mode == 1)
            status++;
        else
            status--;

		if (cm.haveItem(4031009)) {
			if (status == 0)
				cm.sendNext("�ź�...�����ȷʵ�Ǵ�#b��˹#k�����ù����ġ�����ôԶ�ܹ���������μӲ��Բ����2תô���ðɣ��ҽ����������ô��ɲ��ԣ�");
			else if (status == 1)
				cm.sendNextPrev("�һ���㴫�͵�һ�����ص�ͼ���㽫�����￴�������治�ܼ����Ĺ����Ȼ���ǵ���ò��һ���ģ������ں�ȴ�ǲ�ͬ�ġ�");
			else if (status == 2)
				cm.sendNextPrev("����Ҫ�ռ� #b#t4031013##k��ֻҪ30�����㹻�ˣ������������ҡ��ޣ����˸����㣬��ֻ��Ҫ�򵽹�����ܵ���������ߡ�������ô�򵥣�����ô��");
			else if (status == 3)
				cm.sendYesNo("���ȥ��ֱ����������񣬷��򲻿��ܳ���������㲻�ҹҵ��ˣ�����ͬ������٣�������Ӧ��׼�����ٽ�ȥ�������ھ����ȥô��");
			else if (status == 4)
				cm.sendNext("�ðɣ��ǵ�����Ҫ�Ķ�����");
			else if (status == 5) {
				cm.warp(108000200, 0);
				cm.dispose();
			}
		} else {
			cm.sendOk("����������ô��");
			cm.dispose();
		}
    }
}	
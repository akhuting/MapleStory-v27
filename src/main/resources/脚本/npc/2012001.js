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

/**
 Rini (Orbis Boat Loader) 2012001
**/

function start() {
	if(cm.haveItem(4031047)){
        var em = cm.getEventManager("Boats");
		if (em.getProperty("entry") == "true")
			cm.sendYesNo("�ɴ���ʣ������λ�������˴�Ʊ�ĳ˿͸Ͻ��ϴ��ɡ��������ھ͵Ǵ���ô��");
		else {
			if (em.getProperty("entry") == "false" && em.getProperty("docked") == "true") {
				cm.sendOk("����ǰ1����ֹͣ��Ʊ�������ĵȺ���һ�˷ɴ���");
				} else {
					cm.sendOk("�ɴ��Ѿ�����ˣ������ĵȺ���һ�ˣ�");
				}
			cm.dispose();
		}
    }else{
        cm.sendOk("�����ȥ����ȥħ�����ֵĴ�Ʊ��");
        cm.dispose();
    }
}

function action(mode, type, selection){
    cm.warp(200000112);
    cm.dispose();
}
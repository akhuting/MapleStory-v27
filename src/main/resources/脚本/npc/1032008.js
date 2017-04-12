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
-- NPC JavaScript --------------------------------------------------------------------------------
	Cherry  - Ellinia Station(101000300)
-- By ---------------------------------------------------------------------------------------------
	BubblesDev 0.75 / ShootSource
-- Version Info -----------------------------------------------------------------------------------

---------------------------------------------------------------------------------------------------
**/

function start() {
    if(cm.haveItem(4031045)){
        var em = cm.getEventManager("Boats");
        if (em.getProperty("entry") == "true")
            cm.sendYesNo("�������ڵǴ�ô��");
        else{
            cm.sendOk("�������֮�ǵķɴ��Ѿ�����ˣ������ĵȺ���һ�ˣ�");
            cm.dispose();
        }
    }else{
        cm.sendOk("�����ȥ����ȥ���֮�ǵĴ�Ʊ��");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    cm.gainItem(4031045, -1);
    cm.warp(101000301,0);
    cm.dispose();
}	
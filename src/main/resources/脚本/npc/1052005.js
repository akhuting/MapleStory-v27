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
/* Dr. Feeble
	Henesys Random Eye Change.
*/
var status = 0;
var beauty = 0;
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008);
var fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008);
var facenew = Array();
var faceCard = 4052000;

function start() {
    status = -1;
    action(1, 0, 0);
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
        if (status == 0) {
            cm.sendSimple("Hi, ��ʵ�һ�û���õ��ϸ�֤, ����������� #b#i"+faceCard+"##k, ��Ҳ�ǳ�Ը��Ϊ��Ч�͡������ҵ��������ޣ�ֻ���������Ūһ����#L1#���Ѿ��л�Ա����#l");
        } else if (status == 1) {
            if (selection == 1) {
                facenew = Array();
                if (cm.getPlayer().getGender() == 0) {
                    for(var i = 0; i < mface.length; i++) {
                        facenew.push(mface[i] + cm.getPlayer().getFace()
                            % 1000 - (cm.getPlayer().getFace()
                                % 100));
                    }
                }
                if (cm.getPlayer().getGender() == 1) {
                    for(var i = 0; i < fface.length; i++) {
                        facenew.push(fface[i] + cm.getPlayer().getFace()
                            % 1000 - (cm.getPlayer().getFace()
                                % 100));
                    }
                }
                cm.sendYesNo("�����ʹ�û�Ա����������ͽ�����仯����Ը�����ô��");
            }
        }
        else if (status == 2){
            if (cm.haveItem(faceCard) == true){
                cm.gainItem(faceCard, -1);
                cm.setFace(facenew[Math.floor(Math.random() * facenew.length)]);
                cm.sendOk("�ţ������ҵ��������ɶ����ɧ��");
            } else {
                cm.sendOk("�ź�...����ȥ��û����ͨ��Ա��...��û�а취Ϊ���ṩ����. �����ȥ�̳��й���...���ܰﵽ��ľ���Щ��...");
            }
			cm.dispose();
        }
    }
}

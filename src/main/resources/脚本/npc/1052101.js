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
/* Andre
	Kerning Random Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var mhair = Array(30130, 30190, 30110, 30180, 30050, 30040, 30160);
var fhair = Array(31060, 31090, 31020, 31130, 31120, 31140, 31010);
var hairnew = Array();
var hairCard = 4050002;
var hairColorCard = 4051002;

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
            cm.sendSimple("���ǰ�������, Ǯ�ϰ�����֡��������#b#t"+hairCard+"##k ���� #b#t"+hairColorCard+"##k, �ҿ��Ը����������͡�\r\n#L0#�������: #i"+hairCard+"##t"+hairCard+"##l\r\n#L1#ͷ��Ⱦɫ: #i"+hairColorCard+"##t"+hairColorCard+"##l");
        } else if (status == 1) {
            if (selection == 0) {
                beauty = 0;
                hairnew = Array();
                if (cm.getPlayer().getGender() == 0) {
                    for(var i = 0; i < mhair.length; i++) {
                        hairnew.push(mhair[i] + parseInt(cm.getPlayer().getHair()
                            % 10));
                    }
                }
                if (cm.getPlayer().getGender() == 1) {
                    for(var i = 0; i < fhair.length; i++) {
                        hairnew.push(fhair[i] + parseInt(cm.getPlayer().getHair()
                            % 10));
                    }
                }
                cm.sendYesNo("���������ͨ��Ա�����ҿ������������һ�����ͣ���ȷ������#b#t"+hairCard+"##k ô��");
            } else if (selection == 1) {
                beauty = 1;
                haircolor = Array();
                var current = parseInt(cm.getPlayer().getHair()
                    /10)*10;
                for(var i = 0; i < 8; i++) {
                    haircolor.push(current + i);
                }
                cm.sendYesNo("�����ʹ����ͨ��Ա������ô���ͷ����ɫ��������仯����ȷ������ #b#t"+hairColorCard+"##k ��");
            }
        }
        else if (status == 2){
            if (beauty == 0){
                if (cm.haveItem(hairCard)){
                    cm.gainItem(hairCard, -1);
                    cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
                    cm.sendOk("�Ͻ���ȥ�����磬չʾ��˧���ķ��Ͱɣ�");
                } else {
                    cm.sendOk("�ź�...����ȥ��û����ͨ��Ա��...��û�а취Ϊ���ṩ����. �����ȥ�̳��й���...���ܰﵽ��ľ���Щ��...");
                }
            }
            if (beauty == 1){
                if (cm.haveItem(hairColorCard) == true){
                    cm.gainItem(hairColorCard, -1);
                    cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
                    cm.sendOk("�Ͻ���ȥ�����磬չʾ��˧���ķ��Ͱɣ�");
                } else {
                    cm.sendOk("�ź�...����ȥ��û����ͨ��Ա��...��û�а취Ϊ���ṩ����. �����ȥ�̳��й���...���ܰﵽ��ľ���Щ��...");
                }
            }
			cm.dispose();
        }
    }
}

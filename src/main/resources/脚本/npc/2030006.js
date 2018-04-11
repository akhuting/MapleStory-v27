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
 
var status = 0;
var qChars = ["Q1: ð�յ��д�1����2���������辭���Ƕ��٣�#10#12#15#20#3",
        "Q1: ���ݲ�ְͬҵΪ�˵�һ��תְ����Ҫ�����������ȷ����������һ����#սʿ 35 ����#���� 25 ����#ħ��ʦ 25 ����#������ 20 ����#1",
        "Q1: �����﹥��ʱ�ر���쳣״̬û�б���ȷ˵��������һ����#���� - �ƶ��ٶȽ���#��ӡ - ����ʹ�ü���#�ڰ� - ����������#���� - ���پ���ֵ#1",
        "Q1: ���϶���û���ĸ����#��Ģ��#��ʬĢ��#����ţħ��#ʯ�� #4",
        "Q1: ��һ��תְ������ѡ���ְҵ��#սʿ#��ʦ#ħ��ʦ#����#2"];
var qItems = ["Q2: ����͹��ﱬ������Ʒ��ȷ��ϵ������һ����#����ţ - ��ţ��#���� - ������#���з - з��#�� - ���#2",
        "Q2: ����͹��ﱬ������Ʒ��ȷ��ϵ������һ����#���� - ��ͷ#��Ұ�� - ��̿#��ʬĢ�� - ��ֽ#��ʳ�˻� - ��ʳ�˻��Ļ�Ҷ#4",
        "Q2: �������ն������еǳ���ҩ�͹�Ч��ȷ���ߵ�����һ����#��ɫҩˮ - �ָ� 250 HP#��ɫҩˮ - �ָ� 400 MP#��ɫҩˮ - �ָ� 100 HP#������ - �ָ� 400 HP#4",
        "Q2: �����ĸ�ҩˮ�ָ� 50% Hp �� Mp?#����ҩˮ#����ҩˮ#������ˮ#��ɫҩˮ#1",
        "Q2: �������ն������еǳ���ҩ�͹�Ч��ȷ���ߵ�����һ����#��ɫҩˮ - �ָ� 150 MP#������ˮ - �ָ� 200 MP#¶ˮ - �ָ� 3000 MP#���� - �ָ� 50 MP#3"];
var qMobs = ["Q3: ���ж����еȼ���ߵ��ǣ�#��Ģ��#ľ��#��ˮ��#��ľ��#4",
        "Q3: �ʺ絺û���ĸ����#������#����ţ#����ţ#Ģ����#1",
        "Q3: �ĸ�������ȥ���֮�ǵĴ����ܿ�����#�����#����ħ#��Ȯ#��ѩ��#2",
        "Q3: �ĸ������ڽ�������������#ʯͷ��#��ţ#��ľ��#��Ȯ#1",
        "Q3: ���ص���û�����ֹ��#ʯͷ��#������#������Ȯ#����#4",
        "Q3: ���ֹ�����Էɣ�#���� #��Ģ��#С��ѩ��#������#1",
        "Q3: �Ǹ������ڽ�������������#��������#��Ģ��#����#������ʨ#4",
        "Q3: ���ֹ����ڲʺ絺��������#��ţ#������#����#����ţ#2"];
var qQuests = ["Q4: Ϊ�˽���2��תְ�ռ���30�������תְ�̹ٻ�������Ʒ��ʲô?#Ӣ��֤ #��������#�ǻ�����#ħ��ʯ#1",
        "Q4: �ĸ�������Է���ִ�У�#Ѱ�ҡ��Ϲ�ħ�顷#Լ��������#������³�˵ľ���#���µĲ���Ь#4",
        "Q4: �Ǹ����Ƕ�ת�̹٣�#����#������#��˹#���³#1",
        "Q4: ���ִ�����ţ�����������ʲô��Ʒ���������κ��Լ��Ĳ���#��ҩ#��ֵ�ҩ#������#����ҩˮ#2",
        "Q4: �ڷ��������ܹ�����һ����ҵ����갢�п�˹�����ĸ�����˭?#������#˹̹���� #����Ī˹#���ű�˹#2",
        "Q4: Ҫ�󼶱���ߵ���������һ����#������˹�غͺڰ�ˮ��#���µĲ���Ь#�Թ���ڵ�������#���Ұ��#1"];
var qTowns = ["Q5: �����ص�����ѩ�򿴲�����NPC��˭��#�Ͳ���ʿ#�ܷ�#�����ϵȱ�#��ķ#4",
        "Q5: �ڽ�����������۲��ܿ�����NPC��˭��#�ذ�#��ɭ#����#�ǻ�үү#3",
        "Q5: �ڽ������ķ������в��ܼ�����NPC��˭��#³��#����#����#�϶��а�#1",
        "Q5: ������û�еĴ��䣿#ħ������#���ִ�#�ʺ絺#��ʿ����#3",
        "Q5: ��ħ�����ּ�������NPC��˭��#��˹#�׵�#���� ����#����#4",
        "Q5: �ڽ���������ʿ���䲻�ܿ�����NPC��˭��#�׵�#��������#����#����#1"];
var correctAnswer = 0;

function start() {
    if (cm.haveItem(4031058, 1)) {
        cm.sendOk("���Ѿ����� #t4031058# ��Ҫ���˷��ҵ�ʱ���ˡ�");
        cm.dispose();
    } else if (cm.isQuestStarted(100102)) { 
		cm.sendNext("�۰¿�������˭���� ��\r\n�Ҵ�����ôƫԶ�ĵط���Ҳ���ҵ���");
	}else {
        cm.sendOk("����������ô��");
		cm.dispose();
    }
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (mode == 0) {
            cm.sendOk("�´��ټ���");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1)
            cm.sendNextPrev(" ������ܸ���1�� #v4005004##b�ڰ�ˮ��#k ��ô�ҽ�����һ�δ���Ļ��ᣬ���5���ⶼ�ܴ�ԣ��һά����#v4031058# #b�ǻ�����#k��");
        else if (status == 2) {
            if (!cm.haveItem(4005004)) {
                cm.sendOk("��û�� #b�ڰ�ˮ����#k");
                cm.dispose();
            } else {
                cm.gainItem(4005004, -1);
                cm.sendSimple("�ڰ�ˮ���������ˣ��������ϾͿ�ʼ�ˣ�׼���� #b������ս��ô��#k.\r\n\r\n" + getQuestion(qChars[Math.floor(Math.random() * qChars.length)]));
                status = 2;
            }
        } else if (status == 3) {
            if (selection == correctAnswer)
                cm.sendOk(" �����ˣ��Ͻ�������һ��ɣ�");
            else {
                cm.sendOk("�����ˡ�\r\n������ٸ���һ�� #b�ڰ�ˮ��#k �ſ�������ս!");
                cm.dispose();
            }
        } else if (status == 4)
            cm.sendSimple("�����������ģ�\r\n\r\n" + getQuestion(qItems[Math.floor(Math.random() * qItems.length)]));
        else if (status == 5) {
            if (selection == correctAnswer)
                cm.sendOk(" �����ˣ��Ͻ�������һ��ɣ�");
            else {
                cm.sendOk("�����ˡ�\r\n������ٸ���һ�� #b�ڰ�ˮ��#k �ſ�������ս!");
                cm.dispose();
            }
        } else if (status == 6) {
            cm.sendSimple("�����������ģ�\r\n\r\n" + getQuestion(qMobs[Math.floor(Math.random() * qMobs.length)]));
            status = 6;
        } else if (status == 7) {
            if (selection == correctAnswer)
                cm.sendOk(" �����ˣ��Ͻ�������һ��ɣ�");
            else {
                cm.sendOk("�����ˡ�\r\n������ٸ���һ�� #b�ڰ�ˮ��#k �ſ�������ս!");
                cm.dispose();
            }
        } else if (status == 8)
            cm.sendSimple("�����������ģ� \r\n\r\n" + getQuestion(qQuests[Math.floor(Math.random() * qQuests.length)]));
        else if (status == 9) {
            if (selection == correctAnswer) {
                cm.sendOk(" �����ˣ��Ͻ�������һ��ɣ�");
                status = 9;
            } else {
                cm.sendOk("�����ˡ�\r\n������ٸ���һ�� #b�ڰ�ˮ��#k �ſ�������ս!");
                cm.dispose();
            }
        } else if (status == 10) {
            cm.sendSimple("���һ�����⣺\r\n\r\n" + getQuestion(qTowns[Math.floor(Math.random() * qTowns.length)]));
            status = 10;
        } else if (status == 11) {
            if (selection == correctAnswer) {
                cm.gainItem(4031058, 1);
				cm.completeQuest(100102);
                cm.sendOk("��ϲ , ��̫ǿ����.\r\n������� #v4031058# ȥ�����תְ�ٰ̹�!.");
            } else {
                cm.sendOk("̫��ϧ�ˣ�ֻ��һ��Ϳ��Ա����ˣ��� �´���Ŭ����><.\r\n��Ȼ�� #b�ڰ�ˮ��#k ͬ���ǵô�Ŷ!");
                cm.dispose();
            }
        } else if(status == 12) {
			cm.warp(211000001, 0);
			cm.dispose();
		}
    }
}
function getQuestion(qSet) {
    var q = qSet.split("#");
    var qLine = q[0] + "\r\n\r\n#L0#" + q[1] + "#l\r\n#L1#" + q[2] + "#l\r\n#L2#" + q[3] + "#l\r\n#L3#" + q[4] + "#l";
    correctAnswer = parseInt(q[5], 10);
    correctAnswer--;
    return qLine;
}
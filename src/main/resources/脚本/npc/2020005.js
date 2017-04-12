/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Alcaster - El Nath Market (211000100)
-- By ---------------------------------------------------------------------------------------------
	Unknown/Information/xQuasar
-- Version Info -----------------------------------------------------------------------------------
	1.3 - Fixed up completely [xQuasar]
	1.2 - Add a missing text part [Information]
	1.1 - Recoded to official [Information]
	1.0 - First Version by Unknown
---------------------------------------------------------------------------------------------------
**/

var selected;
var amount;
var totalcost;
var item = [2050003,2050004,4006000,4006001];
var cost = [300,400,5000,5000];
var msg = ["that cures the state of being sealed and cursed","that cures all",", possessing magical power, that is used for high-quality skills",", possessing the power of summoning that is used for high-quality skills"];
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 2) {
	    cm.sendNext("I see. Understand that I have many different items here. Take a look around. I'm only selling these items to you, so I won't be ripping you off in any way shape or form.");
	    cm.safeDispose();
	    return;
	}
	status--;
    }

    if (status == 0) {
	if (cm.getQuestStatus(1001500) == 2) {
	    var selStr;
	    for (var i = 0; i < item.length; i++){
		selStr += "\r\n#L" + i + "# #b#t" + item[i] + "# (Price: "+cost[i]+" mesos)#k#l";
	    }
	    cm.sendSimple("Thanks to you #b#t4031056##k is safely sealed. Of course, also as a result, I used up about half of the power I have accumulated over the last 800 years or so...but now I can die in peace. Oh, by the way... are you looking for rare items by any chance? As a sign of appreciation for your hard work, I'll sell some items I have to you, and ONLY you. Pick out the one you want!"+selStr);
	}
	else {
	    cm.sendNext("如果你决定帮助我，我可能给你制作某些东西。");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	selected = selection;
	cm.sendGetNumber("Is #b#t"+item[selected]+"##k really the item that you need? It's the item "+msg[selected]+". It may not be the easiest item to acquire, but I'll give you a good deal on it. It'll cost you #b"+cost[selected]+" mesos#k per item. How many would you like to purchase?", 0, 1, 100);
    } else if (status == 2) {
	amount = selection;
	totalcost = cost[selected] * amount;
	if (amount == 0) {
	    cm.sendOk("If you're not going to buy anything, then I've got nothing to sell neither.");
	    cm.dispose();
	}
	cm.sendYesNo("Are you sure you want to buy #r"+amount+" #t"+item[selected]+"(s)##k? It'll cost you "+cost[selected]+" mesos per #t"+item[selected]+"#, which will cost you #r"+totalcost+" mesos#k in total.");
    } else if(status == 3) {
	if(cm.getMeso() < totalcost || !cm.canHold(item[selected])) {
	    cm.sendNext("Are you sure you have enough mesos? Please check and see if your etc. or use inventory is full, or if you have at least #r"+totalcost+"#k mesos.");
	    cm.dispose();
	}
	cm.sendNext("Thank you. If you ever find yourself needing items down the road, make sure to drop by here. I may have gotten old over the years, but I can still make magic items with ease.");
	cm.gainMeso(-totalcost);
	cm.gainItem(item[selected], amount);
	cm.safeDispose();
    }
}
package server.quest;

import client.MapleCharacter;
import client.MapleQuestStatus;
import client.Skill;
import client.SkillFactory;
import client.inventory.Item;
import client.inventory.MapleInventoryType;
import client.inventory.MaplePet;
import constants.ItemConstants;
import tools.FileoutputUtil;
import tools.Pair;

import java.io.Serializable;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class MapleQuestComplete implements Serializable {

    private static final long serialVersionUID = 9179541993413738569L;
    private MapleQuestCompleteType type;
    private List<Pair<Integer, Integer>> dataStore = new ArrayList();

    /**
     * 任务的必要条件
     * @param type
     */
    public MapleQuestComplete(MapleQuestCompleteType type, int itemId,int num) {
        this.type = type;
        if (type == MapleQuestCompleteType.item) {
            this.dataStore.add(new Pair(itemId,num));
        } if (type == MapleQuestCompleteType.exp) {
            this.dataStore.add(new Pair(itemId,num));
        } else {
            FileoutputUtil.log("暂时不支持的奖励类型："+type.toString());
        }
    }

    /**
     * 检查任务是否能完成
     * @param chr
     * @return
     */
    public boolean check(MapleCharacter chr) {
        switch (type) {
            case job:
                for (Pair a : this.dataStore) {
                    if ((((Integer) a.getRight()) == chr.getJob()) || (chr.isGM())) {
                        return true;
                    }
                }
                return false;
            case skill:
                for (Pair a : this.dataStore) {
                    boolean acquire = ((Integer) a.getRight()) > 0;
                    int skill = ((Integer) a.getLeft());
                    Skill skil = SkillFactory.getSkill(skill);
                    if (acquire) {
                        if (chr.getSkillLevel(skil) == 0) {
                            return false;
                        }
                    } else if ((chr.getSkillLevel(skil) > 0) || (chr.getMasterLevel(skil) > 0)) {
                        return false;
                    }
                }
                return true;
            case quest:
                for (Pair a : this.dataStore) {
                    MapleQuestStatus q = chr.getQuest(MapleQuest.getInstance(((Integer) a.getLeft()).intValue()));
                    int state = ((Integer) a.getRight());
                    if (state != 0) {
                        if ((q == null) && (state == 0)) {
                            continue;
                        }
                        if ((q == null) || (q.getStatus() != state)) {
                            return false;
                        }
                    }
                }
                return true;
            case item:
                for (Pair a : this.dataStore) {
                    int itemId = ((Integer) a.getLeft());
                    short quantity = 0;
                    MapleInventoryType iType = ItemConstants.getInventoryType(itemId);
                    for (Item item : chr.getInventory(iType).listById(itemId)) {
                        quantity = (short) (quantity + item.getQuantity());
                    }
                    int count = ((Integer) a.getRight());
                    if ((quantity < count) || ((count <= 0) && (quantity > 0))) {
                        return false;
                    }
                }
                return true;
            case partyQuest_S:
                int[] partyQuests = {1200, 1201, 1202, 1203, 1204, 1205, 1206, 1300, 1301, 1302};
                int sRankings = 0;
                for (int i : partyQuests) {
                    String rank = chr.getOneInfo(i, "rank");
                    if ((rank != null) && (rank.equals("S"))) {
                        sRankings++;
                    }
                }
                return sRankings >= 5;
        }
        return true;
    }

    public boolean removeQuestItem(MapleCharacter chr){
        switch (type) {
            case item:
                for (Pair a : this.dataStore) {
                    int itemId = ((Integer) a.getLeft());
                    short quantity = 0;
                    MapleInventoryType iType = ItemConstants.getInventoryType(itemId);
                    for (Item item : chr.getInventory(iType).listById(itemId)) {
                        quantity = (short) (quantity + item.getQuantity());
                    }
                    int count = ((Integer) a.getRight());
                    if ((quantity < count) || ((count <= 0) && (quantity > 0))) {
                        return false;
                    }
                    chr.removeItem(itemId,count);
                }
                return true;
        }
        return true;
    }

    public MapleQuestCompleteType getType() {
        return this.type;
    }

    @Override
    public String toString() {
        return this.type.toString();
    }

    public List<Pair<Integer, Integer>> getDataStore() {
        return this.dataStore;
    }
}

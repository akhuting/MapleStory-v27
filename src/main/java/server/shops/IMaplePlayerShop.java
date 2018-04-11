package server.shops;

import client.MapleCharacter;
import client.MapleClient;
import java.util.List;
import tools.Pair;

public interface IMaplePlayerShop {

    byte HIRED_MERCHANT = 1;
    byte PLAYER_SHOP = 2;
    byte OMOK = 3;
    byte MATCH_CARD = 4;

    String getOwnerName();

    String getDescription();

    void setDescription(String paramString);

    List<Pair<Byte, MapleCharacter>> getVisitors();

    List<MaplePlayerShopItem> getItems();

    boolean isOpen();

    boolean saveItems();

    boolean removeItem(int paramInt);

    boolean isOwner(MapleCharacter paramMapleCharacter);

    byte getShopType();

    byte getVisitorSlot(MapleCharacter paramMapleCharacter);

    byte getFreeSlot();

    int getItemId();

    int getMeso();

    int getOwnerId();

    int getOwnerAccId();

    void setOpen(boolean paramBoolean);

    void setMeso(int paramInt);

    void addItem(MaplePlayerShopItem paramMaplePlayerShopItem);

    void removeFromSlot(int paramInt);

    void broadcastToVisitors(byte[] paramArrayOfByte);

    void addVisitor(MapleCharacter paramMapleCharacter);

    void removeVisitor(MapleCharacter paramMapleCharacter);

    void removeAllVisitors(int paramInt1, int paramInt2);

    void buy(MapleClient paramMapleClient, int paramInt, short paramShort);

    void closeShop(boolean paramBoolean1, boolean paramBoolean2);

    String getPassword();

    int getMaxSize();

    int getSize();

    int getGameType();

    void update();

    void setAvailable(boolean paramBoolean);

    boolean isAvailable();

    List<AbstractPlayerStore.BoughtItem> getBoughtItems();

    List<Pair<String, Byte>> getMessages();

    int getMapId();

    int getChannel();
}

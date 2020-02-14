package common;

public enum MapleType {
    中国(4, "GB18030");
    final byte type;
    final String ascii;

    MapleType(int type, String ascii) {
        this.type = (byte) type;
        this.ascii = ascii;
    }

    public String getAscii() {
        return ascii;
    }

    public byte getType() {
        return type;
    }

    public static MapleType getByType(byte type) {
        for (MapleType l : MapleType.values()) {
            if (l.getType() == type) {
                return l;
            }
        }
        return 中国;
    }
}

package common.tools.data.output;


import common.tools.HexTool;

import java.io.ByteArrayOutputStream;

public class MaplePacketLittleEndianWriter extends GenericLittleEndianWriter {

    private final ByteArrayOutputStream baos;

    public MaplePacketLittleEndianWriter() {
        this(32);
    }

    public MaplePacketLittleEndianWriter(int size) {
        this.baos = new ByteArrayOutputStream(size);
        setByteOutputStream(new BAOSByteOutputStream(this.baos));
    }

    public byte[] getPacket() {
        return baos.toByteArray();
    }

    @Override
    public String toString() {
        return HexTool.toString(baos.toByteArray());
    }
}

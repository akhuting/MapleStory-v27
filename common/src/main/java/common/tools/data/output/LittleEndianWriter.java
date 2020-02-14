package common.tools.data.output;

import java.awt.*;

public interface LittleEndianWriter {

    void writeZero(int paramInt);

    void write(byte[] paramArrayOfByte);

    void write(byte paramByte);

    void write(int paramInt);

    void writeInt(int paramInt);

    void writeReversedInt(long paramLong);

    void writeShort(short paramShort);

    void writeShort(int paramInt);

    void writeLong(long paramLong);

    void writeReversedLong(long paramLong);

    void writeAsciiString(String paramString);

    void writeAsciiString(String paramString, int paramInt);

    void writeMapleNameString(String paramString);

    void writePos(Point paramPoint);

    void writeRect(Rectangle paramRectangle);

    void writeMapleAsciiString(String paramString);

    void writeBool(boolean paramBoolean);
}

package common.tools.data.input;

import java.awt.*;

public interface LittleEndianAccessor {

    byte readByte();

    int readByteAsInt();

    char readChar();

    short readShort();

    int readUShort();

    int readInt();

    long readLong();

    void skip(int paramInt);

    byte[] read(int paramInt);

    float readFloat();

    double readDouble();

    String readAsciiString(int paramInt);

    String readMapleAsciiString();

    Point readPos();

    long getBytesRead();

    long available();

    String toString(boolean paramBoolean);
    
    String readNullTerminatedAsciiString();
}

package common.tools.data.input;

import java.io.IOException;

public interface SeekableInputStreamBytestream extends ByteInputStream {

    void seek(long paramLong) throws IOException;

    long getPosition() throws IOException;

    @Override
    String toString(boolean paramBoolean);
}

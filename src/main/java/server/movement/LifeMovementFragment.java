package server.movement;

import java.awt.Point;
import tools.data.output.MaplePacketLittleEndianWriter;

public interface LifeMovementFragment {

    void serialize(MaplePacketLittleEndianWriter paramMaplePacketLittleEndianWriter);

    Point getPosition();
}

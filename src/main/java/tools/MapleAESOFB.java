package tools;

import constants.ServerConstants;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.spec.SecretKeySpec;
import org.apache.log4j.Logger;

public class MapleAESOFB {

    private byte[] iv;
    private Cipher cipher;
    private final short mapleVersion;

    public enum EncryptionKey {

        CMS27((short) 27, ServerConstants.MapleType.中国, new SecretKeySpec(new byte[]{(byte) 0x00, 0x00, 0x00, 0x00, (byte) 0x00, 0x00, 0x00, 0x00, (byte) 0x00, 0x00, 0x00, 0x00, (byte) 0x00, 0x00, 0x00, 0x00, (byte) 0x00, 0x00, 0x00, 0x00, (byte) 0x00, 0x00, 0x00, 0x00, (byte) 0x00, 0x00, 0x00, 0x00, (byte) 0x00, 0x00, 0x00, 0x00}, "AES")),;
        private final SecretKeySpec skey;
        private final short version;
        private final ServerConstants.MapleType mapleType;

        EncryptionKey(short version, ServerConstants.MapleType mapleType, SecretKeySpec skey) {
            this.skey = skey;
            this.version = version;
            this.mapleType = mapleType;
        }

        public SecretKeySpec getEncryptionKey() {
            return skey;
        }

        public short getVersion() {
            return version;
        }

        public ServerConstants.MapleType getMapleType() {
            return mapleType;
        }
    }

    private static SecretKeySpec skey = new SecretKeySpec(new byte[]{0x13, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, (byte) 0xB4, 0x00, 0x00, 0x00, (byte) 0x1B, 0x00, 0x00, 0x00, (byte) 0x0F, 0x00, 0x00, 0x00, (byte) 0x33, 0x00, 0x00, 0x00, (byte) 0x52, 0x00, 0x00, 0x00}, "AES");

    private static final byte[] funnyBytes = {(byte) 0xEC, (byte) 0x3F, (byte) 0x77, (byte) 0xA4, (byte) 0x45, (byte) 0xD0, (byte) 0x71, (byte) 0xBF, (byte) 0xB7, (byte) 0x98, (byte) 0x20, (byte) 0xFC,
        (byte) 0x4B, (byte) 0xE9, (byte) 0xB3, (byte) 0xE1, (byte) 0x5C, (byte) 0x22, (byte) 0xF7, (byte) 0x0C, (byte) 0x44, (byte) 0x1B, (byte) 0x81, (byte) 0xBD, (byte) 0x63, (byte) 0x8D, (byte) 0xD4, (byte) 0xC3,
        (byte) 0xF2, (byte) 0x10, (byte) 0x19, (byte) 0xE0, (byte) 0xFB, (byte) 0xA1, (byte) 0x6E, (byte) 0x66, (byte) 0xEA, (byte) 0xAE, (byte) 0xD6, (byte) 0xCE, (byte) 0x06, (byte) 0x18, (byte) 0x4E, (byte) 0xEB,
        (byte) 0x78, (byte) 0x95, (byte) 0xDB, (byte) 0xBA, (byte) 0xB6, (byte) 0x42, (byte) 0x7A, (byte) 0x2A, (byte) 0x83, (byte) 0x0B, (byte) 0x54, (byte) 0x67, (byte) 0x6D, (byte) 0xE8, (byte) 0x65, (byte) 0xE7,
        (byte) 0x2F, (byte) 0x07, (byte) 0xF3, (byte) 0xAA, (byte) 0x27, (byte) 0x7B, (byte) 0x85, (byte) 0xB0, (byte) 0x26, (byte) 0xFD, (byte) 0x8B, (byte) 0xA9, (byte) 0xFA, (byte) 0xBE, (byte) 0xA8, (byte) 0xD7,
        (byte) 0xCB, (byte) 0xCC, (byte) 0x92, (byte) 0xDA, (byte) 0xF9, (byte) 0x93, (byte) 0x60, (byte) 0x2D, (byte) 0xDD, (byte) 0xD2, (byte) 0xA2, (byte) 0x9B, (byte) 0x39, (byte) 0x5F, (byte) 0x82, (byte) 0x21,
        (byte) 0x4C, (byte) 0x69, (byte) 0xF8, (byte) 0x31, (byte) 0x87, (byte) 0xEE, (byte) 0x8E, (byte) 0xAD, (byte) 0x8C, (byte) 0x6A, (byte) 0xBC, (byte) 0xB5, (byte) 0x6B, (byte) 0x59, (byte) 0x13, (byte) 0xF1,
        (byte) 0x04, (byte) 0x00, (byte) 0xF6, (byte) 0x5A, (byte) 0x35, (byte) 0x79, (byte) 0x48, (byte) 0x8F, (byte) 0x15, (byte) 0xCD, (byte) 0x97, (byte) 0x57, (byte) 0x12, (byte) 0x3E, (byte) 0x37, (byte) 0xFF,
        (byte) 0x9D, (byte) 0x4F, (byte) 0x51, (byte) 0xF5, (byte) 0xA3, (byte) 0x70, (byte) 0xBB, (byte) 0x14, (byte) 0x75, (byte) 0xC2, (byte) 0xB8, (byte) 0x72, (byte) 0xC0, (byte) 0xED, (byte) 0x7D, (byte) 0x68,
        (byte) 0xC9, (byte) 0x2E, (byte) 0x0D, (byte) 0x62, (byte) 0x46, (byte) 0x17, (byte) 0x11, (byte) 0x4D, (byte) 0x6C, (byte) 0xC4, (byte) 0x7E, (byte) 0x53, (byte) 0xC1, (byte) 0x25, (byte) 0xC7, (byte) 0x9A,
        (byte) 0x1C, (byte) 0x88, (byte) 0x58, (byte) 0x2C, (byte) 0x89, (byte) 0xDC, (byte) 0x02, (byte) 0x64, (byte) 0x40, (byte) 0x01, (byte) 0x5D, (byte) 0x38, (byte) 0xA5, (byte) 0xE2, (byte) 0xAF, (byte) 0x55,
        (byte) 0xD5, (byte) 0xEF, (byte) 0x1A, (byte) 0x7C, (byte) 0xA7, (byte) 0x5B, (byte) 0xA6, (byte) 0x6F, (byte) 0x86, (byte) 0x9F, (byte) 0x73, (byte) 0xE6, (byte) 0x0A, (byte) 0xDE, (byte) 0x2B, (byte) 0x99,
        (byte) 0x4A, (byte) 0x47, (byte) 0x9C, (byte) 0xDF, (byte) 0x09, (byte) 0x76, (byte) 0x9E, (byte) 0x30, (byte) 0x0E, (byte) 0xE4, (byte) 0xB2, (byte) 0x94, (byte) 0xA0, (byte) 0x3B, (byte) 0x34, (byte) 0x1D,
        (byte) 0x28, (byte) 0x0F, (byte) 0x36, (byte) 0xE3, (byte) 0x23, (byte) 0xB4, (byte) 0x03, (byte) 0xD8, (byte) 0x90, (byte) 0xC8, (byte) 0x3C, (byte) 0xFE, (byte) 0x5E, (byte) 0x32, (byte) 0x24, (byte) 0x50,
        (byte) 0x1F, (byte) 0x3A, (byte) 0x43, (byte) 0x8A, (byte) 0x96, (byte) 0x41, (byte) 0x74, (byte) 0xAC, (byte) 0x52, (byte) 0x33, (byte) 0xF0, (byte) 0xD9, (byte) 0x29, (byte) 0x80, (byte) 0xB1, (byte) 0x16,
        (byte) 0xD3, (byte) 0xAB, (byte) 0x91, (byte) 0xB9, (byte) 0x84, (byte) 0x7F, (byte) 0x61, (byte) 0x1E, (byte) 0xCF, (byte) 0xC5, (byte) 0xD1, (byte) 0x56, (byte) 0x3D, (byte) 0xCA, (byte) 0xF4, (byte) 0x05,
        (byte) 0xC6, (byte) 0xE5, (byte) 0x08, (byte) 0x49, (byte) 0x4F, (byte) 0x64, (byte) 0x69, (byte) 0x6E, (byte) 0x4D, (byte) 0x53, (byte) 0x7E, (byte) 0x46, (byte) 0x72, (byte) 0x7A};

    public MapleAESOFB(byte[] iv, int mapleVersion, boolean network) {
        setIv(iv);
        this.mapleVersion = (short) (mapleVersion >> 8 & 0xFF | mapleVersion << 8 & 0xFF00);
    }

    private void setIv(byte[] iv) {
        this.iv = iv;
    }

    public byte[] getIv() {
        return this.iv;
    }

    public byte[] crypt(byte[] data) {
        updateIv();
        return data;
    }

    private void updateIv() {
        this.iv = getNewIv(this.iv);
    }

    public byte[] getPacketHeader(int length) {
        int iiv = (iv[3]) & 0xFF;
        iiv |= (iv[2] << 8) & 0xFF00;

        iiv ^= mapleVersion;
        int mlength = ((length << 8) & 0xFF00) | (length >>> 8);
        int xoredIv = iiv ^ mlength;

        byte[] ret = new byte[4];
        ret[0] = (byte) ((iiv >>> 8) & 0xFF);
        ret[1] = (byte) (iiv & 0xFF);
        ret[2] = (byte) ((xoredIv >>> 8) & 0xFF);
        ret[3] = (byte) (xoredIv & 0xFF);
        return ret;
    }

    public static int getPacketLength(int packetHeader) {
        int packetLength = packetHeader >>> 16 ^ packetHeader & 0xFFFF;
        packetLength = ((packetLength << 8) & 0xFF00) | ((packetLength >>> 8) & 0xFF);
        return packetLength;
    }

    public boolean checkPacket(byte[] packet) {
        return (((packet[0] ^ this.iv[2]) & 0xFF) == (this.mapleVersion >> 8 & 0xFF)) && (((packet[1] ^ this.iv[3]) & 0xFF) == (this.mapleVersion & 0xFF));
    }

    public boolean checkPacket(int packetHeader) {
        return checkPacket(new byte[]{(byte) (packetHeader >> 24 & 0xFF), (byte) (packetHeader >> 16 & 0xFF)});
    }

    public static byte[] getNewIv(byte[] oldIv) {
        byte[] in = {-14, 83, 80, -58};
        for (int x = 0; x < 4; x++) {
            funnyShit(oldIv[x], in);
        }
        return in;
    }

    @Override
    public String toString() {
        return "IV: " + HexTool.toString(this.iv);
    }

    public static void funnyShit(byte inputByte, byte[] in) {
        byte elina = in[1];
        byte anna = inputByte;
        byte moritz = funnyBytes[(elina & 0xFF)];
        moritz = (byte) (moritz - inputByte);
        int tmp26_25 = 0;
        byte[] tmp26_24 = in;
        tmp26_24[tmp26_25] = (byte) (tmp26_24[tmp26_25] + moritz);
        moritz = in[2];
        moritz = (byte) (moritz ^ funnyBytes[(anna & 0xFF)]);
        elina = (byte) (elina - (moritz & 0xFF));
        in[1] = elina;
        elina = in[3];
        moritz = elina;
        elina = (byte) (elina - (in[0] & 0xFF));
        moritz = funnyBytes[(moritz & 0xFF)];
        moritz = (byte) (moritz + inputByte);
        moritz = (byte) (moritz ^ in[2]);
        in[2] = moritz;
        elina = (byte) (elina + (funnyBytes[(anna & 0xFF)] & 0xFF));
        in[3] = elina;

        int merry = in[0] & 0xFF;
        merry |= in[1] << 8 & 0xFF00;
        merry |= in[2] << 16 & 0xFF0000;
        merry |= in[3] << 24 & 0xFF000000;
        int ret_value = merry >>> 29;
        merry <<= 3;
        ret_value |= merry;

        in[0] = (byte) (ret_value & 0xFF);
        in[1] = (byte) (ret_value >> 8 & 0xFF);
        in[2] = (byte) (ret_value >> 16 & 0xFF);
        in[3] = (byte) (ret_value >> 24 & 0xFF);
    }
}

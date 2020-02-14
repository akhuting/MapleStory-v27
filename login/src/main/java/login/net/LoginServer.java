package login.net;

import common.netty.PacketDecoder;
import common.netty.PacketEncoder;
import common.tools.MapleAESOFB;
import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.net.InetSocketAddress;

@Slf4j
@Component
public class LoginServer {

    @PostConstruct
    public void start() throws InterruptedException {
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        ServerBootstrap b = new ServerBootstrap();
        b.group(bossGroup, workerGroup);
        b.channel(NioServerSocketChannel.class);
        b.childHandler(new ChannelInitializer<SocketChannel>() {

            @Override
            protected void initChannel(SocketChannel ch) {

                ch.pipeline().addLast(new PacketDecoder(), new LoginHandler(), new PacketEncoder());

                byte[] ivRecv = {70, 114, 122, 82};
                byte[] ivSend = {82, 48, 120, 115};
                ivRecv[3] = (byte) (int) (Math.random() * 255.0);
                ivSend[3] = (byte) (int) (Math.random() * 255.0);
                MapleAESOFB sendCypher = new MapleAESOFB(ivSend, 0xFFFF - 27, false);
                MapleAESOFB recvCypher = new MapleAESOFB(ivRecv, 27, false);
//                    c.write(Login.sendConnect(riv, siv));

            }
        });

        b.childOption(ChannelOption.TCP_NODELAY, true);
        b.childOption(ChannelOption.SO_KEEPALIVE, true);
        b.localAddress(new InetSocketAddress(8484));
        ChannelFuture future = b.bind().sync();

        if (future.isSuccess()) {
            log.info("登录服务启动成功{}", 8484);
        }
    }
}

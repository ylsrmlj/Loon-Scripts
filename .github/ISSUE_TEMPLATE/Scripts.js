# 该订阅为脚本合集,用于Remove Ads + unlock vip.
# 集成: NobyDa、yichahucha、Choler、onewayticket、langkhach以及个人收集整理的脚本. 
# 需要配置 CA 证书并启用 MitM 开关.
# 您可以在使用后手动将本模块禁用，以免产生不必要的MITM.

hostname = api.m.jd.com, trade-acs.m.taobao.com, ios.prod.ftl.netflix.com, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com



# > yichahucha
# > 京东比价
http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js,tag=京东比价
# > 淘宝比价
# 不生效或失效的需要卸载 tb 重装，注意不开脚本进 tb 会失效
http-request ^http://.+/amdc/mobileDispatch requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js,tag=淘宝比价1(内置版)
http-response ^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js,tag=淘宝比价2(内置版)
# Lite弹窗版
http-request ^http://.+/amdc/mobileDispatch requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/tb_price_lite.js,tag=淘宝比价1 Lite(通知版)
http-response ^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/tb_price_lite.js,tag=淘宝比价2 Lite(通知版)
# > 奈飞评分
http-request ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js,tag=奈飞评分1
http-response ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js,tag=奈飞评分2
http-response ^https?://ios\.prod\.ftl\.netflix\.com/iosui/warmer/.+type=show-ath requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating_season.js,tag=单集评分
# > 微博去广告
http-response ^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js, tag=微博启动广告
http-response ^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js, tag=微博去广告


# > 有道云笔记 (By Alex0510)
http-response https://note.youdao.com/yws/(mapi/payment|api/self) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/ydybj.js,tag=有道云笔记
Peak

# 动画疯 去广告
http-request https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js,tag=动画疯去广告
http-response https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js,tag=动画疯去广告

# > WPS (By eHpo)
http-response ^https://account.wps.*/api/users/ requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js,tag=WPS

# > 人人视频 解锁AI原画 (by@george Jiang & R)
http-response ^https:\/\/api\.rr\.tv(\/user\/privilege\/list|\/ad\/getAll|\/rrtv-video\/v4plus\/season\/detail) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/rrtv.js,tag=人人视频AI原画

# 人人视频 旧版本api限制解除 id77
http-request ^https:\/\/api\.rr\.tv script-path=https://raw.githubusercontent.com/id77/QuantumultX/master/Script/rrtv.js, tag=人人视频 旧版本api限制解除

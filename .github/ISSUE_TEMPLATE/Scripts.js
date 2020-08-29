# 该订阅为脚本合集,用于Remove Ads + unlock vip.
# 集成: NobyDa、yichahucha、Choler、onewayticket、langkhach以及个人收集整理的脚本. 
# 需要配置 CA 证书并启用 MitM 开关.
# 您可以在使用后手动将本模块禁用，以免产生不必要的MITM.

hostname = *.rr.tv,greasyfork.org, openuserjs.org, trade-acs.m.taobao.com, bea.sportq.com, api.meiyan.com, pwaapi.gao1gps.cn, avoscloud.com, app.flashdown365.com, m.samh.xndm.tech, mob2015.kekenet.com, api.m.jd.com, ios.prod.ftl.netflix.com, vipapi.jxedt.com, api.interpreter.caiyunai.com, pocketlists.com, book.haitunwallet.com, mubu.com, app.xunjiepdf.com, miaow.yiyongcad.com, api.lennou.com, api.gkocr.com, vira.llsapp.com, commerce-.*api.faceu.mobi, commerce-api.faceu.mobi, pan.baidu.com, api.revenuecat.com, api.rr.tv, editorapi.115.com, api.lakecoloring.com, ctrl.playcvn.com, dict.eudic.net, m.client.10010.com, api.wakamoment.ga, *.bh3.com, api.diyidan.net, api.flexibits.com, api.jiaonizuocai.com, api.sololearn.com, tncj.hortorgames.com, bkcd.b-cdn.net, souhu.mett.me, ayk.tmdidi.com, m.pearkin.com, www.baidu.com2.club, claritywallpaper.com, bookapi.ihuman.com, rest.zhibo.tv, note.youdao.com, billing.peakcloud.org, api.ithome.com, www.xmind.cn, *.arten.cn, api.weiqire.com, api.shimo.im, pay.wecut.com, *.videostarapp.com, app.api.versa-ai.com, *.bjxkhc.com, api.591master.com, jdytv.cn, user.shywck.com, *.xunjie*.com, api.psy-1.com, snailsleep.net, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, mp.weixin.qq.com, aweme*.snssdk.com, *.kuwo.cn, vip1.kuwo.cn, *.xiaoxiao*.com, *.tiktokv.com, *.musical.ly, *.amemv.com, p.du.163.com, getuserinfo.321mh.com, getuserinfo-globalapi.zymk.cn, ios.fuliapps.com, vsco.co, api.vnision.com, *.my10api.com, sp.kaola.com, r.inews.qq.com, apple.fuliapps.com, newdrugs.dxy.cn, app101.avictown.cc, api.hlo.xyz, api.ijo.xyz, www.luqijianggushi.com, account.wps.*, u.kanghuayun.com, api.gyrosco.pe, api1.dobenge.cn, api.mvmtv.com, mitaoapp.yeduapp.com, origin-prod-phoenix.jibjab.com, www.3ivf.com, pay.guoing.com, api.termius.com, api.bjxkhc.com, viva.v21xy.com, .com, biz.caiyunapp.com, api.gotokeep.com, ap*.intsig.net, mp.bybutter.com, api.vuevideo.net, api.picsart.c*, api.meiease.c*, splice.oracle.*.com, api.gamer.com.tw, ios.xiangjiaoapps.com, apple.xiangjiaoapps.com, *.lagoapps.com, api.gamer.com.tw, *.xiangxiangapps.com, avatar-nct.nixcdn.com, spclient.wg.spotify.com, oa.zalo.me, origin-prod-phoenix.jibjab.com, api.meiease.c*, api.unfold.app, viva-asia1.vvbrd.com, graph.nhaccuatui.com, api.memrise.com , api.sync.me, pool.elsanow.io, lambda.us-east-1.amazonaws.com, api.mondlylanguages.com, api.busuu.com, owa.videoshowiosglobalserver.com:0, accounts.elevateapp.net, purchases.ws.pho.to, api-intl.mr.meitu.com, bmall.camera360.com, api.tv.zing.vn, api.calm.com, www.calm.com, api.global.mp3.zing.vn, apimboom2.globaldelight.net, photos.adobe.io, license.pdfexpert.com, subs.platforms.team, apic.musixmatch.com, api.getmimo.com, api.revenuecat.com, engbright.com, api.lingokids.com, www.peacefulsoundsapp.com, duolingo-leaderboards-prod.duolingo.com, mobile-api.adguard.com, api.blinkist.com, api-kinemaster-assetstore.*, api.pushover.net, ap*.intsig.net, api.overhq.com, receipt-validator.herewetest.com, lcs-mobile-cops.adobe.io, education.github.com, backend.getdrafts.com, ssl-api.itranslateapp.com, sk.ulysses.app, dayone.me, license.enpass.io, mp.bybutter.com, *.grammarly.com, splice.oracle.*.com, api.keepkeep.com, planner5d.com, secure.istreamer.com, www.api.monkeyuni.net, api.textnow.me, api.madewithfaded.com,nomo.dafork.com,draw.jdfcloud.com

# > Chavy box (多账号Cookie保存切换)
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

# > 有道云笔记 (By Alex0510)
http-response https://note.youdao.com/yws/(mapi/payment|api/self) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/ydybj.js,tag=有道云笔记
Peak

# 动画疯 去广告
http-request https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js,tag=动画疯去广告
http-response https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js,tag=动画疯去广告

# > IT之家 去新闻列表广告
http-response ^https?:\/\/api\.ithome\.com\/json\/slide\/index requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/ITHome.js,tag=IT之家去列表广告
http-response ^https?:\/\/api\.ithome\.com\/json\/(newslist|listpage)\/news requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/ITHome.js,tag=IT之家去列表广告

# > 奈飞评分
http-request ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js,tag=奈飞评分1
http-response ^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js,tag=奈飞评分2
http-response ^https?://ios\.prod\.ftl\.netflix\.com/iosui/warmer/.+type=show-ath requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating_season.js,tag=单集评分

# > 微博去广告
http-response ^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
http-response ^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/
# > WPS (By eHpo)
http-response ^https://account.wps.*/api/users/ requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js,tag=WPS

# > 人人视频 解锁AI原画 (by@george Jiang & R)
http-response ^https:\/\/api\.rr\.tv(\/user\/privilege\/list|\/ad\/getAll|\/rrtv-video\/v4plus\/season\/detail) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/rrtv.js,tag=人人视频AI原画

# 人人视频 旧版本api限制解除 id77
http-request ^https:\/\/api\.rr\.tv script-path=https://raw.githubusercontent.com/id77/QuantumultX/master/Script/rrtv.js, tag=人人视频 旧版本api限制解除

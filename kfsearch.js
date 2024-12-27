const redisCon = require("../Toolkits/redisCon.js");
const {
    kfsearchInfo
} = require("../config.js");
const db = require("../Toolkits/dataBase.js");
const formatNumber = require("../Toolkits/utils.js");
module.exports = {
    plugin(bot) {
        bot.on(["*"], async (msg) => {
            console.error(JSON.stringify(msg));
            if (msg.text == "/start") return;
            //有人发消息过来了，那么就给配置中的群
            //只有私聊才会获取内容并转发
            let replyToMessage = msg.message_id;
            page = 1;
            db({
                text: msg.text,
                page: page
            }).then(async (filteredDocs) => {
                console.error(JSON.stringify(filteredDocs));
                if (filteredDocs.length > 0) {
                    console.log("Found documents filtered by { a: 3 } =>", filteredDocs);
                    let res = '';
                    if(filteredDocs!=undefined && filteredDocs.length>0){
                      for (var prop in filteredDocs) {
                          console.log(filteredDocs[prop])
                        if (filteredDocs[prop]['type'] == 'channel') {
                            res = res + `📢 <a href='${filteredDocs[prop]['url']}'>${filteredDocs[prop]['title']}</a> ${formatNumber(filteredDocs[prop]['count'])}\n`;
                        } else if (filteredDocs[prop]['type'] == 'group') {
                            res = res + `👥 <a href='${filteredDocs[prop]['url']}'>${filteredDocs[prop]['title']}</a> ${formatNumber(filteredDocs[prop]['count'])}\n`;
                        } else if (filteredDocs[prop]['type'] == 'bot') {
                            res = res + `🤖 <a href='${filteredDocs[prop]['url']}'>${filteredDocs[prop]['title']}</a>\n`;
                        }else if (filteredDocs[prop]['type'] == 'discussion') {
                            res = res + `💬 <a href='${filteredDocs[prop]['url']}'>${filteredDocs[prop]['title']}</a>\n`;
                        }else if (filteredDocs[prop]['type'] == 'image') {
                            res = res + `🏞 <a href='${filteredDocs[prop]['url']}'>${filteredDocs[prop]['title']}</a>\n`;
                        }else if (filteredDocs[prop]['type'] == 'video') {
                            res = res + `🎬 <a href='${filteredDocs[prop]['url']}'>${filteredDocs[prop]['title']}</a>\n`;
                        }else if (filteredDocs[prop]['type'] == 'music') {
                            res = res + `🎧 <a href='${filteredDocs[prop]['url']}'>${filteredDocs[prop]['title']}</a>\n`;
                        }else if (filteredDocs[prop]['type'] == 'app') {
                            res = res + `☸️ <a href='${filteredDocs[prop]['url']}'>${filteredDocs[prop]['title']}</a>\n`;
                        }else if (filteredDocs[prop]['type'] == 'document') {
                            res = res + `📚 <a href='${filteredDocs[prop]['url']}'>${filteredDocs[prop]['title']}</a>\n`;
                        }else {
                            res = res + `📦 <a href='${filteredDocs[prop]['url']}'>${filteredDocs[prop]['title']}</a>\n`;
                        }
                        }  
                        if (filteredDocs!=undefined && filteredDocs.length==10){
                             res = res + `第 ${page} 页\n💡点击按钮可以切换类型👇`
                        }    
                    }
                    
                    const replyMarkup = bot.inlineKeyboard([
                        [
                            bot.inlineButton('📢 ', {
                                callback: 'channel'
                            }),
                            bot.inlineButton('👥', {
                                callback: 'group'
                            }),
                            bot.inlineButton('🤖', {
                                callback: 'bot'
                            }),
                            bot.inlineButton('🎬', {
                                callback: 'video'
                            }),
                            bot.inlineButton('🏞', {
                                callback: 'document'
                            }),
                            bot.inlineButton('🎧', {
                                callback: 'music'
                            }),
                            bot.inlineButton('💬', {
                                callback: 'discus'
                            }),
                            bot.inlineButton('📁', {
                                callback: 'app'
                            })
                        ],
                        [
                            bot.inlineButton('下一页', {
                                callback: 'next'
                            })
                        ],
                    ]);
                    if(res==""){
                        res="无搜索结果！"
                    }
                     let replyId;
                     if(msg.chat.type==='private'){
                         replyId = msg.from.id;
                     }else {
                        replyId = msg.chat.id; 
                     }
                    let replay = await bot.sendMessage(replyId, res, {
                        parseMode: 'HTML',
                        'replyMarkup': replyMarkup,
                        webPreview: false,
                        'replyToMessage': msg.message_id
                    });
                    console.error(replay);
                     redisCon.set(`msg-page-${replay.message_id}`,1);
                }
            })
            return;
        });
    },
};
export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx11604adef5c90d1a",
    // 公众号appSecret
    appSecret: "139b3afbbb0dced4dd23459c5c5e2d7e",
    // 模板消息id
    templateId: "	G53FMHW6xsDhKzje5FwrjKHJqevVK_qiwtFC-rXzjIY",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [oUnRg6eS1Lk5AEvS81aN7jaFLaqM],

    // 信息配置
    // 所在省份
    province: "福建",
    // 所在城市
    city: "福州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "美丽可爱的乖乖", "year": "2001", "date": "11-05", "type": 'new'},
      {"name": "toto", "year": "2002", "date": "06-03", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-06-27",

    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

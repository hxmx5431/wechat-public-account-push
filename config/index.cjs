/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx83ce6f30a5378265',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '8f740e3c13b702322c811ae5855072e6',

  PROVINCE: '云南',
  CITY: '昆明',

  USERS: [
    {
      // 想要发送的人的名字
      name: '美女',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDaL86nJOYX_9dNx38eXKvSC5Keo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'N6iGI_O43607UcmlfOCNXNCsP4TZ_FJSdWV_LoVS6Sw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-10',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '美女', year: '2000', date: '07-13',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '美女', year: '2001', date: '08-10',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '04-17',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: '在一起', date: '2022-04-17' },
        // 结婚纪念日
        { keyword: '距上次见面', date: '2022-08-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'uNTjArbaE1oTDRQPDR9OE7T5bA9d_1TFjWKdpNhFfas',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'gh_6c1a6af909f8 ',
    }
  ],

}

module.exports = USER_CONFIG


<!-- https://developers.weixin.qq.com/miniprogram/dev/api/notice-uniform.html -->

统一服务消息下发接口
----------

为便于开发者对用户进行服务消息触达，简化小程序和公众号模板消息下发流程，小程序提供统一的服务消息下发接口。

**接口地址**

    https://api.weixin.qq.com/cgi-bin/message/wxopen/template/uniform_send?access_token=ACCESS_TOKEN
    

**HTTP请求方式**

    POST
    

**示例**

    {
        "touser":"OPENID",
        "weapp_template_msg":{
            "template_id":"TEMPLATE_ID",
            "page":"page/page/index",
            "form_id":"FORMID",
            "data":{
                "keyword1":{
                    "value":"339208499"
                },
                "keyword2":{
                    "value":"2015年01月05日 12:30"
                },
                "keyword3":{
                    "value":"粤海喜来登酒店"
                },
                "keyword4":{
                    "value":"广州市天河区天河路208号"
                }
            },
            "emphasis_keyword":"keyword1.DATA"
        },
        "mp_template_msg":{
            "appid":"APPID ",
            "template_id":"TEMPLATE_ID",
            "url":"http://weixin.qq.com/download",
            "miniprogram":{
                "appid":"xiaochengxuappid12345",
                "pagepath":"index?foo=bar"
            },
            "data":{
                "first":{
                    "value":"恭喜你购买成功！",
                    "color":"#173177"
                },
                "keyword1":{
                    "value":"巧克力",
                    "color":"#173177"
                },
                "keyword2":{
                    "value":"39.8元",
                    "color":"#173177"
                },
                "keyword3":{
                    "value":"2014年9月22日",
                    "color":"#173177"
                },
                "remark":{
                    "value":"欢迎再次购买！",
                    "color":"#173177"
                }
            }
        }
    }
    

#### 参数说明

  参数                                  |  说明                                                                 
----------------------------------------|-----------------------------------------------------------------------
  access_token                          |  小程序的access_token                                                 
  touser                                |用户openid，可以是小程序的openid，也可以是mp_template_msg.appid对应的公众号的openid
  weapp_template_msg                    |小程序模板消息相关的信息，可以参考小程序模板消息接口;有此节点则优先发送小程序模板消息
  weapp_template_msg.template_id        |  小程序模板ID                                                         
  weapp_template_msg.page               |  小程序页面路径                                                       
  weapp_template_msg.form_id            |  小程序模板消息formid                                                 
  weapp_template_msg.data               |  小程序模板数据                                                       
  weapp_template_msg.emphasis_keyword   |  小程序模板放大关键词                                                 
  mp_template_msg                       |公众号模板消息相关的信息，可以参考公众号模板消息接口；有此节点并且没有weapp_template_msg节点时，发送公众号模板消息
  mp_template_msg.appid                 |  公众号appid，要求与小程序有绑定且同主体                              
  mp_template_msg.template_id           |  公众号模板id                                                         
  mp_template_msg.url                   |  公众号模板消息所要跳转的url                                          
  mp_template_msg.miniprogram           |  公众号模板消息所要跳转的小程序，小程序的必须与公众号具有绑定关系     
  mp_template_msg.data                  |  公众号模板消息的数据                                                 

在调用接口后，会返回JSON数据包 正常时的返回JSON数据包示例：

    {
      "errcode": 0,
      "errmsg": "ok"
    }
    

**返回码说明**

  返回码  |  说明                                                                    
----------|--------------------------------------------------------------------------
  40037   |模板id不正确，weapp_template_msg.template_id 或者 mp_template_msg.template_id
  41028   |  weapp_template_msg.form_id 过期或者不正确                               
  41029   |  weapp_template_msg.form_id已被使用                                      
  41030   |  weapp_template_msg.page 不正确                                          
  45009   |  接口调用超过限额                                                        
  40003   |  touser 不是正确的openid                                                 
  40013   |  appid不正确，或者不符合绑定关系要求                                     

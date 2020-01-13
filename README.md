# DomxRotate
# 大转盘抽奖
# new DomxRotate(selector,options)

描述：实例化一个大转盘对像。

参数说明：
selector：选择器[string];
options：参数[obj];

    options参数:
    {
        size: 500,//宽
        awards: [],//奖品设置 [Array],共8个，也就是转盘分为8块，从0度开始顺时针45度为第一块，也就是awards[0]，依次...
        callback: function(){},//转盘结束时的回调
    }

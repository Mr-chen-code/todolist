// 对指定父级元素委派事件
function on(element,type,selector,callback){
    element.addEventListener(type,function(e){
            // 解决事件对象兼容问题
            let event= e || event;
            /* 
                firstLetter:该变量用来截取selector的第一个字符，判断该选择器类型;
                lastLetter:该变量用来存储截取第一个字符之后的字符
            */
            let firstLetter=selector[0];
            let lastLetter=selector.slice(1);

            switch(firstLetter){
                case '.':
                    if(event.target.className===lastLetter){
                        // callback.call(event.target):通过该方法使得this指向event.target
                        callback.call(event.target)
                    }
                    break
                case '#':
                    if(event.target.id===lastLetter){
                        callback.call(event.target)
                    }
                    break;
                default:
                    if(event.target.tagName.toLowerCase()===selector){
                        callback.call(event.target)
                    }
            }
    })
};
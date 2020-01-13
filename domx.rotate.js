/**
 * 抽奖转盘;
 * Author：Dom xiang
 * Contact：312922533@qq.com
 * Date：2019-09-12
 * @param {*} selector 选择器
 * @param {*} options 参数为 object类型
 */
function DomxRotate(selector, options) {

    this.selector = selector;
    this.size = options.size || 400;
    this.callback = options.callback || null;
    this.awards = options.awards || null;

    /*初始化转盘 */
    document.querySelector(this.selector).style.width = this.size + 'px';
    document.querySelector(this.selector).style.height = this.size + 'px';
    const rotatepointer = document.createElement('div');
    rotatepointer.className = 'domxrotatepointer';
    rotatepointer.innerText = '点击开始';
    rotatepointer.style.marginLeft = this.size / 2 - 50 + 'px';
    rotatepointer.style.marginTop = this.size / 2 - 50 + 'px';
    const rotatepanel = document.createElement('div');
    rotatepanel.className = 'domxrotatepanel';
    rotatepanel.style.width = this.size + 'px';
    rotatepanel.style.height = this.size + 'px';
    document.querySelector(this.selector).appendChild(rotatepanel);
    document.querySelector(this.selector).appendChild(rotatepointer);
    this.rotatepointer = rotatepanel;

    let callback = this.callback;
    let flag = true;
    const ratating = function () {
        flag = false;
        let deg = 0;
        let timer = null;
        let runtime = Math.random() * (10 - 5 + 1) + 5;
        timer = setInterval(function () {
            rotatepanel.style.transform = "rotate(" + deg + "deg)";
            deg += runtime;
            runtime -= 0.01;
            if (runtime <= 0) {
                clearInterval(timer);
                let sectorarea = ((360 - (deg - Math.floor((deg / 360)) * 360)) / 45); //第几个;
                flag = true;
                callback(Math.ceil(sectorarea) - 1);
            };
        }, 1);
    };

    /*点击开始抽奖*/
    rotatepointer.onclick = function () {
        if (flag) {
            // console.log('开始转');
            rotatepanel.style.transform = "rotate(0deg)"; //恢复到0度;
            ratating();
        }
    };
};
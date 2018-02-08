window.onload = function () {
    return;

    // 随机换位置
    var oBtn = ('btn');
    oBtn.onclick = function () {

        console.log(aPos)
        aPos.sort(function () {
            return Math.random() - 0.5;
        });
        console.log(aPos)

        for (var i = 0; i < aLi.length; i++) {
            move(aLi[i], aPos[i]);
        }
    };
};
$(document).ready(function () {
    var liEle = $('li');

    // add top-left corner
    _.forEach(liEle, function (item, index) {
        $('<span>' + (index + 1) + '</span>').appendTo(item);
    });

    var posArr = [];
    _.forEach(liEle, function (item) {
        posArr.push({
            left: item.offsetLeft,
            top: item.offsetTop
        });
    });

    _.forEach(liEle, function (item, index) {
        item.style.position = 'absolute';
        item.style.left = posArr[index].left + 'px';
        item.style.top = posArr[index].top + 'px';
        item.style.margin = 0;
    })

    $('#btn').click(function(){
        posArr.sort(function () {
            return Math.random() - 0.5;
        });
        console.log(posArr)

        for (var i = 0; i < liEle.length; i++) {
            move(liEle[i], posArr[i]);
        }
    });

});

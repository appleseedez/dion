//
$.fn.Slider = function(obj,func){
    var setting = {
        time : 5000,                            //时间间隔
        changeClass : "item-current",           //当前
        sliderBoxClass : "slider-box",
        itemBoxClass : "item-box",
        itemClass : "item",
        itemBigUrl : "data-big-img-url",
        btnPrevClass : "btn-prev",
        btnNextClass : "btn-next",
        bigImgBox : "kpxq-img-box",
        bigImgClass : "big-img",
        bigImgUrls : null,
        imgIndBox : "img_index",
        proportion : 1.5,
        type : "alpha"                       //默认alpha;Horizontal
    }

    if(obj){
        for(var i in obj){
            setting[i] = obj[i];
        }
    }

    var _self = $(this);
    var $sliderBox = $("." + setting.sliderBoxClass,_self);
    var $itemBox = $("." + setting.itemBoxClass,_self);
    var $items = $("." + setting.itemClass,_self);
    var $btnPrev = $("." + setting.btnPrevClass,_self);
    var $btnNext = $("." + setting.btnNextClass,_self);
    var $bigImgBox = $("." + setting.bigImgBox,_self);
    var $bigImg = $("." + setting.bigImgClass,_self);
    if(setting.imgIndBox){
        var $imgIndBox = $("#" + setting.imgIndBox);
    }

    function slider(){
        var imgIndex = 0;
        if (setting.type == "alpha") {
            $imgIndBox.text(1);
            $items.each(function (i) {
                $(this).css({position: "absolute", left: 0, top: 0});
            });

            $($items[0]).addClass(setting.changeClass);

            setInterval(function(){
                $items.each(function(i){
                    if($(this).hasClass(setting.changeClass)){
                        imgIndex = i;
                    }
                });

                $($items[imgIndex]).removeClass(setting.changeClass);

                if(imgIndex < $items.length - 1){
                    $($items[imgIndex + 1]).addClass(setting.changeClass);
                    $imgIndBox.text(imgIndex + 2);
                }else{
                    $($items[0]).addClass(setting.changeClass);
                    $imgIndBox.text(1);
                }
            },setting.time);
        }
        else if(setting.type == "Horizontal"){
            var itemWidth = $items.width();
            var isAnima = false;
            var imgIndex = 0;

            $itemBox.width(function(){
                return $items.length * itemWidth
            });
            $items.each(function(i){
                $(this).css({left:itemWidth * i})
            });

            var itemBoxWidth = $itemBox.width();
            var displayWidth = $sliderBox.width();

            changeImg($($items[0]),imgIndex);

            $btnPrev.bind("click",function(){
                if(imgIndex > 0 && imgIndex <= $items.length - 1 && !isAnima){
                    imgIndex --;
                    isAnima = true;

                    changeImg($($items[imgIndex]),imgIndex);

                    var left = $itemBox.position().left;

                    if($itemBox.position().left < 0){
                        itemBoxMove(left + itemWidth);
                    }
                }
            });

            $btnNext.bind("click",function(){
                if(imgIndex >= 0 && imgIndex < $items.length - 1 && !isAnima){
                    imgIndex ++;
                    isAnima = true;

                    changeImg($($items[imgIndex]),imgIndex);

                    var left = $itemBox.position().left;

                    if($itemBox.position().left > displayWidth - itemBoxWidth){
                        itemBoxMove(left - itemWidth);
                    }
                }
            });

            $items.each(function(i){
                $(this).bind("click",function(){
                    if(!isAnima){
                        imgIndex = i;
                        isAnima = true;

                        changeImg($(this),imgIndex);
                        return false;
                    }
                    return false;
                });
            });

            function changeImg(dom,i){
                var index = i;

                dom.addClass(setting.changeClass);
                $items.each(function(i){
                    if(i != index)
                        $(this).removeClass(setting.changeClass);
                });

                $bigImg.css({opacity:0})
                $bigImg.attr("src",$($items[index]).attr(setting.itemBigUrl));
                $bigImg.attr('data-index',index);
                var width = dom.find("a").attr("data-width");
                var height = dom.find("a").attr("data-height");

                if(width/height >= setting.proportion ){
                    $bigImg.width("100%").height($bigImgBox.width()*height/width);
                    $bigImg.css({
                        marginTop : ($bigImgBox.height() - $bigImg.height())/2,
                        marginLeft : "auto"
                    });

                    imgLoad($bigImg[0],function() {
                        $bigImg.animate({opacity: 1}, function () {
                            isAnima = false;
                        });
                    });
                }else{
                    $bigImg.height("100%").width($bigImgBox.height()*width/height);
                    $bigImg.css({
                        marginLeft : ($bigImgBox.width() - $bigImg.width())/2,
                        marginTop : "auto"
                    });

                    imgLoad($bigImg[0],function(){
                        $bigImg.animate({opacity:1},function(){
                            isAnima = false;
                        });
                    });
                }
            }

            function itemBoxMove(n){
                $itemBox.animate({
                    left : n
                });
            }

            function imgLoad(img,callback){
                if(img){
                    img.complete || /*img.readyState == "loaded" ||*/ img.readyState == "complete" ? callback() : img.onload = callback;
                }
            }
        }
    }

    slider();
}

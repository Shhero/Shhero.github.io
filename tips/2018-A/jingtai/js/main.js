$(".srcoll").slide(
    {
        titCell:".hd ul",
        mainCell:".bd ul",
        effect:"leftLoop",
        vis:"auto",
        scroll:1,
        autoPlay:true,
        autoPage:true,
        trigger:"click"
    }
);

$(".focus").slide({
    mainCell: ".focus-bottom  ul",
    effect: "topMarquee",
    autoPlay: true,
    interTime: 50,
    vis: 6
})

$(".content-4-bottom").slide({
    mainCell: ".left ul",
    effect: "topMarquee",
    autoPlay: true,
    interTime: 50,
    vis: 8
})
   


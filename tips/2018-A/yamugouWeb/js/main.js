$(".banner").slide({
    mainCell:".bd ul",
    effect:"fold",
    vis:"auto",
    scroll:1,
    autoPlay:true,
    autoPage:true,
    trigger:"click"
})

$(".md-scroll").slide({
    mainCell: ".bd ul",
    effect:"leftLoop",
    autoPlay:true,
})


$(".md-actions-wrap").slide({
    mainCell: ".md-actions-list ul",
    effect: "topMarquee",
    autoPlay: true,
    interTime: 50,
    vis: 3
})
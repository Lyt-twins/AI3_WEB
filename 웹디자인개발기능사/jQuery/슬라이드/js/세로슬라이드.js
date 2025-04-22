$(function() {
    const speed = 500
    const time = 3000
    const $slide = $('.slide')
    const $container = $('.slide-container')
    const size = $slide.height()   // 600px
    const count = $slide.length  // 이미지 개수( 3개 ) 
    $container.height(size * count)    // 600 * 3 1800

    setInterval(function() {
        $container.animate({
            top: -size
        }, speed, function() {
            $container.css('top', '0')
            $container.append( $('.slide').first() )
        })
    }, time)
})
$(function() {
    const mainMenu = $('.main-menu > .menu-item, #back')

    // mainMenu.on('mouserover', function() {
    //     $('.submenu, #back').stop().slideDown()
    // })

    // mainMenu.on('mouseout', function() {
    //     $('.submenu, #back').stop().slideUp()
    // })

    mainMenu.hover(
        function() {
            $('.submenu, #back').stop().slideDown()
        },
        function() {
            $('.submenu, #back').stop().slideUp()
        }
    )
})
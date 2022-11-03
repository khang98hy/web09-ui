$(document).ready(function () {

    handleStateSidebar()
    hanldeActiveSidebarItems()
});

const hanldeActiveSidebarItems = () => {
    $(".sidebar-item").each(function () {
        $(this).click(() => {
            $(".item-active").removeClass("item-active")
            $(this).addClass("item-active")
        })
    });
}

const handleStateSidebar = () => {
    $(".btn-navigate").click(() => {
        $(".sidebar").toggleClass("sidebar-collapse")

        if ($(".sidebar-collapse").length > 0) {
            // state mini side bar 
            $(".logo").hide()
            $(".sidebar-item .item-title").hide()
            $(".sidebar-header").css("justify-content", "center")
        } else {
            // state normal side bar
            setTimeout(() => {
                //transition delay
                
                $(".logo").show()
                $(".sidebar-item .item-title").show()
                $(".sidebar-header").css("justify-content", "space-between")
            }, 300)
        }
    })
}
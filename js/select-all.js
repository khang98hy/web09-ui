$(document).ready(() => {
    $("#select-all").click(function () {
        if (this.checked) {
            $(".m-checkbox").each(function () {
                this.checked = true
            })
        } else {
            $(".m-checkbox").each(function () {
                this.checked = false
            })
        }

    })
})
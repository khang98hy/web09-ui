///
$(document).ready(() => {
    $("#btn-save-add").keydown((e) => {
        const code = e.keyCode || e.which
        if (code == 9) {
            e.preventDefault();
            $("#input-teacher-code").focus()
        }
    })

    $("#btn-save-update").keydown((e) => {
        const code = e.keyCode || e.which
        if (code == 9) {
            e.preventDefault();
            $("#input-teacher-code").focus()
        }
    })
})
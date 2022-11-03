import useToastify from './toastify'

$(document).ready(() => {
    const toast = useToastify

    // multi delete 
    $(".multi-delete").click(function() {
        const checkboxs = $(".record .m-checkbox")
        $("#modal-delete").show()
            $("#btn-accept-delete").click(() => {
                checkboxs.each((_, checkbox) => {
                    if (checkbox.checked) {
                        checkbox.closest(".record").remove()
                    }
                })
                $("#modal-delete").hide()
                toast.success("Thông báo", "Đã xóa thành công")
            })
    })
})
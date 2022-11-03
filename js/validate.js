import toast from './toastify.js'

$(document).ready(() => {
    $("#input-teacher-code").focus(function () {
        $(this).removeClass("m-input-error")
    })

    $("#input-teacher-code").blur(function () {
        if (!$(this).val()) {
            $(this).addClass("m-input-error")
            toast.error("Lỗi", "Số hiệu cán bộ không được để trống")
        }
    })

    $("#input-teacher-name").blur(function () {
        if (!$(this).val()) {
            $(this).addClass("m-input-error")
            toast.error("Lỗi", "Họ và tên không được để trống")
        }
    })

    $("#input-teacher-name").focus(function () {
        $(this).removeClass("m-input-error")
    })
})
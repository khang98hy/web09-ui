import useToastify from './toastify.js'

const toast = useToastify
let recordId = 0

$(document).ready(function () {
    // Sự kiện khi click thêm mới
    $(".btn-add").click(() => {
        $(".modal__title").html("Thêm hồ sơ Cán bộ, giáo viên")
        $("#modal-add").show()
        $("#btn-save-add").show()
        $("#input-teacher-code").focus()
        $("#btn-save-add").off("click").on("click", handleSubmitAdd)
    })
    // Sự kiện chọn Đang làm việc hay không
    $("#isWorking").click(function () {
        $("#quit-work").css("visibility", this.checked ? "hidden" : "visible")
    })
    // Thêm sự kiện đóng form
    $(".modal-close").click(handleCloseModal)
    $(".modal__btn-close").click(handleCloseModal)
});

// Binding dữ liệu từ input sang div hiển thị họ tên và mã GV
(function main() {
    const bindingTeacherCode = $('#display-teacher-code');
    const inputTeacherCode = $('#input-teacher-code');
    const bindingTeacherName = $('#display-teacher-name');
    const inputTeacherName = $('#input-teacher-name');
    const bindingData = function () {
        bindingTeacherCode.text(inputTeacherCode.val());
        bindingTeacherName.text(inputTeacherName.val());
    }
    inputTeacherCode.on('keyup', bindingData);
    inputTeacherName.on('keyup', bindingData);
})(jQuery);
// SỰ kiện ấn lưu thêm mới
const handleSubmitAdd = () => {
    const modal = $("#modal-add")
    let managementBySubject = []
    let managementByDepartment = []
    const teacherCode = $(modal).find("#input-teacher-code").val()
    const teacherName = $(modal).find("#input-teacher-name").val()
    const phoneNumber = $(modal).find("#input-phone-number").val()

    const email = $(modal).find("#input-email").val()
    const department = $(modal).find(".m-select__option--active").text()
    const isWorking = $(modal).find("#isWorking")[0].checked
    const isProfessionalSkill = $(modal).find("#professionalSkill")[0].checked

    modal.find("#managementBySubject")
        .find(".multi-select__option")
        .each((_, option) => {
            const optionText = $(option).children("span").text()
            const isCheck = $(option).children("input")[0].checked
            if (isCheck) {
                managementBySubject.push(optionText)
            }
        })
    
    modal.find("#managementByDepartment")
        .find(".multi-select__option")
        .each((_, option) => {
            const optionText = $(option).children("span").text()
            const isCheck = $(option).children("input")[0].checked
            if (isCheck) {
                managementByDepartment.push(optionText)
            }
        })
    if (teacherCode && teacherName) {
        $("tbody").append(`<tr id=record-${++recordId} class="record">
            <td class="column-checkbox">
                <input type="checkbox" name="" id="" class="m-checkbox">
            </td>
            <td class="column-teacher-code">${teacherCode}</td>
            <td class="column-teacher-name">${teacherName}</td>
            <td class="w-100 column-phone-number">${phoneNumber}</td>
            <td class="w-150 column-department">${department}</td>
            <td class="w-100 column-management-by-subject">${managementBySubject.toString()}</td>
            <td class="w-150 column-management-by-department">${managementByDepartment.toString()}</td>
            <td class="text-center w-70 column-is-professional-skill">${isProfessionalSkill ? `<img src="/assets/Icons/ic_Check.png" alt=""></img>` : ""}</td>
            <td class="text-center w-70 column-is-working">${isWorking ? `<img src="/assets/Icons/ic_Check.png" alt=""></img>` : ""}</td>
            <td class="column-edit">
                <img id="edit-NC01001" src="./assets/Icons/ic_Edit.png"
                    class="cursor-pointer record__field--edit" alt="" srcset="">
                <img src="./assets/Icons/ic_Remove.png" class="cursor-pointer record__field--delete" alt="" srcset="">
            </td>
        </tr>`)

        const record = $(`#record-${recordId}`)

        // Thêm sự kiện click Xoá
        $(record).find(".record__field--delete").click(() => handleDeleteRecord(record))
        // Thêm sự kiện click Sửa
        $(record).find(".record__field--edit").click(() => handleEditRecord(record))
        console.log("add");
        toast.success("Thông báo", "Đã thêm dữ liệu thành công")
        handleCloseModal()
    }

}
// Xoá bản ghi
const handleDeleteRecord = (record) => {
    $("#modal-delete").show()
    $("#btn-accept-delete").click(() => {
        $(record).remove()
        $("#modal-delete").hide()
        toast.success("Thông báo", "Đã xóa thành công")
    })
}
// Sửa bản ghi
const handleEditRecord = (record) => {
    const modalTitle = $(".modal__title")
    modalTitle.html("Sửa hồ sơ Cán bộ, giáo viên")
    $("#modal-add").show()
    $("#btn-save-update").show()
    $("#btn-save-update").off("click").on("click", () => handleSubmitUpdate(record))
    $("#input-teacher-code").val(record.find(".column-teacher-code").text())
    $("#input-teacher-name").val(record.find(".column-teacher-name").text())
    $("#input-phone-number").val(record.find(".column-phone-number").text())
    $("#professionalSkill")[0].checked =
        record.find(".column-is-professional-skill").html() ? true : false
    $("#isWorking")[0].checked =
        record.find(".column-is-working").html() ? true : false
    const inputTeacherName = $('#input-teacher-name').val(); 
    const inputTeacherCode = $('#input-teacher-code').val();   
    $("#display-teacher-name").text(inputTeacherName)
    $("#display-teacher-code").text(inputTeacherCode)
}
//
const handleSubmitUpdate = (record) => {
    const modal = $("#modal-add")
    let managementBySubject = []
    let managementByDepartment = []
    const teacherCode = $(modal).find("#input-teacher-code").val()
    const teacherName = $(modal).find("#input-teacher-name").val()
    const phoneNumber = $(modal).find("#input-phone-number").val()
    const email = $(modal).find("#input-email").val()
    const department = $(modal).find(".m-select__option--active").text()
    const isWorking = $(modal).find("#isWorking")[0].checked
    const isProfessionalSkill = $(modal).find("#professionalSkill")[0].checked
    modal.find("#managementBySubject")
        .find(".multi-select__option")
        .each((_, option) => {
            const optionText = $(option).children("span").text()
            const isCheck = $(option).children("input")[0].checked
            if (isCheck) {
                managementBySubject.push(optionText)
            }
        })

    modal.find("#managementByDepartment")
        .find(".multi-select__option")
        .each((_, option) => {
            const optionText = $(option).children("span").text()
            const isCheck = $(option).children("input")[0].checked
            if (isCheck) {
                managementByDepartment.push(optionText)
            }
        })

    if (teacherCode && teacherName) {
        record.find(".column-teacher-code").text(teacherCode)
        record.find(".column-teacher-name").text(teacherName)
        record.find(".column-phone-numeber").text(phoneNumber)
        record.find(".column-department").text(department)
        record.find(".column-management-by-subject").text(managementBySubject.toString())
        record.find(".column-management-by-department").text(managementByDepartment.toString())
        record.find(".column-is-working").html(isWorking ? `<img src="/assets/Icons/ic_Check.png" alt=""></img>` : "")
        record.find(".column-is-professional-skill").html(isProfessionalSkill ? `<img src="/assets/Icons/ic_Check.png" alt=""></img>` : "")
        handleCloseModal()
        toast.success("Thông báo", "Đã sửa dữ liệu thành công")
    }
}

const handleCloseModal = () => {
    $(".modal").hide()
    resetModal()
}

const resetModal = () => {
    $("#display-teacher-code").text("Số hiệu cán bộ")
    $("#display-teacher-name").text("Họ và tên")
    $(".form-wrapper")[0].reset()
    $(".tag-wrap").text("")
    $(".m-select__wrap-option").children(".m-select__option--active").removeClass(".m-select__option--active")
    $(".multi-select__wrap").addClass("hide")
    $("#btn-save-add").hide()
    $("#btn-save-update").hide()
}


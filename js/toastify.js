const toastify = $(".toastify")

const setToastContent = (title, message) => {
    toastify.find(".toastify-content__title").text(title)
    toastify.find(".toastify-content__message").text(message)
}

const renderToast = (classType) => {
    toastify.addClass("toastify-active")
    setTimeout(() => {
        toastify.removeClass("toastify-active")
        toastify.removeClass(classType)
    }, 3000)
}

export default {
    success: (title, message) => {
        toastify.addClass("toastify-success")
        toastify.children("img").attr("src", "/assets/Icons/ic_ToastMessage_Success.png")
        setToastContent(title, message)
        renderToast("toastify-success")
    },
    error: (title, message) => {
        toastify.addClass("toastify-error")
        toastify.children("img").attr("src", "/assets/Icons/ic_ToastMessage_Fail.png")
        setToastContent(title, message)
        renderToast("toastify-error")
    },
    notication: (title, message) => {
        toastify.addClass("toastify-notication")
        toastify.children("img").attr("src", "/assets/Icons/ic_ToastMessage_Info.png")
        setToastContent(title, message)
        renderToast("toastify-notication")
    },
    warning: (title, message) => {
        toastify.addClass("toastify-warning")
        toastify.children("img").attr("src", "/assets/Icons/ic_ToastMessage_Warning.png")
        setToastContent(title, message)
        renderToast("toastify-warning")
    }
}


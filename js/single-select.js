$(document).ready(() => {
    const mSelect = $(".m-select")
    const mSelectOption = $(".m-select__option")
    const activeOption = $(".m-select__option--active")
    let textActive = $(activeOption[0]).text()
    $(".m-select span").text(textActive)
    
    $(mSelect).click(() => {
        $(".m-select__wrap-option").toggleClass("hide")
    })

    mSelectOption.each(function () {
        $(this).click(function () {
            textActive = $(this).text()
            $(".m-select span").text(textActive)
        })
    })
})
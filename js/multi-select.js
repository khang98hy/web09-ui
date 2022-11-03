$(document).ready(() => {
    $(".multi-select").each(function() {
        const iconShow = $(this).children(".multi-select__icon--show")
        const tagWrap = $(this).children(".tag-wrap")
        const multiSelectWrap = $(this).children(".multi-select__wrap")
        const inputSelectAll = $(multiSelectWrap).children(".multi-select__header").children("input")
        const inputOptions = $(multiSelectWrap).find(".multi-select__option-wrap .m-checkbox")
        iconShow.click(function() {
            $(this).siblings(".multi-select__wrap").toggleClass("hide")
        })
        inputSelectAll.click(function() {
            
            if (this.checked) {
                inputOptions.each(function () {
                    if(!this.checked) {
                        this.checked = true
                        addTag(tagWrap, this.value, $(this).siblings().text())
                    }
                })
            } else {
                inputOptions.each(function () {
                    this.checked = false
                    removeTag(tagWrap, this.value)
                })
            }
            
        })

        // handle click option
        inputOptions.each(function() {
            $(this).click(function() {
                if (this.checked) {
                    addTag(tagWrap, this.value, $(this).siblings().text())
                } else {
                    removeTag(tagWrap, this.value)
                    inputSelectAll[0].checked = false
                }
            })
        })
    })
})

const addTag = (tagWrap, value, content) => {

    // add tag
    $(tagWrap).append(`<li value=${value} class="tag-picked">${content}
    <div class="tag-picked__btn--close"></div>
    </li>`)

    const iconX = $(tagWrap).children(`li[value=${value}]`).children()
    //add event click iconX remove tag
    iconX.click(function() {
        // remove tag
        $(this).parent().remove()
        
        // disable checkbox
        const inputCheckbox = $(tagWrap).siblings(".multi-select__wrap")
        .find(`input[value=${value}]`)

        inputCheckbox[0].checked = false
    })

}

const removeTag = (tagWrap, value) => {
    $(tagWrap).children(`li[value=${value}]`).remove()
}
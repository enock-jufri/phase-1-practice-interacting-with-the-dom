const counter = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const submit = document.getElementById("submit")


const liked = []

heart.addEventListener("click", () => {

    const existing = liked.find(element =>
        element.number === counter.textContent
    )
    if (existing) {
        existing.like++
    } else {
        liked.push({ number: counter.textContent, like: 1 })
    }
    display()

})

pause.addEventListener("click", () => {

    const buttons = [minus, plus, heart, submit]
    if (pause.textContent === " pause ") {
        buttons.forEach(element=>{
            element.disabled=true
        })
        pause.textContent = " resume "
    } else {
        buttons.forEach(element=>{
            element.disabled=!element.disabled
        })
        pause.textContent = " pause "
    }

})

submit.addEventListener("click", (e) => {

    e.preventDefault()
    const comment = document.getElementById("comment-input")
    const commentInput = comment.value
    comment.value = ""
    const list = document.getElementById("list")
    const li = document.createElement("li")
    li.textContent = commentInput
    list.appendChild(li)
})
function display() {
    const likes = document.getElementsByClassName("likes")[0]
    likes.innerHTML = ""
    liked.forEach(element => {
        const li = document.createElement("li")
        if (element.like > 1) {
            li.textContent = `${element.number} has been liked ${element.like} times`

        } else {
            li.textContent = `${element.number} has been liked ${element.like} time`
        }

        likes.appendChild(li)
    })
}

function increamenter(num) {

    minus.addEventListener("click", () => {
        num--
        counter.textContent = num
    })


    plus.addEventListener("click", () => {
        num++
        counter.textContent = num
    })

    setTimeout(() => {
        num++
        counter.textContent = num
        increamenter(num)
    }, 1000);


}

increamenter(counter.textContent)




const downloadBtn = document.querySelector('.download_btn')
const filelink = "https://drive.google.com/uc?export=download&id=1lV9-HyDsOdjm8LK44HgsRi5s3cjB1G2J"

function downloadFunc() {
    download.classList.add('timer')
    download.innerHTML = `Your file will be downloaded in ${timer}`

    const counter = setInterval(() => {
        if (timer > 0) {
            timer--
            return download.innerHTML = `Your file will be downloaded in ${timer}`
        }
        clearInterval(counter)
        location.href = filelink
        download.innerHTML = `Your file is downloading`

        setTimeout(() => {
            download.classList.remove('timer')
            download.innerHTML = `<i class="fa-solid fa-download"></i>
        <span class="text">Download Files</span>`
        }, 3000)
    }, 1000)
}

downloadBtn.addEventListener('click', downloadFunc)
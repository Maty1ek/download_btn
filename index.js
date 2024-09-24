const downloadBtn = document.querySelector('.download_btn')
const filelink = "https://drive.google.com/uc?export=download&id=1lV9-HyDsOdjm8LK44HgsRi5s3cjB1G2J"

function initTimer() {
    let timer = downloadBtn.dataset.timer
    downloadBtn.classList.add('timer')
    downloadBtn.innerHTML = `your file will download in <b>${timer}</b> seconds`

    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--
            return downloadBtn.innerHTML = `your file will download in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter)
        location.href = filelink
        downloadBtn.innerHTML = "Your file is downloading..."

        setTimeout(() => {
            downloadBtn.classList.remove('timer')
            downloadBtn.innerHTML = '<i class="fa-solid fa-download"></i><span class="text">Download Files</span>'
        }, 3000)
    }, 1000)
}


downloadBtn.addEventListener('click', initTimer)
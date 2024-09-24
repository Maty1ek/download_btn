# download_btn


<!-- 1 -->
**Get a download btn from dom and create a var for your file**

const downloadBtn = document.querySelector('.download_btn')
const filelink = "https://docs.google.com/document/d/12DzCBw8ONVHKJROk50wZ-j9jmPg2_RIFcqos_wZ1eVE/edit"

<!-- 2 -->
**Create a function**

function initTimer() {
}

<!-- 3 -->
**Create a var for timer seconds**

let timer = downloadBtn.dataset.timer

*daownloadBtn.dataset means that our element "downloadBtn" has an atribute that starts with "data". "timer" means that the next word after "data" is "timer". Here is how it looks in html:*

```
<button class="`download_btn`" data-timer="5">
```

*So, if we set an atribute in an element that starts with "data-", then write any other word like "user", "timer", etc. we can set there any informatio that we want to use, in that case it as a number "5". Every element in html has a property "dataset". if we set an atribute data-timer, thet property called "dataset" will have a property callsed "timer"*

<!-- 4 -->
**Add a button changer in the function**

downloadBtn.classList.add('timer')
downloadBtn.innerHTML = `your file will download in ${timer} seconds

<!-- 5 -->
**Change it in css**

.download_btn.timer {
    color: #333;
    background: none;
    box-shadow: none;
    border: none;
    pointer-events: none;
}

*pointer-events:none; means that we won't be able to do anythong with that button. Neither copy, or click*

<!-- 6 -->
**Create a setInterval for timer**

const initCounter = setInterval(() => {
    if(timer > 0) {
        timer--
        return downloadBtn.innerHTML = `your file will download in <b>${timer}</b> seconds`;
    }
    clearInterval(initCounter)
}, 1000)

*Here, we create a var, which's value is a setInterval function. setInterval() runs its inner function every 1 second. If the value of timer more than 0, it decreases its value and returns a new value, then the function stops without reading the line with clearINterval(). So, the inner function runs every 1 second and reads the condition, if it returns true, timer will be updated, then code stops. If it returns false, code reads the line with clearInterval() and stops running the interval function*

*clearInterval(initCounter) stops the interval. We could write an interval function without variable "initCounter", but then, we wouldn't be able to stop the interval. BUt since we have the name of the interval, we can stop it with clearInterval()*
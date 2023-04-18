let interval;
let running = false;
let centiseconds = 0;
let seconds = 0;
let minutes = 0;

function startPauseTimer() {
    if (running) {
        clearInterval(interval);
        document.getElementById("startPauseBtn").innerHTML = "Start";
    } else {
        interval = setInterval(timer, 100);
        document.getElementById("startPauseBtn").innerHTML = "Pause";
    }
    running = !running;
}

function resetTimer() {
    clearInterval(interval);
    running = false;
    centiseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("timer").innerHTML = "00:00.0";
    document.getElementById("startPauseBtn").innerHTML = "Start";
}

function timer() {
    centiseconds++;
    if (centiseconds === 10) {
        seconds++;
        centiseconds = 0;
    }
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    document.getElementById("timer").innerHTML = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds) + "." + centiseconds;
}

function randomizeBoxes() {
    const elements = ["x", "x", "white", "black"];
    const boxRows = ["box-row-1", "box-row-2"];

    boxRows.forEach(rowId => {
        const row = document.getElementById(rowId);
        const boxes = row.querySelectorAll(".box");
        let randomizedElements = [...elements].sort(() => Math.random() - 0.5);

        boxes.forEach((box, index) => {
            let element = randomizedElements[index];

            if (element === "x") {
                box.innerHTML = "X";
                box.style.backgroundColor = "transparent";
            } else {
                box.innerHTML = "";
                box.style.backgroundColor = element;
            }
        });
    });
}

function randomizeNumber() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    document.getElementById("number").innerHTML = randomNumber;
}

function randomizeAll() {
    randomizeBoxes();
    randomizeNumber();
}

randomizeAll();

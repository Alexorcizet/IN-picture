'use strict'


var gCurrQuestIdx
var gQuests

function init() {
    gCurrQuestIdx = 0
    creatQuests()
    renderQuest()
}

function creatQuests() {

    gQuests = [
        {
            id: 1,
            question: 'Who is the character on the right?',
            opts: ['Bolvar Fordragon, The Lich King', 'Arthas Menethil, The Lich King'],
            correctOpt: 1
        },
        {
            id: 2,
            question: 'How many identical cats are on the right pictures?',
            opts: [0, 2],
            correctOpt: 0
        },
        {
            id: 3,
            question: 'How many identical cats are on the right pictures?',
            opts: ['Top right is bigger', 'they are identical'],
            correctOpt: 1

        },
    ]

    return gQuests
}

function renderQuest() {

    var elContainer = document.querySelector('.q-and-a')
    var changeImg = document.querySelector(".img2")
    var currQuest = ''

    currQuest = `<div class="question">
    <p>${gQuests[gCurrQuestIdx].question}</p>`
    for (var i = 0; i < 2; i++) {
        currQuest += `<div class="answer" data-answer-number="${i}" onclick="checkAnswer(this)">
        <p>${gQuests[gCurrQuestIdx].opts[i]}</p>
        </div>`
    }
    currQuest += `</div >`
    elContainer.innerHTML = currQuest
    changeImg.src = `img/${gCurrQuestIdx + 1}.jpg`
}

function checkAnswer(elBtn) {

    var currAnswer = elBtn.dataset.answerNumber

    if (+currAnswer === +gQuests[gCurrQuestIdx].correctOpt) {
        gCurrQuestIdx++
        if (gCurrQuestIdx < 3) {
            renderQuest()
        }
    }

    if (gCurrQuestIdx > gQuests.length - 1) {
        victory()
    }

}

function victory() {
    var elContainer = document.querySelector('.container')
    var victoryImg = ''

    victoryImg += `<div>
                   <img src="img/victory.jpg" alt="victory img" class="full-image" />
                   <button class="reset" onclick="reset()">Reset Game!</button>
                   </div>`

    elContainer.innerHTML = victoryImg
}

function reset() {
    location.reload()
}

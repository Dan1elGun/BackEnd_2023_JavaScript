let answerNode = document.querySelector(`#answer`);
let checkNode = document.querySelector(`#check`);
let resultNode = document.querySelector(`#result`);

// кнопки с буквами
let a = document.querySelector(`#a`);
let b = document.querySelector(`#b`);
let c = document.querySelector(`#c`);
let d = document.querySelector(`#d`);
let e = document.querySelector(`#e`);
let f = document.querySelector(`#f`);
let g = document.querySelector(`#g`);
let h = document.querySelector(`#h`);
let i = document.querySelector(`#i`);
let j = document.querySelector(`#j`);
let k = document.querySelector(`#k`);
let l = document.querySelector(`#l`);
let m = document.querySelector(`#m`);
let n = document.querySelector(`#n`);
let o = document.querySelector(`#o`);
let p = document.querySelector(`#p`);
let q = document.querySelector(`#q`);
let r = document.querySelector(`#r`);
let s = document.querySelector(`#s`);
let t = document.querySelector(`#t`);
let u = document.querySelector(`#u`);
let v = document.querySelector(`#v`);
let w = document.querySelector(`#w`);
let x = document.querySelector(`#x`);
let y = document.querySelector(`#y`);
let z = document.querySelector(`#z`);


// Клик по кнопке проверить
checkNode.addEventListener(`click`, checkAnswer);

// Клик по кнопкам с буквами
a.addEventListener(`click`, clicked);
b.addEventListener(`click`, clicked);
c.addEventListener(`click`, clicked);
d.addEventListener(`click`, clicked);
e.addEventListener(`click`, clicked);
f.addEventListener(`click`, clicked);
g.addEventListener(`click`, clicked);
h.addEventListener(`click`, clicked);
i.addEventListener(`click`, clicked);
j.addEventListener(`click`, clicked);
k.addEventListener(`click`, clicked);
l.addEventListener(`click`, clicked);
m.addEventListener(`click`, clicked);
n.addEventListener(`click`, clicked);
o.addEventListener(`click`, clicked);
p.addEventListener(`click`, clicked);
q.addEventListener(`click`, clicked);
r.addEventListener(`click`, clicked);
s.addEventListener(`click`, clicked);
t.addEventListener(`click`, clicked);
u.addEventListener(`click`, clicked);
v.addEventListener(`click`, clicked);
w.addEventListener(`click`, clicked);
x.addEventListener(`click`, clicked);
y.addEventListener(`click`, clicked);
z.addEventListener(`click`, clicked);


let attempt = 3;
let word = 'cat'

function clicked() {
    this.disabled = true;
    answerNode.innerHTML += this.innerHTML.trim().toUpperCase()
}

function checkAnswer() {
    let keys = document.querySelectorAll(".btn")    
    if(answerNode.innerHTML.toLowerCase() == word.toLowerCase()) {
        resultNode.innerHTML = "Правильно!"
        keys.forEach(element => {element.disabled = true;});
    } else if(attempt > 0) {
        attempt--;
        answerNode.innerHTML = ''
        resultNode.innerHTML = `Не правильно! Попыток осталось: ${attempt}`
        keys.forEach(element => {element.disabled = false;});
    } else {
        answerNode.innerHTML = ''
        resultNode.innerHTML = "Попытки исчерпаны!"
        keys.forEach(element => {element.disabled = true;});
    }
}
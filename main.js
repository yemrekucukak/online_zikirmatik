let count = 0
let result = document.getElementById("counter")
let message1 = "En son 0 kez zikir çektiniz. Allah kabul etsin."
let message2 = "Zikir skorlarınız: "
let display1 = document.getElementById("userdata1") 
let display2 = document.getElementById("userdata2")

function increment(){
    count = count + 1
    result.textContent = count
    document.getElementById("increment").textContent = "Bismillahirrahmanirrahim"
    document.getElementById("decrement").textContent = "Yanlış bastım Tövbe!"
    document.getElementById("set").textContent = "Hatim indirdim guzum"
    document.getElementById("hard-reset").textContent = "Münafık oldum"
    document.getElementById("save").textContent = "Gomşulara övüncem guzum"
    document.getElementById("reset").textContent = "Günah işledim strike bozuldu"
    document.getElementById("heading").textContent = "ZİKİRMATİK"
    document.getElementById("kabe").src = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Kabaa_%28January_2003%29.jpg"
    document.getElementById("bud").style.backgroundColor = "pink"
}

function decrement(){
    if (count>0){
        count = count - 1}
    result.textContent = count
}

function set(){
    let sentence = message1.split('')
    sentence[7] = count
    let real = sentence.join('')
    display1.textContent = real
    message2 = message2 + count + " "
    display2.textContent = message2
    count = 0
    result.textContent = count
}

function save(){
    let sentence = message1.split('')
    sentence[7] = count
    let real = sentence.join('')
    display1.textContent = real
    message2 = message2 + count + " "
    display2.textContent = message2
}

function reset(){
    count = 0
    result.textContent = count
}

function hardreset(){
    message1 = "En son 0 kez zikir çektiniz. Allah kabul etsin."
    message2 = "Zikir skorlarınız: "
    display1.textContent = ""
    display2.textContent = ""
    result.textContent = "YANACAKSIN"
    count = -1
    document.getElementById("increment").textContent = "İSTİĞFAR ET"
    document.getElementById("decrement").textContent = "yoksa YANACAKSIN"
    document.getElementById("set").textContent = "yoksa YANACAKSIN"
    document.getElementById("save").textContent = "yoksa YANACAKSIN"
    document.getElementById("reset").textContent = "yoksa YANACAKSIN"
    document.getElementById("hard-reset").textContent = "yoksa YANACAKSIN"
    document.getElementById("heading").textContent = "YANACAKSIN"
    document.getElementById("counter").textContent = "YANACAKSIN"
    document.getElementById("kabe").src = "https://static.birgun.net/resim/haber-detay-resim/2020/10/23/nihat-hatipoglu-sokaktan-hayretler-icinde-gectim-kizlar-bira-iciyordu-796187-5.jpg"
    document.getElementById("bud").style.backgroundColor = "darkred"



}
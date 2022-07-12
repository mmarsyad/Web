const mapJawa = document.getElementById("jawa")
const mapSumatra = document.getElementById("sumatra")
const mapKalimantan = document.getElementById("kalimantan")
const mapSulawesi = document.getElementById("sulawesi")
const mapBali = document.getElementById("bali")

function resetKartu() {
    const arrayKartu = document.querySelectorAll(".kartu")
    const arrayMap = document.querySelectorAll(".map")
    Array.from(arrayKartu).forEach((card) => {
        card.classList = "kartu"
    })
    Array.from(arrayMap).forEach((map) => {
        map.classList = "map"
    })

}

mapJawa.addEventListener("mouseenter", function(){
    resetKartu()
    const kartuJawa = document.getElementById("kartuJawa")
    mapJawa.classList.toggle("map-active")
    setTimeout(1500,kartuJawa.classList.toggle("kartu-show"))
})

mapSumatra.addEventListener("mouseenter", function(){
    resetKartu()
    const kartuSumatra = document.getElementById("kartuSumatra")
    mapSumatra.classList.toggle("map-active")
    setTimeout(1500,kartuSumatra.classList.toggle("kartu-show"))
})

mapKalimantan.addEventListener("mouseenter", function(){
    resetKartu()
    const kartuKalimantan = document.getElementById("kartuKalimantan")
    mapKalimantan.classList.toggle("map-active")
    setTimeout(1500,kartuKalimantan.classList.toggle("kartu-show"))
})

mapSulawesi.addEventListener("mouseenter", function(){
    resetKartu()
    const kartuSulawesi = document.getElementById("kartuSulawesi")
    mapSulawesi.classList.toggle("map-active")
    setTimeout(1500,kartuSulawesi.classList.toggle("kartu-show"))
})

mapBali.addEventListener("mouseenter", function(){
    resetKartu()
    const kartuBali = document.getElementById("kartuBali")
    mapBali.classList.toggle("map-active")
    setTimeout(1500,kartuBali.classList.toggle("kartu-show"))
})

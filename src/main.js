import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "@/assets/scss/style.scss"
import hillsImg from '@images/hills.jpg'

const sum = (elsoSzam,masodikSzam)=> elsoSzam+masodikSzam

const bekezdes = document.createElement("p")
bekezdes.textContent = sum(23452,234345);
document.querySelector("body").append(bekezdes)

document.querySelector("img").src = hillsImg;
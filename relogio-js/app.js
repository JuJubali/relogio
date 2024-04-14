var dateAtual = new Date() // SEMPRE Date
var diaSemana = dateAtual.getDay()
var horaAtual = dateAtual.getHours()
var minAtual  = dateAtual.getMinutes()

/* DADOS PUNTUAIS */
switch(diaSemana) {
    case 0:
        diaSemana = "Domingo";
        break;
    case 1:
        diaSemana = "Segunda-Feira";
        break
    case 2:
        diaSemana = "Terça-Feira";
        break
    case 3:
        diaSemana = "Quarta-Feira";
        break
    case 4:
        diaSemana = "Quinta-Feira";
        break
    case 5:
        diaSemana = "Sexta-Feira";
        break
    case 6:
        diaSemana = "Sábado";
        break
    default:
        diaSemana = "Domingo";
        break
}


function carregar() {
    var msg        = document.getElementById('msg')
    var imgHorario = document.getElementById('imagem')
    var divFotos = document.querySelector('div.fotos')

    msg.innerHTML += `
        <p> Hoje é:  ${diaSemana}</p>
        <p> Agora são: ${horaAtual}:${minAtual}</p> 
    `

    if(horaAtual >= 0 && horaAtual < 12){
        document.body.style.background = "#CFB53B"

        imgHorario.src = 'manhaCirculo.jpg'
        imgHorario.style.width = '370px';
        imgHorario.style.height = '250px';  
         
    } else if (horaAtual >= 12 && horaAtual < 18) {
        document.body.style.background = "#F8D568"
        imgHorario.src = 'tardeCirculo.jpg'
        imgHorario.style.width = '320px';
        imgHorario.style.height = '400px'; 
         
    } else {
        document.body.style.background = "#4686B7"
        imgHorario.src = 'noiteCirculo.jpg'
        imgHorario.style.width = '450px';
        imgHorario.style.height = '300px';
    } 
    

}
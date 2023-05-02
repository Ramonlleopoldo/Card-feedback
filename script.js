var valor=""
var el1=document.getElementById('primeiro')
el1.addEventListener('click',function(){
var  el1=document.getElementById('primeiro')
  valor=el1.value
})
var el2=document.getElementById('segundo')
el2.addEventListener('click',function(){
var  el2=document.getElementById('segundo')
  valor=el2.value
})
var el3=document.getElementById('terceiro')
el3.addEventListener('click',function(){
var  el3=document.getElementById('terceiro')
  valor=el3.value
})
var el4=document.getElementById('quarto')
el4.addEventListener('click',function(){
var  el4=document.getElementById('quarto')
  valor=el4.value
})
var el5=document.getElementById('quinto')
el5.addEventListener('click',function(){
var  el5=document.getElementById('quinto')
  valor=el5.value
})
var final=document.getElementById ('enviar')
final.addEventListener('click',function(){
  if (valor>=1 && valor<=5){
  final=document.getElementById ('container-votos') 
  final.style.display = 'none'
  agradecimento=document.getElementById('container-agradecimento') //aqui
  var localizardiv=document.getElementById('valorresposta')
  var paragrafovalor=document.createElement('p')
  paragrafovalor.innerHTML=  valor + "de 5";
  paragrafovalor.style.color= 'orange';
  paragrafovalor.style.fontSize= '1.5em'
  localizardiv.appendChild(paragrafovalor)
  agradecimento.style.display='flex';
}else{
  final=document.getElementById ('container-votos') 
  final.style.display = 'none'
  naovotou=document.getElementById ('container-nao-votou')
  console.log(naovotou)
  naovotou.style.display = 'flex'
  voltar=document.getElementById('voltar')
  voltar.addEventListener('click', function(){
    naovotou=document.getElementById('container-nao-votou')
    naovotou.style.display= 'none'
    inicial=document.getElementById('container-votos')
    inicial.style.display='flex'
  })
}
})
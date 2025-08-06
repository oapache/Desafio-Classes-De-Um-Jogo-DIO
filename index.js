
// Criando a indentidade do heroi
class heroIdentity{
 constructor(nameHero,ageHero,typeClassHero,){
  this.nameHero = nameHero
  this.ageHero = ageHero
  this.typeClassHero = typeClassHero
  
  
 }
 // Criando a função atacar
 attackAction (){
  let attackAction 

  if (this.typeClassHero  === "Mago") {
   attackAction = "usou magia"
 } else if (this.typeClassHero  === "Guerreiro") {
   attackAction = "usou espada"
 } else if (this.typeClassHero  === "Monge") {
   attackAction = "usou artes marciais"
 } else if (this.typeClassHero  === "Ninja") {
   attackAction = "usou shuriken"
 } else {
   attackAction = "usou um ataque desconhecido";
 }

 console.log(`O ${this.typeClassHero} atacou usando ${attackAction}`)
}
}

let newClassMage = new heroIdentity("Pablo", 23, "Mago")
let newClassWarrior = new heroIdentity("Ivan", 24, "Guerreiro")
let newClassMonk = new heroIdentity("Ivone", 10, "Monge")
let newClassNinja = new heroIdentity("Ione", 5, "Ninja")


newClassMage.attackAction()
newClassWarrior.attackAction()
newClassMonk.attackAction()
newClassNinja.attackAction()


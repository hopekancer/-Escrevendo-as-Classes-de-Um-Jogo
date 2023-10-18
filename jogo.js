class hero{
	constructor(nome, idade, tipo){
    	this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    ataque(){
      if (this.tipo === "mago"){
          return "magia"
      } else if (this.tipo === "guerreiro"){
          return "espada"
      } else if (this.tipo === "monge"){
          return "artes marciais"
      } else if (this.tipo === "ninja"){
          return "shiriken"
      }
    }
    
    atacar(){
    	console.log(`o ${this.tipo} atacou usando ${this.ataque()}`)
    }
}

let hero1 = new hero("Cassius", 48, "guerreiro")
let hero2 = new hero("Fitus", 125, "mago")
let hero3 = new hero("Shao", 12, "monge")
let hero4 = new hero("Lee", 30, "ninja")

hero2.atacar()
hero3.atacar()

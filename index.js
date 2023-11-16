class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo


        if(tipo === "Mago"){
            this.ataque = "magia";
        }
        else if(tipo === "Guerreiro"){
            this.ataque = "espada"
        }
        else if(tipo === "Monge"){
            this.ataque = "artes marciais"
        }
        else if(tipo === "Ninja"){
            this.ataque = "shuriken"
        }
    }


    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }

}

let heroMagooZ = new hero("MagooZ", 98, "Mago")
let heroBonsai = new hero("Bonsai", 307, "Guerreiro")
let heroChiatsu = new hero("Chiatsu", 42, "Monge")
let heroYuri = new hero("Yuri", 38, "Ninja")

heroMagooZ.atacar()
heroBonsai.atacar()
heroChiatsu.atacar()
heroYuri.atacar()

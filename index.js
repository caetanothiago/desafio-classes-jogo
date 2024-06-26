//Desafio Classes de um Jogo

var profile = 
{
    name: "Thiago",
    age: 29,
    type: "ninja",
}

createProfile (profile)

function createProfile (profile)
{
    console.log (`Name: ${profile.name}`)
    console.log (`Age: ${profile.age}`)
    console.log (`Type: ${profile.type}`)
}

class hero
{
    constructor (guerreiro, mago, monge, ninja)
    {
        this.guerreiro = guerreiro
        this.mago = mago
        this.monge = monge
        this.ninja = ninja
    }
    toAttack (attacker)
    {
        var attack

        switch (attacker)
        {
            case "guerreiro":
            attack = "espada"
            console.log (`O ${attacker} atacou usando ${attack}`)
            break

            case "mago":
            attack = "magia"
            console.log (`O ${attacker} atacou usando ${attack}`)
            break

            case "monge":
            attack = "artes maciais"
            console.log (`O ${attacker} atacou usando ${attack}`)
            break

            case "ninja":
            attack = "shuriken"
            console.log (`O ${attacker} atacou usando ${attack}`)
            break
            
            default:
            console.log ("Classe de Herói escolhida inválida!")
        }
    }
}

let typeHero = new hero ("guerreiro", "mago", "monge", "ninja")

let attacker = profile.type

typeHero.toAttack (attacker)
import Tradicional from './assets/CoffeImages/ExTradicional.svg'
import Americano from './assets/CoffeImages/ExAmericano.svg'
import Cremoso from './assets/CoffeImages/ExCremoso.svg'
import ExGelado from './assets/CoffeImages/ExGelado.svg'
import CafeComLeite from './assets/CoffeImages/CafeComLeite.svg'
import Latte from './assets/CoffeImages/Latte.svg'
import Capuccino from './assets/CoffeImages/Capuccino.svg'
import Macchiato from './assets/CoffeImages/Machiato.svg'
import Mocaccino from './assets/CoffeImages/Mocaccino.svg'
import ChocolateQuente from './assets/CoffeImages/ChocolateQuente.svg'
import Cubano from './assets/CoffeImages/Cubano.svg'
import Havaiano from './assets/CoffeImages/Havaiano.svg'
import Arabe from './assets/CoffeImages/Arabe.svg'
import Irlandes from './assets/CoffeImages/Irlandes.svg'



export const coffeTypes = [
    {
        id: 1,
        type: ['Tradicional'],
        url: Tradicional,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90
    },
    {
        id: 2,
        type: ['Tradicional'],
        url: Americano,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90
    },
    {
        id: 3,
        type: ['Tradicional'],
        url: Cremoso,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90
    },
    {
        id: 4,
        type: ['Tradicional ', 'Gelado'],
        url: ExGelado,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90
    },
    {
        id: 5,
        type: ['Tradicional ', 'Com Leite'],
        url: CafeComLeite,
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90
    },
    {
        id: 6,
        type: ['Tradicional ', 'Com Leite'],
        url: Latte,
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90
    },
    {
        id: 7,
        type: ['Tradicional ', 'Com Leite'],
        url: Capuccino,
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90
    },
    {
        id: 8,
        type: ['Tradicional ', 'Com Leite'],
        url: Macchiato,
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90
    },
    {
        id: 9,
        type: ['Tradicional ', 'Com Leite'],
        url: Mocaccino,
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90
    },
    {
        id: 10,
        type: ['Especial ', 'Com leite'],
        url: ChocolateQuente,
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90
    },
    {
        id: 11,
        type: ['Especial ', 'Alcoólico ', 'Gelado'],
        url: Cubano,
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90
    },
    {
        id: 12,
        type: ['Especial'],
        url: Havaiano,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90
    },
    {
        id: 13,
        type: ['Especial'],
        url: Arabe,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90
    },
    {
        id: 14,
        type: ['Especial ', 'Acoólico'],
        url: Irlandes,
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90
    },
]
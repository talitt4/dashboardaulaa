import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Página Inicial', image: iconsImgs.home },
    { id: 2, title: 'Carteira', image: iconsImgs.budget },
    { id: 3, title: 'Transações', image: iconsImgs.plane },
    { id: 4, title: 'Inscrições', image: iconsImgs.wallet },
    { id: 5, title: 'Empréstimos', image: iconsImgs.bills },
    { id: 6, title: 'Relatório', image: iconsImgs.report },
    { id: 7, title: 'Poupança', image: iconsImgs.wallet },
    { id: 8, title: 'Meta do mês', image: iconsImgs.wealth },
    { id: 9, title: 'Conta', image: iconsImgs.user },
    { id: 10, title: 'Configuração', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 11, 
        name: "Giovanna Felicio",
        image: personsImgs.person_four,
        date: "23/12/04",
        amount: 22000
    },
    {
        id: 12, 
        name: "Lucas Silva",
        image: personsImgs.person_three,
        date: "23/07/21",
        amount: 20000
    },
    {
        id: 13, 
        name: "Talita Fagundes",
        image: personsImgs.person_two,
        date: "23/08/25",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Inscrições",
        type: "Automated",
        amount: 22000
    },
    {
        id: 20, 
        title: "Pagamento de empréstimo",
        type: "Automated",
        amount: 16000
    },
    {
        id: 21, 
        title: "Alimentos",
        type: "Automated",
        amount: 20000
    },
    {
        id: 22, 
        title: "Roupas",
        type: null,
        amount: 10000
    },
    {
        id: 23, 
        title: "Amazon",
        type: null,
        amount: 40000
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "LinkedIn",
        due_date: "23/12/04",
        amount: 20000
    },
    {
        id: 25,
        title: "Netflix",
        due_date: "23/12/10",
        amount: 5000
    },
    {
        id: 26,
        title: "DSTV",
        due_date: "23/12/22",
        amount: 2000
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Pagar as taxas do namorado",
        date_taken: "23/12/22",
        amount_left: 40000
    }
]
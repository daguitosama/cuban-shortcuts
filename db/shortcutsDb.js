export var types = {
    simple: {
        key:'simple',
        group: String,
        category: String,
        name: String,
        command: String,
        data: null,
    },
    etecsaPlan: {
        key:'etecsa-plan',
        group: String,
        category: String,
        name: String,
        command: String,
        data: {
            price: Number,
            text: String,
        },
    }
}
export var groups = {
    etecsa: "etecsa",
}
export var categorys = {
    saldo: 'saldo',
    planes: 'planes',
};

export var shortcuts = [

    {
        type: types.simple.key,
        group: groups.etecsa,
        category: categorys.saldo,
        name: "Principal",
        command: "*222#",
        data: null,
    },
    {
        type: types.simple.key,
        group: groups.etecsa,
        category: categorys.saldo,
        name: "Bono",
        command: "*222*266#",
        data: null,
    },
    {
        type: types.simple.key,
        group: groups.etecsa,
        category: categorys.saldo,
        name: "Datos",
        command: "*222*328#",
        data: null,
    },
    {
        type: types.etecsaPlan.key,
        group: groups.etecsa,
        category: categorys.planes,
        name: "1.4 Gb",
        command: "*133*5*1#",
        data: {
            price: 125,
            text: '15min + 20sms'
        },
    },
    {
        type: types.etecsaPlan.key,
        group: groups.etecsa,
        category: categorys.planes,
        name: "3.5 Gb",
        command: "*133*5*2#",
        data: {
            price: 250,
            text: '35min + 40sms'
        },
    },
    {
        type: types.etecsaPlan.key,
        group: groups.etecsa,
        category: categorys.planes,
        name: "8.0 Gb",
        command: "*133*5*3#",
        data: {
            price: 500,
            text: '75min + 80sms'
        },
    },
]

export const shortCutsDb = {
    types,
    groups,
    categorys,
    shortcuts
}
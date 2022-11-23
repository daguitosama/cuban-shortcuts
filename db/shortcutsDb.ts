export const SHORTCUT_TYPES = {
    simple: "SIMPLE",
    etecsa: "ETECSA",
    banca: "BANCA",
};

// for app areas
export const GROUPS = {
    etecsa: "etecsa",
    bank: "bank",
    social: "social",
};

// shortcuts categories
export const CATEGORIES = {
    saldo: "saldo",
    planes: "planes",
    banca: "banca",
};

export var shortcutSchemas = {
    // saldo
    simple: {
        type_key: SHORTCUT_TYPES.simple,
        group: String,
        category: String,
        name: String,
        command: String,
        data: null,
    },
    // plans
    etecsaPlan: {
        type: SHORTCUT_TYPES.etecsa,
        group: String,
        category: String,
        name: String,
        command: String,
        data: {
            price: Number,
            text: String,
        },
    },
    // bank
    bankShortcut: {
        type: SHORTCUT_TYPES.banca,
        group: String,
        category: String,
        name: String,
        command: String,
    },
};

export interface Shortcut {
    group: String;
    type: String;
    category: String;
    name: String;
    command: String;
}
/**
 * The actual shortcuts
 */
export var shortcuts = [
    // simple / saldo
    {
        type: SHORTCUT_TYPES.simple,
        group: GROUPS.etecsa,
        category: CATEGORIES.saldo,
        name: "Principal",
        command: "*222#",
        data: null,
    },
    {
        type: SHORTCUT_TYPES.simple,
        group: GROUPS.etecsa,
        category: CATEGORIES.saldo,
        name: "Bono",
        command: "*222*266#",
        data: null,
    },
    {
        type: SHORTCUT_TYPES.simple,
        group: GROUPS.etecsa,
        category: CATEGORIES.saldo,
        name: "Datos",
        command: "*222*328#",
        data: null,
    },
    // planes
    {
        type: SHORTCUT_TYPES.etecsa,
        group: GROUPS.etecsa,
        category: CATEGORIES.planes,
        name: "1.4 Gb",
        command: "*133*5*1#",
        data: {
            price: 125,
            text: "15min + 20sms",
        },
    },
    {
        type: SHORTCUT_TYPES.etecsa,
        group: GROUPS.etecsa,
        category: CATEGORIES.planes,
        name: "3.5 Gb",
        command: "*133*5*2#",
        data: {
            price: 250,
            text: "35min + 40sms",
        },
    },
    {
        type: SHORTCUT_TYPES.etecsa,
        group: GROUPS.etecsa,
        category: CATEGORIES.planes,
        name: "8.0 Gb",
        command: "*133*5*3#",
        data: {
            price: 500,
            text: "75min + 80sms",
        },
    },
    // bank shortcuts
    {
        type: SHORTCUT_TYPES.banca,
        group: GROUPS.bank,
        category: CATEGORIES.banca,
        name: "Autenticarse",
        command: "*444*40*03#",
        data: null,
    },
    {
        type: SHORTCUT_TYPES.banca,
        group: GROUPS.bank,
        category: CATEGORIES.banca,
        name: "Consultar saldo",
        command: "*444*46#",
        data: null,
    },
    {
        type: SHORTCUT_TYPES.banca,
        group: GROUPS.bank,
        category: CATEGORIES.banca,
        name: "Transferir",
        command: "*444*45#",
        data: null,
    },
    {
        type: SHORTCUT_TYPES.banca,
        group: GROUPS.bank,
        category: CATEGORIES.banca,
        name: "Recargar Nauta",
        command: "*444*59#",
        data: null,
    },
    {
        type: SHORTCUT_TYPES.banca,
        group: GROUPS.bank,
        category: CATEGORIES.banca,
        name: "Recargar Móvil",
        command: "*444*54#",
        data: null,
    },
];

/**
 * Filter shortcuts by type, either from the hole shortcuts db
 * or the passed set of shortcuts.
 * @param {String} type
 * @param {Array} shortcuts_collection
 * @returns
 */
export function getItemsByType(
    type = "",
    shortcuts_collection: Shortcut[] = []
) {
    return shortcuts_collection.length
        ? shortcuts_collection.filter((shortcut) => shortcut.type == type)
        : shortcuts.filter((shortcut) => shortcut.type == type);
}

/**
 * Fitlers & returns an array of shortcuts by group
 * @param {String} group
 * @returns
 */
export function getItemsByGroups(group = "") {
    return shortcuts.filter((shortcut) => shortcut.group == group);
}

/**
 * Fitlers & returns an array of shortcuts by category
 * @param {String} group
 * @param {Shortcut[]} shortcuts to use
 * @returns
 */
export function getItemsByCategory(
    category = "",
    shortcuts_collection: Shortcut[] = []
) {
    return shortcuts_collection.length
        ? shortcuts_collection.filter(
              (shortcut) => shortcut.category == category
          )
        : shortcuts.filter((shortcut) => shortcut.category == category);
}

export const db = {
    // data
    SHORTCUT_TYPES,
    GROUPS,
    CATEGORIES,
    shortcuts,
    // api
    getItemsByType,
    getItemsByGroups,
    getItemsByCategory,
};

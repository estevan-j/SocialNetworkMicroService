const db = {
    'user': [
        { id: 1, name: 'Javier' },
        { id: 2, name: 'Pedro' },
        { id: 3, name: 'Juan' },
        { id: 4, name: 'Luis' },
    ],
};

async function list(tabla) {
    return db[tabla];
}
async function get(tabla, id) {
    let col = await list(tabla)
    return col.filter(item => item.id == id)[0] || null;
}
async function upsert(tabla, data) {
    db[collection].push(data);
}
async function remover(tabla, id) {
    return true;
}


module.exports = {
    list,
    get,
    upsert,
    remover,
}

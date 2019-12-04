export const getNoteState = (store) => {
    return store.notes
};

export const getNoteLoading = (store) => {
    return getNoteState(store).loading;
}

export const getNoteList = (store) =>{
    return (getNoteState(store) ? getNoteState(store).allIds : [])
}

export const getNoteById = (store,id) =>
    getNoteState(store) ? { ...getNoteState(store).byIds[id], id} : {};

export const getNotes = store =>
    getNoteList(store).map(id => getNoteById(store,id));
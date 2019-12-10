export const getNoteState = (store) => {
    return store.notes
};

export const getNoteSelected = (store) => {
    return store.notes.selectedIdNote
}

export const getNoteLoading = (store) => {
    return getNoteState(store).loading;
}

export const getNoteSidebar = (store) =>{
    return (getNoteState(store).sidebar)
}

export const getNoteSocket = (store) => {
    return getNoteState(store).socket;
}

export const getNoteList = (store) =>{
    return (getNoteState(store) ? getNoteState(store).allIds : [])
}

export const getNoteById = (store,id) =>
    getNoteState(store) ? { ...getNoteState(store).byIds[id], id} : {};

export const getNotes = store =>
    getNoteList(store).map(id => getNoteById(store,id));
function getId() {

    let id = localStorage.getItem('id') || 0;
    localStorage.setItem('id', ++id);

    return id;
}

export default getId;
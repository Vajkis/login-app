function updateData(data) {
    localStorage.setItem('usersData', JSON.stringify(data));
}

export default updateData;
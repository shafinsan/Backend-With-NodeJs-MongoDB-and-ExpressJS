const allId = (req, res) => {
    res.send("All Account")
}
const newId = (req, res) => {
    res.send("New Account");
}
const deleteId = (req, res) => {
    res.send("Delete Account");
}
const updateId = (req, res) => {
    res.send("Update Account");
}
export { allId, newId, deleteId, updateId }
const test = (req, res) => {
    if(req.params.name === 'purnendu') {
        res.status(200).send({message: "Wellcome to server"})
    } else {
        res.status(400).send({message: "Nikal"})

    }
}



module.exports = {
    test
}
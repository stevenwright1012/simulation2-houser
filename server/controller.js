module.exports = {
    read: (req, res) => {        
        const db = req.app.get('db');

        db.get_all().then(results =>{
            res.status(200).send(results)
        }).catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    create: (req, res) =>{
        const db= req.app.get('db')
        const {name, address, city, state, zipcode, image_url, monthlyMortgage, desiredRent} = req.body;

        db.add_house([name, address, city, state, zipcode, image_url, monthlyMortgage, desiredRent]).then(()=>{
            res.status(200).send()
        }).catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
    },
    delete: (req, res) => {
        const db = req.app.get('db');

        db.delete_house([req.params.id]).then(() => {
            res.status(200).send();
        }).catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
    }
}
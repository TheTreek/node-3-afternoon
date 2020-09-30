module.exports = {
    create: (req,res)=>{
        const {name,description,price,image_url} = req.body;
        const db = req.app.get('db');
        db.create_product({name,description,price,image_url})
            .then(()=>{
                res.sendStatus(200);
            }).catch(err => {
                res.status(500).send({msg: "MISSION FAILED, WE'LL GET EM NEXT TIME"});
                console.log(err);
            })
    },
    getOne: (req,res)=>{
        const {id} = req.params;
        const db = req.app.get('db');
        db.read_product({id})
            .then((product)=>{
                res.status(200).send(product);
            }).catch(err => {
                res.status(500).send({msg: "MISSION FAILED, WE'LL GET EM NEXT TIME"});
                console.log(err);
            })
    },
    getAll: (req,res)=>{
        const db = req.app.get('db');
        db.read_products()
            .then((products)=>{
                res.status(200).send(products)
            }).catch(err => {
                res.status(500).send({msg: "MISSION FAILED, WE'LL GET EM NEXT TIME"});
                console.log(err);
            })
    },
    update: (req,res)=>{
        const {id} = req.params;
        const {desc} = req.query;
        const db = req.app.get('db');
        console.log(id,req.query);
        db.update_product({id,description:desc})
            .then(()=>{
                res.sendStatus(200);
            }).catch(err => {
                res.status(500).send({msg: "MISSION FAILED, WE'LL GET EM NEXT TIME"});
                console.log(err);
            })
    },
    delete: (req,res)=>{
        const {id} = req.params;
        const db = req.app.get('db');
        db.delete_product({id})
            .then(()=>{
                res.sendStatus(200);
            }).catch(err => {
                res.status(500).send({msg: "MISSION FAILED, WE'LL GET EM NEXT TIME"});
                console.log(err);
            })
    }
}
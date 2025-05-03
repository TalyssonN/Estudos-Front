const {Service: ServiceModel} = require('../models/service');

const serviceController = {
    create: async (req, res) => {
        try {
            
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            }
            const response = await ServiceModel.create(service);
            return res.status(201).json({message: 'Service created successfully', service: response});

            


        } catch (error) {
            return res.status(500).json({message: 'Error creating service', error});
        }
    }
}

module.exports = serviceController;
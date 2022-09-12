const knex = require('../services/connection');
const yup = require('yup');

const listCars = async (req, res) => {
    
    try {
        const cars1 = await knex('cars');            

        return res.status(200).json(cars1);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const getcar = async (req, res) => {   
    const { id } = req.params;

    try {
        const car = await knex('cars').where({id}).first();

        if (!car) {
            return res.status(404).json('car not found!');
        }

        return res.status(200).json(car);
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const registerNewCar = async (req, res) => {

    const { placa, chassi, renavam, modelo, marca, ano } = req.body;

    const schema = yup.object().shape({
        placa: yup.string().required("The field 'placa' is mandatory"),
        chassi: yup.string().required("The field 'chassi' is mandatory"),
        renavam: yup.string().required("The field 'renavam' is mandatory"),
        modelo: yup.string().required("The field 'modelo' is mandatory"),
        marca: yup.string().required("The field 'marca' is mandatory"),
        ano: yup.string().required("The field 'ano' is mandatory")
    });    

    try {
        await schema.validate(req.body);

        const car = await knex('cars').insert({
            placa, 
            chassi, 
            renavam, 
            modelo, 
            marca, 
            ano
        }).returning('*');

        if (!car) {
            return res.status(400).json('The cars was not registered');
        }
        return res.status(200).json(car);

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const upgradeCar = async (req, res) => {   
    const { id } = req.params;
    const { placa, chassi, renavam, modelo, marca, ano  } = req.body;

    if (!placa && !chassi && !renavam && !modelo && !marca && !ano) {
        return res.status(404).json('Inform at least one field for updating the car');
    }

    try {
        const foundCar = await knex('cars').where({id}).first();

        if (!foundCar) {
            return res.status(404).json('Car not found');
        }

        const car = await knex('cars')
            .where({ id })
            .update({
            placa, 
            chassi, 
            renavam, 
            modelo, 
            marca, 
            ano
            });

        if (!car) {
            return res.status(400).json("The car has not been updated");
        }

        return res.status(200).json('Car has been successfully updated.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const deleteCar = async (req, res) => {
    
    const { id } = req.params;

    try {

        const foundCar = await knex('cars').where({id}).first();

        if (!foundCar) {
            return res.status(404).json('Car not found');
        }

        const deleteCar = await knex('cars').where({id}).del();

        if (!deleteCar) {
            return res.status(400).json("The car was not deleted");
        }

        return res.status(200).json('Successfully deleted car');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
   listCars,
   getcar,
   registerNewCar,
   upgradeCar,
   deleteCar
}
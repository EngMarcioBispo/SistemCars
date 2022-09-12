let chai = require('chai');
let server = require('../src/router');
let chaiHttp = require('chai-http');

chai.should();

chai.use(chaiHttp);

describe('Test cars', async () => { 
  describe('/GET Cars listCars', () => {
    it('Test OK GET/cars listCars', (done) => {
        chai.request(server)

            .get('/cars')
            .end((err, res) =>{
                res.should.have.status(200);
                res.body.should.be.a('array');               
            done();
        })
    });

    it('Test NOT GET/cars listCars', (done) => {
        chai.request(server)
            .get('/cars/x')
            .end((err, res) =>{
                res.should.have.status(400);                    
            done();
        })    
    })
  }) 
  
  describe('/GET Cars getcar', () => {
    it('Test OK GET/cars/:id getcar', (done) => {
        chai.request(server)
            .get('/cars/2')
            .end((err, res) =>{                
                res.should.have.status(200);
                res.body.should.be.a('object');            
            done();
        })
    });

    it('Test NOT GET/cars/:id getcar', (done) => {
        chai.request(server)
            .get('/cars/x')
            .end((err, res) =>{
                res.should.have.status(400);                    
            done();
        })    
    })
  })  

  describe('/POST Cars registerNewCar', async () => {    

    it('Test OK POST/cars/:id registerNewCar', (done) => {
        const input = {
          "placa": "JPL1595", 
          "chassi": "A5382MNN13211", 
          "renavam": "12547788", 
          "modelo": "CIVIC", 
          "marca": "HONDA", 
          "ano": "2018"
        };

        chai.request(server)
            .post('/cars')
            .send(input)
            .end((err, res) =>{                
                res.should.have.status(200);            
        })

     done();

    });    
  })  


  describe('/PUT Cars upgradeCar', async () => {    

    it('Test OK PUT/cars/:id upgradeCar', (done) => {
        const input = {
          "placa": "JPL1595", 
          "chassi": "A5382MNN13211", 
          "renavam": "12547788", 
          "modelo": "CIVIC", 
          "marca": "HONDA", 
          "ano": "2018"
        };

        chai.request(server)
            .put('/cars/1')
            .send(input)
            .end((err, res) =>{                
                res.should.have.status(200);            
        })

     done();

    });    
  })  


  describe('/DELETE Cars deleteCar', async () => {    

    it('Test OK DELETE/cars/:id deleteCar', (done) => {
        chai.request(server)
            .delete('/cars/1')           
            .end((err, res) =>{                
                res.should.have.status(404);            
        })

     done();

    });    
  })  

});  
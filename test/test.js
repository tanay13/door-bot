const expect = require('expect');
const request = require('supertest');
let chai = require('chai');
let chaiHttp = require('chai-http')
const User = require('../model/Users')
// let server = require("../server")

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe("API ", ()=>{

    //GET route
    describe('GET /laptop/',()=>{
        it("it should GET all the laptop stores",(done)=>{
            chai.request('http://localhost:3000')
                .get('/laptop/')
                .end((err,response)=>{
                    response.should.have.status(200)
                done();
                })
        })
    
    })
    describe('GET /grocery/',()=>{
        it("it should GET all the grocery stores",(done)=>{
            chai.request('http://localhost:3000')
                .get('/grocery/')
                .end((err,response)=>{
                    response.should.have.status(200)
                done();
                })
        })
    
    })
    describe('post /userreg/',()=>{
        it('should create a user', (done) => {
            var name = "DoorBot112";
            var password = "DoorBotIstheBest";
            var username = "DG123T"
        
            chai.request("http://localhost:3000")
              .post('/userreg')
              .send({name, password,username})
              .end((err,response)=>{
                response.should.have.status(200)
            done();

              });
          })
    
    })
    describe('post /login/',()=>{
        it('should login a user', (done) => {
            var password = "DoorBotIstheBest";
            var username = "DG123T"
        
            chai.request("http://localhost:3000")
              .post('/login')
              .send({username,password})
              .end((err,response)=>{
                response.should.have.status(200)
            done();

              });
          })
    
    })

})
import app from "../../src/app";
import request from 'supertest';
import {Animal} from "../../src/models/animal";

const apiPrefix = '/api/v1';
const defaultUrl = '/animal';

const routeUrl = `${apiPrefix}${defaultUrl}`;
const newAnimalMock = {}
//for DELETE/PUT/single GET use
let savedAnimal: Animal;

describe('Animal Routes', () => {
  describe('POST /animal', () => {
    it('should return 201 and the saved animal',(done) =>{
      request(app)
        .post(routeUrl)
        .send(newAnimalMock)
        .then(response => {
          const { animal } = response.body;
          savedAnimal = animal;
          expect(response.statusCode).toBe(201);
          expect(animal).toBeDefined();
          done();
        })
    })
  })
  describe('GET /animal', () => {
    it('should return 200 and a array with/without animals', (done) => {
      request(app)
        .get(routeUrl)
        .then(response => {
          const { animals } = response.body;
          expect(response.statusCode).toBe(200);
          expect(animals.length).toBeGreaterThanOrEqual(0);
          done();
        })
    })
  })
  describe('DELETE /animal', () => {
    it('should return 204 after deleting the animal',(done) => {
      request(app)
        .delete(`${routeUrl}/${savedAnimal._id}`)
        .then(response =>{
          expect(response.statusCode).toBe(204);
          done();
        })
    })
  })
})

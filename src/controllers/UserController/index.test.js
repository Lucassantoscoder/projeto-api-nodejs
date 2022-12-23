const app = require('../../server');
const request = require('supertest');
const {user1, user2, user3, ListDatabase } = require ('./mocks');

// yarn test
// testes que espera que seja o mesmo usuario, mesmos dados é possivel fazer varios cenários

test("testando cadastros de usuario 1...", async () => {
    const res = await request(app).post("/users").send(user1); 

    expect(res.body).toEqual(user1); // espera o user1, se diferente quebrar teste.
});


test("testando cadastros de usuario 2...", async () => {
    const res = await request(app).post("/users").send(user2);

    expect(res.body).toEqual(user2);
});


test("testando cadastros de usuario 3...", async () => {
    const res = await request(app).post("/users").send(user3);

    expect(res.body).toEqual(user3); 
});



test("testando listagem de usuarios...", async () => {
    const res = await request(app).get("/users");

    expect(res.body).toEqual(ListDatabase);
}); 


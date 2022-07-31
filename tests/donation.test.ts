import { response } from "express";
import request from "supertest";
import app from "../src/index";

describe("Testing the donation route", () => {
  test("Should return an error for any empty required field", async() => {

      await request(app)
        .post("/donation")
        .send({
          name: "",
          email: "testando@gmail.com",
          phoneNumber: "3333333333",
          cep: "36083734",
          city: "Juiz de fora",
          state: "Minas gerais",
          streetAddress: "testando",
          number: "2827",
          complement: "",
          neighborhood: "testeste",
          deviceCount: 1,
          devices: [{ type: "impressora", condition: "broken" }],
        })
        .expect(400)
        .expect({"message": "Todos os campos obrigatórios devem ser informados."})
  });


  test("Should return an especific error message to invalid email type", async() => {
    await request(app).post("/donation")
      .expect("Content-type", /json/)
      .send({
        name: "Eduarda",
        email: "testandogmail.com",
        phoneNumber: "3333333333", 
        cep: "36083734", 
        city: "Juiz de fora", 
        state: "Minas gerais", 
        streetAddress: "testando",
        number: "2827",
        complement: "",
        neighborhood: "testeste",
        deviceCount: 1, 
        devices: [{type: "impressora", condition: "broken"}],
    })
    .expect(400)
    .expect({"message": "E-mail inválido."})
  });

  test("Should return error for empty devices list", async() => {
      await request(app).post("/donation")
      .expect("Content-type", /json/)
      .send({
        name: "Eduarda",
        email: "testando@gmail.com",
        phoneNumber: "3333333333", 
        cep: "36083734", 
        city: "Juiz de fora", 
        state: "Minas gerais", 
        streetAddress: "testando",
        number: "2827",
        complement: "",
        neighborhood: "testeste",
        deviceCount: 0, 
        devices: [],
    })
    .expect(400)
    .expect({"message": "Todos os campos obrigatórios devem ser informados."})
  });


  test("Should return an especific error message for diferent values in 'deviceCount' and 'devices'", async() => {

      await request(app).post("/donation")
      .expect("Content-type", /json/)
      .send({
        name: "Eduarda",
        email: "testando@teste.com",
        phoneNumber: "3333333333", 
        cep: "36083734", 
        city: "Juiz de fora", 
        state: "Minas gerais", 
        streetAddress: "testando",
        number: "2827",
        complement: "",
        neighborhood: "testeste",
        deviceCount: 3, 
        devices: [{type: "impressora", condition: "broken"}],
    })
    .expect(400)
    .expect({"message": 'A quantidade de equipamentos em deviceCount não está de acordo com a informações dos equipamentos enviados em "devices".'})
  });


  test("Should return an error for invalid type", async() => {

      await request(app).post("/donation")
      .expect("Content-type", /json/)
      .send({
        name: "Eduarda",
        email: "testando@gmail.com",
        phoneNumber: "3333333333", 
        cep: "36083734", 
        city: "Juiz de fora", 
        state: "Minas gerais", 
        streetAddress: "testando",
        number: "2827",
        complement: "",
        neighborhood: "testeste",
        deviceCount: 1, 
        devices: [{type: "celular", condition: "broken"}],
    })
   .expect(400)
   .expect({"message": "Esse tipo de aparelho não é aceito."})
  });


  test("Should return an error for invalid device condition", async() => {

      await request(app).post("/donation")
      .expect("Content-type", /json/)
      .send({
        name: "Eduarda",
        email: "testando@gmail.com",
        phoneNumber: "3333333333", 
        cep: "36083734", 
        city: "Juiz de fora", 
        state: "Minas gerais", 
        streetAddress: "testando",
        number: "2827",
        complement: "",
        neighborhood: "testeste",
        deviceCount: 1, 
        devices: [{type: "impressora", condition: "funcionando"}],
    })
    .expect(400)
    .expect({"message": "Estado de conservação inválido."})
  })


  test("Should return a success message with status 200 for all valid inputs", async() => {
  
    await request(app).post("/donation")
    .expect("Content-type", /json/)
    .send({
        name: "Eduarda",
        email: "testando@gmail.com",
        phoneNumber: "3333333333", 
        cep: "36083734", 
        city: "Juiz de fora", 
        state: "Minas gerais", 
        streetAddress: "testando",
        number: "2827",
        complement: "",
        neighborhood: "testeste",
        deviceCount: 1, 
        devices: [{type: "impressora", condition: "broken"}],
    })
    .expect(200)
    .expect((res) => {
      res.body.data = {success: true}
    })
  });
})



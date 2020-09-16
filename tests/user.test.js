const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

const userOne = {
  name: "TestOne",
  email: "testone@gmail.com",
  password: "test111!",
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Andrew",
      email: "test@gmail.com",
      password: "MyPass777!",
    })
    .expect(201);
});

test("Should login existing user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
});

test("Should not login nonexisten user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "badEmail@gmail.com",
      password: "badpass123!",
    })
    .expect(400);
});

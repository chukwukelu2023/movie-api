const mongoose = require("mongoose");
const { connectDB, dropDB, dropCollections } = require("../dbConnect/testDb");
const {Customer} = require("../Models/customers");

beforeAll(async () => {
    await connectDB();
  });
   
  afterAll(async () => {
    await dropDB();
  });
   
  afterEach(async () => {
    await dropCollections();
  });


  describe("Todo Model", () => {
    it("should create a customer successfully", async () => {
      let newCustomer = {
        name: "Chidi",
        phone:"08037729101",
        isGold: false,
      };
      const customer = await Customer.create(newCustomer)
      expect(customer._id).toBeDefined();
      expect(customer.name).toBe(newCustomer.name);
    });
  });
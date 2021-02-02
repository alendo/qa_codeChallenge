// 2.5 Challenge 3 - Create tests for Employee Manager
import { EmployeeHandler } from "./pageObjects/EmployeeHandler";

const em = new EmployeeHandler();

describe("Employee Manager", () => {
  beforeEach(async () => {
    await em.navigate();
  });
  afterAll(async () => {
    await em.quit();
  });
  it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "test person",
      phone: "1234567890",
      title: "test result",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Dollie Berry");
    await em.selectEmployeeByName("test person");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("test person");
    expect(employee.phone).toEqual("1234567890");
    expect(employee.title).toEqual("test result");
  });
  it("can edit an existing employee", async () => {
    await em.selectEmployeeByName("Bernice Ortiz");
    await em.editEmployee({ title: "Grand Poobah" });
    await em.saveChanges();
    await em.selectEmployeeByName("Phillip Weaver");
    await em.selectEmployeeByName("Bernice Ortiz");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 1,
      name: "Bernice Ortiz",
      phone: "4824931093",
      title: "Grand Poobah",
    });
  });
// adding at least one more employee - new values
describe("Additonal Tests", () => {
 it("can add a new employee", async () => {
    await em.addEmployee();
    await em.selectEmployeeByName("New Employee");
    await em.editEmployee({
      name: "LeBron James",
      phone: "9998887777",
      title: "Baller",
    });
    await em.saveChanges();
    await em.selectEmployeeByName("Teresa Osborne");
    await em.selectEmployeeByName("LeBron James");
    let employee = await em.getEmployeeInfo();
    expect(employee.name).toEqual("LeBron James");
    expect(employee.phone).toEqual("9998887777");
    expect(employee.title).toEqual("Baller");
  });
  // editing and then cancelling the edit
it("can cancel an edit of an employee", async () => {
    await em.selectEmployeeByName("Teresa Osborne");
    await em.editEmployee({name: "Charles Barkley" });
    await em.cancelChanges();
    await em.selectEmployeeByName("Teresa Osborne");
    let employee = await em.getEmployeeInfo();
    expect(employee).toEqual({
      id: 4,
      name: "Teresa Osborne", //name should stay the same
      phone: "3841238745",
      title: "Director of Engineering",
    });
});
   // editing and then navigating away without saving does not save changes
it("edit and navigate away without saving", async () => {
  await em.selectEmployeeByName("Teresa Osborne");
  await em.editEmployee({phone: "6666666666"});
  await em.selectEmployeeByName("Phillip Weaver");
  await em.selectEmployeeByName("Teresa Osborne");
  let employee = await em.getEmployeeInfo();
  expect(employee).toEqual({
      id: 4,
      name: "Teresa Osborne", 
      phone: "3841238745",
      title: "Director of Engineering",
      });
    });
  });
});

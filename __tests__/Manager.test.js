const Manager = require("../lib/Manager");

test('creates a Manager object', () => {

    // create a new Manager
    const manager = new Manager(57, 'AbdulQadir', 'Abdulqadir51@gmail.com', '03322358961');

    // test properties
    expect(manager.name).toBe('AbdulQadir');
    expect(manager.Id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual("03322358961");


});

// test methods
test('creates Manager method', () => {
    // create a new Manager
    const manager = new Manager(57, 'Ali', 'ali52@gmail.com', '03322358961');

    expect(manager.getName()).toEqual("Ali");
    expect(manager.getId()).toEqual(57);
    expect(manager.getEmail()).toEqual("ali52@gmail.com");
    expect(manager.getRole()).toEqual("Manager");
    expect(manager.getOfficeNumber()).toEqual("03322358961");
})
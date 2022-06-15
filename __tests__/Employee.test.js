const Employee = require("../lib/Employee");

test('creates a Employee object', () => {

    // create a new employee
    const employee = new Employee(57, 'AbdulQadir', 'Abdulqadir51@gmail.com');

    // test properties
    expect(employee.name).toBe('AbdulQadir');
    expect(employee.Id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));



});

// test methods
test('creates Employee method', () => {
    // create a new employee
    const employee = new Employee(57, 'Ali', 'ali52@gmail.com');

    expect(employee.getName()).toEqual("Ali");
    expect(employee.getId()).toEqual(57);
    expect(employee.getEmail()).toEqual("ali52@gmail.com");
    expect(employee.getRole()).toEqual("Employee");
})
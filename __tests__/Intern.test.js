const Intern = require("../lib/Intern");

test('creates a Intern object', () => {

    // create a new Intern
    const intern = new Intern(57, 'AbdulQadir', 'Abdulqadir51@gmail.com', 'AMSB');

    // test properties
    expect(intern.name).toBe('AbdulQadir');
    expect(intern.Id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual("AMSB");


});

// test methods
test('creates Intern method', () => {
    // create a new Intern
    const intern = new Intern(57, 'Ali', 'ali52@gmail.com', 'AMSB');

    expect(intern.getName()).toEqual("Ali");
    expect(intern.getId()).toEqual(57);
    expect(intern.getEmail()).toEqual("ali52@gmail.com");
    expect(intern.getRole()).toEqual("Intern");
    expect(intern.getSchool()).toEqual("AMSB");
})
const Engineer = require("../lib/Engineer");

test('creates a Engineer object', () => {

    // create a new Engineer
    const engineer = new Engineer(57, 'AbdulQadir', 'Abdulqadir51@gmail.com', 'Abdulqadir51');

    // test properties
    expect(engineer.name).toBe('AbdulQadir');
    expect(engineer.Id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.githubUsername).toEqual("Abdulqadir51");


});

// test methods
test('creates Engineer method', () => {
    // create a new Engineer
    const engineer = new Engineer(57, 'Ali', 'ali52@gmail.com', 'Abdulqadir51');

    expect(engineer.getName()).toEqual("Ali");
    expect(engineer.getId()).toEqual(57);
    expect(engineer.getEmail()).toEqual("ali52@gmail.com");
    expect(engineer.getRole()).toEqual("Engineer");
    expect(engineer.getGithub()).toEqual("Abdulqadir51");
})
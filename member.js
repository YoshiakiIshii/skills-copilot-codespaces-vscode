function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 26,
        skills: ['HTML', 'CSS', 'JavaScript'],
        // Method
        showSkills: function() {
            this.skills.forEach(function(skill) {
                console.log(skill);
            });
        }
    };
    return member;
}
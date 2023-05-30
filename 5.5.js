"use strict";
class User {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
}
new User().addSkill("sasdf");
function run(distance) {
    if (typeof distance == 'number') {
        return 1;
    }
    else {
        return '';
    }
}

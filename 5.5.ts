class User {
    skills: string[];

    addSkill(skill: string):void;
    addSkill(skills: string[]):void;
    addSkill(skillOrSkills: string | string[]):void {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.concat(skillOrSkills);
        }
        
    }
}

new User().addSkill("sasdf");

function run(distance: string):void 
function run(distance: number):void 
function run(distance: number | string):number | string {
    if (typeof distance == 'number') {
        return 1;
    } else {
        return '';
    }
}


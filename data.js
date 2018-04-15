
const studentDatabase = {};

$.ajax({
    url: "c25.json",
    success: function (students) {
        getStudentData(students)
    }
});

const getStudentData = (students) => {
    students.forEach(student => {
        $.ajax({
            url: `https://spyproxy.bangazon.com/student/commit/https://api.github.com/users/${student.githubHandle}/repos`,
        }).then(res => {
            studentDatabase.students.push(res)
            return studentDatabase
        }).then(studentRepos => {
            studentRepos.forEach(student => {
                getRepoLangAmount(student)
            })
        })
    });
}

let getRepoLangAmount = (repos) => {
    let allLang = []
    repos[0].forEach(repo => {
        $.ajax({
            url: `https://spyproxy.bangazon.com/student/commit/https://api.github.com/repos/${repo.owner.login}/${repo.name}/languages`
        }).then(res => {
            allLang.push(res)
            return allLang
        }).then(allLang => {
        })
    })
}

const saveToDatabase = (objectName, users) => {
    const stringifiedDB = JSON.stringify(users);
    localStorage.setItem(objectName, stringifiedDB);
}

const loadDatabase = () => {
    const databaseString = localStorage.getItem('students');
    let parsedData = JSON.parse(databaseString)
    return parsedData;
}

saveToDatabase('students', studentDatabase);
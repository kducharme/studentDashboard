const studentDatabase = {}

//get student data from local json file
$.ajax({
    url: "c25.json",
    success: result => {
        getStudentRepos(result)
        getStudentProfiles(result)
    }
});

//hit the github API to get all repos for each student
const getStudentRepos = (students) => {
    let studentRepos = []

    students.forEach(student => {
        $.ajax({
            url: `https://spyproxy.bangazon.com/student/commit/https://api.github.com/users/${student.githubHandle}/repos`, 
        }).then(res => {
            studentRepos.push(res)
            return studentRepos
        }).then(studentRepos => {
            studentDataFactory(student, studentRepos)
        })
    });
    repoChart(studentRepos)
}

//hit the github API to get all student profiles
// const getStudentProfiles = (students) => {
//     let studentProfiles = []

//     students.forEach(student => {
//         $.ajax({
//             url: `https://spyproxy.bangazon.com/student/commit/https://api.github.com/users/${student.githubHandle}/`, 
//         }).then(res => {
//             studentProfiles.push(res)
//         })
//     });
//     console.log(studentProfiles)
//     // repoChart(studentRepos)
// }

//build a student object with the structure we agreed upon in planning
const studentDataFactory = (student, studentRepos) => {
    let studentData = Object.create(null, {
        name: {
            value: student.name
        },
        githubHandle: {
            value: student.githubHandle
        },
        img: {
            value: studentRepos[0][0].owner.avatar_url
        },
        cohort: {
            value: "25"
        },
        lastcommit: {
            value: null
        },
        repositories: {
            value: Math.floor(Math.random() * 10)
                
            },
        streak: {
            value: Math.floor(Math.random() * 10)
                
            }
        })

        studentList(studentData); // Passes the array of objects to create & post to DOM
    getRepoLangAmount(studentData)
}

//grab specific data about the repos from the API results
const parseStudentRepos = (studentRepos) => {
    let parsedData = studentRepos[0].map(repo => {
        let obj = {
            repoName: repo.name,
            dateCreated: repo.created_at,
            languages: null
        }
        return obj
    })
    return parsedData
}


// //loop over each repo to get the amount of JS/CSS/HTML used in each repo and store it within the specific repo object on the student obj
const getRepoLangAmount = (student) => {
    let repos = student['repositories']

    for (let i = 0; i < repos.length; i++) {
        let languages = getRepoLanguages(repos[i], student)
        student.repositories[i].languages = languages
    }
}

async function getRepoLanguages(repo, student) {
    const response = await fetch(`https://spyproxy.bangazon.com/student/commit/https://api.github.com/repos/${student.githubHandle}/${repo.repoName}/languages`)
    const data = await response.json()
    return data
}
//Generates the students for the list widget

const studentList = (studentProfiles) => {
    let studentList = document.querySelector('#postStudents');
    studentProfiles.forEach(student => {
        let card = document.createElement('span'),
            imageEl = document.createElement('img'),
            details = [],
            name = student.name,
            git = student.githubHandle,
            image = student.img;
            totalRepos = student.repositories.length;

        card.classList.add('student--card');
        details.push(name, git, totalRepos);
        imageEl.src = image;
        imageEl.classList.add('student--card-image')
        card.appendChild(imageEl);

        details.forEach(detail => {
            textNode = document.createElement('p');
            textNode.textContent += detail;
            card.appendChild(textNode);
            studentList.appendChild(card)
        })

        console.log(card)



    })
}
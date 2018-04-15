//Generates the students for the list widget

const studentList = (studentProfiles) => {
    let studentList = document.querySelector('#postStudents');
    studentProfiles.forEach(student => {
        let card = document.createElement('span'),
            cardContent = document.createElement('span'),
            imageEl = document.createElement('img'),
            nameEl = document.createElement('p'),
            gitEl = document.createElement('p'),
            repoEl = document.createElement('p'),
            divider = document.createElement('hr'),
            allEl = [],
            name = student.name,
            git = student.githubHandle,
            image = student.img,
            repo = student.repositories.length;
        allEl.push(imageEl, nameEl, gitEl, repoEl);
        divider.classList.add('student--card-divider')

        cardContent.classList.add('student--card');

        imageEl.src = image;
        imageEl.classList.add('student--card-image');

        nameEl.textContent = name;
        nameEl.classList.add('student--card-name');

        gitEl.textContent = git;
        gitEl.classList.add('student--card-git');

        repoEl.textContent = repo;
        repoEl.classList.add('student--card-repo');

        allEl.forEach(el => {
            cardContent.appendChild(el);
        })

        card.appendChild(cardContent)
        card.appendChild(divider)
        studentList.appendChild(card)


    })
}
//Generates the students for the list widget

const studentList = (studentData) => {
    let studentList = document.querySelector('#postStudents'),
        allStudents = []

    allStudents.push(studentData);
    allStudents.forEach(student => {
        let card = document.createElement('span'),
            cardContent = document.createElement('span'),
            imageEl = document.createElement('img'),
            nameEl = document.createElement('p'),
            repoEl = document.createElement('p'),
            streakEl = document.createElement('p'),
            divider = document.createElement('hr'),
            allEl = [],
            name = student.name,
            streak = student.streak,
            image = student.img,
            repo = student.repositories

        allEl.push(imageEl, nameEl, repoEl, streakEl);
        divider.classList.add('student--card-divider')

        cardContent.classList.add('student--card');

        imageEl.src = image;
        imageEl.classList.add('student--card-image');

        nameEl.textContent = name;
        nameEl.classList.add('student--card-name');

        streakEl.textContent = streak;
        streakEl.classList.add('student--card-streak');

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
let projectListURL = "project-list.json";

let getJSONContents = async function(URL) {
    let file = await fetch(URL);
    let contents = await file.json();
    console.log(contents);
    return contents;
}

let toggleProject = function(index) {
    let project = document.getElementsByClassName("project")[index];
    let projectDesc = project.getElementsByClassName("description")[0];
    if(projectDesc.style.display == "block") {
        projectDesc.style.display = "none";
    } else {
        projectDesc.style.display = "block";
    }
}

window.onload = function() {
    let projectWrapper = document.getElementsByClassName("project-wrapper")[0];
    getJSONContents(projectListURL).then(projectList => {
        let i = 0;
        for(let project of projectList.projects) {
            projectWrapper.innerHTML += `
            <div class="project">
                <a class="name" href="${project.url}">${project.name}</a>
                <h3 class="short">${project.short}</h3>
                <p class="description">${project.desc}</p>
                <button onclick="toggleProject(${i})">Read Description</button>
            </div>
            `;
            i++;
        }
    });
}
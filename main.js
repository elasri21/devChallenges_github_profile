const userInput = document.querySelector("form input");
const user = document.querySelector("header .user");
const personalInfo = document.querySelector(".personal-info");
const userBio = document.querySelector(".user-bio");
const repositories = document.querySelector(".repositories");
const url = 'https://api.github.com/users';

userInput.addEventListener("keyup", async function () {
    let text = userInput.value.trim();
    if (text != "") {
        let username = `${url}/${text}`;
        let res = await fetch(username);
        let data = await res.json();
        if (data['type']) {
            let repos = await fetch(`${username}/repos`)
            repos = await repos.json();
            // console.log(repos);
            let town = data['location'] != null ? data['location'] : 'Unkown location.';
            let bio = data['bio'] != null ? data['bio'] : 'No bio added.';
            user.innerHTML = `
                <div class="image">
                    <img src="${data['avatar_url']}" alt="avatar">
                </div>
                <div class="info">
                    <h3>${data['login']}</h3>
                    <p class="bio">${bio}</p>
                </div>
            `;
            user.style.display = 'flex';

            // personal-info
            personalInfo.innerHTML = `
            <div class="profile-image">
                <img src="${data['avatar_url']}" alt="avatar">
            </div>
            <div class="other-info">
                <div class="followers">
                    <span>followers</span>
                    <span class="number">${data['followers']}</span>
                </div>
                <div class="following">
                    <span>following</span>
                    <span class="number">${data['following']}</span>
                </div>
                <div class="location">
                    <span>location</span>
                    <span class="number">${town}</span>
                </div>
            </div>
            
            `;
            // user-bio
            userBio.innerHTML = `
            <h1>${data['login']}</h1>
            <p class="bio">${bio}</p>
            `;
            // get topoint where the job is to handle repositories 
            if (repos.length > 0) {
                repositories.innerHTML = "";
            }
            for (let repo of repos) {
                let dates = getDays(repo['updated_at']);
                repositories.innerHTML += `            
                <div class="repository">
                    <h2>${repo['name']}</h2>
                    <p>${repo['description']}</p>
                    <div class="repo-details">
                        <div class="forked">
                            <i class="fa-solid fa-code-fork"></i>
                            <span>${repo['forks']}</span>
                        </div>
                        <div class="stars">
                            <i class="fa-regular fa-star"></i>
                            <span>${repo['stargazers_count']}</span>
                        </div>
                        <div class="updated-date">
                            updated ${dates[0] > 0 ? `${dates[0]} years`: ''}
                            ${dates[1] > 0 ? `${dates[1]} months`: ''}
                            ${dates[2] > 0 ? `${dates[2]} days`: ''} ago
                        </div>
                    </div>
                </div>`;
            }
            const allRepositories = document.querySelectorAll(".repositories .repository");
            for (let i = 4; i < allRepositories.length; i++) {
                allRepositories[i].style.display = "none";
            }
            const showAll = document.querySelector("button.show-all");
            showAll.addEventListener("click", function() {
                for (let repo of allRepositories) {
                    repo.style.display = "block";
                }
            });
        } else {
            user.style.display = 'none';
        }
    }
});

function getDays(date) {
    let updatedAt = new Date(date);
    let now = new Date();
    let diff = now - updatedAt;
    let oneDay = 24 * 60 * 60 * 1000;
    let allDays = diff / oneDay;
    let years = Math.floor(allDays / 365);
    let months = Math.floor((allDays % 365) / 30);
    let daysLeft = Math.floor((allDays % 365) % 30);
    return [years, months, daysLeft];
}

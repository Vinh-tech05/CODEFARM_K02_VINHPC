const apiUrl = "https://api.github.com/users/quocdl";

function allAPI() {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      let content = `
        <div class="profile-header">
          <img class="profile-avatar" src="${data.avatar_url}" alt="${
        data.login
      }" />
          <div class="profile-info">
            <div class="profile-name">${data.name || data.login}</div>
            <div class="profile-bio">${data.bio || ""}</div>
            <div class="profile-stats">
              <div class="stat">
                <span class="stat-number">${data.public_repos}</span>
                <span class="stat-label">Repositories</span>
              </div>
              <div class="stat">
                <span class="stat-number">${data.followers}</span>
                <span class="stat-label">Followers</span>
              </div>
              <div class="stat">
                <span class="stat-number">${data.following}</span>
                <span class="stat-label">Following</span>
              </div>
            </div>
          </div>
        </div>
        <div class="repositories" id="repositories">
          <div class="repo-tag">TYPING_SPEED</div>
          <div class="repo-tag">TODO_JSON_SERVER_BE</div>
          <div class="repo-tag">midterm-review-js</div>
          <div class="repo-tag">TODO_LIST_PROJECT</div>
          <div class="repo-tag">CRUD_JSON_SERVER</div>
        </div>
      `;
      document.getElementById("profileCard").innerHTML = content;
    });
}
allAPI();

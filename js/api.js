const base_url = "https://api.football-data.org/v2/";

async function getChampionsLeagueTeam() {
    if ('caches' in window) {
        caches.match(base_url + 'competitions/2001/teams').then(response => {
            document.getElementById('preloader-cl').classList.add('active');
            if (response) {
                response.json().then(data => {
                    let dataHTML = '';
                    data.teams.forEach(team => {
                        dataHTML += list(team, 'cl');
                    })
                    document.getElementById('list-cl').innerHTML = dataHTML;
                    document.querySelectorAll('#btn-fav').forEach(btn => {
                        btn.addEventListener('click', function () {
                            const id = this.dataset.id;
                            const selectedTeam = data.teams.filter(team => team.id == id);
                            saveFavorite(selectedTeam[0]);
                        })
                    })
                })
                document.getElementById('preloader-cl').classList.remove('active');
            }
        })
    }

    await fetch(base_url + 'competitions/2001/teams', {
        headers: {
            'X-Auth-Token': '785543fc2ecd4b0c9a3e005f3ad1bc82'
        }
    })
    .then(res => res.json())
    .then(data => {
        let dataHTML = '';
        data.teams.forEach(team => {
            dataHTML += list(team, 'cl');
        })
        document.getElementById('list-cl').innerHTML = dataHTML;
        document.querySelectorAll('#btn-fav').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                const selectedTeam = data.teams.filter(team => team.id == id);
                saveFavorite(selectedTeam[0]);
            })
        })
        document.getElementById('preloader-cl').classList.remove('active');
    })
}

async function getGermanyLeagueTeam() {
    if ('caches' in window) {
        caches.match(base_url + 'competitions/2002/teams').then(response => {
            document.getElementById('preloader-gl').classList.add('active');
            if (response) {
                response.json().then(data => {
                    let dataHTML = '';
                    data.teams.forEach(team => {
                        dataHTML += list(team, 'gl');
                    })
                    document.getElementById('list-gl').innerHTML = dataHTML;
                    document.querySelectorAll('#btn-fav').forEach(btn => {
                        btn.addEventListener('click', function () {
                            const id = this.dataset.id;
                            const selectedTeam = data.teams.filter(team => team.id == id);
                            saveFavorite(selectedTeam[0]);
                        })
                    })
                })
                document.getElementById('preloader-gl').classList.remove('active');
            }
        })
    }

    await fetch(base_url + 'competitions/2002/teams', {
        headers: {
            'X-Auth-Token': '785543fc2ecd4b0c9a3e005f3ad1bc82'
        }
    })
    .then(res => res.json())
    .then(data => {
        let dataHTML = '';
        data.teams.forEach(team => {
            dataHTML += list(team, 'gl');
        })
        document.getElementById('list-gl').innerHTML = dataHTML;
        document.querySelectorAll('#btn-fav').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                const selectedTeam = data.teams.filter(team => team.id == id);
                saveFavorite(selectedTeam[0]);
            })
        })
        document.getElementById('preloader-gl').classList.remove('active');
    })
}
async function getNetherlandLeagueTeam() {
    if ('caches' in window) {
        caches.match(base_url + 'competitions/2003/teams').then(response => {
            document.getElementById('preloader-nl').classList.add('active');
            if (response) {
                response.json().then(data => {
                    let dataHTML = '';
                    data.teams.forEach(team => {
                        dataHTML += list(team);
                    })
                    document.getElementById('list-nl').innerHTML = dataHTML;
                    document.querySelectorAll('#btn-fav').forEach(btn => {
                        btn.addEventListener('click', function () {
                            const id = this.dataset.id;
                            const selectedTeam = data.teams.filter(team => team.id == id);
                            saveFavorite(selectedTeam[0]);
                        })
                    })
                })
                document.getElementById('preloader-gl').classList.remove('active');
            }
        })
    }

    await fetch(base_url + 'competitions/2003/teams', {
        headers: {
            'X-Auth-Token': '785543fc2ecd4b0c9a3e005f3ad1bc82'
        }
    })
    .then(res => res.json())
    .then(data => {
        let dataHTML = '';
        data.teams.forEach(team => {
            dataHTML += list(team);
        })
        document.getElementById('list-nl').innerHTML = dataHTML;
        document.querySelectorAll('#btn-fav').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                const selectedTeam = data.teams.filter(team => team.id == id);
                saveFavorite(selectedTeam[0]);
            })
        })
        document.getElementById('preloader-nl').classList.remove('active');
    })
}

async function getEnglandLeagueTeam() {
    if ('caches' in window) {
        caches.match(base_url + 'competitions/2021/teams').then(response => {
            document.getElementById('preloader-el').classList.add('active');
            if (response) {
                response.json().then(data => {
                    let dataHTML = '';
                    data.teams.forEach(team => {
                        dataHTML += list(team);
                    })
                    document.getElementById('list-el').innerHTML = dataHTML;
                    document.querySelectorAll('#btn-fav').forEach(btn => {
                        btn.addEventListener('click', function () {
                            const id = this.dataset.id;
                            const selectedTeam = data.teams.filter(team => team.id == id);
                            saveFavorite(selectedTeam[0]);
                        })
                    })
                })
                document.getElementById('preloader-gl').classList.remove('active');
            }
        })
    }

    await fetch(base_url + 'competitions/2021/teams', {
        headers: {
            'X-Auth-Token': '785543fc2ecd4b0c9a3e005f3ad1bc82'
        }
    })
    .then(res => res.json())
    .then(data => {
        let dataHTML = '';
        data.teams.forEach(team => {
            dataHTML += list(team);
        })
        document.getElementById('list-el').innerHTML = dataHTML;
        document.querySelectorAll('#btn-fav').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                const selectedTeam = data.teams.filter(team => team.id == id);
                saveFavorite(selectedTeam[0]);
            })
        })
        document.getElementById('preloader-el').classList.remove('active');
    })
}

async function getSpainLeagueTeam() {
    if ('caches' in window) {
        caches.match(base_url + 'competitions/2014/teams').then(response => {
            document.getElementById('preloader-sl').classList.add('active');
            if (response) {
                response.json().then(data => {
                    let dataHTML = '';
                    data.teams.forEach(team => {
                        dataHTML += list(team);
                    })
                    document.getElementById('list-sl').innerHTML = dataHTML;
                    document.querySelectorAll('#btn-fav').forEach(btn => {
                        btn.addEventListener('click', function () {
                            const id = this.dataset.id;
                            const selectedTeam = data.teams.filter(team => team.id == id);
                            saveFavorite(selectedTeam[0]);
                        })
                    })
                })
                document.getElementById('preloader-sl').classList.remove('active');
            }
        })
    }

    await fetch(base_url + 'competitions/2014/teams', {
        headers: {
            'X-Auth-Token': '785543fc2ecd4b0c9a3e005f3ad1bc82'
        }
    })
    .then(res => res.json())
    .then(data => {
        let dataHTML = '';
        data.teams.forEach(team => {
            dataHTML += list(team);
        })
        document.getElementById('list-sl').innerHTML = dataHTML;
        document.querySelectorAll('#btn-fav').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                const selectedTeam = data.teams.filter(team => team.id == id);
                saveFavorite(selectedTeam[0]);
            })
        })
        document.getElementById('preloader-sl').classList.remove('active');
    })
}

async function getFranceLeagueTeam() {
    if ('caches' in window) {
        caches.match(base_url + 'competitions/2015/teams').then(response => {
            document.getElementById('preloader-fl').classList.add('active');
            if (response) {
                response.json().then(data => {
                    let dataHTML = '';
                    data.teams.forEach(team => {
                        dataHTML += list(team);
                    })
                    document.getElementById('list-fl').innerHTML = dataHTML;
                    document.querySelectorAll('#btn-fav').forEach(btn => {
                        btn.addEventListener('click', function () {
                            const id = this.dataset.id;
                            const selectedTeam = data.teams.filter(team => team.id == id);
                            saveFavorite(selectedTeam[0]);
                        })
                    })
                })
                document.getElementById('preloader-fl').classList.remove('active');
            }
        })
    }

    await fetch(base_url + 'competitions/2015/teams', {
        headers: {
            'X-Auth-Token': '785543fc2ecd4b0c9a3e005f3ad1bc82'
        }
    })
    .then(res => res.json())
    .then(data => {
        let dataHTML = '';
        data.teams.forEach(team => {
            dataHTML += list(team);
        })
        document.getElementById('list-fl').innerHTML = dataHTML;
        document.querySelectorAll('#btn-fav').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                const selectedTeam = data.teams.filter(team => team.id == id);
                saveFavorite(selectedTeam[0]);
            })
        })
        document.getElementById('preloader-fl').classList.remove('active');
    })
}

async function getDetailTeam() {
    document.getElementById('preloader-detail').classList.add('active');
    return await new Promise((resolve, reject) => {
        document.getElementById('preloader-detail').classList.add('active');
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        if ('caches' in window) {
            caches.match(`${base_url}teams/${id}`).then(response => {
                response.json().then(data => {
                    console.log(data)
                    let dataHTML = '';
                    dataHTML += detailTeam(data);
                    let inner = '' 
                    dataHTML.split(',').forEach(item => {
                        inner += item
                    })
                    document.getElementById('body-detail').innerHTML = inner;
                    document.getElementById('preloader-detail').classList.remove('active');
                    resolve(data)
                })
            })
        }
        
        fetch(`${base_url}teams/${id}`, {
            headers: {
                'X-Auth-Token': '785543fc2ecd4b0c9a3e005f3ad1bc82'
            }
        })
        .then(res => res.json())
        .then(data => {
            let dataHTML = '';
            dataHTML += detailTeam(data);
            let inner = '' 
            dataHTML.split(',').forEach(item => {
                inner += item
            })
            document.getElementById('body-detail').innerHTML = inner;
            document.getElementById('preloader-detail').classList.remove('active');
            resolve(data)
        })
    })
}

async function getMatches() {
    if ('caches' in window) {
        caches.match(`${base_url}competitions/CL/matches`).then(response => {
            response.json().then(data => {
                let dataHTML = '';
                data.matches.forEach(item => {
                    dataHTML += `
                        <tr>
                            <td>${item.homeTeam.name}</td>
                            <td>${item.awayTeam.name}</td>
                            <td>${item.score.winner === "AWAY_TEAM" ? item.awayTeam.name : item.homeTeam.name}</td>
                        </tr>
                    `
                })
                document.getElementById('table-content').innerHTML = dataHTML;
            })
        })
    }
    await fetch(`${base_url}competitions/CL/matches`, {
        headers: {
            'X-Auth-Token': '785543fc2ecd4b0c9a3e005f3ad1bc82'
        }
    })
    .then(res => res.json())
    .then(data => {
        let dataHTML = '';
        data.matches.forEach(item => {
            dataHTML += `
                <tr>
                    <td>${item.homeTeam.name}</td>
                    <td>${item.awayTeam.name}</td>
                    <td>${item.score.winner === "AWAY_TEAM" ? item.awayTeam.name : item.homeTeam.name}</td>
                </tr>
            `
        })
        document.getElementById('table-content').innerHTML = dataHTML;
    })
}


function list(data) {
    return (
        `<a href="/pages/detail-team.html?id=${data.id}">
            <li class="waves-effect collection-item avatar" style="width: 100%">
                <img src="${data.crestUrl ? data.crestUrl : "/img/ball-64px.png"}" alt="" class="circle team-logo">
                <span class="title">${data.name}</span>
                <p>${data.shortName}<br>
                    ${data.area.name}
                </p>
                <a id="btn-fav" href="#" class="secondary-content" data-id="${data.id}"><span class="material-icons favorite-icon">favorite</span></a>
            </li>
        </a>`
    )
}

function detailTeam(data) {
    return (
        `<div class="card" style="padding: 5px;">
            <div class="row">
                <img class="col s6" src="${data.crestUrl ? data.crestUrl : '/img/ball-64px.png'}" style="width: 100px; margin-top: 15px;">
                <div class="col s6">
                    <ul class="collection" style="display: inline-block; width: 100%">
                        <li class="collection-item title">${data.name}</li>
                        <li class="collection-item">${data.shortName}</li>
                        <li class="collection-item">${data.area.name}</li>
                    </ul>
                </div>
            </div>
            <div class="row container">
                <h5 class="title">Player List</h5>
            </div>
            <table class="highlight centered striped">
                <thead>
                    <tr class="title">
                        <th>No</th>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        data.squad.map((item, i) => {
                            return `<tr>
                                <td>${i + 1}</td>
                                <td>${item.name}</td>
                                <td>${item.position}</td>
                            </tr>`
                        })
                    }
                </tbody>
            </table>
        </div>`
    )
}
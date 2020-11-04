if ('indexedDB' in window) {
    const request = indexedDB.open('data', 1);
    let db = null;

    request.onupgradeneeded = e => {
        db = e.target.result;
        db.createObjectStore('favoriteTeam', { keyPath: 'id', autoIncrement: true });
    }
    
    request.onsuccess = e => {
        db = e.target.result;
        const tx = db.transaction('favoriteTeam', "readonly");
        const store = tx.objectStore('favoriteTeam');
        store.openCursor().onsuccess = e => {
            if (e.target.result) {
                e.target.result.continue();
            }
        }
    }
    
    function saveFavorite(team) {
        const tx = db.transaction('favoriteTeam', "readwrite");
        const store = tx.objectStore('favoriteTeam');
        store.add(team);
        tx.oncomplete = () => {
            alert('Success add to favorite team!!')
        }
    }
    
    function deleteFavorite(team) {
        const tx = db.transaction('favoriteTeam', "readwrite");
        const store = tx.objectStore('favoriteTeam');
        store.delete(team.id);
        tx.oncomplete = () => {
            alert('Success delete to favorite team!!')
        }
    }

    function getFavoriteTeam() {
        const tx = db.transaction('favoriteTeam', "readonly");
        const store = tx.objectStore('favoriteTeam');
        let favData = '';
        const favTeam = [];
        store.openCursor().onsuccess = e => {
            const cursor = e.target.result;
            if (cursor) {
                favTeam.push(cursor.value);
                favData += `<a href="/pages/detail-team.html?id=${cursor.value.id}">
                                <li class="waves-effect collection-item avatar" style="width: 100%">
                                    <img src="${cursor.value.crestUrl ? cursor.value.crestUrl : ''}" alt="" class="circle">
                                    <span class="title">${cursor.value.name}</span>
                                    <a id="btn-fav" href="#" class="secondary-content" data-id="${cursor.value.id}"><span class="material-icons favorite-icon">delete</span></a>
                                </li>
                            </a>
                        `;
                cursor.continue();
            }
            document.getElementById('list-favteam').innerHTML = favData;
            document.querySelectorAll('#btn-fav').forEach(btn => {
                btn.addEventListener('click', function () {
                    const id = this.dataset.id;
                    favTeam.forEach(team => {
                        if (team.id == id) {
                            deleteFavorite(team);
                            window.location.replace('index.html#save')
                        } 
                    })
                })
            })
        }   
    }
}

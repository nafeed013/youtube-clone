let gridHTML = '';

section.forEach((data) => {
    gridHTML += `
            <div class="video-preview">
                <div class="thumbnail-row">
                    <img class="thumbnail" src="${data.img}">
                    <div class="video-time">${data.duration}</div>
                </div>
                <div class="video-info-grid">
                    <div class="channel-picture">
                        <img class="profile-picture" src="${data.dp}">
                    </div>
                    <div class="video-info">
                        <p class="video-title">${data.title}</p>
                        <p class="video-author">${data.author}</p>
                        <p class="video-stats">${data.stats} &#183; ${data.ago}</p>
                    </div>
                </div>
            </div>
    `;
});

document.querySelector('.container').innerHTML = gridHTML;

let sideBarHTML = '';

sideBar.forEach((bar) => {
    sideBarHTML += `
        <div class="side-icon">
                <img src="${bar.img}">
                <div>${bar.title}</div>
            </div> 
    `;
});

document.querySelector('.side-bar').innerHTML = sideBarHTML;
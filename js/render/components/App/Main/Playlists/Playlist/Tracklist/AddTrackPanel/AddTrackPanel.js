export function AddTrackPanel() {
    const container = document.createElement('div');
    container.classList.add('add-track-panel');

    const title = document.createElement('h3');
    title.classList.add('tracklist-title');
    title.innerText = 'Tracks';

    const addTrackBtn = document.createElement('button');
    addTrackBtn.classList.add('button-add-track');
    // addTrackBtn.innerText = 'Add Track';

    const addTrackBtnImg = document.createElement('img');
    addTrackBtnImg.src = 'img/icons/add.svg';
    addTrackBtnImg.alt = 'Add';

    addTrackBtn.append(addTrackBtnImg, 'Add Track');
    container.append(title, addTrackBtn);

    return container;
}

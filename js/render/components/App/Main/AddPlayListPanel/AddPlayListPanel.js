export function AddPlaylistPanel() {
    const container = document.createElement('div');
    container.classList.add('add-playlist-panel');

    const h1 = document.createElement('h1');
    h1.innerText = 'My playlists';
    h1.classList.add('title');

    const addButton = document.createElement('button');
    addButton.innerText = 'Add Playlist';
    addButton.classList.add('button');

    container.append(h1, addButton);

    return container;
}

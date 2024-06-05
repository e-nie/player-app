import { AddPlaylistPanel } from './AddPlayListPanel/AddPlayListPanel.js';
import { Playlists } from './Playlists/Playlists.js';

export function Main(someData) {
    console.log(someData);
    const container = document.createElement("main");
    container.append(
        AddPlaylistPanel(),
        Playlists(someData)
    );
    return container;
}

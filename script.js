function getVideoElement() {
    return document.querySelector('video');
}
function handleShortcuts(event) {
    const video = getVideoElement();
    if (!video) {
        return;
    }
    if (event.key === ']') {
        video.playbackRate += 0.10;
    }
    if (event.key === '[') {
        video.playbackRate = Math.max(0.10, video.playbackRate - 0.10);
    }
}
document.addEventListener('keydown', handleShortcuts);
console.log('YouTube Playback Speed extension loaded');
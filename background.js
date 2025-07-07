chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Background script received message:", request);
    if (request.action === "getShortcuts") {
        chrome.storage.sync.get(['speedUpShortcut', 'speedDownShortcut', 'pictureInPictureShortcut', 'toggleSuggestionsShortcut', 'playbackSpeed'], (data) => {
            console.log("Retrieved storage data:", data);
            sendResponse(data);
        });
        return true; 
    } else if (request.action === "savePlaybackSpeed") {
        console.log("Saving playback speed:", request.playbackSpeed);
        chrome.storage.sync.set({ playbackSpeed: request.playbackSpeed }, () => {
            if (chrome.runtime.lastError) {
                console.error("Storage error:", chrome.runtime.lastError);
            }
        });
        sendResponse({ status: "success" });
    }
});

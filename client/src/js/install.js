const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
     event.preventDefault();
    window.deferredPrompt = event;
    butInstall.removeAttribute('hidden');
});

// A click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!window.defferedPrompt){
        return;
    }
    const result = await window.deferredPrompt.prompt();
    console.log(`Install prompt was : ${result.outcome}`);

    window.deferredPrompt = null;
    butInstall.setAttribute('hidden','');
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    event.preventDefault();
    window.deferredPrompt = null;
    butInstall.setAttribute('hidden','');
    window.alert('JATE Installed.');
});

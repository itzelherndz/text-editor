const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// A click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!window.deferredPrompt){
        return;
    }

    await window.deferredPrompt.prompt();

    const result = await window.deferredPrompt.userChoice;

    console.log(`Install prompt was : ${result.outcome}`);

    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    event.preventDefault();
    window.deferredPrompt = null;
    butInstall.setAttribute('hidden','');
    window.alert('JATE Installed.');
});

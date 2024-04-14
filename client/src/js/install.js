const butInstall = document.getElementById('buttonInstall');
let install = null;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    install = event;
    butinstall.removeAttribute('hidden');
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!install){
        return;
    }
    const result = await install.prompt();
    console.log(`Install prompt was : ${result.outcome}`);

    install = null;
    butInstall.setAttribute('hidden','');
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    event.preventDefault();
    install = null;
    butInstall.setAttribute('hidden','');
    window.alert('JATE Installed.');
});

// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// Ce fichier sert de pont sécurisé entre le front (index.html) et le back (main.js)
window.addEventListener('DOMContentLoaded', () => {
  console.log('Preload chargé');
});

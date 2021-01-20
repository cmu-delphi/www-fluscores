const { process, minimizeJs, compileCoffee } = require('delphi-cmu-buildtools');

Promise.all([
    process('**/*.coffee', [compileCoffee(), minimizeJs()]),
    process('**/*.html')
]).then((r) => console.log(r.flat()));
(function(){
    const PortuguêsInput = document.getElementById('PortuguêsInput');
    const cactobetoInput = document.getElementById('CactobetoInput');
    const input = document.getElementsByClassName('input');
    const output = document.getElementsByClassName('output');
    const translate = document.getElementById('translate');
    const revert = document.getElementById('revert');
    const alphabet = {
        'a': 'i', 'A': 'I', 
        'b': 'c', 'B': 'C', 
        'c': 't', 'C': 'T', 
        'd': 'f', 'D': 'F', 
        'e': 'o', 'E': 'O', 
        'f': 'v', 'F': 'V', 
        'g': 's', 'G': 'S', 
        'h': 'd', 'H': 'D', 
        'i': 'a', 'I': 'A', 
        'j': 'e', 'J': 'E', 
        'k': 'g', 'K': 'G', 
        'l': 'j', 'L': 'J', 
        'm': 'l', 'M': 'L', 
        'n': 'y', 'N': 'Y', 
        'o': 'b', 'O': 'B', 
        'p': 'h', 'P': 'H', 
        'q': 'm', 'Q': 'M', 
        'r': 'n', 'R': 'N', 
        's': 'p', 'S': 'P', 
        't': 'q', 'T': 'Q', 
        'u': 'r', 'U': 'R', 
        'v': 'u', 'V': 'U', 
        'x': 'w', 'X': 'W', 
        'w': 'k', 'W': 'K', 
        'y': 'z', 'Y': 'Z', 
        'z': 'x', 'Z': 'X', 
    }
    const alphabetCactobeto = new Object;
    for (var letter in alphabet) {
        alphabetCactobeto[alphabet[letter]] = letter;
    };

    console.log(alphabetCactobeto);

    revert.addEventListener('click', function(e) {
        translate.classList.toggle('translateToCactobeto');
        translate.classList.toggle('translateToPortuguês');
        PortuguêsInput.classList.toggle('input');
        CactobetoInput.classList.toggle('output');
        PortuguêsInput.classList.toggle('output');
        CactobetoInput.classList.toggle('input');
        revert.classList.toggle('revert');

        e.preventDefault();
    });

    translate.addEventListener('click', function(e) {
        if(translate.className === 'translateToCactobeto') {
            console.log('>>>');
            const Português = input[0].value;
            const Cactobeto = Português.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabet[m];
            });
            output[0].value = Cactobeto;
        } 
        else if(translate.className === 'translateToPortuguês') {
            console.log('<<<');
            const Cactobeto = input[0].value;
            const Português = Cactobeto.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabetCactobeto[m];
            });
            output[0].value = Português;
        }
        e.preventDefault();
    });

})();
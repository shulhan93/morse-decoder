const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(s) {
    let arr = []
    let sub2 = ''

    for (let i = 0; i < s.length / 10; i++) {
        let sub10 = s.substr(i * 10, 10)

        for (let j = 0; j <= 5; j++) {
            if (sub10 == '**********') {
                arr.push(' ')
                break;
            }
            if (sub10.substr(j * 2, 2) == '10') {
                sub2 += '.'
            } else if (sub10.substr(j * 2, 2) == '11') {
                sub2 += '-'
            }
            if (j == 5) {
                arr.push(sub2)
                sub2 = ''
            }
        }
    }

    let newarr = arr.map(el => {
        if (el in MORSE_TABLE) {
            return MORSE_TABLE[el]
        } else {
            return ' '
        }
    }).join('')


    return newarr
}

module.exports = {
    decode
}
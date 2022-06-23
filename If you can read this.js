function to_nato(words) {
    words = words.toLowerCase()
    let rez = ''
    for (let i = 0; i < words.length; i++) {
        switch (words[i]) {
            case 'a':
                rez += 'Alfa ';
                break;
            case 'b':
                rez += 'Bravo ';
                break;
            case 'c':
                rez += 'Charlie ';
                break;
            case 'd':
                rez += 'Delta ';
                break;
            case 'e':
                rez += 'Echo ';
                break;
            case 'f':
                rez += 'Foxtrot ';
                break;
            case 'g':
                rez += 'Golf ';
                break;
            case 'h':
                rez += 'Hotel ';
                break;
            case 'i':
                rez += 'India ';
                break;
            case 'j':
                rez += 'Juliett ';
                break;
            case 'k':
                rez += 'Kilo ';
                break;
            case 'l':
                rez += 'Lima ';
                break;
            case 'm':
                rez += 'Mike ';
                break;
            case 'n':
                rez += 'November ';
                break;
            case 'o':
                rez += 'Oscar ';
                break;
            case 'p':
                rez += 'Papa ';
                break;
            case 'q':
                rez += 'Quebec ';
                break;
            case 'r':
                rez += 'Romeo ';
                break;
            case 's':
                rez += 'Sierra ';
                break;
            case 't':
                rez += 'Tango ';
                break;
            case 'u':
                rez += 'Uniform ';
                break;
            case 'v':
                rez += 'Victor ';
                break;
            case 'w':
                rez += 'Whiskey ';
                break;
            case 'x':
                rez += 'Xray ';
                break;
            case 'y':
                rez += 'Yankee ';
                break;
            case 'z':
                rez += 'Zulu ';
                break;
            case '!':
                rez += '! ';
                break;
            case '?':
                rez += '? ';
                break;
            case '.':
                rez += '. ';
                break;
            case ' ':
                rez += '';
                break;
            default:
                rez += ' '
                break;
        }
    }
    rez = rez.split(' ')
    rez.length = rez.length - 1
    return rez.join(' ')
}
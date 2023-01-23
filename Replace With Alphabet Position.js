function alphabetPosition(text) {
    return text.toLowerCase().replace(/[^a-z]/g, '').split('').map(el => el.charCodeAt(0)-96).join(' ')
}
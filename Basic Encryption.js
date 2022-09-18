function encrypt(text, rule) {
    if(rule>256) rule-=256
    return text.split('').map(l=>String.fromCharCode(l.charCodeAt()+rule>=256?l.charCodeAt()+rule-256:l.charCodeAt()+rule)).join('')
};
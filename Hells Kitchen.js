function gordon(a){
    return a.toUpperCase().replace(/[A]/gi,'@').replace(/[aeiuo]/gi,'*').split(' ').map(v=>v+'!!!!').join(' ')
}
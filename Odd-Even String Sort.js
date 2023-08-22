function sortMyString(S) {
    return S.split('').filter((_,i)=> i%2 === 0).join('')+' '+S.split('').filter((_,i)=> i%2 === 1).join('');
}
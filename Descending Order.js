function descendingOrder(n){
    n = n.toString();
    n = n.split('');
    n = n.sort();
    n = n.reverse();
    n = n.join('');
    n = parseInt(n, 10);
    return n;
}
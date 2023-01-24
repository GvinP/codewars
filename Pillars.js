function pillars(num_pill, dist, width) {
    if (num_pill===1) return 0
    return dist*100*(num_pill-1)+width*(num_pill-2)
}
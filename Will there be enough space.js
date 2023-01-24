function enough(cap, on, wait) {
    let ans = cap - on - wait
    return ans >= 0 ? 0 : Math.abs(ans);
}
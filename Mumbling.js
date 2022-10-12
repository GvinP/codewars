function accum(s) {
	return s.toLowerCase().split('').map((l,i)=>l.toUpperCase()+(new Array(i).fill(l)).join('')).join('-')
}
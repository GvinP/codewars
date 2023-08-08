function findChildren(dancingBrigade) {
	return dancingBrigade.toLowerCase().split('').sort().map((l,i,arr)=>(i===0||l!==arr[i-1])?l.toUpperCase():l).join('');
}
const rps = (p1, p2) => {
    if(p1===p2) return "Draw!"
    const getMsg = (n) => `Player ${n} won!`;
    if((p1==="scissors"&&p2==="paper")||(p1==="rock"&&p2==="scissors")||(p1==="paper"&&p2==="rock")) {
        return getMsg(1)
    } else {
        return getMsg(2)
    }
};
function bingo(ticket, win){
    return ticket.map(el=> el[0].split('').some(l=>l.charCodeAt()===el[1])).reduce((a,b)=> b? a+=1: a, 0) >= win ? 'Winner!' : 'Loser!';
  }
function looseChange(cents){
    if (cents > 0) {
        let Quarters = Math.floor(cents / 25)
        let Dimes = Math.floor((cents - Quarters * 25) / 10)
        let Nickels = Math.floor((cents - Quarters * 25 - Dimes * 10) / 5)
        let Pennies = Math.floor((cents - Quarters * 25 - Dimes * 10 - Nickels * 5) / 1)
        return {'Nickels': Nickels, 'Pennies': Pennies, 'Dimes': Dimes, 'Quarters': Quarters}
    } else {
        return {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
    }
}
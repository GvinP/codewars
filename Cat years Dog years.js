var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;
    switch (humanYears) {
        case 1:
            catYears += 15;
            dogYears += 15;
            break;
        case 2:
            catYears += 15+9;
            dogYears += 15+9;
            break;
        default:
            catYears += 15+9+(humanYears-2)*4;
            dogYears += 15+9+(humanYears-2)*5;
            break;
    }
    return [humanYears,catYears,dogYears];
}

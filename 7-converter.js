function MoneyChange(summ, currentcurrency, tocurrency) {
    switch(true) {
        case currentcurrency === 'RUB' && tocurrency === 'USD':
            return summ / 77;
            break;
        case currentcurrency === 'USD' && tocurrency === 'RUB':
            return summ * 77;
            break;
        default:
            return null;
    }
}

MoneyChange(1000,'RUB','USD')
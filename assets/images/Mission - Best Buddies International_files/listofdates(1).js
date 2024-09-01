var Events = [
    {
        city: 'Miami', // {String} City text
        local: 'Your Time', // {String} Local text
        cdtext: 'CHANGE THIS TEXT / Change countdown values', // {String} Start date in format yyyymmdd
        startDate: '20170605', // {String} End date in format yyyymmdd
        endDate: '20220611', // {String} Countdown Year in format yyyy
        cdyear: '2022', // {String} Countdown Month in format MM
        cdmonth: '06', // {String} Countdown Day in format DD
        cdday: '11', // {String} Countdown Minutes in format mm
        cdhour: '08', // {Number} Difference to Coordinated Universal Time (UTC) in hours. Ex: -4 for NYC (-4h), -4.3 for Caracas (-4h30), 5.45 for Katmandu (+5h45)
        cdmin: '0', // {String} Daylight saving timezone
        offset: -5,
        dst: 'USA'
    },
    {
        city: 'paris',
        local: 'Votre Heure',
        cdtext: 'CHANGE THIS TEXT / Change countdown values',
        startDate: '20220611',
        endDate: '20220622',
        cdyear: '2021',
        cdmonth: '07',
        cdday: '05',
        cdhour: '00',
        cdmin: '00',
        offset: 1,
        dst: 'EUROPE'
    },
    {
        city: 'Paris',
        local: 'Votre Heure',
        cdtext: 'CHANGE THIS TEXT / Change countdown values',
        startDate: '20220622',
        endDate: '20220714',
        cdyear: '2022',
        cdmonth: '07',
        cdday: '05',
        cdhour: '00',
        cdmin: '00',
        offset: 1,
        dst: 'EUROPE'
    }
];
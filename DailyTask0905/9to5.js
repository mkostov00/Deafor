function overTime(array) {
    let regularHours = 0;
    let overtimeHours = 0;

    if(array[0] >= 9) {
        if(array[1] <= 17) {
            regularHours = array[1] - array[0];
        }
        if(array[1] > 17) {
            regularHours = 17 - array[0];
        }
    }

    if(array[0] > 9) {}

    if(array[1] > 17) {
        overtimeHours = array[1] - 17;
    }

    let dailyPay = overtimeHours * array[2] * array[3] + regularHours * array[2];

    return alert(`$${parseFloat(dailyPay).toFixed(2)}`)
}

overTime([9, 17, 30, 1.5]);
overTime([16, 18, 30, 1.8]);
overTime([13.25, 15, 30, 1.5]);
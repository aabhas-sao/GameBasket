

export const timestampGenerator = (month: string, day: string, year: number, timezone: string, time: string) => {

    return `${month} ${day},${year} at ${time} ${timezone}`
}

export const monthEnum = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const timeStampFromInputTimeDateLocal = (datetime: string) => {
    // 2021-12-10T19:26
    let i = 0;
    const year = parseInt(datetime.substring(i, i + 4));
    i += 4;
    i++;

    const month = monthEnum[parseInt(datetime.substring(i, i + 2)) - 1];

    i += 2;
    i++;

    const day = datetime.substring(i, i + 2);
    i += 2;
    i++;
    let hr = parseInt(datetime.substring(i, i + 2));
    const meridian = hr >= 12 ? "PM" : "AM";
    const timezone = "UTC+5:30";
    hr %= 12;
    i += 2;
    const time = `${hr}${datetime.substring(i)}:00 ${meridian}`;
    const res = {
        year,
        month,
        day,
        timezone,
        time
    }

    return res;
}

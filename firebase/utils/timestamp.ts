

const timestampGenerator = (month: string, day: number, year: number, timezone: string, time: string) => {

    return `${month} ${day},${year} at ${time} ${timezone}`
}

export default timestampGenerator;
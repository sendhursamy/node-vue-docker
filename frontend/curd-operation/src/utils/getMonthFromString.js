const month_numeric_string_map = {
    "01": "January", "02": "February", "03": "March", "04": "April", "05": "May", "06": "June",
    "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December"
}

const getMonthFromString = (monthYearString) => {
    // Separate into individual characters
    const separated_strings = [...monthYearString]
    const str_len = monthYearString.length

    // Last two characters represent month
    const month = month_numeric_string_map[
        separated_strings[str_len - 2] + separated_strings[str_len - 1]
    ]

    // Pop the last two characters (month strings)
    separated_strings.pop()
    separated_strings.pop()

    // Join again after popping to get the year
    const year = separated_strings.join("")
    return `${month}, ${year}`
}

export default getMonthFromString
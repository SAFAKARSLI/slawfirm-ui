import axios from "axios"

export const MONTHS = ["January", "February", "March", "April",
"May", "June", "July", "August", "September", "October", "November", "December"]

export const GENERATE_ACTIONS = ["Retainer Agreement", "Written Plea"]

export const base_axios = axios.create({ baseURL: "http://192.168.1.126:8080/"})


export const paymentParser = (data) => {

    var total_fee = data["total_fee"]
    var initial_payment = data["initial_payment"]
    var monthly = data["monthly"]
    var day = data["day"]
    var month = MONTHS.indexOf(data["month"])
    var year = data["year"]

    var currentDate = new Date(year, month, day)
    const formatter = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    var formattedDate = formatter.format(currentDate)
    
    var output = ""
    
    // Initial payment is processed
    total_fee -= initial_payment;
    currentDate.setMonth(currentDate.getMonth() + 1)
    
    while (total_fee > 0) {
        
        formattedDate = formatter.format(currentDate)
        
        if (total_fee - monthly <= 0) { // If last payment
         output += `${formattedDate}: $${total_fee}`
        break;
        } 
        else {
        // Intallment is processed
        output += `${formattedDate}: $${monthly}\n`
        currentDate.setMonth(currentDate.getMonth() + 1);
        total_fee -= monthly;
        } 
        
    }
    return output
}
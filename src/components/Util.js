export const MONTHS = ["JAN", "FEB", "MAR", "APR",
"MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]


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


export function convertToByteArray(blob) {
    var sliceSize = 512;
    var bytes = [];
  
    for (var offset = 0; offset < blob.length; offset += sliceSize) {
      var slice = blob.slice(offset, offset + sliceSize);
  
      var byteNumbers = new Array(slice.length);
  
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
  
      bytes.push(byteArray);
    }
  
    return bytes;
  }
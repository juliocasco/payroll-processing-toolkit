// Payroll Processing Toolkit

//Step 2 - Array Employee Names
const employees = [
   {name: "Julio Casco", hourlyRate: 18.50, hoursWorked: 40},
    {name: "Cesar Santoyo", hourlyRate: 22.00, hoursWorked: 35},
    {name: "Maria Garcia", hourlyRate: 20.00, hoursWorked: 45},
    {name: "Ana Lopez", hourlyRate: 19.00, hoursWorked: 30},
    {name: "Tyler Smith", hourlyRate: 21.50, hoursWorked: 40},
];

//step 3 - Base Pay only up to 40 hours
function calculateBasePay(hourlyRate, hoursWorked) {
    const regularHours = Math.min(hoursWorked, 40);
    return regularHours * hourlyRate;
}   

//Step 4 - Overtime Pay for hours worked beyond 40 hours
function calculateOvertimePay(hourlyRate, hoursWorked) {
    if (hoursWorked > 40) {
        return (hoursWorked - 40) * hourlyRate * 1.5;
    }
    return 0;
}

//Step 5 - Taxes at 15% of gross pay
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}

//Step 6 - Processing Function Payroll

function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2),
    };
}

Step 7 - Console Log Output
console.log("Payroll Process Results:");
console.log("--------------------------------");

employees.forEach(employee => {
  const payrollInfo = processPayroll(employee);

  console.log(`Employee: ${payrollInfo.name}`);
  console.log(`Base Pay: $${payrollInfo.basePay}`);
  console.log(`Overtime Pay: $${payrollInfo.overtimePay}`);
  console.log(`Gross Pay: $${payrollInfo.grossPay}`);
  console.log(`Taxes: $${(payrollInfo.grossPay * 0.15).toFixed(2)}`);
  console.log(`Net Pay: $${payrollInfo.netPay}`);
  console.log("--------------------------------");
});

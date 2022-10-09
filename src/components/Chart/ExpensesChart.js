import Chart from './Chart';
const ExpensesChart =(props)=>{
    const chartDataPoinst = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'March',value:0},
        {label:'April',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'July',value:0},
        {label:'Aug',value:0},
        {label:'Sept',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    
    ];
    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoinst[expenseMonth].value += expense.amount;
    }
  return <Chart dataPoints={chartDataPoinst}></Chart>
}

export default ExpensesChart;
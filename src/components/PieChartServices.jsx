import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartServices = () => {
    const data = {
        labels: ['Starter Package', 'Premium Package', 'Growth Package'],
        datasets: [
          {
            
            data: [45, 30, 25], // Example data representing percentage of clients
            backgroundColor: ['#34D399', '#93C5FD', '#FCA5A5'], // Hex codes for colors
            hoverBackgroundColor: ['#10B981', '#0596FF', '#F87171'], // Example hover colors
          },
        ],
      };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            return `${value}% of clients`;
          },
        },
      },
    },
  };

  return (
    <div className='w-full max-w-md mx-auto flex flex-col justify-center items-center my-8 min-h-[600px]'>
      <h2 className='text-2xl font-semibold text-center mb-4'>Most Popular Packages</h2>
      <Pie data={data} options={options} />
      <p className='text-center mt-2'>Based on recent client preferences</p>
    </div>
  );
};

export default PieChartServices;

import { Box } from '@mui/material';
import Header from 'components/Header';
import BreakdownChart from 'components/BreakdownChart';

export default function index() {
  return (
    <Box m='1.5rem 2.5rem'>
      <Header title={'breakdown'} subtitle={'Breakdown of sales by category.'} />
      <Box mt='40px' height='75vh'>
        <BreakdownChart />
      </Box>
    </Box>
  );
}

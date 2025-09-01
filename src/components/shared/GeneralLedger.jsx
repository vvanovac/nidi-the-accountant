import { Box } from '@mui/material';

export default function GeneralLedger({ transactions }) {
  const formatNumber = (number) => number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          sm: 600,
        },
        fontSize: 14,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 30,
          fontWeight: 'bold',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid gray',
            borderRight: 'none',
            textAlign: 'center',
            width: {
              xs: '100%',
              sm: 360,
            },
            height: 30,
          }}
        >
          Opis
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid gray',
            borderRight: 'none',
            textAlign: 'center',
            width: {
              xs: 80,
              sm: 120,
            },
            minWidth: 80,
            height: 30,
          }}
        >
          Duguje
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid gray',
            textAlign: 'center',
            width: {
              xs: 80,
              sm: 120,
            },
            minWidth: 80,
            height: 30,
          }}
        >
          Potražuje
        </Box>
      </Box>
      {transactions?.map((entry, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              border: '1px solid gray',
              borderRight: 'none',
              borderTop: 'none',
              textAlign: 'center',
              width: {
                xs: '100%',
                sm: 360,
              },
              height: 30,
              paddingLeft: 0.5,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {entry.isDescription ? entry.transactionDescription : entry.description}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              border: '1px solid gray',
              borderRight: 'none',
              borderTop: 'none',
              textAlign: 'center',
              width: {
                xs: 80,
                sm: 120,
              },
              minWidth: 80,
              height: 30,
              paddingRight: 0.5,
            }}
          >
            {entry.isDescription
              ? ''
              : entry.isDebitSide
                ? entry.isReversalValue
                  ? `(${formatNumber(entry.value)})`
                  : formatNumber(entry.value)
                : ''}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              border: '1px solid gray',
              borderTop: 'none',
              width: {
                xs: 80,
                sm: 120,
              },
              minWidth: 80,
              height: 30,
              paddingRight: 0.5,
            }}
          >
            {entry.isDescription ? '' : entry.isDebitSide ? '' : formatNumber(entry.value)}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

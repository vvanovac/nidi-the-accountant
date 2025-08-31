import { useEffect, useMemo, useState } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import Page from '../shared/Page';
import PageTitle from '../shared/PageTitle';
import payrollCalculationsQuizQuestions from '../../quiz/payrollCalculationsQuizQuestions';
import { shuffleQuestions } from '../../helpers/questionsShuffleHelper';

export default function PayrollCalculationQuizPage() {
  const theme = useTheme();

  const [questions, setQuestionS] = useState(shuffleQuestions(payrollCalculationsQuizQuestions));
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [isSolutionRevealed, setIsSolutionRevealed] = useState(false);

  const handleSolutionRevealed = () => setIsSolutionRevealed(true);

  const handleNextTaskButtonClicked = () => {
    setCurrentQuestion((prevState) => {
      const next = prevState + 1;

      if (next > questions.length - 1) return 0;

      return next;
    });
    setIsSolutionRevealed(false);
  };

  const formatNumber = (number) => number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const question = useMemo(() => questions?.at(currentQuestion), [questions, currentQuestion]);

  return (
    <Page>
      <PageTitle title='Nidi, tvoj zadatak je da proknjižiš plate radnicima, a u nastavku imaš sve potrebne detalje.' />
      <Box
        sx={{
          marginTop: {
            xs: 3,
            sm: 8,
          },
        }}
      >
        <Typography
          sx={{
            marginTop: {
              xs: 0,
              sm: 1,
            },
            fontWeight: 'bold',
          }}
        >
          Zadatak
        </Typography>
        <Typography
          sx={{
            marginTop: {
              xs: 0,
              sm: 1,
            },
          }}
        >
          {question?.title}
        </Typography>
        <Typography
          sx={{
            marginTop: {
              xs: 0,
              sm: 1,
            },
          }}
        >
          Broj zaposlenih u preduzeću:&nbsp;
          <span style={{ fontWeight: 'bold' }}>{question?.totalEmployees} radnika</span>.
        </Typography>
        <Typography
          sx={{
            marginTop: {
              xs: 0,
              sm: 1,
            },
            fontSize: 12,
            fontStyle: 'italic',
            color: theme.palette.text.secondary,
          }}
        >
          Izvor:&nbsp;{question.test}&nbsp;&#8208;&nbsp;promjena&nbsp;
          {question.transaction}
        </Typography>
      </Box>
      {isSolutionRevealed && (
        <>
          <Typography
            sx={{
              marginTop: {
                xs: 2,
                sm: 5,
              },
              marginBottom: 1,
              fontWeight: 'bold',
            }}
          >
            Rješenje
          </Typography>
          <Box
            sx={{
              marginBottom: {
                xs: 2,
                sm: 5,
              },
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
            {question.solution?.map((entry, index) => (
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
                  {entry.isDescription ? '' : entry.isDebitSide ? formatNumber(entry.value) : ''}
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
        </>
      )}
      <Box
        sx={{
          marginTop: {
            xs: 2,
            sm: 5,
          },
          paddingBottom: 3,
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {isSolutionRevealed && (
          <Button
            size='large'
            variant='contained'
            color='primary'
            onClick={handleNextTaskButtonClicked}
            sx={{
              width: {
                xs: '100%',
                sm: 'fit-content',
              },
            }}
          >
            Novi zadatak
          </Button>
        )}
        {!isSolutionRevealed && (
          <>
            <Button
              size='large'
              variant='contained'
              color='primary'
              onClick={handleSolutionRevealed}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'fit-content',
                },
              }}
            >
              Prikaži rješenje
            </Button>
            <Button
              size='large'
              variant='outlined'
              color='primary'
              onClick={handleNextTaskButtonClicked}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'fit-content',
                },
              }}
            >
              Novi zadatak
            </Button>
          </>
        )}
      </Box>
    </Page>
  );
}

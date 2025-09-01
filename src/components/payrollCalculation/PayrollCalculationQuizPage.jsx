import { useEffect, useMemo, useState } from 'react';
import { Box, Button, Collapse, Typography, useTheme } from '@mui/material';
import Page from '../shared/Page';
import PageTitle from '../shared/PageTitle';
import GeneralLedger from '../shared/GeneralLedger';
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
        {question?.totalEmployees && (
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
        )}
        <Typography
          sx={{
            marginTop: {
              xs: 0,
              sm: 1,
            },
            fontSize: 12,
            fontStyle: 'italic',
            color: theme.palette.text.primary,
          }}
        >
          Izvor:&nbsp;{question.test}&nbsp;&#8208;&nbsp;promjena&nbsp;
          {question.transaction}
        </Typography>
      </Box>
      <Collapse in={isSolutionRevealed} timeout={400}>
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
        <GeneralLedger transactions={question.solution} />
      </Collapse>
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

import { useMemo, useState } from 'react';
import { Box, Button, Collapse, Typography, useTheme } from '@mui/material';
import Page from '../shared/Page';
import PageTitle from '../shared/PageTitle';
import GeneralLedger from '../shared/GeneralLedger';
import accountingTransactionsQuizQuestions from '../../quiz/accountingTransactionsQuizQuestions';
import { shuffleQuestions } from '../../helpers/questionsShuffleHelper';
import accountingTransactionsQuizStore from '../../store/accountingTransactionsQuizStore';

export default function AccountingTransactionsQuizPage() {
  const theme = useTheme();

  const { configuration } = accountingTransactionsQuizStore();

  const getFinalNumberOfQuestions = (questions) => {
    return configuration.numberOfQuestions ? questions.slice(0, configuration.numberOfQuestions) : questions;
  };

  const generateQuestions = (questions) => {
    if (configuration.shuffleQuestions) {
      const shuffledQuestions = shuffleQuestions(questions);

      return getFinalNumberOfQuestions(shuffledQuestions);
    }

    return getFinalNumberOfQuestions(questions);
  };

  const [questions, setQuestions] = useState(generateQuestions(accountingTransactionsQuizQuestions));

  const handleSolutionToggled = (questionId) => {
    setQuestions((prevState) => {
      return prevState.map((question) => {
        if (question.id !== questionId) return question;

        return {
          ...question,
          isSolutionRevealed: !question.isSolutionRevealed,
        };
      });
    });
  };

  const isEverySolutionRevealed = useMemo(() => {
    return questions.every((question) => question.isSolutionRevealed);
  }, [questions]);

  const handleEverySolutionToggled = () => {
    setQuestions((prevState) => {
      return prevState.map((question) => ({ ...question, isSolutionRevealed: !isEverySolutionRevealed }));
    });
  };

  return (
    <Page>
      <PageTitle title='Nidi, tvoj zadatak je da proknjižiš nasumično odabrane promjene koje se ne dešavaju često, ali su važne za razumijevanje i provjeru znanja.' />
      <Box
        sx={{
          marginTop: {
            xs: 3,
            sm: 8,
          },
          paddingBottom: 4,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {questions.map((question, index) => (
          <Box
            key={index}
            sx={{
              marginY: 0.5,
              width: '100%',
              paddingBottom: 2,
              borderBottom: '1px solid #B3B3B3',
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
              {index + 1}.&nbsp;{question.title}
            </Typography>
            {question.relatedText && (
              <>
                <Typography
                  sx={{
                    marginTop: {
                      xs: 0,
                      sm: 1,
                    },
                    fontSize: 14,
                  }}
                >
                  Povezane promjene:
                </Typography>
                {question.relatedText?.map((text, index) => (
                  <Typography
                    key={index}
                    sx={{
                      marginTop: {
                        xs: 0,
                        sm: 1,
                      },
                      fontSize: 14,
                      paddingLeft: 2,
                    }}
                  >
                    &#8208;&nbsp;{text}
                  </Typography>
                ))}
              </>
            )}
            {question.instructions && (
              <>
                <Typography
                  sx={{
                    marginTop: {
                      xs: 0,
                      sm: 1,
                    },
                    fontSize: 14,
                  }}
                >
                  Uputstvo:
                </Typography>
                <Typography
                  sx={{
                    marginTop: {
                      xs: 0,
                      sm: 1,
                    },
                    paddingLeft: 2,
                    fontSize: 14,
                    fontStyle: 'italic',
                    color: theme.palette.text.primary,
                  }}
                >
                  {question.instructions}
                </Typography>
              </>
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
              Izvor:&nbsp;{question.test}&nbsp;&#8208;&nbsp;promjena&nbsp;{question.transaction}
            </Typography>
            {!!question.solution?.length && (
              <>
                <Button
                  size='small'
                  variant='outlined'
                  color='primary'
                  onClick={() => handleSolutionToggled(question.id)}
                  sx={{
                    marginTop: 1,
                    width: {
                      xs: '100%',
                      sm: 'fit-content',
                    },
                  }}
                >
                  {question.isSolutionRevealed ? 'Sakrij rješenje' : 'Prikaži rješenje'}
                </Button>
                <Collapse in={question.isSolutionRevealed} timeout={400}>
                  <Box sx={{ marginTop: 1 }}>
                    <GeneralLedger transactions={question.solution} />
                  </Box>
                </Collapse>
              </>
            )}
          </Box>
        ))}
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
          <Button
            size='large'
            variant='contained'
            color='primary'
            onClick={handleEverySolutionToggled}
            sx={{
              width: {
                xs: '100%',
                sm: 'fit-content',
              },
            }}
          >
            {isEverySolutionRevealed ? 'Sakrij rješenja' : 'Prikaži rješenja'}
          </Button>
        </Box>
      </Box>
    </Page>
  );
}

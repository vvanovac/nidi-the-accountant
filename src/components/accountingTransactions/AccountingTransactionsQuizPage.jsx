import { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Page from '../shared/Page';
import PageTitle from '../shared/PageTitle';
import accountingTransactionsQuizQuestions from '../../quiz/accountingTransactionsQuizQuestions';
import { shuffleQuestions } from '../../helpers/questionsShuffleHelper';
import accountingTransactionsQuizStore from '../../store/accountingTransactionsQuizStore';

export default function AccountingTransactionsQuizPage() {
  const theme = useTheme();

  const { configuration } = accountingTransactionsQuizStore();

  const generateQuestions = (questions) => {
    if (configuration.shuffleQuestions) return shuffleQuestions(questions);

    return questions;
  };

  const [questions] = useState(generateQuestions(accountingTransactionsQuizQuestions));

  return (
    <Page>
      <PageTitle title='Nidi, tvoj zadatak je da proknjižiš nasumično odabrane promjene koje se ne dešavaju često, ali su važne za razumijevanje i provjeru znanja.' />
      <Box
        sx={{
          marginTop: {
            xs: 5,
            sm: 10,
          },
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
                    color: theme.palette.text.secondary,
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
                color: theme.palette.text.secondary,
              }}
            >
              Izvor:&nbsp;{question.test}&nbsp;&#8208;&nbsp;promjena&nbsp;{question.transaction}
            </Typography>
          </Box>
        ))}
      </Box>
    </Page>
  );
}

import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, TextField, Toolbar, Typography, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import Confetti from 'react-confetti';
import useQuizStore from '../store/quizStore';
import quizQuestions from '../quiz/quizQuestions';
import Page from '../components/Page';
import routes from '../constants/routes';

export default function BalanceSheetQuizPage() {
  const { configuration } = useQuizStore();

  const theme = useTheme();

  const navigate = useNavigate();

  const handleHomeButtonClicked = () => navigate(routes.home);

  const shuffleQuestions = (questions) => {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const filterQuizQuestions = () => {
    const categoriesToInclude = [];
    if (configuration.includeFixedAssets) categoriesToInclude.push(1);
    if (configuration.includeCurrentAssets) categoriesToInclude.push(2);
    if (configuration.includeEquity) categoriesToInclude.push(3);
    if (configuration.includeNonCurrentLiabilities) categoriesToInclude.push(4);
    if (configuration.includeCurrentLiabilities) categoriesToInclude.push(5);

    if (categoriesToInclude.length === 5) return quizQuestions;

    return quizQuestions.filter((question) => categoriesToInclude.includes(question.category));
  };

  const generateQuestions = () => {
    const questions = filterQuizQuestions();

    if (configuration.shuffleQuestions) return shuffleQuestions(questions);

    return questions;
  };

  const [questions, setQuestions] = useState(generateQuestions());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isQuizRevealed, setIsQuizRevealed] = useState(false);

  const refs = useRef([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, questions.length);
  }, [questions]);

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      refs.current[index + 1]?.focus();
    }
  };

  const handleAnswerChanged = (event, questionId) => {
    setQuestions((prevState) => {
      return prevState.map((question) => {
        if (question.id !== questionId) return question;

        return { ...question, answer: event.target.value };
      });
    });
  };

  const handleQuizReset = () => {
    setQuestions((prevState) => {
      return prevState.map((question) => ({
        ...question,
        answer: '',
        showHint: false,
        isCorrect: false,
      }));
    });

    setIsSubmitted(false);
    setIsQuizRevealed(false);
  };

  const validateAnswer = (question) => {
    if (configuration.isHardMode)
      return question.answer?.trim()?.toLowerCase() === question.correctAnswers?.hard?.toLowerCase();

    return question.answer?.trim()?.toLowerCase() === question.correctAnswers?.easy?.toLowerCase();
  };

  const handleAnswersSubmitted = () => {
    setQuestions((prevState) => {
      return prevState.map((question) => ({
        ...question,
        isCorrect: validateAnswer(question),
      }));
    });

    setIsSubmitted(true);
  };

  const handleHintRevealed = (questionId) => {
    setQuestions((prevState) => {
      return prevState.map((question) => {
        if (question.id !== questionId) return question;

        return { ...question, showHint: true };
      });
    });
  };

  const handleAllAnswersRevealed = () => {
    setQuestions((prevState) => {
      return prevState.map((question) => ({
        ...question,
        isCorrect: true,
      }));
    });

    setIsQuizRevealed(true);
  };

  const handleAllHintsRevealed = () => {
    setQuestions((prevState) => prevState.map((question) => ({ ...question, showHint: true })));
  };

  const totalHintsShown = useMemo(() => questions.filter((question) => question.showHint)?.length, [questions]);

  const isEveryHintShown = useMemo(() => questions.every((question) => question.showHint), [questions]);

  const totalScore = useMemo(() => questions.filter((question) => question.isCorrect)?.length, [questions]);

  return (
    <Page>
      <AppBar position='static' sx={{ marginBottom: 3 }}>
        <Toolbar>
          <Button color='secondary' startIcon={<HomeIcon />} onClick={handleHomeButtonClicked}>
            Početna
          </Button>
        </Toolbar>
      </AppBar>
      {isSubmitted && totalScore === questions.length && <Confetti width={1500} height={questions.length * 85} />}
      <Box
        sx={{
          width: '100%',
          maxWidth: 1000,
          marginX: 'auto',
          minHeight: '90vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            paddingTop: {
              xs: 0,
              sm: 4,
            },
          }}
        >
          <Typography variant='h4'>Nidi, tvoj zadatak je da rasporediš sljedeće pojmove po kategorijama.</Typography>
          <Typography
            variant='h5'
            sx={{
              fontSize: {
                xs: 20,
                sm: 24,
              },
            }}
          >
            Ako ne uspiješ iz prvog pokušaja, ne brini se - savladaćeš!
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: {
              xs: 5,
              sm: 10,
            },
            display: 'flex',
            flexGrow: 1,
          }}
        >
          <form noValidate autoComplete='off'>
            {questions.map((question, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: {
                    xs: 'column',
                    sm: 'row',
                  },
                  gap: {
                    xs: 1,
                    sm: 3,
                  },
                  marginY: 0.5,
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    flex: '1 1 0',
                    minWidth: 0,
                    maxWidth: '100%',
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: {
                        xs: 0,
                        sm: 1,
                      },
                    }}
                  >
                    {index + 1}.&nbsp;{question.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    minWidth: 0,
                    width: {
                      xs: '100%',
                      sm: null,
                    },
                    maxWidth: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    flex: '1 1 0',
                    gap: 1,
                  }}
                >
                  <TextField
                    value={question.answer}
                    onChange={(event) => handleAnswerChanged(event, question.id)}
                    inputRef={(element) => (refs.current[index] = element)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    disabled={isSubmitted || isQuizRevealed}
                    error={isSubmitted && !question.isCorrect}
                    helperText={
                      isQuizRevealed
                        ? configuration.isHardMode
                          ? question.correctAnswers.hard
                          : question.correctAnswers.easy
                        : isSubmitted && !question.isCorrect
                          ? configuration.isHardMode
                            ? question.correctAnswers.hard
                            : question.correctAnswers.easy
                          : question.showHint
                            ? question.hint
                            : ' '
                    }
                    size='small'
                    sx={{
                      flex: 1,
                      width: '100%',
                      marginBottom: 1,
                    }}
                  />
                  <Button
                    disabled={
                      question.showHint ||
                      isSubmitted ||
                      isQuizRevealed ||
                      (totalHintsShown >= 5 && configuration.isHardMode)
                    }
                    onClick={() => handleHintRevealed(question.id)}
                    sx={{
                      color: '#6255B4',
                      paddingY: '8px !important',
                      paddingX: '0px !important',
                      minWidth: '30px !important',
                      maxWidth: '30px !important',
                    }}
                  >
                    <LightbulbOutlinedIcon />
                  </Button>
                </Box>
              </Box>
            ))}
          </form>
        </Box>
        {isSubmitted && <Box>Tvoj rezultat je {totalScore} tačnih odgovora.</Box>}
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
          {isSubmitted || isQuizRevealed ? (
            <Button
              size='large'
              variant='contained'
              color='primary'
              onClick={handleQuizReset}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'fit-content',
                },
              }}
            >
              Počni ponovo
            </Button>
          ) : (
            <Button
              size='large'
              variant='contained'
              color='primary'
              disabled={isSubmitted || isQuizRevealed}
              onClick={handleAnswersSubmitted}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'fit-content',
                },
              }}
            >
              Provjeri odgovore
            </Button>
          )}
          {!configuration.isHardMode && (
            <Button
              size='large'
              variant='outlined'
              color='primary'
              disabled={isSubmitted || isEveryHintShown || isQuizRevealed}
              onClick={handleAllHintsRevealed}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'fit-content',
                },
              }}
            >
              Prikaži sve pomoći
            </Button>
          )}
          <Button
            size='large'
            variant='outlined'
            color='error'
            disabled={isSubmitted || isQuizRevealed}
            onClick={handleAllAnswersRevealed}
            sx={{
              width: {
                xs: '100%',
                sm: 'fit-content',
              },
            }}
          >
            Prikaži tačne odgovore
          </Button>
        </Box>
      </Box>
    </Page>
  );
}

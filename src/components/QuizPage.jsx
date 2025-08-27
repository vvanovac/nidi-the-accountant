import { useMemo, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import quizQuestions from '../quiz/quizQuestions';
import Confetti from 'react-confetti';

export default function QuizPage() {
  const shuffleQuestions = (questions) => {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [questions, setQuestions] = useState(shuffleQuestions(quizQuestions));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isQuizRevealed, setIsQuizRevealed] = useState(false);

  const handleAnswerChanged = (event, questionKey) => {
    setQuestions((prevState) => {
      return prevState.map((question) => {
        if (question.key !== questionKey) return question;

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

  const handleAnswersSubmitted = () => {
    setQuestions((prevState) => {
      return prevState.map((question) => ({
        ...question,
        isCorrect: question.answer?.toLowerCase() === question.correctAnswer?.toLowerCase(),
      }));
    });

    setIsSubmitted(true);
  };

  const handleHintRevealed = (questionKey) => {
    setQuestions((prevState) => {
      return prevState.map((question) => {
        if (question.key !== questionKey) return question;

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

  const isEveryHintShown = useMemo(() => questions.every((question) => question.showHint), [questions]);

  const totalScore = useMemo(() => questions.filter((question) => question.isCorrect)?.length, [questions]);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
      }}
    >
      {isSubmitted && totalScore === questions.length && <Confetti width={1500} height={850} />}
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
            paddingTop: 4,
          }}
        >
          <Typography variant='h4'>Nidi, tvoj zadatak je da rasporediš sljedeće pojmove po kategorijama.</Typography>
          <Typography variant='h5'>Ako ne uspiješ iz prvog pokušaja, ne brini se - savladaćeš!</Typography>
        </Box>
        <Box
          sx={{
            marginTop: 10,
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
                  gap: 3,
                  marginY: 0.5,
                }}
              >
                <Box sx={{ width: 350 }}>
                  <Typography sx={{ marginTop: 1 }}>
                    {index + 1}.&nbsp;{question.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 400,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                  }}
                >
                  <TextField
                    value={question.answer}
                    onChange={(event) => handleAnswerChanged(event, question.key)}
                    disabled={isSubmitted || isQuizRevealed}
                    error={isSubmitted && !question.isCorrect}
                    helperText={
                      isQuizRevealed
                        ? question.correctAnswer
                        : isSubmitted && !question.isCorrect
                          ? question.correctAnswer
                          : question.showHint
                            ? question.hint
                            : ' '
                    }
                    size='small'
                    sx={{
                      width: '100%',
                      marginBottom: 1,
                    }}
                  />
                  <Button
                    disabled={question.showHint || isSubmitted || isQuizRevealed}
                    onClick={() => handleHintRevealed(question.key)}
                    sx={{
                      paddingY: '8px !important',
                      paddingX: '0px !important',
                    }}
                  >
                    <LightbulbOutlinedIcon color='text.primary' />
                  </Button>
                </Box>
              </Box>
            ))}
          </form>
        </Box>
        {isSubmitted && <Box>Tvoj rezultat je {totalScore} tačnih odgovora.</Box>}
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {isSubmitted ? (
            <Button size='large' variant='contained' disabled={isQuizRevealed} onClick={handleQuizReset}>
              Počni ponovo
            </Button>
          ) : (
            <Button
              size='large'
              variant='contained'
              disabled={isSubmitted || isQuizRevealed}
              onClick={handleAnswersSubmitted}
            >
              Provjeri odgovore
            </Button>
          )}

          <Button
            size='large'
            variant='outlined'
            disabled={isSubmitted || isEveryHintShown || isQuizRevealed}
            onClick={handleAllHintsRevealed}
          >
            Prikaži sve pomoći
          </Button>
          <Button
            size='large'
            variant='outlined'
            color='error'
            disabled={isSubmitted || isQuizRevealed}
            onClick={handleAllAnswersRevealed}
          >
            Prikaži tačne odgovore
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

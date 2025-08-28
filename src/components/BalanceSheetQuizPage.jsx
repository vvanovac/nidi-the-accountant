import { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import Confetti from 'react-confetti';
import useQuizStore from '../store/quizStore';
import quizQuestions from '../quiz/quizQuestions';

export default function BalanceSheetQuizPage() {
  const { configuration } = useQuizStore();

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
          {isSubmitted || isQuizRevealed ? (
            <Button size='large' variant='contained' onClick={handleQuizReset}>
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
          {!configuration.isHardMode && (
            <Button
              size='large'
              variant='outlined'
              disabled={isSubmitted || isEveryHintShown || isQuizRevealed}
              onClick={handleAllHintsRevealed}
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
          >
            Prikaži tačne odgovore
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

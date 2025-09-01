import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from '@mui/material';
import QuizCardSettingsButton from '../shared/QuizCardSettingsButton';
import QuizCardConfigurationSection from '../shared/QuizCardConfigurationSection';
import StartQuizButton from '../shared/StartQuizButton';
import accountingTransactionsQuizStore from '../../store/accountingTransactionsQuizStore';
import routes from '../../constants/routes';

const ALLOWED_NUMBER_OF_TRANSACTIONS = [5, 10, 25];

export default function AccountingTransactionsQuizCard() {
  const theme = useTheme();

  const navigate = useNavigate();

  const { configuration, setConfiguration } = accountingTransactionsQuizStore();

  const [showSettings, setShowSettings] = useState(false);

  const handleConfigurationToggled = () => setShowSettings((prevState) => !prevState);

  const handleConfigurationChanged = (event) => {
    const { name, checked } = event.target;

    setConfiguration({ [name]: checked });
  };

  const handleNumberOfQuestionsConfigurationChanged = (event) => {
    const { value } = event.target;

    setConfiguration({ numberOfQuestions: value === 'all' ? null : Number(value) });
  };

  const handleQuizStarted = () => navigate(routes.accountingTransactionsQuiz);

  return (
    <Paper
      sx={{
        width: {
          xs: '100%',
          md: '55%',
        },
        borderRadius: '12px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        padding: 3,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h4'>Knjigovodstvene promjene</Typography>
        <Typography variant='h6'>Vježba knjiženja (nasumičnih) knjigovodstvenih promjena</Typography>
      </Box>
      <QuizCardSettingsButton onConfigurationToggled={handleConfigurationToggled} />
      <Collapse in={showSettings} timeout={400}>
        <Box sx={{ marginTop: 2 }}>
          <QuizCardConfigurationSection title='Redoslijed promjena'>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={configuration.shuffleQuestions}
                    name='shuffleQuestions'
                    onChange={handleConfigurationChanged}
                  />
                }
                label='Promiješaj promjene'
              />
            </FormGroup>
          </QuizCardConfigurationSection>
          <QuizCardConfigurationSection title='Broj promjena'>
            <FormGroup>
              <RadioGroup
                row
                value={configuration.numberOfQuestions === null ? 'all' : configuration.numberOfQuestions}
                name=''
                onChange={handleNumberOfQuestionsConfigurationChanged}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {ALLOWED_NUMBER_OF_TRANSACTIONS.map((value, index) => (
                  <FormControlLabel key={index} value={value} control={<Radio />} label={`${value} promjena`} />
                ))}
                <FormControlLabel value='all' control={<Radio />} label='Sve promjene' />
              </RadioGroup>
            </FormGroup>
          </QuizCardConfigurationSection>
        </Box>
      </Collapse>
      <StartQuizButton onQuizStarted={handleQuizStarted} />
    </Paper>
  );
}

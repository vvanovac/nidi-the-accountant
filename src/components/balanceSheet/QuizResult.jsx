import { Box, Typography } from '@mui/material';
import Confetti from '../shared/Confetti';

export default function QuizResult({ totalCorrectAnswers, totalQuestions }) {
  const getScoreMessage = () => {
    const percentage = totalCorrectAnswers / totalQuestions;

    if (percentage < 0.55)
      return 'Ovog puta se nisi proslavila. Uradi test ponovo i pokušaj da obratiš pažnju na ispravljanje grešaka.';
    if (percentage < 0.65)
      return 'Nije loše za početak! Vidiš da imaš osnovu, samo treba još malo vježbe. Ne odustaj - sljedeći put ćeš sigurno biti bolja!';
    if (percentage < 0.75)
      return 'Solidno! Dobro si prošla ovaj test. Još malo fokusa na detaljima i biće ti još bolje. Nastavi ovim tempom!';
    if (percentage < 0.85)
      return 'Odličan rezultat! Vidim da dobro poznaješ materiju. Samo još malo poliranja i bićeš u vrhu. Bravо!';
    if (percentage < 0.95)
      return 'Fantastično! Stvarno si pokazala odlično znanje. Skoro si savršena - samo još jedan korak do vrha!';

    return 'Bravo, bravo, bravo! Apsolutno si savladala ovaj test! Tvoje znanje je impresivno. Možeš biti ponosna na sebe - ovo je vrhunski rezultat!';
  };

  return (
    <Box>
      {totalCorrectAnswers === totalQuestions && <Confetti />}
      <Typography
        variant='body1'
        sx={{
          fontWeight: 'bold',
          marginBottom: 1,
        }}
      >
        Tvoj rezultat je {totalCorrectAnswers} tačnih odgovora.
      </Typography>
      <Typography variant='body1'>{getScoreMessage()}</Typography>
    </Box>
  );
}

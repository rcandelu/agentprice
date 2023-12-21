import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';  // Importa cors


dotenv.config();

const app = express();
const port = 3016; // You can choose any port you prefer

app.use(cors());

app.get('/get-analysis', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://tradingview-ta-api-technical-analysis.p.rapidapi.com/get_analysis_from_symbol',
    params: {
      symbol: 'BTCUSD',
      exchange: 'COINBASE',
      screener: 'crypto',
      interval: '1d'
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'tradingview-ta-api-technical-analysis.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

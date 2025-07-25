import axios from 'axios';
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const options = {
      method: 'GET',
      url: 'https://superhero-search.p.rapidapi.com/api/',
      params: { hero: req.query.name },
      headers: {
        'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      }
    };

    try {
      const response = await axios.request(options);
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error fetching superhero data:', error.message);
      res.status(error.response?.status || 500).json({
        error: 'Failed to fetch superhero data',
        details: error.response?.data || error.message,
      });
    }
  } else {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
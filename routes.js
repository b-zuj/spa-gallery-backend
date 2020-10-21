const express = require('express');
const axios = require('axios');

const router = express.Router();

const key = 'TduXFqg5AQzljFLF3zp-MiNvAzj4Bp9eaY_lQUUC0xY';

router.get('/unsplash', async (req, res, next) => {
  try {
    const queryParam = req.query.query ? `&query=${req.query.query}` : '';
    const perPageParam = req.query.per_page ? `&per_page=${req.query.per_page}` : '';
    const pageParam = req.query.page ? `&page=${req.query.page}` : '';
    const fullResponse = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${key}${queryParam}${perPageParam}${pageParam}`);
    res.status(200).json(fullResponse.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

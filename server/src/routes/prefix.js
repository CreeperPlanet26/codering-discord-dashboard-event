const express = require('express');

const router = express.Router();
const Guild = require('../database/models/Guild');

router.get('/:guildId', async (req, res) => {
  const { guildId } = req.params;
  if (!guildId) return res.status(400).json({ message: 'Bad Request. Missing guildId' });
  const foundGuild = await Guild.findOne({ guildId });
  if (!foundGuild) return res.status(404).json({ message: 'Not Found.' });
  return res.json(foundGuild.prefix);
});
module.exports = router;

module.exports = { 
  secret: async (req, res, next) => {
    res.json({ msg: 'You have access to secret!'});
  }
}

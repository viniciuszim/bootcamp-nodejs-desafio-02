module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // deixa a variável acessível a todos os arquivos da aplicação
    res.locals.user = req.session.user

    return next()
  }

  return res.redirect('/')
}

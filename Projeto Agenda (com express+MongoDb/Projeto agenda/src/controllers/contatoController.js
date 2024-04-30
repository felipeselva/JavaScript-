const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
  res.render('contato', {contato: {}});
};

exports.register = async (req, res) => {
  try {
    const contato = new Contato(req.body);
    await contato.register();

    // Correção do nome da propriedade para 'erros'
    if (contato.erros.length > 0) {
      req.flash('errors', contato.erros);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Contato registrado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  } catch (e) {
    console.log(e);
    return res.render('404');
  }
};

exports.editIndex = async function (req,res) {
  if(!req.params.id) return res.render('404')

  const contato = await Contato.buscaPorId(req.params.id)
  if(!contato) return res.render('404');

  res.render('contato', {contato})
}

exports.edit = async function(req,res) {

  try {
    if(!req.params.id) return res.render('404');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if (contato.erros.length > 0) {
      req.flash('errors', contato.erros);
      req.session.save(() => res.redirect('back'));
      return;
    }
  
    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;
  }catch(e) {
    console.log(e);
    res.render('404')
  }
}
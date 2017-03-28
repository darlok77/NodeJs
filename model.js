// Inclusion de Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// On se connecte à la base de données
// N'oubliez pas de lancer ~/mongodb/bin/mongod dans un terminal !
mongoose.connect('mongodb://localhost/project', function(err) {
  if (err) { throw err; }
});
 

// Création du schéma pour les roles
//var roleSchema = new mongoose.Schema({
//  nom : String,
//});

// Création du schéma pour les offres
var offreSchema = new mongoose.Schema({
  offreEvenement : String,
  offreType : String,
  offreNbjours : Number,
  offreRole : String, 
  offreNbFigurant : Number,
  offreListe_des_figurants_retenus : [],
  offreDate : Date 
});


// Création du Model pour les evenements
var Projectoffre = mongoose.model('Offre', offreSchema);
 
// On crée une instance du Model
var offre = new Projectoffre();


//------------------------------------------------------------------------------------------------------------ 

// Création du schéma pour les figurants
var figurantSchema = new mongoose.Schema({
  figNom : String,
  figPrenom : String,
  figEmail : String,
  idandroid: String
});


// Création du Model pour les commentaires
var Projectfig = mongoose.model('Figurant', figurantSchema);
 
// On crée une instance du Model
var fig = new Projectfig({ figNom  : 'merlaud' });

  fig.idandroid ='b46';
  fig.figPrenom = 'ludovic';
  fig.figEmail = 'ludovic.merlaud@bla.fr';

  
   //------------------------------------------------------------------------------------------------------------
  

// Création du schéma pour les postulations
var postulationSchema = new mongoose.Schema({
  offre : {type: Schema.Types.ObjectId, ref: 'offres'},
  candidat :{type: Schema.Types.ObjectId, ref: 'figurants'},
  statut : String,
  date : Date
});


// Création du Model pour les commentaires
//var projectRole = mongoose.model('role', roleSchema);
// 
//// On crée une instance du Model
//var role = new projectRole({ nom : 'arbre' });

  
  // Création du Model pour les commentaires
var Projectpostulation = mongoose.model('Postulation', postulationSchema);
 
// On crée une instance du Model
var postulation = new Projectpostulation({ evenement : 'batman' });
  
  postulation.statut = 'enAttente';
  
 
// On le sauvegarde dans MongoDB !
offre.save(function (err) {
  if (err) { throw err; }
  console.log('offre ajouté avec succès !');  
});

// On le sauvegarde dans MongoDB !
//role.save(function (err) {
//  if (err) { throw err; }
//  console.log('role ajouté avec succès !');  
//});

// On le sauvegarde dans MongoDB !
fig.save(function (err) {
  if (err) { throw err; }
  console.log('figurant ajouté avec succès !');  
});

// On le sauvegarde dans MongoDB !
postulation.save(function (err) {
  if (err) { throw err; }
  console.log('postulation ajouté avec succès !');  
});


// On se déconnecte de MongoDB maintenant
  mongoose.connection.close();
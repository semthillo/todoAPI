import Sequelize from 'sequelize';
import dotenv from 'dotenv';


dotenv.config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT 
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connecté avec succée');
  } catch (error) {
    console.error('Erreur de connexion à la DB', error);
  }
})();

export default sequelize;

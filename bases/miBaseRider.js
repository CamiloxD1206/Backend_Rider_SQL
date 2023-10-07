import Sequelize from "sequelize";
const miBase = new Sequelize('trimestre', 'root', '0905', {
    host: "localhost",
    dialect: "mysql"
})

export default miBase;
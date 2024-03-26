//module.exports=(sequelize,DataTypes)=>{
    const {DataTypes}=require('sequelize')
    const Sequelize = require('./index')
    const employee=Sequelize.define('employee',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        lastName:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        firstName:{
            type:DataTypes.STRING
        }
    })
    // return employee
// }
module.exports = employee
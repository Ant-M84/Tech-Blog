const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    commentText: {
        type: DataTypes.STRING,
        validate: {
            len: [5]
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    },
    dateCreated: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    }, 
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});

module.exports = Comment;
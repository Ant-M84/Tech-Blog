// Helper to obtain current date //
module.exports = {
    get_date: date => {
        return `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`;
    }
};
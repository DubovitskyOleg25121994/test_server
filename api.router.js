const {getPrescitpions} = require('./fakeApi/index');

module.exports = function(app) {
    app.get('/get_prescriptions', getPrescitpions);
}
// <!-- // COMP229 - Mid-Term Test
// // Laura Amangeldiyeva - 301167661
// // 2022-03-01 -->
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home' });
};

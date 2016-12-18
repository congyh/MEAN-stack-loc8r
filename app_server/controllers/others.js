module.exports.about = function (req, res, next) {
    res.render("generic-text", {
        title: "About Loc8r",
        // 注意, 需要将html中的<br />标签均替换成\n
        content: "Loc8r was created to help people find places to sit down and get a bit of work done. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan."
    });
};

// Angular SPA controller
module.exports.angularApp = function (req, res, next) {
  res.render('layout', {title: 'Loc8r'});
};
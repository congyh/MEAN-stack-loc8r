var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');

/*locations*/

// 这里是根据距离来list所有的location
router.get('/locations', ctrlLocations.locationsListByDistance);
// 每个controller方法明确的指出了用途
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationId', ctrlLocations.locationsReadOne);
// TODO 下面两个方法貌似没有了
router.put('/locations/:locationId', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationId', ctrlLocations.locationsDeleteOne);

/*reviews*/
router.post('/locations/:locationId/reviews', ctrlReviews.reviewsCreate);
router.get('/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationId/reviews/:reviewId', ctrlReviews.reviewsDeleteOne);

module.exports = router;
[![forthebadge](http://forthebadge.com/images/badges/reading-6th-grade-level.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/for-sharks.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/ages-12.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/compatibility-pc-load-letter.svg)](http://forthebadge.com)

# imageR

This jQuery plugin allows you to add data attr to an image tag or element with a background image to supply different sizes images at different brake points. To save bandwidth when viewing on a mobile but supply sharp large images to larger displays.

**Requires jQuery**

## SETUP

1. Add imageR.js to your website just before the closing </body> tag below **jQuery**
2. Call the plugin with **$('img').imageR()**; in your js file in doc ready

###Options

Can take 3 options to overide default brakepoints.

Default Sizes: small: **0** medium: **480** large: **1024**

```
$('.js-imageR').imageR({
    small: '0',
    medium: '480',
    large: '768'
});
```

###USAGE

**Image Tag**

```
<img class="js-imageR" data-small="image--small.jpg" data-medium="image--medium.jpg" data-large="image--large.jpg" alt="">
```

**Background Image**

```
<span class="js-imageR" data-small="image--small.jpg" data-medium="image--medium.jpg" data-large="image--large.jpg"></span>
```

## Wordpress

**Requires Advanced Custom Fields or echo the var dump of post_thumbnail to get sizes**

1. Set thumbnail sizes in settings -> media
2. Regenerate Thumbnails (use https://en-gb.wordpress.org/plugins/regenerate-thumbnails/)

###USAGE

**Image Tag**

```
<?php $image = get_field('image'); ?>
<?php if ( !empty($image) ): ?>
    <img class="js-imageR" data-small="<?php echo $image['sizes']['medium']; ?>" data-medium="<?php echo $image['sizes']['large']; ?>" data-large="<?php echo $image['url']; ?>" alt="<?php echo $image['caption']; ?>" rel="js-showMenu">
<?php endif ?>
```

**Background Image**

```
<?php $image = get_field('image'); ?>
<?php if ( !empty($image) ): ?>
	<span class="js-imageR" data-small="<?php echo $image['sizes']['medium']; ?>" data-medium="<?php echo $image['sizes']['large']; ?>" data-large="<?php echo $image['url']; ?>"></span>
<?php endif ?>
```

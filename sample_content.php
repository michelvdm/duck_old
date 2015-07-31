
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<div class="svg-icons">
	<svg class="bb-twitter"><use xlink:href="inc/icons.svg#twitter-icon"></use></svg>
	<svg class="bb-facebook"><use xlink:href="inc/icons.svg#facebook-icon"></use></svg>
	<svg class="bb-youtube"><use xlink:href="inc/icons.svg#youtube-icon"></use></svg>
	<svg class="bb-soundcloud"><use xlink:href="inc/icons.svg#soundcloud-icon"></use></svg>
	<svg class="bb-rssfeed"><use xlink:href="inc/icons.svg#rssfeed-icon"></use></svg>
</div>

<div class="bb-act">
	<svg><use xlink:href="inc/icons.svg#reload-icon"></use></svg>
	<svg><use xlink:href="inc/icons.svg#downarrow-icon"></use></svg>
	<svg><use xlink:href="inc/icons.svg#close-icon"></use></svg>
	<svg><use xlink:href="inc/icons.svg#leftarrow-icon"></use></svg>
	<svg><use xlink:href="inc/icons.svg#email-icon"></use></svg>
	<svg><use xlink:href="inc/icons.svg#rightarrow-icon"></use></svg>
	<svg><use xlink:href="inc/icons.svg#uparrow-icon"></use></svg>
	<svg><use xlink:href="inc/icons.svg#search-icon"></use></svg>
	<svg><use xlink:href="inc/icons.svg#totop-icon"></use></svg>
	<svg><use xlink:href="inc/icons.svg#menu-icon"></use></svg>
</div>

<img src="inc/ica-logo.svg" style="width:100%"/>
<div class="bb-logo"><svg><use xlink:href="inc/icons.svg#ica-logo"></use></svg></div>
<div class="svg-test"></div>




function getContent(){
	
	debug($_GET);

}

?>
<!DOCTYPE html><html lang="en"><meta charset="utf-8">
<title><?php echo $appTitle; ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="<?php echo ROOT; ?>/inc/base.css">
<link rel="icon" href="<?php echo ROOT; ?>/inc/favicon.ico">

<header><div class="wrap">
<a href="" class="home"><?php echo $appTitle; ?></a>
<a href="javascript:location.reload();" class="bb-reload" title="reload"><svg viewBox="0 0 29 29"><use xlink:href="inc/icons.svg#reload-icon"></use></svg></a>
</div></header>

<main><div class="wrap">

<aside>
<?php getSidebar(); ?>
</aside>

<article>
<?php getContent(); ?>
</article>

</div></main>

<footer><div class="wrap">
<?php echo 'Rendered in ', round( microtime(true)-START_TIME , 4 ), ' sec.'; ?>
</div></footer>

<script src="<?php echo ROOT; ?>/inc/tiny-query.js"></script>



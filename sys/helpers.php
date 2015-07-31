<?php // helpers.php

define( 'BASE', __DIR__ );
define( 'ROOT', dirname( $_SERVER[ 'PHP_SELF' ] ) );

/* config */
define( 'APPNAME', 'Duck' );
define( 'TIMEZONE', 'Europe/Brussels' );
/* end config */

date_default_timezone_set( TIMEZONE );
session_start();

spl_autoload_register( function( $class, $data=null ){
 	require_once( str_replace( '\\', '/', BASE.strtolower( str_replace( APPNAME, '', $class ) ).'.php' ) );
});

function debug( $val, $label='Debug' ){
	echo '<h2>', $label, '</h2>', PHP_EOL, '<pre>', PHP_EOL;
	var_dump( $val );
	echo '</pre>', PHP_EOL;
}

function tag( $name, $val='' ){
	echo '<', $name, '>', $val, '</', explode( ' ', $name )[0], '>', PHP_EOL;
}


function pastTime($ts) {
	$diff=time()-$ts;
	$day_diff=floor( $diff/86400 );
	if( $day_diff==0 ){
		if( $diff<60 )return 'just now';
		if( $diff<120 )return '1 minute ago';
		if( $diff<3600 )return floor( $diff/60 ).' minutes ago';
		if( $diff<7200 )return '1 hour ago';
		if( $diff<86400 )return floor( $diff/3600 ).' hours ago';
	}
	if( $day_diff==1 )return 'yesterday';
	if( $day_diff<7 )return $day_diff.' days ago';
	if( $day_diff<31 )return ceil( $day_diff/7 ).' weeks ago';
	if( $day_diff<60 )return 'last month';
	return date( 'F Y', $ts );
}

// end file
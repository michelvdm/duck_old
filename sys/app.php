<?php namespace Duck; //app.php

class App{

	function run(){

		//tag('p', 'Posted '.pastTime( time()-20000*5  ).'.');

		//tag( 'p', 'App '.APPNAME.' - rendered in '.round( microtime(true)-START_TIME , 4 ).' sec.' );
		$this->testPage();

	}

	function testPage(){
		require( __DIR__.'/html_header.php' );
		tag('h1', APPNAME.' Test Page' );

		//require( __DIR__.'/../test_slideshow.php');
//		require( __DIR__.'/../test_menu.php');
		require( __DIR__.'/../sample_gallery.php');

		//tag('p', 'Posted '.pastTime( time()-20000*5  ).'.' );
		require( __DIR__.'/html_footer.php' );
	}

}

// end file
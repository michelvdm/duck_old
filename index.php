<?php // index.php
define( 'START_TIME', microtime( true ) );
require( __DIR__.'/sys/helpers.php' );
call_user_func( array( new Duck\App, 'run' ) );
// end file
<?php


/* old */

error_reporting(E_ALL);
date_default_timezone_set('Europe/Brussels');

define('ROOT', dirname($_SERVER['PHP_SELF']));
$appTitle="Dev 01 - duck";
$config=array('db_host'=>'localhost','db_user'=>'root','db_password'=>'','db_table'=>'duck');
$db=getDb($config);



function truncate($str, $limit){return (strlen($str)>$limit)?(substr($str, 0, $limit-3).'...'):$str;}

function getDb($config){
	extract($config);
	try{
		$o=new PDO("mysql:host=$db_host;dbname=$db_table;charset=utf8",$db_user,$db_password);
	} catch(PDOException $e){
        echo 'Error!: ' . $e->getMessage() . '<br/>';
        die();
    }
	return $o;
}

function getSidebar(){
	global $db;
	$result=$db->query("SHOW TABLES");
	echo '<nav><ul>'.PHP_EOL;
    while ($row = $result->fetch(PDO::FETCH_NUM)){
    	$val=$row[0];
    	echo '<li><a href="'.ROOT.'/'.$val.'">'.ucfirst($val).'</a></li>'.PHP_EOL;
    }
    echo '</ul></nav>'.PHP_EOL;
}

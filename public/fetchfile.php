// zugriff auf server In sha Allah

$ftp_server = ' domain von ftp ';
$ftp_user_name = 'nutzer name';
$ftp_user_pass = 'passwort';


$csvfile = '/domain/dein/csvdatei.csv';

if(!file_exists($csvfile)) 
{
  echo "Nicht gefunden \n";
  exit;
}
else
{
   echo "Datei gefunden, existiert, mach was ya kalb \n";

}


// Daten werden als array ausgegeben auf $arr

$arr=array();

$csvfileopen = fopen('/domain/deine/csvdatei.csv', 'r');

while (($line = fgetcsv($csvfileopen)) !== FALSE) {
  array_push($arr , $line);
}

fclose($csvfileopen);


// daten werden als zeile nach zeile ausgegeben $csvfile ist das ganz oberste damit es dich nicht verwirrt


if (($handle = fopen($csvfile, "r")) !== FALSE) {
    while (($line = fgetcsv($handle, 0, ",")) !== FALSE) {
        // code was du mir den daten von $line machst 
    }
    fclose($handle);
}

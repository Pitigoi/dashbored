#/bin/bash
sudo apt-get install apache2
sudo apt-get install libapache2-mod-php8.0
a2enmod php8.0
pip3 install adafruit-circuitpython-dht
pip3 install html_to_json
sudo apt-get install libgpiod2
sudo apt install cron
sudo systemctl enable cron
echo "
ServerName localhost

<FilesMatch \\.php$>
	SetHandler application/x-httpd-php
</FilesMatch>" | sudo tee -a /etc/apache2/apache2.conf
sudo mv ./covid.py /var/www/html/covid.py
sudo mv ./temp.py /var/www/html/temp.py
sudo mv ./socialblade.py /var/www/html/socialblade.py
sudo mv ./covidrom.txt /var/www/html/covidrom.txt
sudo mv ./temp.txt /var/www/html/temp.txt
sudo mv ./socialblade.txt /var/www/html/socialblade.txt
sudo mv ./style.css /var/www/html/style.css
sudo mv ./graph.js /var/www/html/graph.js
sudo mv ./index.php /var/www/html/index.php
sudo mv ./pyes.sh /var/local/pyes.sh
sudo mv /var/www/html/index.html /var/www/html/default.html
(crontab -l && echo "0 0 * * * /var/local/pyes.sh") | crontab -

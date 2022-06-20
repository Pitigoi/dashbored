all:install.sh

apache2:
	sudo apt-get install apache2
	
libapache2-mod-php8.0:apache2
	sudo apt-get install libapache2-mod-php8.0
	a2enmod php8.0
	
python3:
	sudo apt-get install python3

git-core:
	sudo apt-get install git-core
Adafruit_Python_DHT:git-core python3
	git clone https://github.com/adafruit/Adafruit_Python_DHT.git
	cd Adafruit_Python_DHT
	sudo apt-get install build-essential python-dev
	pip3 install setuptools
	sudo python3 setup.py install
	pip3 install adafruit-circuitpython-dht
	sudo apt-get install libgpiod2
	pip3 install json
	pip3 install urllib
cron:
	sudo apt install cron
	sudo systemctl enable cron

install.sh: apache2 libapache2-mod-php8.0 Adafruit_Python_DHT cron
	echo "
ServerName localhost

<FilesMatch \\.php$>
	SetHandler application/x-httpd-php\n
</FilesMatch>" | tee -a /etc/apache2/apache2copy.conf
	mv ./covid.py /var/www/html/covid.py
	mv ./temp.py /var/www/html/temp.py
	mv ./socialblade.py /var/www/html/socialblade.py
	mv ./covidrom.txt /var/www/html/covidrom.txt
	mv ./temp.txt /var/www/html/temp.txt
	mv ./socialblade.txt /var/www/html/socialblade.txt
	mv ./style.css /var/www/html/style.css
	mv ./graph.js /var/www/html/graph.js
	mv ./index.php /var/www/html/index.php
	mv ./pyes.sh /var/local/pyes.sh
	(crontab -l && echo "0 0 * * * /var/local/pyes.sh") | crontab -
	mv /var/www/html/index.html /var/www/html/default.html

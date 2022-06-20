#/bin/bash
(crontab -l && echo "0 0 * * * /home/raspi/Desktop/localhost/pyes.sh") | crontab -

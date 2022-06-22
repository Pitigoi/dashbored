# SPDX-FileCopyrightText: 2021 ladyada for Adafruit Industries
# SPDX-License-Identifier: MIT

import time
import board
import adafruit_dht

# Initial the dht device, with data pin connected to:
dhtDevice = adafruit_dht.DHT11(board.D4)

# you can pass DHT22 use_pulseio=False if you wouldn't like to use pulseio.
# This may be necessary on a Linux single board computer like the Raspberry Pi,
# but it will not work in CircuitPython.
# dhtDevice = adafruit_dht.DHT22(board.D18, use_pulseio=False)

from datetime import datetime

date=datetime.now()
sumtmp=0.0
sumhmd=0.0
cnt=0
for i in range(72):
    try:
        temperature_c = dhtDevice.temperature
        humidity = dhtDevice.humidity
        sumtmp+=temperature_c
        sumhmd+=humidity
        cnt+=1    
    except RuntimeError as error:
        continue
    except Exception as error:
        dhtDevice.exit()
        raise error
    time.sleep(1200.0)
f = open("temp.txt", "a")
avgt=sumtmp/cnt
avgh=sumhmd/cnt
line = date.strftime("\n%Y-%m-%d %H:%M:%S")+"\t"+str(avgt)+"\t"+str(avgh)
f.write(line)
f.close()
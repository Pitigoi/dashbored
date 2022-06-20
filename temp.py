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


sumtmp=0.0
sumhmd=0.0
cnt=0
for i in range(72):
    try:
        # Print the values to the serial port
        temperature_c = dhtDevice.temperature
        #temperature_f = temperature_c * (9 / 5) + 32
        humidity = dhtDevice.humidity
        #print("Temp: {:.1f} F / {:.1f} C    Humidity: {}% ".format(temperature_f, temperature_c, humidity))
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
line = datetime.now().strftime("\n%Y-%m-%d %H:%M:%S")+"\t"+str(avgt)+"\t"+str(avgh)
f.write(line)
f.close()
    
        

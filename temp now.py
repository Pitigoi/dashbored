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

try:
    temperature_c = dhtDevice.temperature
    humidity = dhtDevice.humidity
except RuntimeError as error:
    continue
except Exception as error:
    dhtDevice.exit()
    raise error
f = open("temp.txt", "a")
line = datetime.now().strftime("\n%Y-%m-%d %H:%M:%S")+"\t"+temperature_c+"\t"+humidity
f.write(line)
f.close()
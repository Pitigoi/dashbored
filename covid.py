import json,urllib.request

URL = "https://www.worldometers.info/coronavirus/country/romania/#graph-deaths-daily"
req = urllib.request.Request(URL, headers={'User-Agent': 'Mozilla/5.0'})
page=urllib.request.urlopen(req)
data = page.read()
e=data.decode('utf-8')[1:]
import html_to_json

output_json = html_to_json.convert(e)
path=output_json["html"][0]["body"][0]["link"][0]["div"][2]["div"][1]["div"][0]["div"][5]["div"][0]


f = open("covidrom.txt", "r")
d=f.read()
q=d.split("\n")[-1].split("\t")[0]
f.close()
f = open("covidrom.txt", "a")

from datetime import datetime
my_list = []
for i in range(7) :
    line = str(datetime.now().year)
    date_time_str = ''
    if(i==0):
        date_time_str += path["div"][0]["h4"][0]["_value"][:-6]
    else:
        date_time_str += path["button"][i-1]["_value"]
    #print (date_time_str)

    date_time_obj = datetime.strptime(date_time_str, '%B %d')
    line += date_time_obj.strftime("-%m-%d")+"\t"
    strongpath=path["div"][i+1]["div"][0]["div"][0]["ul"][0]["li"][0]["strong"]
    if 0<len(strongpath)-1 and "case" in strongpath[0]["_value"]:
        part=strongpath[0]["_value"]
        ls=part.split(" ")
        line += ls[0]+"\t"
        if 1<len(strongpath)-1 and "death" in strongpath[1]["_value"]:
            part=strongpath[1]["_value"]
            ls=part.split(" ")
            line += ls[0]
        else:
            line+="0"
    else:
        if 0<len(strongpath)-1 and "death" in strongpath[0]["_value"]:
            part=strongpath[0]["_value"]
            ls=part.split(" ")
            line += "0\t"+ls[0]
            line += ls[0]
        else:
            line+="0\t0"
    my_list.append(line)
my_list.reverse()
for i in my_list:
    comp=i.split("\t")[0]
    if(i.split("\t")[0]>q):
        f.write("\n"+i)

f.close()

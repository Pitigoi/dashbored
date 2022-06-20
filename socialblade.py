import json,urllib.request

URL = "https://socialblade.com/youtube/channel/UC7_YxT-KID8kRbqZo7MyscQ/monthly"
req = urllib.request.Request(URL, headers={'User-Agent': 'Mozilla/5.0'})
page=urllib.request.urlopen(req)
data = page.read()
e=data.decode('utf-8')


f = open("socialblade.txt", "r")
d=f.read()
q=d.split("\n")[-1].split("\t")[0]
#print(q)
f.close()
f = open("socialblade.txt", "a")
#f.write(d)

import html_to_json

output_json = html_to_json.convert(e)
path=output_json["body"][0]["div"][15]["div"][0]["div"][0]["div"]
for i in range(30):
    #print(i)
    path1=path[2+i]["div"][0]["_value"]
    path2=path[2+i]["div"][3]["div"][1]["_value"].replace(",","")
    if(path1>q):
        f.write("\n"+path1+"\t"+path2)
f.close()

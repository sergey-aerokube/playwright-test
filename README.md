# Test playwright for moon-cloud

### TL;DR
```
docker build -t plw:0.0.1 .
docker run -it --name plw \
 -e URL={{ url }} \
 -e CREDENTIALS="{{ username }}:{{ password }}" \
plw:0.0.1

docker cp plw:/usr/app/screenshot.png ./
docker rm plw
```

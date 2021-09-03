# Test playwright for moon-cloud

### TL;DR
```
docker build -t plw:0.0.1 .
docker run -it --name plw \
 -e CLIENT_URL={{ url }} \
 -e CLIENT_CREDENTIALS="{{ username }}:{{ password }}" \
plw:0.0.1

docker cp plw:/usr/app/screenshot.png ./
docker rm plw
```


This sample application is configured with envoy proxy(at port 8080). This envoy proxy transfers all the requests to a node-server at port 3000.

To run:

### 1. Create a docker image for the node-server

```
cd node-server
docker build . -t krishna/node-server-1
```

### 2. Run the docker-compose file

```
cd ..
docker-compose up
```

_Now go to `localhost:8080` you'll get the home page returned from the node server.
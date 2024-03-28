dockerImage="01_paradygmaty"
volumePath="/home/lukasz/projektowanie_obiektowe/"
hostPath="$(pwd)"
app="test"

docker build -t $dockerImage .
echo

docker run --rm -it -v $hostPath:$volumePath $dockerImage fpc $app.pas
echo
docker run --rm -it -v $hostPath:$volumePath $dockerImage ./$app


function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yeXvOPJjM/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1; 

        document.getElementById("result_label").innerHTML='I Think This Is The Sound Of - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML='Confidence - '+
        (results[0].confidence*100).toFixed(1)+"%";
        document.getElementById("result_label").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

    
        img = document.getElementById('https://s3.envato.com/files/270440720/CartoonDogPointer%20p.jpg') 
        img1 = document.getElementById('https://cdn.dribbble.com/users/5172629/screenshots/11444826/sdsxdczx_4x.jpg')
        img2 = document.getElementById('http://www.clker.com/cliparts/z/I/4/l/P/9/cow-head-only-small-eyes-hi.png')
        img3 = document.getElementById('https://image.shutterstock.com/image-vector/group-people-talking-communication-connection-260nw-1464174854.jpg')

        if (results[0].label == "A Dog Barking") {
          img.src = 'https://s3.envato.com/files/270440720/CartoonDogPointer%20p.jpg';
        } else if (results[0].label == "A Tiger Roaring") {
          img1.src = 'https://cdn.dribbble.com/users/5172629/screenshots/11444826/sdsxdczx_4x.jpg';
        } else if (results[0].label == "A Cow Mooing") {
          img2.src = 'http://www.clker.com/cliparts/z/I/4/l/P/9/cow-head-only-small-eyes-hi.png';
        }else{
          img3.src = 'https://image.shutterstock.com/image-vector/group-people-talking-communication-connection-260nw-1464174854.jpg';
        }
      }
    }
    
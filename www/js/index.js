document.addEventListener("deviceready", onDevice, false);

function onDevice() {
document.getElementById("btn1").addEventListener("click", takePicture);
document.getElementById("btn2").addEventListener("click", openFilePicker);

function takePicture() {
  navigator.camera.getPicture(onSuccess,onError,{
    quality:50,
    destinationType:Camera.DestinationType.DATA_URL
});
}

function onSuccess(imageData) {
  var img=document.getElementById("img1");
  img.src="data:image/jpeg; base64,"+imageData;


 }

 function onError(err) {
  // console.log
  alert("erorrbhgy ----- >" + err);
 }



function openFilePicker(){


    navigator.camera.getPicture(function(result){
        console.log(result);
        var img=document.getElementById("img1");
        img.src="data:image/jpeg; base64,"+result;
    },

      function(error){
        console.log(error);
        },
  {
sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM
});



}

}


// references
// https://www.youtube.com/watch?v=vSqp3QwlGVk
// https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html

---
title: "Ribo centre - RegionDEG"
layout: homelay
excerpt: "Ribo centre -- RegionDEG"
permalink: /regiondeg/
---
<div class="container">
<b style="font-size: 24px; color: #BF5701">
ATLAS
</b>
<div class="shadow p-3 mb-5 bg-white rounded row">

<div class="col-lg-3 text-center">
<div class="img-circle card photo-card card-clickable" onclick="handleClick('Adult',this)">
<img src="{{ site.url }}{{ site.baseurl }}/images/homePage/nose-pharynx.png" class="rounded-circle" />
</div>
<div>
<p class="text-center" style="margin-top: 16px;">
<b style="font-size: 24px; color: #BF5701">
ADULT BRAIN
</b>
</p>
</div>
</div>

<div class="col-lg-3 text-center">
<div class="img-circle card photo-card card-clickable" onclick="handleClick('Fetal',this)">
<img src="{{ site.url }}{{ site.baseurl }}/images/homePage/airway.png" class="rounded-circle" />
</div>
<div>
<p class="text-center" style="margin-top: 16px;">
<b style="font-size: 24px; color: #BF5701">
FETAL BRAIN
</b>
</p>
</div>
</div>
<div class="col-lg-3 text-center">
<div class="img-circle card photo-card card-clickable" onclick="handleClick('Organoid',this)">
<img src="{{ site.url }}{{ site.baseurl }}/images/homePage/lung.png" class="rounded-circle" />
</div>
<div>
<p class="text-center" style="margin-top: 16px;">
<b style="font-size: 24px; color: #BF5701">
TUMOUR
</b>
</p>
</div>
</div>


<div class="col-lg-3 text-center">
<div class="img-circle card photo-card card-clickable" onclick="handleClick('Tumour',this)">
<img src="{{ site.url }}{{ site.baseurl }}/images/homePage/airway.png" class="rounded-circle" />
</div>
<div>
<p class="text-center" style="margin-top: 16px;">
<b style="font-size: 24px; color: #BF5701">
ORGANOID
</b>
</p>
</div>
</div>

</div>
</div>




<script>
  function showImage0(photoName) {
    var photoElement = document.getElementById('photo');
    photoElement.src = photoName;
    photoElement.alt = photoName;
  }
</script>

<style>
  .image-container {
    max-width: 100%;
    max-height: 100%;
    background-color: none;
    justify-content: center;
    align-items: center;
    box-shadow: none;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
    .photo-card {
        border: 10px solid #ccc; 
        overflow: hidden;
        border-radius: 50%;
        position: relative;
        background-size: cover;
    }
    .photo-card:hover img {
        transform: scale(1.1);
    }
    .photo-card img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }
    .photo-card.clicked {
        border-color: #EE993A;
    }
</style>



<br>
<div class="container">
  <b style="font-size: 24px; color: #BF5701">EXPRESSIONS</b>
  <div id="imageIdContainer"></div>
  <b style="font-size: 24px; color: #BF5701">REGION</b>
  <br>
  <select id="selectBox1" onchange="handleSelectChange();displaySelectedImage()" selectedIndex="0"></select>
  <!-- <button onclick="displaySelectedImage()">显示选择的照片</button> -->
  <div class="image-container">
  <img id="selectedImage" src="" alt="Selected Image">
</div>
</div>

<!-- <div id="imageIdContainer"></div> -->
<style>
  /* 设置固定宽度 */
  #selectBox1 {
    width: 400px; /* 这里可以根据需要调整宽度 */
  }
  .image-container {
    max-width: 100%;
    max-height: 100%;
    background-color: none;
    justify-content: center;
    align-items: center;
    box-shadow: none;
  }
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .container {
  /* background-color: #f0f0f0; */ /* 设置背景颜色为您想要的颜色值 */
  box-shadow: 0 0 15px grey;
  border-radius: 10px; /* 设置边框圆角的半径，可以根据需要进行调整 */
  padding: 10px; /* 可选：添加内边距以增加内容与边框之间的间距 */
}
  .imageIdContainer{
    box-shadow: 0 0 15px grey;
    border-radius: 10px; 
    padding: 10px; 
  }
</style>

<script>
  var selectedImageId = null;
  var selectedOptions = [];
  var selectedButton = null;
  var selectBox1 = document.getElementById('selectBox1');
  var originalOrder = true;
  var clickedCard = null;
  document.addEventListener('DOMContentLoaded', function() {
    var adultButton = document.querySelector('.col-lg-3:nth-child(1) .card-clickable');
    adultButton.click();
  });
  function handleClick(imageId,card) {
    if (clickedCard !== null) {
    clickedCard.classList.remove("clicked");
  }
    card.classList.add("clicked");
    clickedCard = card;
    selectedImageId = imageId;
    selectedOptions = [];

    fetch('{{ site.url }}{{ site.baseurl }}/js/genepage/RegionDEG.json')
      .then(response => response.json())
      .then(data => {
        var options = data[imageId];
        updateSelectBoxOptions('selectBox1', options);
        document.getElementById('imageIdContainer').textContent = 'Atlas: ' + imageId;
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }
  document.addEventListener('DOMContentLoaded', function() {
    var selectBox = document.getElementById('selectBox1');
    selectBox.selectedIndex = 0;
    handleSelectChange();
    displaySelectedImage();
  })
  function handleSelectChange() {
    var selectBox1 = document.getElementById('selectBox1');
    var option1 = selectBox1.options[selectBox1.selectedIndex].value;

    selectedOptions = [option1];
  }

  function displaySelectedImage() {
  if (selectedImageId !== null && selectedOptions.length === 1) {
    var imageName = selectedImageId + '_' + encodeURIComponent(selectedOptions[0]) + '.png';
    var imagePath = 'https://data.braincellatlas.org/volcano/RegionDEG/' + imageName;
    // 在此处显示照片，例如：
    var imageElement = document.getElementById('selectedImage');
    imageElement.src = imagePath;
    console.log('Selected Image:', imagePath);
  } else {
    console.log('Please select an image and options.');
  }
}
  function updateSelectBoxOptions(selectBoxId, options) {
    var selectBox = document.getElementById(selectBoxId);
    selectBox.innerHTML = generateOptionsHtml(options);
  }
  function generateOptionsHtml(options) {
    var optionsHtml = '';
    for (var i = 0; i < options.length; i++) {
      optionsHtml += '<option value="' + options[i] + '">' + options[i] + '</option>';
    }
    return optionsHtml;
  }
</script>
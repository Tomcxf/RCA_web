---
title: "Ribo centre - CellTypeDEG"
layout: homelay
excerpt: "Ribo centre -- CellTypeDEG"
permalink: /celltypedeg/
---
<div class="container">
<p>ATLAS</p>
<div class="row">

<div class="col-lg-3 text-center">
<div class="img-circle card photo-card card-clickable" onclick="handleClick('Adult',this)">
<img src="{{ site.url }}{{ site.baseurl }}/images/homePage/nose-pharynx.png" class="rounded-circle" />
</div>
<div>
<p class="text-center" style="margin-top: 16px;">
<b style="font-size: 24px;">
Nose and pharynx
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
<b style="font-size: 24px;">
<a href="#" onclick="showImage0('{{ site.url }}{{ site.baseurl }}/images/homePage/Fetal.png'); return false">Airway</a>
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
<b style="font-size: 24px;">
<a href="#" onclick="showImage0('{{ site.url }}{{ site.baseurl }}/images/homePage/Tumour.png'); return false">Lung</a>
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
<b style="font-size: 24px;">
<a href="#" onclick="showImage0('{{ site.url }}{{ site.baseurl }}/images/homePage/Fetal.png'); return false">Airway</a>
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
</style>
<style>
    .photo-card {
/*         width: 350px;
        height: 350px; */
        border: 10px solid #ccc; 
        overflow: hidden;
        border-radius: 50%;
        position: relative;
        background-size: cover;
 /*        display: flex;  
        justify-content: right; /* 水平居中对齐 */
        /* align-items: right;  */
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





<div class="container">
  <h2>Cell Type</h2>
  <select id="selectBox1" onchange="handleSelectChange()"></select>
  <button onclick="displaySelectedImage()">显示选择的照片</button>
</div>


<!-- <div class="container">
<div class="image-container"> -->
<img id="selectedImage" src="" alt="Selected Image">
<!-- </div> -->


<script>
  var selectedImageId = null;
  var selectedOptions = [];
  var selectedButton = null;
  var selectBox1 = document.getElementById('selectBox1');
  var originalOrder = true;
  var clickedCard = null;

  function handleClick(imageId,card) {
    if (clickedCard !== null) {
    clickedCard.classList.remove("clicked");
  }
    card.classList.add("clicked");
    clickedCard = card;
    selectedImageId = imageId;
    selectedOptions = [];

    fetch('{{ site.url }}{{ site.baseurl }}/js/genepage/CellTypeDEG.json')
      .then(response => response.json())
      .then(data => {
        var options = data[imageId];
        updateSelectBoxOptions('selectBox1', options);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  function handleSelectChange() {
    var selectBox1 = document.getElementById('selectBox1');
    var option1 = selectBox1.options[selectBox1.selectedIndex].value;

    selectedOptions = [option1];
  }

  function displaySelectedImage() {
  if (selectedImageId !== null && selectedOptions.length === 1) {
    var imageName = selectedImageId + '_' + encodeURIComponent(selectedOptions[0]) + '.png';
    var imagePath = 'https://data.braincellatlas.org/volcano/CellTypeDEG/' + imageName;
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
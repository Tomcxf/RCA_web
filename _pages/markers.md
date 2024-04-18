---
title: "Ribo centre - Markers"
layout: homelay
excerpt: "Ribo centre -- Markers"
permalink: /markers/
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
<br/>
<div class="container">
  <button id="buttonA" onclick="changeOrder('A')">By Region</button>
  <button id="buttonB" onclick="changeOrder('B')">By CellType</button>
  <br/>
  <select id="selectBox1" onchange="handleSelectChange()"></select>
  <select id="selectBox2" onchange="handleSelectChange()"></select>
  <button onclick="displaySelectedImage();displaySelectedTable();">显示选择的照片</button>
</div>

<style>
  /* 设置固定宽度 */
  #selectBox1, #selectBox2 {
    width: 400px; /* 这里可以根据需要调整宽度 */
  }
</style>


<!-- <button onclick="displaySelectedImage();displaySelectedTable();">显示选择的照片</button> -->
<br/>
<div class="container">
<div class="image-container">
<img id="selectedImage" src="" alt="Selected Image">
</div>

<!-- <div class="container">
<div class="row" >
<div class="image-container">
<img id="selectedImage" src="" alt="Selected Image">
</div>
</div>
</div> -->
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



<div id="csvTableContainer"></div>


<script>
  var selectedImageId = null;
  var selectedOptions = [];
  var selectedButton = null;
  var selectBox1 = document.getElementById('selectBox1');
  var selectBox2 = document.getElementById('selectBox2');
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

    fetch('{{ site.url }}{{ site.baseurl }}/js/genepage/RegionDEG.json')
      .then(response => response.json())
      .then(data => {
        var options = data[imageId];
        updateSelectBoxOptions('selectBox1', options);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    fetch('{{ site.url }}{{ site.baseurl }}/js/genepage/CellTypeDEG.json')
      .then(response => response.json())
      .then(data => {
        var options = data[imageId];
        updateSelectBoxOptions('selectBox2', options);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function handleSelectChange() {
    var selectBox1 = document.getElementById('selectBox1');
    var selectBox2 = document.getElementById('selectBox2');

    var option1 = selectBox1.options[selectBox1.selectedIndex].value;
    var option2 = selectBox2.options[selectBox2.selectedIndex].value;

    selectedOptions = [option1, option2];
  }

function displaySelectedImage() {
  if (selectedImageId !== null && selectedOptions.length === 2) {
    var imageName;
    if (selectedButton === 'A') {
      imageName = selectedImageId + '_' + encodeURIComponent(selectedOptions[0]) + '_' + encodeURIComponent(selectedOptions[1]) + '.png';
    var imagePath = 'https://data.braincellatlas.org/volcano/VolcanoByRegion/' + imageName;
    } else if (selectedButton === 'B') {
      imageName = selectedImageId + '_' + encodeURIComponent(selectedOptions[1]) + '_' + encodeURIComponent(selectedOptions[0]) + '.png';
    var imagePath = 'https://data.braincellatlas.org/volcano/VolcanoByCellType/' + imageName;
    }
    /* var imagePath = '{{ site.url }}{{ site.baseurl }}/images/markerPage/volcano/' + imageName; */
    // 在此处显示照片，例如：
    var imageElement = document.getElementById('selectedImage');
    imageElement.src = imagePath;
    console.log('Selected Image:', imagePath);
  } else {
    console.log('Please select an image and options.');
  }
}

function displaySelectedTable() {
  if (selectedImageId !== null && selectedOptions.length === 2) {
    var tableName;
    var tablePath;

    if (selectedButton === 'A') {
      tableName = selectedImageId + '_' + encodeURIComponent(selectedOptions[0]) + '_' + encodeURIComponent(selectedOptions[1]) + '_cell_type.csv';
      tablePath = 'https://data.braincellatlas.org/markersByRegion/' + tableName;
    } else if (selectedButton === 'B') {
      tableName = selectedImageId + '_' + encodeURIComponent(selectedOptions[1]) + '_' + encodeURIComponent(selectedOptions[0]) + '_cell_type.csv';
      tablePath = 'https://data.braincellatlas.org/markersByCellType/' + tableName;
    } else {
      console.log('Please select an image and options.');
      return; // 结束函数的执行
    }

    console.log('Table Path:', tablePath);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', tablePath, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var csvData = xhr.responseText;
        console.log('CSV Data:', csvData);

        var tableContainer = document.getElementById('csvTableContainer');

        // 解析 CSV 数据
        var rows = csvData.split('\n');
        var tableHtml = '<table>';
        for (var i = 0; i < rows.length; i++) {
          var cells = rows[i].split(',');
          tableHtml += '<tr>';
          for (var j = 0; j < cells.length; j++) {
            if (i === 0) {
              tableHtml += '<th>' + cells[j] + '</th>';
            } else {
              tableHtml += '<td>' + cells[j] + '</td>';
            }
          }
          tableHtml += '</tr>';
        }
        tableHtml += '</table>';

        // 将表格插入到页面中
        tableContainer.innerHTML = tableHtml;
      }
    };
    xhr.send();
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
  function changeOrder(button) {
    if (button === 'A') {
      selectedButton = button;
      originalOrder = true;
      resetSelectBoxes();
    } else if (button === 'B') {
      selectedButton = button;
      originalOrder = false;
      resetSelectBoxes();
    }
 } 
  
  function resetSelectBoxes() {
    if (originalOrder) {
      selectBox1.parentNode.insertBefore(selectBox1, selectBox2);
    } else {
      selectBox2.parentNode.insertBefore(selectBox2, selectBox1);
    }
  }

</script>

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
  .container {
  background-color: #f0f0f0; /* 设置背景颜色为您想要的颜色值 */
  border-radius: 10px; /* 设置边框圆角的半径，可以根据需要进行调整 */
  padding: 10px; /* 可选：添加内边距以增加内容与边框之间的间距 */
}
</style>
<style>
    .photo-card {
/*         width: 200px;
        height: 200px; */
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
<!-- <script>
  var clickedCard = null;

  function handleClick(card) {
    if (clickedCard !== null) {
      clickedCard.classList.remove("clicked");
    }

    card.classList.add("clicked");
    clickedCard = card;
  }
</script> -->


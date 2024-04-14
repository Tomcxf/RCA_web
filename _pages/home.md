---
title: "GZNL-RDC - Home"
layout: homelay
excerpt: "GZNL - Respiratory Data Centre: Facilitating Respiratory Disease Research with big data"
sitemap: true
permalink: /
---


<div class="row" style='background-color: #f0f0f0;'>
<div class="col-lg-3 d-flex justify-content-center align-items-center">
<p class="text-center" style='margin-top: 16px;'><img src="{{ site.url }}{{ site.baseurl }}/images/statistics/visit.svg" style='height: 40px; filter: brightness(90%) invert(1);'/>
<b style='font-size:24px;'>N Visits</b></p>
</div><!-- /.col-lg-3 -->

<div class="col-lg-3">
<p class="text-center" style='margin-top: 16px;'><img src="{{ site.url }}{{ site.baseurl }}/images/statistics/database.svg" style='height: 40px; filter: brightness(90%) invert(1);'/>
<b style='font-size:24px;'>N Databases</b></p>
</div><!-- /.col-lg-3 -->

<div class="col-lg-3">
<p class="text-center" style='margin-top: 16px;'><img src="{{ site.url }}{{ site.baseurl }}/images/statistics/document.svg" style='height: 40px; filter: brightness(90%) invert(1);'/>
<b style='font-size:24px;'>Data Terms</b></p>
</div><!-- /.col-lg-3 -->

<div class="col-lg-3">
<p class="text-center" style='margin-top: 16px;'><img src="{{ site.url }}{{ site.baseurl }}/images/statistics/storage.svg" style='height: 40px; filter: brightness(90%) invert(1);'/>
<b style='font-size:24px;'>Data Storage</b></p>
</div><!-- /.col-lg-3 -->
</div><!-- /.row -->

<hr class="featurette-divider">
<!-------------------------------------------------------------------->

<div style="text-align:center;">
<h3 style="font-size:50px; font-weight:bold;">ATLAS</h3>
</div>
<br/>




<div class="container">
<div class="row">
<div class="col-lg-4 text-center">
<div class="img-circle card photo-card card-clickable" onclick="handleClick(this)">
<a href="#" onclick="showImage0('{{ site.url }}{{ site.baseurl }}/images/homePage/Adult.png'); return false">
<img src="{{ site.url }}{{ site.baseurl }}/images/homePage/nose-pharynx.png" class="rounded-circle" />
</a>
</div>
<div>
<p class="text-center" style="margin-top: 16px;">
<b style="font-size: 24px;">
<a href="#" onclick="showImage0('{{ site.url }}{{ site.baseurl }}/images/homePage/Adult.png'); return false">Nose and pharynx</a>
</b>
</p>
</div>
</div>


<div class="col-lg-4 text-center">
<div class="img-circle card photo-card card-clickable" onclick="handleClick(this)">
<a href="#" onclick="showImage0('{{ site.url }}{{ site.baseurl }}/images/homePage/Fetal.png'); return false">
<img src="{{ site.url }}{{ site.baseurl }}/images/homePage/airway.png" class="rounded-circle" />
</a>
</div>
<div>
<p class="text-center" style="margin-top: 16px;">
<b style="font-size: 24px;">
<a href="#" onclick="showImage0('{{ site.url }}{{ site.baseurl }}/images/homePage/Fetal.png'); return false">Airway</a>
</b>
</p>
</div>
</div>


<div class="col-lg-4 text-center">
<div class="img-circle card photo-card card-clickable" onclick="handleClick(this)">
<a href="#" onclick="showImage0('{{ site.url }}{{ site.baseurl }}/images/homePage/Tumour.png'); return false">
<img src="{{ site.url }}{{ site.baseurl }}/images/homePage/lung.png" class="rounded-circle" />
</a>
</div>
<div>
<p class="text-center" style="margin-top: 16px;">
<b style="font-size: 24px;">
<a href="#" onclick="showImage0('{{ site.url }}{{ site.baseurl }}/images/homePage/Tumour.png'); return false">Lung</a>
</b>
</p>
</div>
</div>
</div>
</div>





<br/><br/><br/>

<div class="container">
<div class="row" >
<div class="image-container">
<img id="photo" src="{{ site.url }}{{ site.baseurl }}/images/homePage/Adult.png" alt="Default Photo" style="max-height: 450px;">
</div>
</div>
</div>

<h3>Cite us </h3>
<p>Chen, Xinyue & Huang, Yin & Huang, Ziliang & Xu, Lahong & Huang, Liangfeng & Ye, Mingli & You, Renke & Zhang, Xuegong & Miao, Zhichao*. (2023). Brain Cell Atlas: An Integrative Ensemble of Cell Transcriptomes Across Human Brain Regions. 10.21203/rs.3.rs-3221500/v1.</p>



<!-- <script>
    function handleClick(card) {
        card.classList.toggle("clicked");
    }
</script> -->
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
<script>
  var clickedCard = null;

  function handleClick(card) {
    if (clickedCard !== null) {
      clickedCard.classList.remove("clicked");
    }

    card.classList.add("clicked");
    clickedCard = card;
  }
</script>


<template>
  <div>
    <div style="text-align:center;padding:10px;font-size:19px;font-weight: light;color:#333333">some great pictures</div>
    <div class="row"> 
      <div class="column">
        <img src="https://placehold.co/200x300" style="width:100%">
        <img src="https://placehold.co/200x400" style="width:100%">
        <img src="https://placehold.co/200x300" style="width:100%">
        <img src="https://placehold.co/200x275" style="width:100%">
      </div>
      <div class="column">
        <img src="https://placehold.co/200x275" style="width:100%">
        <img src="https://placehold.co/200x300" style="width:100%">
        <img src="https://placehold.co/200x400" style="width:100%">
        <img src="https://placehold.co/200x300" style="width:100%">
      </div>
      <div class="column">
        <img src="https://placehold.co/200x300" style="width:100%">
        <img src="https://placehold.co/200x400" style="width:100%">
        <img src="https://placehold.co/200x275" style="width:100%">
        <img src="https://placehold.co/200x300" style="width:100%">
      </div>
      <div class="column">
        <img src="https://placehold.co/200x300" style="width:100%">
        <img src="https://placehold.co/200x400" style="width:100%">
        <img src="https://placehold.co/200x275" style="width:100%">
        <img src="https://placehold.co/200x300" style="width:100%">
      </div>
    </div>
</div>
</template>
  
  <script>
  export default {
    name: 'MasonryGallery',
    data() {
      return {
        photos: [
          { src: 'https://placehold.co/200x300', alt: 'Photo 1' },
          { src: 'https://placehold.co/200x250', alt: 'Photo 2' },
          { src: 'https://placehold.co/200x350', alt: 'Photo 3' },
          { src: 'https://placehold.co/200x400', alt: 'Photo 4' },
          { src: 'https://placehold.co/200x300', alt: 'Photo 5' },
          { src: 'https://placehold.co/200x275', alt: 'Photo 6' },
          { src: 'https://placehold.co/200x300', alt: 'Photo 7' },
          { src: 'https://placehold.co/200x250', alt: 'Photo 8' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 10px 20px 100px 10px;
}

/* Create four equal columns that sits next to each other */
.column {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 25%;
  padding: 10px  10px;
}

.column img {
  margin-top: 20px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
/* @media screen and (max-width: 600px) {
  .column {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
} */
</style>
  
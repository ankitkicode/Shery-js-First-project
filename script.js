Shery.imageEffect(".back", {
  style: 5 /*OR 5 for different variant */,
  // debug: true,
  config: {
    a: { value: 1.49, range: [0, 30] },
    b: { value: 0.01, range: [-1, 1] },
    aspect: { value: 2.1377151799687013 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.23, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    gooeyBackEffect:{value:1},
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});



var elem= document.querySelectorAll(".elem");
elem.forEach(function(elem){
    var h1s=elem.querySelectorAll("h1");

    var index=0;
    var animating=false;
    
    document.querySelector("#main").addEventListener("click",function(){
        // alert("hello")
         if(!animating){
             animating=true;
            gsap.to(h1s[index],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1,
                onComplete:function(){
                    // console.log(this._targets[0])
                    gsap.set(this._targets[0],{top:"100%"});
                    animating=false;
                }
              });
        
              index=== h1s.length-1 ? (index=0) : index++;
            // index=index+1;
        
              gsap.to(h1s[index],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1,
              });
         }
    
    })
})


var models =[
    {
        name : 'Bmv 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];
let index = 0;
var slightCount = models.length;
var settings = {
    duration : '2000',
    random : true

};
var interval;


// Using controller
document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    //değeri azalttıktan sonra yine showSlide'a gönderir.
    showSlide(index);
    console.log(index);
});


document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    //değeri arttırdıktan sonra yine showSlide'a gönderir.
    showSlide(index);
    console.log(index);
})

//When mouseenter on arrows increasing index stops
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave' , function(){
        init(settings);
    })
})

init(settings);

function init(settings){

    var prev;
    interval = setInterval(function(){
        
        if(settings.random){
            //Random index
            do{
                index = Math.floor(Math.random()*slightCount);
            }while(index == prev)
            prev = index;
        }else{
            //Increasing index
            if(slightCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);

            index++;

        }

        showSlide(index);

        
    },settings.duration)
}

function showSlide(i){

    index = i;

    if(i<0){
        index = slightCount-1;
    }
    if(i>4){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('href',models[index].link);
    document.querySelector('.card-link').setAttribute('target','_blank');
}


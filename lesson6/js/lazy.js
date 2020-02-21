const images = documet.querySelectAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src");
    img.onload = () => {
        img.removeAttribute('data-src');
    };
    if (!src){
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 10px 0px"
};


if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if(items.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    images.forEach((img) => {
        imgObserver.observe(img);
    });
}
else {
    images.forEach((img) =>{
        loadImages(img);
    });
}


// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting){
//             return;
//         } else{
//             preloadImage(entry.target);
//             imgObserver.unobserve(entry.target);
//         }
//     })
// }, imgOptions);


// iamges.forEach(image => {
//     imgObserver.observe(image);
// });

// const imagesLoader = document.querySelectorAll("[data-src");

// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute("data-src"));
//     image.onload = () => {image.removeAttribute("data-src");};
// };

// function preloadImage(img){
//     const src = img.getAttribute("data-src");
//     if (!src){
//         return;
//     } 
//     img.src = src;
// }
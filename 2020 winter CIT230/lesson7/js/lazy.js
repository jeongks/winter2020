const images = document.querySelectorAll("[data-src]");

function loadImages(img){
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
    threshold: 1,
    rootMargin: "0px 0px 10px 0px"
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if(!items.isIntersecting){
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
        imgObserver.observe(img);
    });
}
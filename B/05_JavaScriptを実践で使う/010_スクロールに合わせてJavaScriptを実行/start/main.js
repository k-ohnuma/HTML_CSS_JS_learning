const child = document.querySelector('.child');
const cb = function(entries, observer){
    // alert('intersecting');
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log('inview');
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target);
        }else { 
            console.log('out view');
            entry.target.classList.remove('inview');
        }
        
    });
}

const options = {
    root: null,
    rootMargin: "0px",
};
const io = new IntersectionObserver(cb);
io.observe(child);


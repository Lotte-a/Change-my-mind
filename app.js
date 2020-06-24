new fullpage('.c-cards', {
    autoScrolling: true,
    navigation: true,

    onLeave: (origin,destination,direction) => {
        const section = destination.item;

        if(destination.index === 1) {
           
            const title = section.querySelector(".c-cards__title");
            const subtitle = section.querySelectorAll(".c-cards__subtitle");
            const image1_2 = section.querySelectorAll(".c-cards__image-1-2");
            const image1_3 = section.querySelectorAll(".c-cards__image-1-3");

            const tl = new TimelineMax({ delay: 0.5 });

            tl.fromTo(title, 1.5, { opacity: 0 }, { opacity: 1 });
            tl.fromTo(subtitle, 1.5, { opacity: 0 }, { opacity: 1 }, "-=1.5");
            tl.fromTo(image1_2, 0.6, { x:-250 }, { x:0 }, "-=1");
            tl.fromTo(image1_3, 0.6, { x:420 }, { x:0 }, "-=0.3"); 
        }
    }
});
new fullpage('.c-cards', {
    autoScrolling: true,

    onLeave: (origin,destination,direction) => {
        const section = destination.item;

        var tl = new TimelineMax({ delay: 0.5 });
        
        if(destination.index === 1) {
            const title = section.querySelector(".c-cards__title");
            const subtitle = section.querySelectorAll(".c-cards__subtitle");
            const image1_2 = section.querySelectorAll(".c-cards__image-1-2");
            const image1_3 = section.querySelectorAll(".c-cards__image-1-3");

            tl.fromTo(title, 1.5, { opacity: 0 }, { opacity: 1 });
            tl.fromTo(subtitle, 1.5, { opacity: 0 }, { opacity: 1 }, "-=1.5");
            tl.fromTo(image1_2, 0.6, { x:-250 }, { x:0 }, "-=1");
            tl.fromTo(image1_3, 0.6, { x:420 }, { x:0 }, "-=0.3"); 
        }

        const content = section.querySelectorAll(".c-cards__text");
        tl.fromTo(content, 1.5, { opacity: 0 }, { opacity: 1 },"+=0.3");

        if(destination.index === 2) {
            const image2_1 = section.querySelectorAll(".c-cards__image-2-1");
            tl.fromTo(image2_1, 0.6, { x:-700 }, { x:0 }, "-=0.5");
        }

        if(destination.index === 3) {
            const image3_1 = section.querySelectorAll(".c-cards__image--3-1");
            tl.fromTo(image3_1, 0.6, { x:-700 }, { x:0 }, "-=0.2");

            const accordion = section.querySelectorAll(".c-accordion__container");
            tl.fromTo(accordion, 1.5, { opacity: 0 }, { opacity: 1 },"-=1.9");
        }

        if(destination.index === 4) {
            const image4_1 = section.querySelectorAll(".c-cards__image--4-1");
            const image4_2 = section.querySelectorAll(".c-cards__image--4-2");
            
            tl.fromTo(image4_1, 0.6, { x:-700 }, { x:0 });
            tl.fromTo(image4_2, 0.6, { x:-700 }, { x:0 },"-=0.6")
            tl.fromTo(image4_2, 0.1, { opacity:0 }, { opacity:1 },"-=0.6");

            tl.fromTo(image4_1, 1, { width:'100%' }, { width:'88%' });
            tl.fromTo(image4_1, 1, { y: '0%' }, { y:'14%' }, "-=1");
     
            tl.fromTo(image4_2, 1, { width:'96%' }, { width:'84%' }, "-=1");
            tl.fromTo(image4_2, 1, { y: '0%' }, { y:'14%' }, "-=1");

            tl.fromTo(image4_2, 1, { x:0 }, { x:180 }, "+=1");
        }

        if(destination.index === 5) {
            const image5_1 = section.querySelectorAll(".c-cards__image--5-1");
            tl.fromTo(image5_1, 0.6, { x:-700 }, { x:0 });
            tl.fromTo(image5_1, 0.8, { width:'60%' }, { width:'100%' },"=-0.1");
            tl.fromTo(image5_1, 0.8, { y:'40%' }, { y:'-30%' }, "-=0.8");
        }

        if(destination.index === 6) {
            const image6_1 = section.querySelectorAll(".c-cards__image--6-1");
            tl.fromTo(image6_1, 0.6, { x:-700 }, { x:0 });
        }

        if(destination.index === 7) {
            const image7_1 = section.querySelectorAll(".c-cards__image--7-1");
            tl.fromTo(image7_1, 0.6, { x:-700 }, { x:0 });
        }

        if(destination.index === 8) {
            const contact = section.querySelectorAll(".c-cards__contact");
            const data = section.querySelectorAll(".c-cards__data");
            const info = section.querySelectorAll(".c-cards__info");
            tl.fromTo(contact, 1.5, { opacity: 0 }, { opacity: 1 }, "-=1.5");
            tl.fromTo(data, 1.5, { opacity: 0 }, { opacity: 1 });
            tl.fromTo(info, 1.5, { opacity: 0 }, { opacity: 1 }, "-=1.5");
        }
    }
})
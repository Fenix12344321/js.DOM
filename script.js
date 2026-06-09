gsap.registerPlugin(ScrollTrigger);

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX - 10, y: e.clientY - 10, duration: 0.3 });
});

gsap.to("nav", {
    scrollTrigger: {
        trigger: "body",
        start: "top -50", 
        end: "top -100",
        toggleActions: "play none none reverse", 
        onEnter: () => {
            gsap.to("nav", { 
                y: -100, 
                opacity: 0, 
                duration: 0.5, 
                ease: "power2.inOut" 
            });
        },
        onLeaveBack: () => {
            gsap.to("nav", { 
                y: 0, 
                opacity: 1, 
                duration: 0.5, 
                ease: "power2.out" 
            });
        }
    }
});

if (document.querySelector('.hero')) {
    const tl = gsap.timeline();
    tl.to('.title', { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" })
      .to('.subtitle', { opacity: 1, duration: 1 }, "-=0.5");

    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.05;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.05;
        gsap.to('.visual-element', { x: moveX, y: moveY, duration: 1 });
    });
}

const reveals = document.querySelectorAll('.reveal');
reveals.forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
});

if (document.querySelector('.menu-grid')) {
    gsap.from('.menu-item', {
        scrollTrigger: {
            trigger: '.menu-grid',
            start: "top 80%"
        },
        opacity: 0,
        scale: 0.8,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { scale: 1.05, rotation: 1, borderColor: '#d4af37', duration: 0.3 });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(item, { scale: 1, rotation: 0, borderColor: '#333', duration: 0.3 });
        });
    });
}

if (document.querySelector('.booking-form')) {
    const form = document.querySelector('.booking-form');

    gsap.from(form, {
        scrollTrigger: {
            trigger: form,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        rotateX: -15,
        opacity: 0.7,
        scale: 0.9
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            gsap.to(form, { borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.1)', duration: 0.3 });
        } else if (e.key === 'ArrowLeft') {
            gsap.to(form, { borderColor: '#d4af37', backgroundColor: 'rgba(255,255,255,0.03)', duration: 0.3 });
        }
    });
}

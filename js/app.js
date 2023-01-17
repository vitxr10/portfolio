document.addEventListener('DOMContentLoaded', () => {

    new TypeIt (".nameAnimated", {
        speed: 180,
        // loop: true,
    })

    .type("V1ToR", { delay: 250 })
    .move(-3, { delay: 100 })
    .delete(1)
    .type("I", { delay: 250 })
    .move(2, { delay: 100 })
    .delete(1)
    .type("O", { delay: 250 })
    .move(2, { delay: 100 })
    .type(" S4nTOS", { delay: 250 })
    .move(-4, { delay: 100 })
    .delete(1)
    .type("A", { delay: 250 })
    .move(1, { delay: 100 })
    .delete(1)
    .type("N", { delay: 250 })
    .move(3, { delay: 100 })
    
    
    
    
    .go()
})
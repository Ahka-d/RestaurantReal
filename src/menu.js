import imageArray from "./image.js"

const htmlMenu = ()=>{
    const content = document.getElementById('content')
    const dishes = document.createElement('section')
    dishes.setAttribute('id','dishes')
    dishes.innerHTML=`
            <article>
                <img src="${imageArray[0]}" alt="" class="img">
                <span>
                    <strong>Name:</strong> Tequeños with Avocado Tartar Sauce (Venezuela)      
                </span>
                <span>
                    <strong>Description:</strong> These iconic white cheese sticks, wrapped in crispy fried dough, are served with a homemade tartar sauce that gets a tropical twist from avocado, adding creaminess and freshness. They're irresistible and perfect for sharing.
                </span>
                <span>
                    <strong>Price: 5.50$</strong>
                </span>
            </article> 
            <article>
                <img src="${imageArray[1]}" alt="" class="img">
                <span>
                    <strong>Name:</strong> Pan-Seared Salmon with Ratatouille and Herb Quinoa (Mediterranean)      
                </span>
                <span>
                    <strong>Description:</strong> A fresh salmon fillet cooked to perfection, juicy on the inside and slightly crispy on the outside. It's accompanied by a colorful and aromatic ratatouille (a slow-cooked blend of Mediterranean vegetables like zucchini, eggplant, bell peppers, and tomatoes) and quinoa seasoned with fresh herbs (parsley, mint, oregano), providing a nutritious and light touch.
                </span>
                <span>
                    <strong>Price: 10.50$</strong> 
                </span>
            </article> 
            <article>
                <img src="${imageArray[2]}" alt="" class="img">
                <span>
                    <strong>Name:</strong> Asado Negro with Arepitas Fritas and Venezuelan White Cheese (Venezuela)
                </span>
                <span>
                    <strong>Description:</strong> This is a truly iconic Venezuelan dish. Asado Negro is a slow-cooked beef roast, often eye of round, that's braised in a rich, dark, and slightly sweet sauce made with papelón (raw cane sugar), red wine, and aromatic spices. The beef becomes incredibly tender and flavorful. It's traditionally served with fluffy white rice, but for this menu, we'll pair it with small, crispy arepitas fritas (fried corn cakes) and a generous slice of fresh, salty Venezuelan white cheese (queso blanco). The contrast of the savory, sweet beef with the crispy, slightly salty arepas and cheese is a classic Venezuelan delight.
                </span>
                <span>
                    <strong>Price: 15.35$</strong> 
                </span>
            </article> 
            <article>
                <img src="${imageArray[3]}" alt="" class="img">
                <span>
                    <strong>Name:</strong> Deconstructed Pabellón Criollo with Coconut Rice (Venezuela) 
                </span>
                <span>
                    <strong>Description:</strong> A modern reinterpretation of Venezuela's national dish. Instead of the traditional presentation, the components—shredded beef, black beans, white rice, and fried ripe plantain slices—are deconstructed. We've added rice cooked with coconut milk, which imparts a subtle sweetness and an exotic aroma that perfectly complements the savory beef and beans. 
                </span>
                <span>
                    <strong>Price: 12.00$</strong> 
                </span>
            </article> 
            <article>
                <img src="${imageArray[4]}" alt="" class="img">
                <span>
                    <strong>Name:</strong> Cachapa with "Queso de Mano" and Crispy Pork Belly (Venezuela)      
                </span>
                <span>
                    <strong>Description:</strong> A delightful savory pancake made from fresh ground corn, Cachapa is naturally sweet and slightly thicker than a traditional pancake. It's served warm with a generous slice of "queso de mano," a soft, fresh, and slightly stringy Venezuelan cheese that melts beautifully. To add a contrasting texture and salty punch, it's accompanied by perfectly crispy pork belly (chicharrón). This combination is a fantastic balance of sweet, savory, and rich.
                </span>
                <span>
                    <strong>Price: 8.75$</strong> 
                </span>
            </article> 
            <article>
                <img src="${imageArray[5]}" alt="" class="img">
                <span>
                    <strong>Name:</strong> Moroccan Tagine with Chicken, Olives, and Preserved Lemon (Mediterranean)      
                </span>
                <span>
                    <strong>Description:</strong> A fragrant and aromatic stew slow-cooked in a traditional tagine (conical clay pot, though it can be made in a heavy pot). This version features tender chicken pieces, bright green olives, and the distinctive tang of preserved lemons, all simmered with a blend of warming Moroccan spices like turmeric, ginger, and saffron. The long, slow cooking develops deep, complex flavors, making it a truly immersive experience. It's typically served with couscous to soak up all the delicious sauce.
                </span>
                <span>
                    <strong>Price: 7.35$</strong> 
                </span>
            </article> 
            <article>
                <img src="${imageArray[6]}" alt="" class="img">
                <span>
                    <strong>Name:</strong> Greek Yogurt with Honey, Walnuts, and Red Berries (Mediterráneo)
                </span>
                <span>
                    <strong>Description:</strong> A simple yet elegant dessert that embodies the essence of the Mediterranean diet. Creamy, protein-rich Greek yogurt is lightly sweetened with pure honey. Toasted walnuts are added for textural contrast, along with a handful of fresh red berries (strawberries, blueberries, raspberries) for a burst of flavor and color.  
                </span>
                <span>
                    <strong>Price: 4.50$</strong> 
                </span>
            </article>`
        content.appendChild(dishes)
}

export default htmlMenu


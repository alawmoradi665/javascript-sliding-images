
/* sätt en variabel som plockar upp alla items med class panel från de andra filerna */
const panels = document.querySelectorAll('.panel')

/*  -loop through each panel med forEach
    -fat arrow shortens the code and in the curly -brackets you add the action
    -addEventListener och click gör att koden reagerar på klicket på each panel
    -sista raden lägger till class active när bilden har blivit klickad på, men för att stänga ner de andra bilderna som är active, -lägg till removeActiveClasses på raden innan så att när en klickas och blir active, så removes den tidigare active samtidigt */
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

/* -här skapas the function, som GÖR att active försvinner när en ny klickas på
    -samma forEach loop som använder panel (behövs ingen parentes om det bara är en class som loopas igenom, annars lägg till parentes
    -inne i loopen används remove, som finns i JS, och skickar in active för att visa vad som tas bort */

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
    
}
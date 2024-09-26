document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindra sidomladdning

    // Valideringslogik (från tidigare exempel)
    const fNamn = document.getElementById('fNamn');
    const eNamn = document.getElementById('eNamn');
    const ePost = document.getElementById('ePost');
    const namePattern = /^[A-Za-zåäöÅÄÖ\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!namePattern.test(fNamn.value)) {
        fNamn.classList.add('invalid');
        isValid = false;
    } else {
        fNamn.classList.remove('invalid');
    }

    if (!namePattern.test(eNamn.value)) {
        eNamn.classList.add('invalid');
        isValid = false;
    } else {
        eNamn.classList.remove('invalid');
    }

    if (!emailPattern.test(ePost.value)) {
        ePost.classList.add('invalid');
        isValid = false;
    } else {
        ePost.classList.remove('invalid');
    }

    // Om alla fält är giltiga, visa tackmeddelande
    if (isValid) {
        // Ersätt hela innehållet i "form-wrapper" med tackmeddelandet
        document.querySelector('.form-wrapper').innerHTML = `
            <h2>Tack för ditt meddelande!</h2>
            <p>Vi återkommer till dig inom kort.</p>
            <button id="backBtn">Tillbaka</button>
        `;
        document.getElementById("backBtn").addEventListener("click", function(){
            window.location.href = "startsida.html";
        })
    }
});

const hamburger = document.getElementById('hamburger');
const links = document.getElementById('.links');

// Lyssna efter klick på hamburgermenyn
hamburger.addEventListener('click', () => {
    // Växla mellan att visa och dölja menyn
    links.classList.toggle('active');
});



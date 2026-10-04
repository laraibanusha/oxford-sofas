// =========================================================
// OXFORD SOFAS
// PRODUCT DATA
// =========================================================

const sofas = [

    // =====================================================
    // GRAND COLLECTION
    // =====================================================

    {
        id: 1,
        name: "Grand Milano",
        brand: "grand",
        category: "Grand",
        image: "Images/grand-1.jpg",
        size: "3 Seater",
        material: "Premium Fabric",
        color: "Beige",
        description:
            "Elegant sofa design created for modern and luxurious living spaces."
    },

    {
        id: 2,
        name: "Grand Royale",
        brand: "grand",
        category: "Grand",
        image: "Images/grand-2.jpg",
        size: "L-Shaped",
        material: "Luxury Fabric",
        color: "Grey",
        description:
            "A spacious and stylish sofa designed for comfortable family living."
    },

    {
        id: 3,
        name: "Grand Elite",
        brand: "grand",
        category: "Grand",
        image: "Images/grand-3.jpg",
        size: "L-Shaped",
        material: "Premium Upholstery",
        color: "Brown",
        description:
            "A sophisticated design combining generous space with timeless elegance."
    },

    {
        id: 4,
        name: "Grand Modern",
        brand: "grand",
        category: "Grand",
        image: "Images/grand-4.jpg",
        size: "3 Seater",
        material: "Soft Fabric",
        color: "Cream",
        description:
            "Clean modern lines with a comfortable design for contemporary interiors."
    },

    {
        id: 5,
        name: "Grand Comfort",
        brand: "grand",
        category: "Grand",
        image: "Images/grand-5.jpg",
        size: "3 Seater",
        material: "Premium Fabric",
        color: "Ivory",
        description:
            "A warm and comfortable sofa designed for stylish everyday living."
    },


    // =====================================================
    // ROYAL COLLECTION
    // =====================================================

    {
        id: 6,
        name: "Royal Elegance",
        brand: "royal",
        category: "Royal",
        image: "Images/royal-1.jpg",
        size: "3 Seater",
        material: "Luxury Upholstery",
        color: "Blue",
        description:
            "A luxurious royal design featuring elegant details and premium comfort."
    },

    {
        id: 7,
        name: "Royal Modern",
        brand: "royal",
        category: "Royal",
        image: "Images/royal-2.jpg",
        size: "L-Shaped",
        material: "Premium Fabric",
        color: "Grey",
        description:
            "Sophisticated contemporary seating designed for modern interiors."
    },

    {
        id: 8,
        name: "Royal Classic",
        brand: "royal",
        category: "Royal",
        image: "Images/royal-3.jpg",
        size: "3 Seater",
        material: "Soft Fabric",
        color: "Grey",
        description:
            "A refined sofa combining classic inspiration with everyday comfort."
    },

    {
        id: 9,
        name: "Royal Heritage",
        brand: "royal",
        category: "Royal",
        image: "Images/royal-4.jpg",
        size: "3 Seater",
        material: "Luxury Fabric",
        color: "Brown",
        description:
            "A timeless design that brings warmth and elegance to any room."
    },

    {
        id: 10,
        name: "Royal Grand",
        brand: "royal",
        category: "Royal",
        image: "Images/royal-5.jpg",
        size: "L-Shaped",
        material: "Premium Upholstery",
        color: "Beige",
        description:
            "Spacious seating with a sophisticated design for premium spaces."
    },


    // =====================================================
    // CLASSIC COLLECTION
    // =====================================================

    {
        id: 11,
        name: "Classic Pearl",
        brand: "classic",
        category: "Classic",
        image: "Images/classic-1.jpg",
        size: "3 Seater",
        material: "Premium Fabric",
        color: "Cream",
        description:
            "A graceful sofa design created for elegant and peaceful interiors."
    },

    {
        id: 12,
        name: "Classic Heritage",
        brand: "classic",
        category: "Classic",
        image: "Images/classic-2.jpg",
        size: "L-Shaped",
        material: "Luxury Fabric",
        color: "Brown",
        description:
            "A timeless design offering generous seating and sophisticated style."
    },

    {
        id: 13,
        name: "Classic Harmony",
        brand: "classic",
        category: "Classic",
        image: "Images/classic-3.jpg",
        size: "3 Seater",
        material: "Soft Fabric",
        color: "Green",
        description:
            "A comfortable and stylish sofa inspired by contemporary living."
    },

    {
        id: 14,
        name: "Classic Lounge",
        brand: "classic",
        category: "Classic",
        image: "Images/classic-4.jpg",
        size: "3 Seater",
        material: "Premium Upholstery",
        color: "Green",
        description:
            "Relaxed seating with a timeless appearance for modern homes."
    },

    {
        id: 15,
        name: "Classic Royal",
        brand: "classic",
        category: "Classic",
        image: "Images/classic-5.jpg",
        size: "3 Seater",
        material: "Luxury Fabric",
        color: "Beige",
        description:
            "Elegant classic styling designed to complement sophisticated interiors."
    }

];


// =========================================================
// COLLECTION ELEMENTS
// =========================================================

const sofaContainer =
    document.getElementById("sofaContainer");

const searchInput =
    document.getElementById("sofaSearch");

const clearSearch =
    document.getElementById("clearSearch");

const searchResult =
    document.getElementById("searchResult");


// =========================================================
// CURRENT FILTER
// =========================================================

let selectedBrand = "all";


// =========================================================
// DISPLAY SOFAS
// =========================================================

function displaySofas(products) {

    sofaContainer.innerHTML = "";


    // No results
    if (products.length === 0) {

        sofaContainer.innerHTML = `
            <div class="col-12">
                <div class="no-results">
                    <h3>No Sofas Found</h3>

                    <p>
                        Try searching with another name,
                        brand, color, material or size.
                    </p>
                </div>
            </div>
        `;

        return;
    }


    // Create cards
    products.forEach((sofa, index) => {

        const card =
            document.createElement("div");

        card.className =
            "col-md-6 col-lg-4 reveal";

        card.style.transitionDelay =
            `${Math.min(index * 0.05, 0.25)}s`;


        card.innerHTML = `

            <div class="sofa-card">

                <div class="sofa-image">

                    <img
                        src="${sofa.image}"
                        alt="${sofa.name}"
                        loading="lazy"
                    >

                    <span class="sofa-brand">
                        ${sofa.category}
                    </span>

                </div>


                <div class="sofa-content">

                    <h3>
                        ${sofa.name}
                    </h3>

                    <p>
                        ${sofa.description}
                    </p>


                    <div class="sofa-info">

                        <span>
                            <strong>Size:</strong>
                            ${sofa.size}
                        </span>

                        <span>
                            <strong>Color:</strong>
                            ${sofa.color}
                        </span>

                    </div>


                    <div class="sofa-actions">

                        <button
                            class="details-btn"
                            type="button"
                            onclick="showSofaDetails(${sofa.id})"
                        >
                            View Details
                        </button>


                        <button
                            class="compare-btn"
                            type="button"
                            onclick="addToCompare(${sofa.id})"
                        >
                            + Compare
                        </button>

                    </div>

                </div>

            </div>
        `;


        sofaContainer.appendChild(card);

        requestAnimationFrame(() => {
            card.classList.add("active");
        });

    });

}


// =========================================================
// APPLY SEARCH + BRAND FILTER
// =========================================================

function applyFilters() {

    const searchText =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


    const filteredSofas =
        sofas.filter(sofa => {

            const matchesBrand =
                selectedBrand === "all" ||
                sofa.brand === selectedBrand;


            const searchableText = `
                ${sofa.name}
                ${sofa.brand}
                ${sofa.category}
                ${sofa.size}
                ${sofa.material}
                ${sofa.color}
                ${sofa.description}
            `.toLowerCase();


            const matchesSearch =
                searchableText.includes(searchText);


            return matchesBrand && matchesSearch;

        });


    displaySofas(filteredSofas);


    // Update result text
    if (searchResult) {

        if (searchText === "") {

            searchResult.textContent =
                `Showing ${filteredSofas.length} sofas`;

        } else {

            searchResult.textContent =
                `${filteredSofas.length} sofa(s) found for "${searchText}"`;

        }

    }

}


// =========================================================
// INITIAL DISPLAY
// =========================================================

applyFilters();


// =========================================================
// BRAND FILTER
// =========================================================

const brandButtons =
    document.querySelectorAll(".brand-btn");


brandButtons.forEach(button => {

    button.addEventListener("click", () => {

        selectedBrand =
            button.dataset.brand;


        brandButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        applyFilters();

    });

});


// =========================================================
// BRAND CARD LINKS
// =========================================================

const brandLinks =
    document.querySelectorAll("[data-brand-link]");


brandLinks.forEach(link => {

    link.addEventListener("click", () => {

        const brand =
            link.dataset.brandLink;


        selectedBrand = brand;


        brandButtons.forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.brand === brand
            );

        });


        if (searchInput) {
            searchInput.value = "";
        }


        applyFilters();

    });

});


// =========================================================
// FOOTER COLLECTION LINKS
// =========================================================

const footerBrandLinks =
    document.querySelectorAll("[data-footer-brand]");


footerBrandLinks.forEach(link => {

    link.addEventListener("click", () => {

        const brand =
            link.dataset.footerBrand;


        selectedBrand = brand;


        brandButtons.forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.brand === brand
            );

        });


        if (searchInput) {
            searchInput.value = "";
        }


        applyFilters();

    });

});


// =========================================================
// SEARCH
// =========================================================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        applyFilters
    );

}


// =========================================================
// CLEAR SEARCH
// =========================================================

if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        () => {

            searchInput.value = "";

            applyFilters();

            searchInput.focus();

        }
    );

}


// =========================================================
// SOFA DETAILS MODAL
// =========================================================

function showSofaDetails(id) {

    const sofa =
        sofas.find(item => item.id === id);


    if (!sofa) return;


    const modalImage =
        document.getElementById("modalSofaImage");

    const modalBrand =
        document.getElementById("modalSofaBrand");

    const modalName =
        document.getElementById("modalSofaName");

    const modalDescription =
        document.getElementById("modalSofaDescription");

    const modalSize =
        document.getElementById("modalSofaSize");

    const modalMaterial =
        document.getElementById("modalSofaMaterial");

    const modalColor =
        document.getElementById("modalSofaColor");

    const modalCompare =
        document.getElementById("modalCompareBtn");


    modalImage.src = sofa.image;

    modalImage.alt = sofa.name;

    modalBrand.textContent =
        sofa.category;

    modalName.textContent =
        sofa.name;

    modalDescription.textContent =
        sofa.description;

    modalSize.textContent =
        sofa.size;

    modalMaterial.textContent =
        sofa.material;

    modalColor.textContent =
        sofa.color;


    modalCompare.onclick = function () {

        addToCompare(sofa.id);

    };


    const modalElement =
        document.getElementById(
            "sofaDetailsModal"
        );


    const modal =
        new bootstrap.Modal(modalElement);


    modal.show();

}


// =========================================================
// COMPARE SYSTEM
// =========================================================

let compareList = [];


// =========================================================
// ADD TO COMPARE
// =========================================================

function addToCompare(id) {

    const sofa =
        sofas.find(item => item.id === id);


    if (!sofa) return;


    const alreadyAdded =
        compareList.some(
            item => item.id === id
        );


    if (alreadyAdded) {

        alert(
            `${sofa.name} is already in your comparison.`
        );

        return;

    }


    if (compareList.length >= 3) {

        alert(
            "You can compare a maximum of 3 sofas."
        );

        return;

    }


    compareList.push(sofa);


    displayComparison();


    const compareSection =
        document.getElementById("compare");


    if (compareSection) {

        compareSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// =========================================================
// DISPLAY COMPARISON
// =========================================================

function displayComparison() {

    const container =
        document.getElementById(
            "compareContainer"
        );


    if (!container) return;


    // Empty state
    if (compareList.length === 0) {

        container.innerHTML = `

            <div class="compare-empty reveal active">

                <div class="compare-icon">
                    ⚖
                </div>

                <h3>
                    Compare Your Favourite Sofas
                </h3>

                <p>
                    Select up to 3 sofas from our collection
                    to compare their features side by side.
                </p>

                <a
                    href="#collection"
                    class="compare-browse-btn"
                >
                    Browse Collection
                </a>

            </div>

        `;

        return;

    }


    // Product headers
    const productHeaders =
        compareList
            .map(sofa => `

                <th>

                    <div class="compare-product">

                        <img
                            src="${sofa.image}"
                            alt="${sofa.name}"
                            loading="lazy"
                        >

                        <h4>
                            ${sofa.name}
                        </h4>

                        <span class="compare-brand">
                            ${sofa.category}
                        </span>

                        <br>

                        <button
                            class="remove-compare"
                            type="button"
                            onclick="removeFromCompare(${sofa.id})"
                        >
                            Remove
                        </button>

                    </div>

                </th>

            `)
            .join("");


    const brands =
        compareList
            .map(
                sofa =>
                    `<td>${sofa.category}</td>`
            )
            .join("");


    const sizes =
        compareList
            .map(
                sofa =>
                    `<td>${sofa.size}</td>`
            )
            .join("");


    const materials =
        compareList
            .map(
                sofa =>
                    `<td>${sofa.material}</td>`
            )
            .join("");


    const colors =
        compareList
            .map(
                sofa =>
                    `<td>${sofa.color}</td>`
            )
            .join("");


    const descriptions =
        compareList
            .map(
                sofa =>
                    `<td>${sofa.description}</td>`
            )
            .join("");


    container.innerHTML = `

        <div class="compare-wrapper">

            <table class="compare-table">

                <thead>

                    <tr>

                        <th>
                            Sofa
                        </th>

                        ${productHeaders}

                    </tr>

                </thead>


                <tbody>

                    <tr>

                        <td>
                            Brand
                        </td>

                        ${brands}

                    </tr>


                    <tr>

                        <td>
                            Size
                        </td>

                        ${sizes}

                    </tr>


                    <tr>

                        <td>
                            Material
                        </td>

                        ${materials}

                    </tr>


                    <tr>

                        <td>
                            Color
                        </td>

                        ${colors}

                    </tr>


                    <tr>

                        <td>
                            Description
                        </td>

                        ${descriptions}

                    </tr>

                </tbody>

            </table>

        </div>

    `;

}


// =========================================================
// REMOVE FROM COMPARE
// =========================================================

function removeFromCompare(id) {

    compareList =
        compareList.filter(
            sofa => sofa.id !== id
        );


    displayComparison();

}


// =========================================================
// GEOLOCATION
// =========================================================

const locationBtn =
    document.getElementById("locationBtn");

const locationStatus =
    document.getElementById("locationStatus");

const map =
    document.getElementById("map");


if (locationBtn) {

    locationBtn.addEventListener(
        "click",
        function () {

            if (!navigator.geolocation) {

                locationStatus.textContent =
                    "Geolocation is not supported by your browser.";

                return;

            }


            locationBtn.disabled = true;

            locationBtn.textContent =
                "Detecting Location...";


            locationStatus.textContent =
                "Detecting your location... 📍";


            navigator.geolocation.getCurrentPosition(

                function (position) {

                    const latitude =
                        position.coords.latitude;

                    const longitude =
                        position.coords.longitude;


                    locationStatus.textContent =
                        `Location detected: ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;


                    const bbox =
                        `${longitude - 0.01}%2C` +
                        `${latitude - 0.01}%2C` +
                        `${longitude + 0.01}%2C` +
                        `${latitude + 0.01}`;


                    map.innerHTML = `

                        <iframe
                            width="100%"
                            height="100%"
                            title="Oxford Sofas Location Map"
                            style="border:0; min-height:430px;"
                            loading="lazy"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude}%2C${longitude}"
                        ></iframe>

                    `;


                    locationBtn.disabled = false;

                    locationBtn.textContent =
                        "📍 Location Detected";

                },


                function (error) {

                    locationBtn.disabled = false;

                    locationBtn.textContent =
                        "📍 Use My Location";


                    if (error.code === 1) {

                        locationStatus.textContent =
                            "Location permission was denied.";

                    }

                    else if (error.code === 2) {

                        locationStatus.textContent =
                            "Your location could not be determined.";

                    }

                    else if (error.code === 3) {

                        locationStatus.textContent =
                            "Location request timed out.";

                    }

                    else {

                        locationStatus.textContent =
                            "Unable to detect your location.";

                    }

                },

                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }

            );

        }
    );

}


// =========================================================
// CONTACT FORM VALIDATION
// =========================================================

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const phone =
                document.getElementById("phone");

            const subject =
                document.getElementById("subject");

            const message =
                document.getElementById("message");


            let isValid = true;


            // Clear old errors
            document
                .querySelectorAll(".error-message")
                .forEach(error => {
                    error.textContent = "";
                });


            document
                .querySelectorAll(
                    "#contactForm input, #contactForm textarea"
                )
                .forEach(field => {
                    field.classList.remove("error");
                });


            // =================================================
            // NAME
            // =================================================

            if (name.value.trim() === "") {

                document.getElementById(
                    "nameError"
                ).textContent =
                    "Please enter your name.";

                name.classList.add("error");

                isValid = false;

            }


            // =================================================
            // EMAIL
            // =================================================

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email.value.trim() === "") {

                document.getElementById(
                    "emailError"
                ).textContent =
                    "Please enter your email.";

                email.classList.add("error");

                isValid = false;

            }

            else if (
                !emailPattern.test(
                    email.value.trim()
                )
            ) {

                document.getElementById(
                    "emailError"
                ).textContent =
                    "Please enter a valid email address.";

                email.classList.add("error");

                isValid = false;

            }


            // =================================================
            // PHONE
            // =================================================

            if (phone.value.trim() === "") {

                document.getElementById(
                    "phoneError"
                ).textContent =
                    "Please enter your phone number.";

                phone.classList.add("error");

                isValid = false;

            }


            // =================================================
            // SUBJECT
            // =================================================

            if (subject.value.trim() === "") {

                document.getElementById(
                    "subjectError"
                ).textContent =
                    "Please enter a subject.";

                subject.classList.add("error");

                isValid = false;

            }


            // =================================================
            // MESSAGE
            // =================================================

            if (message.value.trim() === "") {

                document.getElementById(
                    "messageError"
                ).textContent =
                    "Please enter your message.";

                message.classList.add("error");

                isValid = false;

            }

            else if (
                message.value.trim().length < 10
            ) {

                document.getElementById(
                    "messageError"
                ).textContent =
                    "Message must contain at least 10 characters.";

                message.classList.add("error");

                isValid = false;

            }


            // =================================================
            // SUCCESS
            // =================================================

            if (isValid) {

                const successMessage =
                    document.getElementById(
                        "formSuccess"
                    );


                successMessage.classList.add("show");


                contactForm.reset();


                setTimeout(
                    function () {

                        successMessage.classList.remove(
                            "show"
                        );

                    },
                    5000
                );

            }

        }
    );

}


// =========================================================
// SCROLL REVEAL ANIMATION
// =========================================================

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}

else {

    revealElements.forEach(element => {

        element.classList.add("active");

    });

}


// =========================================================
// NAVBAR ACTIVE SECTION
// =========================================================

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


if ("IntersectionObserver" in window) {

    const sectionObserver =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const currentId =
                            entry.target.getAttribute(
                                "id"
                            );


                        navLinks.forEach(link => {

                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") ===
                                `#${currentId}`
                            );

                        });

                    }

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}


// =========================================================
// NAVBAR SCROLL EFFECT
// =========================================================

const navbar =
    document.querySelector(".navbar");


function handleNavbarScroll() {

    if (!navbar) return;


    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    }

    else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    handleNavbarScroll,
    {
        passive: true
    }
);


handleNavbarScroll();


// =========================================================
// CLOSE MOBILE NAVBAR AFTER CLICK
// =========================================================

const mobileNavLinks =
    document.querySelectorAll(
        ".navbar-nav .nav-link"
    );


mobileNavLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            const navbarCollapse =
                document.getElementById(
                    "mainNavbar"
                );


            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                const collapse =
                    bootstrap.Collapse.getInstance(
                        navbarCollapse
                    );


                if (collapse) {

                    collapse.hide();

                }

            }

        }
    );

});


// =========================================================
// INITIAL NAVBAR STATE
// =========================================================

const homeLink =
    document.querySelector(
        '.nav-link[href="#home"]'
    );


if (
    homeLink &&
    window.scrollY < 100
) {

    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    homeLink.classList.add("active");

}
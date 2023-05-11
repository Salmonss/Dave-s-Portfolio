const mobileNav = () => {
    const headerBtn = document.querySelector(".burger-nav");
    const mobileBtn = document.querySelector(".mobile__container-nav");
    const mobileLink = document.querySelectorAll(".mobile-nav");

    let isMobileNavOpen = false;
    

    headerBtn.addEventListener("click", () => {
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen) {
            mobileBtn.style.display = "flex";
            document.body.style.overflowY = 'hidden';
        } else {
            mobileBtn.style.display = "none";
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLink.forEach(Link => {
        Link.addEventListener("click", () => {
            isMobileNavOpen = false; 
            mobileBtn.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    })
};

export default mobileNav;

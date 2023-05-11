
const darkMode = () => {
    const sunbtn = document.querySelectorAll("#sunbtn");
    
    
    sunbtn.forEach(btn => {
        btn.addEventListener("click", () => {
            document.body.classList.toggle('light-mode');
            if(document.body.classList.contains('light-mode')){
                localStorage.setItem('theme','light-mode');

            }
            else {
                localStorage.removeItem('theme');
            }
        })
    })
};

export default darkMode();


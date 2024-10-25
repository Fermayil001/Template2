const portfolioItems = [
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg",
        title: "Threads",
        about: "Illustration"
    },
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
        title: "Explore",
        about: "Graphic Design"
    },
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg",
        title: "Finish",
        about: "Identity"
    },
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg",
        title: "Lines",
        about: "Branding"
    },
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg",
        title: "Southwest",
        about: "Website Design"
    },
    {
        img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg",
        title: "Window",
        about: "Photography"
    }
]

const portfolio = document.querySelector(".portfolio");

portfolioItems.map((item, index) => {

    portfolio.innerHTML += `
    <div class="imgbox">
        <div class="imgss">
            <img src="${item.img}" alt="">
            <span>+</span>
        </div>
        <div>${item.title}</div>
        <div>${item.about}</div>
    </div>
`;

})

const imgbox = document.querySelectorAll(".imgbox")

imgbox.forEach(element => {
    element.addEventListener("click", (e)=>{
        
    })
});
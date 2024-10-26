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


document.addEventListener('scroll', () => {
    if (window.scrollY !== 0) {
        const nav = document.querySelector("nav");
        Object.assign(nav.style, {
            backgroundColor: "#212529",
            transition: ".5s",
            height: "70px",
        })
        
        const navLogo = document.querySelector(".nav-logo");

        Object.assign(navLogo.style, {
            with: "50px",
            height: "35px",
            transition: ".5s"
        })
        
    }else{
        const nav = document.querySelector("nav");

        Object.assign(nav.style, {
            backgroundColor: "initial",
            transition: "0.5s",
            height: "90px",
        })

        const navLogo = document.querySelector(".nav-logo");

        Object.assign(navLogo.style, {
            with: "50px",
            height: "40px"
        })

    }
})

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

const imgbox = document.querySelectorAll(".imgbox");
const modal = document.querySelector(".modal-bg");

imgbox.forEach((element, index) => {
    element.addEventListener("click", () => {
        modal.classList.add("show");
        modal.innerHTML = `
            <div class="modal">
            <div class="close-modal">
                <img class="close" src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/close-icon.svg" alt="">
            </div>
            <div class="modal-row">
                <div class="modal-content">
                    <h2 class="modal-h2">Project Name</h2>
                    <p class="modal-p">Lorem ipsum dolor sit amet consectetur.</p>
                    <img src="${portfolioItems[index].img}"
                        alt="">
                    <p class="product-about">
                        Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi
                        sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul type="none">
                        <li>
                            <strong>Client:</strong>
                            ${portfolioItems[index].title}
                        </li>
                        <li>
                            <strong>Category:</strong>
                            ${portfolioItems[index].about}
                        </li>
                    </ul>
                    <button class="modal-btn close">&#10005 CLOSE PROJECT</button>
                </div>
            </div>
        </div>
        `

        const close = () => {
            modal.classList.remove("show");
        }

        const modalClose = modal.querySelectorAll(".close");
        modalClose.forEach(element => {
            element.addEventListener('click', () => close())
        })
    })
});

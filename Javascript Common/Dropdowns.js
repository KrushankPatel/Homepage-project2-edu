 // <---------------nav2-dropdown------------->

        const dropBtn = document.querySelector(".dropbtn");
        const dropdownContent = document.querySelector(".dropdown-content");

        dropBtn.addEventListener("click", () => {
            dropdownContent.classList.toggle("show");
        });

        window.addEventListener("click", (event) => {
            if (!event.target.matches(".dropbtn")) {
                if (dropdownContent.classList.contains("show")) {
                    dropdownContent.classList.remove("show");
                }
            }
        });



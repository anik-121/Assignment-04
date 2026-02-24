let total = document.getElementById("total");
        let interviewCount = document.getElementById("interviewCount");
        let rejectedCount = document.getElementById("rejectedCount");

        const allFilterBtn = document.getElementById("all-filter-btn");
        const interviewFilterBtn = document.getElementById("interview-filter-btn");
        const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

        const allCards = document.getElementById("allCards");
        const cardContainer = allCards.closest(".bg-white");


        const interviewCards = document.createElement("section");
        interviewCards.id = "interviewCards";
        interviewCards.classList.add("hidden");

        const rejectedCards = document.createElement("section");
        rejectedCards.id = "rejectedCards";
        rejectedCards.classList.add("hidden");

        cardContainer.appendChild(interviewCards);
        cardContainer.appendChild(rejectedCards);

        function calculateCount() {
            const allCount = allCards.querySelectorAll(".card").length;
            const iCount = interviewCards.querySelectorAll(".card").length;
            const rCount = rejectedCards.querySelectorAll(".card").length;
            total.innerText = allCount + iCount + rCount;
            interviewCount.innerText = iCount;
            rejectedCount.innerText = rCount;
            document.getElementById("jobCountLabel").innerText = (allCount + iCount + rCount) + " jobs";
        }

        calculateCount();


         
        function toggleStyle(id) {
            [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach(btn => {
                btn.classList.remove("bg-blue-400", "text-white");
                btn.classList.add("text-slate-500");
            });

            const activeBtn = document.getElementById(id);
            activeBtn.classList.add("bg-blue-400", "text-white");
            activeBtn.classList.remove("text-slate-500");

            allCards.classList.add("hidden");
            interviewCards.classList.add("hidden");
            rejectedCards.classList.add("hidden");

            if (id === "all-filter-btn") allCards.classList.remove("hidden");
            else if (id === "interview-filter-btn") interviewCards.classList.remove("hidden");
            else if (id === "rejected-filter-btn") rejectedCards.classList.remove("hidden");
        }

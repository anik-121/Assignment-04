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

        function emptyMessage(label) {
            return `
                <div class="text-center py-16 sm:py-20 text-gray-400 px-4">
                    <i class="fa-solid fa-file-lines text-4xl sm:text-5xl mb-4"></i>
                    <p class="text-[#002c5cFF] text-[14px] sm:text-lg font-semibold">No jobs available</p>
                    <p class="text-xs sm:text-sm mt-1">Check back soon for new job opportunities</p>
                </div>`;
        }

        function checkEmpty(section, label) {
            if (section.querySelectorAll(".card").length === 0) {
                section.innerHTML = emptyMessage(label);
            }
        }

        function removeEmpty(section) {
            const placeholder = section.querySelector(".text-center");
            if (placeholder) placeholder.remove();
        }

        document.querySelectorAll(".interview-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                const card = this.closest(".card");
                removeEmpty(interviewCards);
                interviewCards.appendChild(card);


                const statusBtn = card.querySelector(".not-applied-btn");
                statusBtn.innerText = "INTERVIEW";
                statusBtn.classList.remove("text-[#002c5c]");
                statusBtn.classList.add("text-green-600");

                card.querySelector(".interview-btn").disabled = true;
                card.querySelector(".rejected-btn").disabled = true;
                calculateCount();
                checkEmpty(allCards, "available");
            });
        });

        document.querySelectorAll(".rejected-btn").forEach(btn => {
            btn.addEventListener("click", function () {
                const card = this.closest(".card");

                removeEmpty(rejectedCards);
                rejectedCards.appendChild(card);
                const statusBtn = card.querySelector(".not-applied-btn");

                statusBtn.innerText = "REJECTED";
                statusBtn.classList.remove("text-[#002c5c]");
                statusBtn.classList.add("text-red-600");

                card.querySelector(".interview-btn").disabled = true;
                card.querySelector(".rejected-btn").disabled = true;
                calculateCount();
                checkEmpty(allCards, "available");
            });
        });

        document.querySelectorAll(".fa-trash-can").forEach(icon => {
            icon.addEventListener("click", function () {
                const card = this.closest(".card");
                
                card.remove();
                calculateCount();
                checkEmpty(interviewCards, "interview");
                checkEmpty(rejectedCards, "rejected");
            });
        });

        checkEmpty(interviewCards, "interview");
        checkEmpty(rejectedCards, "rejected");
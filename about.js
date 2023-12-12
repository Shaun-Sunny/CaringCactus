document.addEventListener("DOMContentLoaded", function () {
    var teamMembers = document.querySelectorAll(".team-member");

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        teamMembers.forEach(function (member, index) {
            if (isInViewport(member) && !member.classList.contains("animated")) {
                member.classList.add("animated");

                // Add the appropriate animation class based on the index
                if (index % 2 === 0) {
                    member.classList.add("slide-left");
                } else {
                    member.classList.add("slide-right");
                }
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
});

let markAllButton = document.querySelector(".mark-all-button");
let notificationDots = document.querySelectorAll(".notification-dot");
let notifications = document.querySelectorAll("main ul li");

let notificationsCounterNumber = [...notifications].filter(notification => notification.classList == "new-notification").length;
notificationsCounter.innerHTML = notificationsCounterNumber;


for (let index = 0; index < notifications.length; index++) {}
    if (notifications[index].classList == "new-notification") {
        notificationDots[index].style.display = "inline-block";

        notificationsCounterNumber++;
    }

    notificationsCounter.innerHTML = notificationsCounterNumber;

   notifications[index].style.addEventListener("mouseover",
   () => {
    if (notifications[index].classList == "new-notification") {
        notifications[index].style.display.remove("new-notification");
        notificationDots[index].style.display = "none";

        notificationsCounterNumber--;

        notificationsCounter.innerHTML = notificationsCounterNumber;
    }
   }),

   markAllButton.addEventListener("click", 
   () => {
    notificationsCounter.innerHTML = 0;

    for (let index = 0; index < notifications.length; index++) {
        notifications[index].classList.remove("new-notification");

        notificationDots[index].style.display = "none";
    }
   });
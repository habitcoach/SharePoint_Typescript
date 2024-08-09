let messenger = {
    message: "Hello World",
    start: function () {
        setTimeout(() => { alert(this.message); }, 3000);
    }
};
messenger.start();

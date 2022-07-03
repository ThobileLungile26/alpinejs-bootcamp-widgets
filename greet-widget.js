document.addEventListener('alpine:init', () => {

    Alpine.data('greetWidget', function () {
        return {
            name: '',
            message: '',
            showGreeting: false,
            greetMe() {
                const greetingMessage = greet(this.name);
                console.log(greetingMessage);
                this.message = greetingMessage;

                setTimeout(() => {
                    this.message = "";
                }, 5000)
            }


        }
    });
})
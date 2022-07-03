document.addEventListener('alpine:init', () => {

    Alpine.data('enoughAirtimeWidget', function () {

        return {
            airtimeUsage: '',
            availableAmount: '',
            airtimeMessage: '',
            calculate() {
                this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.availableAmount)
                setTimeout(() => {
                    this.airtimeMessage = '';
                }, 3000);
            }
        }

    });

})
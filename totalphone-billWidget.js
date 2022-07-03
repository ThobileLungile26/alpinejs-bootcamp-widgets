document.addEventListener('alpine:init', () => {

    Alpine.data('totalPhoneBillWidget', function () {

        return {
            tarrifCharged: '',
            usageMessage: '',
            calculateTarrif() {
                this.usageMessage = totalPhoneBill(this.tarrifCharged)
                setTimeout(() => {
                    this.usageMessage = '';
                }, 3000);
            }
        }

    });

})
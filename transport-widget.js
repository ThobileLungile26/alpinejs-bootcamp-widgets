document.addEventListener('alpine:init', () => {

    Alpine.data('transportFeeWidget', function () {
  
        return {
            shift: '',
            price: '',
            displayFee() {
                const priceMessage = transportFee(this.shift)
                this.price = priceMessage;
                setTimeout(() => {
                    this.price = '';
                }, 3000);
            }
        }
  
    });
  
  })
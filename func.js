

document.addEventListener('DOMContentLoaded', function() {
    
    const buyNowButton = document.querySelector('.buy-now');

    if (buyNowButton) {
        buyNowButton.addEventListener('click', function() {
            // Show QR code modal
            const phoneNumber = '7495011852'; 
            const message = encodeURIComponent('Hello, I am interested in buying the Premium Resin Dining Table.');
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${whatsappUrl}`;
            
            const qrImage = document.getElementById('qr-code');
            qrImage.src = qrCodeUrl;
            
            const modal = document.getElementById('qr-modal');
            modal.style.display = 'block';
        });
    }

    
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const modal = document.getElementById('qr-modal');
            modal.style.display = 'none';
        });
    }

   
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('qr-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

  
    const productImage = document.querySelector('.product-image img');

    if (productImage) {
        productImage.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        productImage.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }

  
});
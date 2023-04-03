describe ('search for products', () => {

    it('navigate to page',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
    
    });

    it('should choose  second product and add it to basket',()=>{
        cy.get('.col-lg-9 > .row > :nth-child(2)')
        cy.get(':nth-child(2) > .card > .card-footer > .btn').click();
    });
    
    it('should go to checkout icon clck and drop the check out navigation bar', ()=> {
       cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();

    });
    
    it('should click checkout and continue with the purchase',()=>{
        cy.get(':nth-child(3) > :nth-child(5) > .btn').click();
    });

     it('should click and add the delivery loacation',()=>{
         cy.get('#country').type('Coventry').click;   
     });
    
     it('should click agree with terms and conditions and finish purchase',()=> {
     
         cy.get('.checkbox').click();
         cy.get('.ng-untouched > .btn').click();
         

     });
    
    
    
    
    });


describe('HTTP GET Request', function(){

    it('GET', function(){
        cy.request({
            method: 'GET',
            url: 'https://www.purgomalum.com/service/json?text=this is some test input',

        })
        
        expect(200,
                {"result": "this is some test input"},)

               
        })
    

})


            it('returns JSON', () => {

            cy.request('https://www.purgomalum.com/service/json?text=this is some test input')
               .its('headers')
               .its('content-type')
               .should('include', 'application/json')   
            })

        


    




            it('POST', function(){
                cy.request({
                    method: 'POST',
                    url: 'https://www.purgomalum.com/service/json?text=this is some test input',
        
                    body: {
                        "result": "this is some test input",
                      },

                      headers : {
                          'content-type' : 'application/json'
                      }
                    }).then(function (response){

                        expect(response.body).have.property('json')
                        expect(response.body).to.deep.equal({

                            "result": "this is some test input",

                        })
                    })
             
        
                       
                })
            
        
            
    
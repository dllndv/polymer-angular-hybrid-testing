// Note: It's best to break out all your selectors into page objects for better modularity, but for this simple example, I kept everything on one page.
var angularFirstName = element(by.model('f_name'));
var angularLastName = element(by.model('l_name'));
var polymerFirstName = element(by.className('polyFName'));
var polymerLastName = element(by.className('polyLName'));
var polymerFullName = element(by.className('polyFullName'));
var editButton = element(by.className('editBtn'));
var EC = protractor.ExpectedConditions;

describe('polymer-angular hybrid test',function(){
	beforeAll(function(){
		browser.get('http://localhost:5000/');
	});
	
    //  Starting with a nice blank page
	it('should start blank', function(){
		expect(angularFirstName.getAttribute('value')).toEqual('');
		expect(angularLastName.getAttribute('value')).toEqual('');
	});
	
    //  First we make sure that Protractor can manipulate Angular as it's intended to do, and that Angular talks to Polymer.
	it('should data bind from angular to polymer', function(){
		angularFirstName.sendKeys('Rocky');
		angularLastName.sendKeys('Balboa');
		
		expect(angularFirstName.getAttribute('value')).toEqual('Rocky');
		expect(angularLastName.getAttribute('value')).toEqual('Balboa');
		
		expect(polymerFullName.getText()).toEqual('Rocky Balboa');
	});	
	
    //  Now we see that Protractor can also manipulate the Polymer parts, and that Polymer talks to Angular.
	it('should data bind from polymer to angular', function(){
		editButton.click();
		
		expect(polymerFirstName.getAttribute('value')).toEqual('Rocky');
		expect(polymerLastName.getAttribute('value')).toEqual('Balboa');
		
		polymerFirstName.clear();
		polymerLastName.clear();
		polymerFirstName.sendKeys('Apollo');
		polymerLastName.sendKeys('Creed');
		
		expect(angularFirstName.getAttribute('value')).toEqual('Apollo');
		expect(angularLastName.getAttribute('value')).toEqual('Creed');
	});
    
    //  After that, we check Protractor's ability to pierce the Shadow DOM by selecting a series of ever deepening divs
    it('should not be able to see into the shadow dom with css selector', function(){
    //  To make use of testing the deepCss selector, you must tell polymer to use the shadow dom using "dom=shadow" in a url query.
       browser.get('http://localhost:5000/?dom=shadow');
       var h1s = element.all(by.css('h1'));
       expect(h1s.count()).toEqual(1);
    });
    
    it('should be able to pierce the shadow dom with deepCss selector', function(){
       var h1s = element.all(by.deepCss('h1'));
       expect(h1s.count()).toEqual(5);
    });
});
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
	
	it('should start blank', function(){
		expect(angularFirstName.getAttribute('value')).toEqual('');
		expect(angularLastName.getAttribute('value')).toEqual('');
	});
	
	it('should data bind from angular to polymer', function(){
		angularFirstName.sendKeys('Rocky');
		angularLastName.sendKeys('Balboa');
		
		expect(angularFirstName.getAttribute('value')).toEqual('Rocky');
		expect(angularLastName.getAttribute('value')).toEqual('Balboa');
		
		expect(polymerFullName.getText()).toEqual('Rocky Balboa');
	});	
	
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
});
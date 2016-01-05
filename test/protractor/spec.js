var angularFirstName = element(by.model('f_name'));
var angularLastName = element(by.model('l_name'));
// var polymerFirstName = element.all(by.css('input[class="style-scope name-card"]')).get(0);
var polymerFirstName = element(by.deepCss('input[class="polyFName"]'));
var polymerLastName = element.all(by.css('input[class="style-scope name-card"]')).get(1);
var polymerFullName = element(by.css('span[class="style-scope name-card ng-binding"]'));
var editButton = element(by.css('button[class="style-scope name-card"]'));
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
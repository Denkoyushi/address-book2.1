describe('Contact', function() {
  describe('fullName', function() {
      it('will ouput the first and last name with a space in between', function() {
        var testContact = Object.create(Contact);
        testContact.firstName = 'Steve';
        testContact.lastName = 'Irwin'
        testContact.fullName().should.equal('Steve Irwin');
      });
  });
});

describe('Address', function() {

  describe('validAddress', function() {
    it('returns false if the city or state has invalid characters', function () {
      var testAddress = Object.create(Address);
      testAddress.city = "Portl4nd";
      testAddress.state = "Oregon";
      testAddress.validAddress().should.equal(false);
    })

    it('returns false if the city or state has invalid characters', function () {
      var testAddress = Object.create(Address);
      testAddress.city = "Portland";
      testAddress.state = "0regon";
      testAddress.validAddress().should.equal(false);
    });

    it('returns false if the city or state has invalid characters', function () {
      var testAddress = Object.create(Address);
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.validAddress().should.equal(true);
    })
  });

    


  describe('fullAddress', function() {
    it("returns the full address with nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123 4th Ave";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.fullAddress().should.equal("123 4th Ave, Portland, Oregon");
    });
  });

});

describe('Phone', function() {
  describe('fullPhone', function() {
    it("returns a properly formatted phone number", function() {
      var testPhone = Object.create(Phone);
      testPhone.number = "7149430502";
      testPhone.fullPhone().should.equal("(714) 943-0502")
    })
  })

  describe('validPhone', function() {
    it("returns false if inputted phone number does not have 10 numbers", function() {
      var testPhone = Object.create(Phone);
      testPhone.number = "7149430508422";
      testPhone.validPhone().should.equal(false)
    })

    it("returns true if inputted phone number does not have 10 numbers", function() {
      var testPhone = Object.create(Phone);
      testPhone.number = "1234567891";
      testPhone.validPhone().should.equal(true)
    })
  })
});
